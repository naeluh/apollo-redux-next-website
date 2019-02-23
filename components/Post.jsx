// @ts-check

import React from 'react'
import { withRouter, Router, Link } from 'next/router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import PostList from './PostList'

function Post({ data: { error, webs } }) {
  let web = webs[0];
  let image = web.Image !== null ? <span id="image" className="imgHero"
    style={{
      backgroundImage: `url(https://strapi.hulea.org/${web.Image.url})`,
      border: `1em solid #111`,
      marginBottom: `20px`
    }}></span> : '';
  if (error) return <ErrorMessage message='Error loading blog post.' />
  if (web) {
    return (
      <article>
      <section>
        <Head>
          <title>{web.Title}</title>
        </Head>
        <div key={web.id}>
          <h1>{web.Title}</h1>
          {image}
          <a prefetch="true" target="_blank" href={web.Link}>{web.Title}</a>
          <ReactMarkdown source={web.Description} />
        </div>
      </section>
      <PostList title={web.URL} extraClass="worklist"></PostList>
      <style jsx>{`
          * {
            box-sizing: border-box;
          }
          section {
            padding-bottom: 20px;
            max-width: 900px;
            margin: 0 auto;
          }
          li {
            display: block;
            margin-bottom: 10px;
          }
          figure {
            align-items: center;
            display: flex;
            margin-bottom: 2rem;
            position: relative;
          }
          .imgHero {
            border: 1rem solid #000;
          }
          a {
            line-height: 1.5;
            margin-bottom: 20px;
            word-wrap: break-word;
            font-size: 1.5em;
            font-weight: 600;
            letter-spacing: -1px;
            text-decoration: none;
            border-bottom: dashed 1px;
          }
          a:hover {
            color: #ccc;
            border-bottom: solid 1px;
          }
          span {
            border: 1rem solid #000;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          img {
            object-fit: cover;
          }
        `}</style>
      </article>
    )
  }
  return <div>Loading</div>
}

const post = gql`
  query webs($url: String!) {
    webs( where: { URL: $url }, limit: 1) {
      Title
      _id
      Image {
        url
        ext
        provider
        size
      }
      Description
      Data
      URL
      Link
      createdAt
      updatedAt
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
const ComponentWithMutation = graphql(post, {
  options: ({ router: { query } }) => ({
    variables: {
      url: query.url
    }
  }),
  props: ({ data }) => ({
    data
  })
})(Post)

export default withRouter(ComponentWithMutation)

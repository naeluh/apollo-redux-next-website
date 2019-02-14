// @ts-check

import React from 'react'
import { withRouter, Router } from 'next/router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'

function Post({ data: { error, webs } }) {
  let web = webs[0]
  if (error) return <ErrorMessage message='Error loading blog post.' />
  if (web) {
    return (
      <section>
        <Head>
          <title>{web.Title}</title>
        </Head>
        <div key={web.id}>
          <h1>{web.Title}</h1>
          <figure>
            <img src={web.Image !== null ? `https://strapi.hulea.org/${web.Image.url}` : ''} />
          </figure>
          <ReactMarkdown source={web.Description} />
        </div>
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
            border: 1rem solid #000;
          }
          a {
            font-size: 14px;
            text-decoration: none;
            padding-bottom: 0;
            border: 0;
            color: #000;
            font-weight:400;
          }
          span {
            font-size: 14px;
            margin-right: 5px;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          img {
            object-fit: cover;
          }
        `}</style>
      </section>
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

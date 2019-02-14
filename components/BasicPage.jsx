import React from 'react'
import { withRouter } from 'next/router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'

function Post({ data: { error, basics } }) {
  let basic = basics !== undefined ? basics[0] : ''
  if (error || basics === '') return <ErrorMessage message='Error loading blog post.' />
  if (basic) {
    return (
      <section>
        <Head>
          <title>{basic.Title}</title>
        </Head>
        <div key={basic.id}>
          <h1>{basic.Title}</h1>
          <ReactMarkdown source={basic.Body} />
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
            text-decoration: none;
            padding-bottom: 0;
            border: 0;
            color: #000;
            font-weight:400;
          }
          span {
          }
          ul {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </section>
    )
  }
  return <div>Loading</div>
}

const post = gql`
  query basics($url: String!) {
    basics( where: { URL: $url }, limit: 1) {
      Title
      _id
      Image {
        url
        ext
        provider
        size
      }
      Body
      URL
      createdAt
      updatedAt
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
const ComponentWithMutation = graphql(post, {
  options: ({ router: { pathname } }) => ({
    variables: {
      url: pathname.replace('/','')
    }
  }),
  props: ({ data }) => ({
    data
  })
})(Post)

export default withRouter(ComponentWithMutation)

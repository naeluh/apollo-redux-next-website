// @ts-check

import React from 'react'
import { withRouter } from 'next/router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'

function Post({ data: { error, webs } }) {
  let web = webs[0]
  if (error) return <ErrorMessage message='Error loading blog post.' />
  if (web) {
    return (
      <section>
        <div key={web.id}>
          <h1>{web.Title}</h1>
          <p>{web.Description}</p>
          <figure>
            <img src={web.Image !== null ? `https://strapi.hulea.org/${web.Image.url}` : ''} />
          </figure>
        </div>
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

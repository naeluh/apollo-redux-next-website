import React from 'react'
import { withRouter } from 'next/router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import ReactMarkdown from 'react-markdown'

function Post({ data: { error, basics } }) {
  let basic = basics[0]
  if (error) return <ErrorMessage message='Error loading blog post.' />
  if (basic) {
    return (
      <section>
        <div key={basic.id}>
          <h1>{basic.Title}</h1>
          <ReactMarkdown source={basic.Body} />
        </div>
      </section>
    )
  }
  return <div>Loading</div>
}

const post = gql`
  query  {
    basics( where: { URL: "about" }, limit: 1) {
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

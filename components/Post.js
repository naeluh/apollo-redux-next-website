import React from 'react'
import { withRouter, router } from 'next/router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import PostVoteUp from './PostVoteUp'
import PostVoteDown from './PostVoteDown'
import PostVoteCount from './PostVoteCount'

function Post({ data: { error, web } }) {
  console.log(router)
  if (error) return <ErrorMessage message='Error loading blog post.' />
  if (web) {
    // Router.replace(`/blog/${web.Data.Link}`)
    return (
      <section>
        <div key={web.id}>
          <h1>{web.Title}</h1>
          <p>
            ID: {web._id}
            <br />
            URL: {web.URL}
          </p>
          <p>{web.Description}</p>
          <p><img src={ web.Image !== null ? `https://strapi.hulea.org/${web.Image.url}` : '' } /></p>
          <span>
            <PostVoteUp id={Post.id} votes={Post.votes} />
            <PostVoteCount votes={Post.votes} />
            <PostVoteDown id={Post.id} votes={Post.votes} />
          </span>
        </div>
        <style jsx>{`
          span {
            display: flex;
            font-size: 14px;
            margin-right: 5px;
          }
          img {
            width: 100%;
            height: auto;
          }
        `}</style>
      </section>
    )
  }
  return <div>Loading</div>
}

const post = gql`
  query web($id: ID!) {
    web(id: $id) {
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
      id: query.id
    }
  }),
  props: ({ data }) => ({
    data
  })
})(Post)

export default withRouter(ComponentWithMutation)

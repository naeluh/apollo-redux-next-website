import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Router } from '../routes'
import ErrorMessage from './ErrorMessage'

const POSTS_PER_PAGE = 10

function handleClick(event, id, url) {
  event.preventDefault()
  Router.push({
    pathname: `/work/${url}`,
    asPath: `/work/${url}`
  });
}

function PostList({
  data: { loading, error, allPosts, _allPostsMeta, webs },
  loadMorePosts
}) {
  if (error) return <ErrorMessage message='Error loading posts.' />
  if (webs && webs.length) {
    const areMorePosts = false
    return (
      <section>
        {webs.map((post, index) => (
          <span key={index + 1}>
            <a props={post._id} href={`/work/${post.Data.Link}`} onClick={event => handleClick(event, post._id, post.Data.Link)}>
              <figure>
                <img src={post.Image !== null ? `https://strapi.hulea.org/${post.Image.url}` : ''} />
              </figure>
              <h2>{post.Title}</h2>
            </a>
          </span>
        ))}
        {areMorePosts ? (
          <button onClick={() => loadMorePosts()}>
            {' '}
            {loading ? 'Loading...' : 'Show More'}{' '}
          </button>
        ) : (
            ''
          )}
        <style jsx>{`
          section {
            padding-bottom: 20px;
          }
          li {
            display: block;
            margin-bottom: 10px;
          }
          div {
            align-items: center;
            display: flex;
          }
          a {
            font-size: 14px;
            margin-right: 10px;
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
          button:before {
            align-self: center;
            border-style: solid;
            border-width: 6px 4px 0 4px;
            border-color: #ffffff transparent transparent transparent;
            content: '';
            height: 0;
            margin-right: 5px;
            width: 0;
          }
        `}</style>
      </section>
    )
  }
  return <div>Loading</div>
}

export const allPosts = gql`
  query {
    webs {
      _id
      Title
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


export const allPostsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allPosts, {
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allPosts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
          })
        }
      })
    }
  })
})(PostList)
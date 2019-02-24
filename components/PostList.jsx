import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Router } from '../routes'
import ErrorMessage from './ErrorMessage'
import Head from 'next/head'

const POSTS_PER_PAGE = 10

function handleClick(event, id, url) {
  event.preventDefault()
  Router.push({
    pathname: `/work/${url}`,
    asPath: `/work/${url}`
  });
}

function PostList({ data: { loading, error, webs }, title, extraClass }) {
  if (error) return <ErrorMessage message='Error loading posts.' />
  if (webs && webs.length) {
    return (
      <section className={extraClass}>
        <Head>
          {title === undefined ? 
          <>
          <title>Work</title> 
          <meta name="title" content="Nick Hulea's Work and Projects"></meta>
          <meta name="description" content="Nick Hulea's Work and Projects"></meta>
          </>
          : ''}
        </Head>
        {title === undefined ? <h1>Work</h1> : ''}
        <ul>
          {webs.map((post, index) => (
            post.URL !== title ? <li key={index + 1}>
              <a props={post._id} href={`/work/${post.Data.Link}`} onClick={event => handleClick(event, post._id, post.Data.Link)}>
                {post.Image !== null ? <span className="imgHero" style={{ backgroundImage: `url(https://strapi.hulea.org/${post.Image.url})` }}></span> : ''}
                <h2>{post.Title}</h2>
              </a>
            </li> : ''
          ))}
        </ul>
        <style jsx>{`
          * {
            box-sizing: border-box;
          }
          section {
            padding-bottom: 20px;
            max-width: 900px;
            margin: 0 auto;
          }
          a {
            position: relative;
          }
          ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }
          li {
            border: 1rem solid #111;
            margin-bottom: 2em;
          }
          h2 {
            position: absolute;
            bottom: -10px;
            left: 10px;
            padding: 10px 25px;
            color: #fff;
            background-color: #111;
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

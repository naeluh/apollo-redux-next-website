import withApollo from '../../lib/withApollo'

import App from '../../components/App'
import Header from '../../components/Header'
import Post from '../../components/Post'
import PostList from '../../components/PostList'

export default withApollo(() => (
  <App>
    <Header />
    <Post />
  </App>
))

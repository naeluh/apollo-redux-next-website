import App from '../components/App'
import Header from '../components/Header'
import Page from '../components/BasicPage'
import withApollo from '../lib/withApollo'
import withReduxSaga from '../lib/withReduxSaga'
import Footer from '../components/Footer'

class About extends React.Component {
  render() {
    return (
      <App>
        <Header />
        <Page />
        <Footer />
      </App>
    )
  }
}

  export default withReduxSaga(withApollo(About))
import React from 'react'

import withReduxSaga from '../lib/withReduxSaga'

import { startClock } from '../lib/clock/actions'
import { countIncrease } from '../lib/count/actions'
import { loadData } from '../lib/placeholder/actions'

import App from '../components/App'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'

class PageIndex extends React.Component {
  state = {
    isActive: true
  }

  static async getInitialProps ({ store }) {
    store.dispatch(countIncrease())
    if (!store.getState().placeholder.data) {
      store.dispatch(loadData())
    }
  }

  componentDidMount () {
    this.props.dispatch(startClock())
  }

  render () {
    return (
      <App>
        <Header />
        <Home title='Home Page' />
        <Footer />
      </App>
    )
  }
}

export default withReduxSaga(PageIndex)

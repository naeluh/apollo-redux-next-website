import React from 'react'
import Link from 'next/link'
import ReactDOM from 'react-dom'
import Head from 'next/head'

class Home extends React.Component {

  state = {
    height: '',
    width: ''
  }

  componentDidMount() {
    document.body.style.overflowX = "hidden";
    const client = ReactDOM.findDOMNode(this.refs['block']).getBoundingClientRect()
    this.setState(state => ({
      height: window.innerHeight,
      width: window.innerWidth
    }))
  }

  getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min
  }

  color = () => {
    return '#' + Math.random().toString(16).slice(2, 8).toUpperCase()
  }

  r = this.getRandomArbitrary(1.3432, 70.6546)

  render() {
    return (

        <section className="offset60">
        <Head>
          <title>Nick Hulea</title>
        </Head>

        <h1 id="title">
            Nick Hulea
          </h1>

          <p id="description">
            Hello you have arrived at the website of Nick Hulea !
          </p>

          <p>Samples of my work can be found <Link prefetch="true" href="/work"><a>here</a></Link>.</p>

          <p>If you would like to contact me or if you have any questions click <Link prefetch="true" href="/contact"><a>here</a></Link>.</p>
        
        <div id="block" ref="block" style={{
          transform: 'rotate3d(1, 1, 1, ' + this.r + 'deg)',
          backgroundColor: this.color(),
          height: this.state.height,
          width: this.state.width
        }}></div>

        <div className="clear"></div>
        
        <style jsx>{`
        body, #block {
          overflow-x:hidden;
        }
        #block {
          position: absolute;
          top: 0;
          left: 0;
        }
        .clear {
          clear: both;
          height: 75vh;
        }
      `}</style>
        </section>

    )
  }
}

export default Home
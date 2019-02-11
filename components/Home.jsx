import React from 'react'
import Link from 'next/link'
import ReactDOM from 'react-dom'

class Home extends React.Component {

  state = {
    height: '',
    width: ''
  }

  componentDidMount() {
    document.body.style.overflowX = "hidden";
    const client = ReactDOM.findDOMNode(this.refs['block']).getBoundingClientRect()
    this.setState(state => ({
      height: client.height,
      width: client.width
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
      <div className="background-content">

        <section className="offset60">

          <h1 id="title">
            Nick Hulea
          </h1>

          <p id="description">
            Hello you have arrived at the website of Nick Hulea !
          </p>

          <p>Samples of my work can be found <Link prefetch href="/work"><a>here</a></Link>.</p>

          <p>If you would like to contact me or if you have any questions click <Link prefetch href="/contact"><a>here</a></Link>.</p>

        </section>

        <div id="block" ref="block" style={{
          transform: 'rotate3d(1, 1, 1, ' + this.r + 'deg)',
          backgroundColor: this.color(),
          height: this.state.height,
          width: this.state.width
        }}></div>
        <style jsx>{`
        body {
          overflow-x:hidden;
        }
      `}</style>
      </div>
    )
  }
}

export default Home
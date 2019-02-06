import React from 'react'
import Link from 'next/link'
import ReactDOM from 'react-dom'

class Home extends React.Component {

  state = {
    height: '',
    width: ''
  }

  componentDidMount() {
    const client = ReactDOM.findDOMNode(this.refs['block']).getBoundingClientRect()
    console.log(client)
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
          <h1 id="title">Nick Hulea</h1>
        </section>
        <section className="offset60">
          <p id="description" >Hello you have arrived at the website of Nick Hulea !</p>
          <p>Samples of my work can be found <Link to="work" title="work" alt="work">here .</Link></p>
          <p>If you would like to contact me or if you have any questions click <Link to="contact" title="contact" alt="contact" >here .</Link></p>
        </section>
        <div id="block" ref="block" style={{
          transform: 'rotate3d(1, 1, 1, ' + this.r + 'deg)',
          backgroundColor: this.color(),
          height: this.state.height,
          width: this.state.width
        }}></div>
      </div>
    )
  }
}

export default Home
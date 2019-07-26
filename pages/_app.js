// pages/_app.js
import App, { Container } from 'next/app'
import Head from 'next/head'
import { initGA, logPageView } from '../lib/analytics'
import React from 'react'

export default class MyApp extends App {

  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <style>{`body { margin: 0 } /* custom!! Changed */`}</style>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
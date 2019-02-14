// pages/_app.js
import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
          <title>My new cool app</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      from source
      <br />
      to finish
    </h1>
    <p>
      Garden automates the repetitive parts of your workflow to make developing
      for Kubernetes and cloud faster and easier.
    </p>
    <p>
      No need to run Docker or Kubernetes on your laptop. Fast, in-cluster
      builds. Use the same commands and config for dev and CI.
    </p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typeit from "../components/typeit"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Typeit strings={["garden dev", ""]} />
    <h1>
      from source
      <br />
      to finish
    </h1>
    <p>
      Garden automates the repetitive parts of your workflow to make developing
      for Kubernetes and cloud faster and easier.
    </p>
  </Layout>
)

export default IndexPage

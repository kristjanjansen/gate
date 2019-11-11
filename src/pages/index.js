import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TerminalCmd from "../components/terminalcmd"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TerminalCmd
      cmd="garden dev"
      logs={[
        "",
        "<span style=color: gray>Good afternoon! Let's get your environment wired up...</span>",
        "",
        "🌻  Garden dashboard and API server running on http://localhost:57866",
      ]}
    />
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

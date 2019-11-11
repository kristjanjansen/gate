import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TerminalCmd from "../components/terminalcmd"

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

    <h3>garden dev</h3>

    <p>Starts the garden development console.</p>

    <TerminalCmd
      cmd="garden dev"
      logs={[
        "",
        "<span style='color: gray;'>Good afternoon! Let's get your environment wired up...</span>",
        "",
        "<span style='color: green;'>✔</span> <span style='color: cyan;'>providers</span>         → <span style='color: gray;'>Getting status...</span>                     <span style='color: limegreen;'>Done</span>",
        "<span style='color: green;'>✔</span> <span style='color: cyan;'>db-init</span>           → <span style='color: gray;'>Checking result...</span>                    <span style='color: limegreen;'>Done</span>",
        "<span style='color: green;'>✔</span> <span style='color: cyan;'>api</span>               → <span style='color: gray;'>Getting build status for v-bf8e2z...</span>  <span style='color: limegreen;'>Done</span> <span style='color: gray;'>took 0.2s</span>",
        "<span style='color: green;'>✔</span> <span style='color: cyan;'>api</span>               → <span style='color: gray;'>Deploying version v-bf8e2z...</span>         <span style='color: limegreen;'>Done</span> <span style='color: gray;'>took 1s</span>",
        "→ <span style='color: gray;'>Ingress:</span> <span style='color: gray; text-decoration: underline;'>https://result.local.app.gardern</span>",
        "→ <span style='color: gray;'>Forward:</span> <span style='color: gray; text-decoration: underline;'>https://http://localhost:53736</span>",
        "",
        "🌻 <span style='color: cyan;'>Garden dashboard and API server running on</span> http://localhost:57866",
        "",
        "🕑 <span style='color: gray;'>Waiting for code changes...</span>",
      ]}
    />

    <br />

    <br />

    <h3>garden options</h3>

    <p>Print global options.</p>

    <p>
      Garden automates the repetitive parts of your workflow to make developing
      for Kubernetes and cloud faster and easier.
    </p>

    <TerminalCmd
      cmd="garden options"
      logs={[
        "",
        "  <span style='color: limegreen'>--emoji</span>       Enable emoji in output.",
        "",
        "  <span style='color: limegreen'>-e, --env</span>     The environment to work against.",
        "",
        "  <span style='color: limegreen'>-h, --help</span>    Show help.",
        "",
        "  <span style='color: limegreen'>-s, --silent</span>  Suppress log output.",
        "",
        "  <span style='color: limegreen'>-v, --version</span> Show the current CLI version.",
        "",
        "$",
      ]}
    />
  </Layout>
)

export default IndexPage

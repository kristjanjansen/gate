import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer style={{ background: "#01569a", color: "white", padding: "5em" }}>
    <Link to="/impressum" style={{ textDecoration: "none", color: "white" }}>
      Impressum
    </Link>
    <br />
    <br />
    Copyright © {new Date().getFullYear()} Garden. All rights reserved
  </footer>
)

export default Footer

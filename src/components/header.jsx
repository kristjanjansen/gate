import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header style={{ padding: "1.25rem 2rem 1rem 2rem" }}>
    <div>
      <Link to="/">
        <img style={{ width: "9rem" }} src={logo} />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

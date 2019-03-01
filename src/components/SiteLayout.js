import React from "react"
import PropTypes from "prop-types"
import Header from "./SiteHeader"
// import "./style.css"
import "../styles/scss/style.scss"

const SiteLayout = ({ children, location }) => (
  <div id="page" class="site top-spacer bottom-spacer">
    <a class="skip-link screen-reader-text" href="#content">
      Skip to content
    </a>
    <Header location={location} />

    <div id="content" className="site-content">
      <div id="main" className="site-main" role="main">
        {children}
      </div>
    </div>

    <div className="footer">
      © {new Date().getFullYear()} | Built with
      {` `}
      <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </div>
)

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout

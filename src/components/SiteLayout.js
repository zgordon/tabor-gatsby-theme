import React from "react"
import PropTypes from "prop-types"
import Header from "./SiteHeader"
import Footer from "./Footer"
import "../styles/scss/style.scss"

const SiteLayout = ({ children, location }) => (
  <div id="page" className="site top-spacer bottom-spacer">
    <a className="skip-link screen-reader-text" href="#content">
      Skip to content
    </a>
    <Header location={location} />

    <div id="content" className="site-content">
      <div id="main" className="site-main" role="main">
        {children}
      </div>
    </div>

    <Footer />
  </div>
)

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout

import React from "react"
import Headroom from "react-headroom"
import Header from "./Header"
import Footer from "./Footer"
import PropTypes from "prop-types"
import "../styles/scss/style.scss"

const Layout = ({ children }) => (
  <>
    <Headroom pinstart="60px">
      <Header />
    </Headroom>
    <div className="content">{children}</div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

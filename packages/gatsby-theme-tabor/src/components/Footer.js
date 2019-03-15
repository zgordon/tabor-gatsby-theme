import React from "react"
import Subscribe from "./Subscribe"

const Footer = () => (
  <footer className="site-footer">
    <Subscribe />
    <div className="site-info container center-align medium header-font gray">
      <span className="site-copyright">
        <span
          className="copyright-year  "
          itemscope=""
          itemtype="http://schema.org/copyrightYear"
        >
          © {`${new Date().getFullYear()} `}
        </span>
        <span
          className="copyright-text"
          itemscope=""
          itemtype="http://schema.org/copyrightHolder"
        >
          Tabor Gatsby Theme
        </span>
      </span>
      <span className="site-theme  ">
        <a href="https://gatsbywpthemes.com/">Powered by Gatsby WP Themes</a>
      </span>
    </div>
  </footer>
)

export default Footer

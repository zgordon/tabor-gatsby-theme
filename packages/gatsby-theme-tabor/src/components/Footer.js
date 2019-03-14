import React from "react"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()} | Built with
    <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer

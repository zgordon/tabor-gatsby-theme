import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Menu from "./Menu"

const Header = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => {
      return (
        <header id="masthead" className="site-header">
          <p className="site-title">
            <Link to="/" rel="home">
              {data.site.siteMetadata.title}
            </Link>
          </p>

          <p className="site-description">
            {data.site.siteMetadata.description}
          </p>
          <Menu />
        </header>
      )
    }}
  />
)

export default Header

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Menu from "./Menu"
import Logo from "./Logo"
import SocialNav from "./SocialNav"

const Header = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header
        id="masthead"
        className="site-header drop-in drop-in--from-top drop-in--js drop-in--pinned drop-in--top"
        role="banner"
      >
        <div className="container max-width">
          <div className="flex justify-between">
            <div className="flex justify-start items-center">
              <Logo data={data} />
              <span className="sep" />
              <SocialNav />
            </div>
            <div className="flex items-center">
              <Menu />
            </div>
          </div>
        </div>
      </header>
    )}
  />
)

export default Header

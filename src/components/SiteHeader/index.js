import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SiteMenu from "../SiteMenu"
import wpgraphqlLogo from "../../images/wpgraphql-logo.png"

const Index = ({ location }) => (
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
              <div className="logo">
                <Link to="/">
                  <img
                    src={wpgraphqlLogo}
                    alt="WPGraphQL Logo"
                    style={{ height: `30px`, width: `30px` }}
                  />
                  {data.site.siteMetadata.title}
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <SiteMenu location={location} />
            </div>
          </div>
        </div>
      </header>
    )}
  />
)

Index.propTypes = {
  siteTitle: PropTypes.string,
}

Index.defaultProps = {
  siteTitle: ``,
}

export default Index

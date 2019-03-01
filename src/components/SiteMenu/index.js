import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { createLocalLink } from "../../utils"
import IconDown from "../../images/sprite.svg"
//FIXME: find the right path to the icon ID

const MENU_QUERY = graphql`
  fragment MenuFields on WPGraphQL_MenuItem {
    id
    label
    url
    connectedObject {
      __typename
    }
  }

  query GET_MENU_ITEMS {
    wpgraphql {
      menuItems(where: { location: PRIMARY }) {
        nodes {
          ...MenuFields
          childItems {
            nodes {
              ...MenuFields
            }
          }
        }
      }
    }
  }
`

const renderMenuItem = menuItem => {
  const link = createLocalLink(menuItem.url)
  if (menuItem.childItems && menuItem.childItems.nodes.length) {
    return renderSubMenu(menuItem)
  } else {
    return (
      <li
        className="menu-item menu-item-type-post_type menu-item-object-page"
        key={menuItem.id}
      >
        {link ? (
          <Link to={createLocalLink(menuItem.url)}>{menuItem.label}</Link>
        ) : (
          menuItem.label
        )}
      </li>
    )
  }
}

const renderSubMenu = menuItem => (
  <li
    className="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children "
    key={menuItem.id}
  >
    {createLocalLink(menuItem.url) ? (
      <Link to={createLocalLink(menuItem.url)}>{menuItem.label}</Link>
    ) : (
      menuItem.label
    )}
    <button className="dropdown-toggle" aria-expanded="false">
      <svg className="icon icon-down" aria-hidden="true" role="img">
        {/* <use href="#icon-down" /> */}
        <use xlinkHref={`#${IconDown.id}`} />
      </svg>
      <span className="svg-fallback icon-down" />
      <span className="screen-reader-text">Expand child menu</span>
    </button>
    <ul className="sub-menu">
      {menuItem.childItems.nodes.map(item => renderMenuItem(item))}
    </ul>
  </li>
)

const SiteMenu = ({ location }) => (
  <StaticQuery
    query={MENU_QUERY}
    render={data => {
      if (data.wpgraphql.menuItems) {
        return (
          <nav
            id="site-navigation"
            className="main-navigation nav primary flex items-center justify-end"
            role="navigation"
            aria-label="Primary Menu"
          >
            <button
              class="menu-toggle"
              aria-controls="top-menu"
              aria-expanded="false"
            >
              <span class="screen-reader-text">Menu</span>
            </button>
            <div className="menu-primary-container">
              <ul
                id="menu-primary"
                className="primary-menu header-font medium smooth gray list-reset"
              >
                {data.wpgraphql.menuItems.nodes.map(menuItem => {
                  if (menuItem.childItems.nodes.length) {
                    return renderSubMenu(menuItem)
                  } else {
                    return renderMenuItem(menuItem)
                  }
                })}
              </ul>
            </div>
          </nav>
        )
      } else {
        return null
      }
    }}
  />
)

export default SiteMenu

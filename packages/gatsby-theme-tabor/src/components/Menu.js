import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { createLocalLink } from "../utils"

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
              childItems {
                nodes {
                  ...MenuFields
                  childItems {
                    nodes {
                      ...MenuFields
                      childItems {
                        nodes {
                          ...MenuFields
                          childItems {
                            nodes {
                              ...MenuFields
                              childItems {
                                nodes {
                                  ...MenuFields
                                  childItems {
                                    nodes {
                                      ...MenuFields
                                      childItems {
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
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
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
      <li className="menu-item" key={menuItem.id}>
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
  <li className="has-subMenu menu-item" key={menuItem.id}>
    {createLocalLink(menuItem.url) ? (
      <Link to={createLocalLink(menuItem.url)}>{menuItem.label}</Link>
    ) : (
      menuItem.label
    )}
    <ul className="menuItemGroup">
      {menuItem.childItems.nodes.map(item => renderMenuItem(item))}
    </ul>
  </li>
)

const Menu = ({ location }) => (
  <StaticQuery
    query={MENU_QUERY}
    render={data => {
      if (data.wpgraphql.menuItems) {
        return (
          <ul role="menu">
            {data.wpgraphql.menuItems.nodes.map(menuItem => {
              if (menuItem.childItems.nodes.length) {
                return renderSubMenu(menuItem)
              } else {
                return renderMenuItem(menuItem)
              }
            })}
          </ul>
        )
      } else {
        return null
      }
    }}
  />
)

export default Menu

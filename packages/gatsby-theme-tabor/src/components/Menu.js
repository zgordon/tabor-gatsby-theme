import React, { useRef, useState } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { createLocalLink } from '../utils';
import { BodyClass } from 'react-extras';
import MenuToggle from './MenuToggle';

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
`;

const renderLink = menuItem =>
  menuItem.connectedObject.__typename === 'WPGraphQL_MenuItem' ? (
    <a href={menuItem.url} target="_blank" rel="noopener noreferrer">
      {menuItem.label}
    </a>
  ) : createLocalLink(menuItem.url) ? (
    <Link to={createLocalLink(menuItem.url)}>{menuItem.label}</Link>
  ) : (
    menuItem.label
  );

const renderMenuItem = menuItem => {
  if (menuItem.childItems && menuItem.childItems.nodes.length) {
    return renderSubMenu(menuItem);
  } else {
    return (
      <li className="menu-item" key={menuItem.id}>
        {renderLink(menuItem)}
      </li>
    );
  }
};

const renderSubMenu = menuItem => {
  return (
    <li className="has-subMenu menu-item" key={menuItem.id}>
      {renderLink(menuItem)}

      <ul className="menuItemGroup sub-menu">
        {menuItem.childItems.nodes.map(item => renderMenuItem(item))}
      </ul>
    </li>
  );
};

const Menu = ({ location }) => {
  const navRef = useRef();
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    navRef.current.classList.toggle('toggled-on');
    navRef.current.classList.toggle('nav-enabled');
    navOpen ? setNavOpen(false) : setNavOpen(true);
  };
  return (
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
              ref={navRef}
            >
              <MenuToggle onClick={openNav} />

              {navOpen && <BodyClass add="nav-open" />}
              <div className="menu-primary-container">
                <ul
                  id="menu-primary"
                  className="primary-menu header-font medium smooth gray list-reset"
                >
                  {data.wpgraphql.menuItems.nodes.map(menuItem => {
                    if (menuItem.childItems.nodes.length) {
                      return renderSubMenu(menuItem);
                    } else {
                      return renderMenuItem(menuItem);
                    }
                  })}
                </ul>
              </div>
            </nav>
          );
        } else {
          return null;
        }
      }}
    />
  );
};

export default Menu;

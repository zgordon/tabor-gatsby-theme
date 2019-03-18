import React, { useRef } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Headroom from 'react-headroom';
import Menu from './Menu';
import Logo from './Logo';
import SocialNav from './SocialNav';

const Header = () => {
  const headerRef = useRef();
  console.log('ref', headerRef);
  const unpinHeader = () => {
    headerRef.current.classList.replace('drop-in--pinned', 'drop-in--unpinned');
    headerRef.current.classList.replace('drop-in--top', 'drop-in--not-top');
  };
  const pinHeader = () => {
    headerRef.current.classList.replace('drop-in--unpinned', 'drop-in--pinned');
  };
  const unfixHeader = () => {
    headerRef.current.classList.replace('drop-in--unpinned', 'drop-in--pinned');
    headerRef.current.classList.replace('drop-in--not-top', 'drop-in--top');
  };

  return (
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
        <Headroom onPin={pinHeader} onUnpin={unpinHeader} onUnfix={unfixHeader}>
          <header
            id="masthead"
            className="site-header drop-in drop-in--from-top drop-in--js drop-in--pinned drop-in--top"
            role="banner"
            ref={headerRef}
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
        </Headroom>
      )}
    />
  );
};

export default Header;

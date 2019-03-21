import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
import '../styles/scss/style.scss';

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="site-content">{children}</div>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

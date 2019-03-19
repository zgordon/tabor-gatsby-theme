import React from 'react';

const HeaderArchive = ({ name }) => (
  <header className="page-header page-header__archive container bottom-spacer">
    <h2 className="page-title h2">
      <span className="vcard">{name}</span>
    </h2>
  </header>
);

export default HeaderArchive;

import React from 'react';

const MenuToggle = ({ onClick }) => (
  <button
    class="menu-toggle"
    aria-controls="top-menu"
    aria-expanded="false"
    onClick={onClick}
  >
    <span class="screen-reader-text">Menu</span>
  </button>
);

export default MenuToggle;

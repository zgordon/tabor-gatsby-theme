import React from "react"
import { Dribble, Twitter, Medium } from "./Icons"
//TODO: make it dynamic

const SocialNav = () => (
  <nav class="social-navigation" aria-label="Social Menu">
    <div class="menu-social-container">
      <ul id="menu-social" class="header-font medium smooth gray list-reset">
        <li
          id="menu-item-351"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-351"
        >
          <a href="http://twitter.com/richard_tabor">
            <span class="screen-reader-text">Twitter</span>
            <Twitter />
          </a>
        </li>
        <li
          id="menu-item-352"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-352"
        >
          <a href="http://dribbble.com/richtabor">
            <span class="screen-reader-text">Dribbble</span>
            <Dribble />
          </a>
        </li>
        <li
          id="menu-item-353"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-353"
        >
          <a href="https://medium.com/@richtabor">
            <span class="screen-reader-text">Medium</span>
            <Medium />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default SocialNav

"use client";

import { useRef } from "react";
import NavLink from "./nav-link";
import classes from "./navigation.module.css";

export default function Navigation() {
  const checkbox = useRef();

  function handleLinkClick() {
    checkbox.current.click();
  }

  return (
    <>
      <nav className={classes.navigationLarge}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meal</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>

      <div className={classes.navigationSmall}>
        <input
          ref={checkbox}
          type="checkbox"
          className={classes.checkbox}
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className={classes.navButton}>
          <span className={classes.navIcon}>&nbsp;</span>
        </label>

        <nav className={classes.navigation}>
          <ul>
            <li onClick={handleLinkClick}>
              <NavLink href="/meals">01 &nbsp; Browse Meal</NavLink>
            </li>
            <li onClick={handleLinkClick}>
              <NavLink href="/community">02 &nbsp; Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

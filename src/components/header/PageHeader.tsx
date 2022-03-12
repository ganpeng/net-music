import { cloneDeep } from "lodash";
import React, { useState } from "react";
import {
  DEFAULT_NAV_BAR_LIST,
  DEFAULT_SUB_NAV_BAR_LIST,
} from "../../constants";
import "./index.scss";

export default function PageHeader() {
  const [navBarList, setNavBarList] = useState(cloneDeep(DEFAULT_NAV_BAR_LIST));
  const [subNavList, setSubNavList] = useState(
    cloneDeep(DEFAULT_SUB_NAV_BAR_LIST)
  );

  const handleNavBarClick = (index: number) => {
    const _navBarList = navBarList.map((navBar, _index) => {
      if (index === _index) {
        navBar.isActive = true;
      } else {
        navBar.isActive = false;
      }
      return navBar;
    });
    setNavBarList(_navBarList);
    if (index === 0) {
      setSubNavList(cloneDeep(DEFAULT_SUB_NAV_BAR_LIST));
    }
  };

  const handleSubNavBarClick = (index: number) => {
    const _subNavbarList = subNavList.map((subNavBar, _index) => {
      if (index === _index) {
        subNavBar.isActive = true;
      } else {
        subNavBar.isActive = false;
      }
      return subNavBar;
    });
    setSubNavList(_subNavbarList);
  };

  const navBarActiveIndex = navBarList.findIndex((navBar) => navBar.isActive);

  return (
    <>
      <div className="page-header-top">
        <div className="top-nav">
          <div className="logo"></div>
          <ul className="nav-list">
            {navBarList.map((navBar, index) => {
              return (
                <li
                  className={`nav-item ${navBar.isActive ? "active" : ""} ${
                    navBar.isLast ? "download-btn" : ""
                  }`}
                  key={index}
                  onClick={() => handleNavBarClick(index)}
                >
                  {navBar.text}
                  {navBar.isLast && <span className="hot">HOT</span>}
                  {navBarActiveIndex === index && (
                    <span className="triangle"></span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navBarActiveIndex === 0 && (
        <div className="bottom-sub-nav">
          <div className="sub-nav-list-wrapper">
            <ul className="sub-nav-list">
              {subNavList.map((subNav, index) => {
                return (
                  <li
                    className={`sub-nav-item ${
                      subNav.isActive ? "active" : ""
                    }`}
                    onClick={() => handleSubNavBarClick(index)}
                    key={index}
                  >
                    {subNav.text}
                    {subNav.isSup && <span className="sup">R</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

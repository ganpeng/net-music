import React, { useContext, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DEFAULT_NAV_BAR_LIST,
  DEFAULT_SUB_NAV_BAR_LIST,
} from "../../constants";
import { INavBar } from "../../constants/type";
import { TracksContext } from "../../context";
import { useLogin } from "../../hooks/useLogin";
import { blankLink } from "../../utils";
import AuthedMenu from "../authed_menu/AuthedMenu";
import "./index.scss";

export default function PageHeader() {
  const tracksContext = useContext(TracksContext);
  const navigator = useNavigate();
  const location = useLocation();
  const { loginInit } = useLogin();

  const loginHandler = () => {
    tracksContext?.setLoginVisible(true);
    loginInit();
  };
  const handleNavBarClick = (navBar: INavBar) => {
    if (/^https:/.test(navBar.path || "")) {
      blankLink(navBar.path || "");
    } else {
      navigator(navBar.path || "/");
    }
  };
  const handleSubNavBarClick = (path: string) => {
    navigator(path);
  };
  const isActiveNav = useMemo(() => {
    return (path: string | undefined) => {
      if (path === "/") {
        if (
          location.pathname !== "/my-music" &&
          location.pathname !== "/my-follow"
        ) {
          return true;
        } else {
          return false;
        }
      } else if (path === "/my-music" || path === "/my-follow") {
        return location.pathname === path;
      } else {
        return false;
      }
    };
  }, [location.pathname]);
  const isDiscovery = useMemo(() => {
    return (
      location.pathname !== "/my-music" && location.pathname !== "/my-follow"
    );
  }, [location.pathname]);
  return (
    <>
      <div className="page-header-top">
        <div className="top-nav">
          <div className="left-field">
            <div className="logo" onClick={() => navigator("/")}></div>
            <ul className="nav-list">
              {DEFAULT_NAV_BAR_LIST.map((navBar, index) => {
                return (
                  <li
                    className={`nav-item ${
                      isActiveNav(navBar.path) ? "active" : ""
                    } ${navBar.isLast ? "download-btn" : ""}`}
                    key={index}
                    onClick={() => handleNavBarClick(navBar)}
                  >
                    {navBar.text}
                    {navBar.isLast && <span className="hot">HOT</span>}
                    {isActiveNav(navBar.path) && (
                      <span className="triangle"></span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="right-field">
            {tracksContext?.cookie ? (
              <AuthedMenu></AuthedMenu>
            ) : (
              <span
                className="login-btn text-decoration"
                onClick={loginHandler}
              >
                登录
              </span>
            )}
          </div>
        </div>
      </div>
      {isDiscovery && (
        <div className="bottom-sub-nav">
          <div className="sub-nav-list-wrapper">
            <ul className="sub-nav-list">
              {DEFAULT_SUB_NAV_BAR_LIST.map((subNav, index) => {
                return (
                  <li
                    className={`sub-nav-item ${
                      subNav.path === location.pathname ? "active" : ""
                    }`}
                    onClick={() => handleSubNavBarClick(subNav.path || "/")}
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

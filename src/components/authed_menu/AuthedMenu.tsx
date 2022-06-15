import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TracksContext } from "../../context";
import { logout } from "../../service";
import { linkToUserHomePage } from "../../utils/link";
import "./index.scss";

function AuthedMenu() {
  const tracksContext = useContext(TracksContext);
  const logoutHandler = async () => {
    let res = await logout();
    if (res.code === 200) {
      window.localStorage.removeItem("cookie");
      tracksContext?.setCookie(null);
      tracksContext?.setUserAccount(null);
    }
  };
  console.log(tracksContext?.userAccount);
  return (
    <div className="authed-menu-container">
      <div className="avatar-container">
        <img
          className="avatar-icon"
          src={tracksContext?.userAccount?.profile.avatarUrl}
          alt=""
        />
        <div className="menu-dialog">
          <ul className="menu-list">
            <li className="menu-item">
              <Link
                to={linkToUserHomePage(
                  tracksContext?.userAccount?.profile.userId
                )}
              >
                <span className="icon"></span>
                <span className="text">我的主页</span>
              </Link>
            </li>
            <li className="menu-item">
              <span className="icon"></span>
              <span className="text">我的消息</span>
            </li>
            <li className="menu-item">
              <span className="icon"></span>
              <span className="text">我的等级</span>
            </li>
            <li className="menu-item" onClick={logoutHandler}>
              <span className="icon"></span>
              <span className="text">退出</span>
            </li>
          </ul>
          <span className="arrow"></span>
        </div>
      </div>
    </div>
  );
}

export default AuthedMenu;

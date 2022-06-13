import React, { useContext } from "react";
import { TracksContext } from "../../context";
import { useLogin } from "../../hooks/useLogin";
import "./index.scss";

function HomeLogin() {
  const tracksContext = useContext(TracksContext);
  const { loginInit } = useLogin();
  const loginHandler = () => {
    tracksContext?.setLoginVisible(true);
    loginInit();
  };
  return (
    <div className="home-login-container">
      <p className="prompt">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      <button className="login-btn" onClick={() => loginHandler()}>
        用户登录
      </button>
    </div>
  );
}

export default HomeLogin;

import React, { useContext } from "react";
import { TracksContext } from "../../context";
import { useLogin } from "../../hooks/useLogin";
import "./index.scss";

function MyMusicNoAuth() {
  const tracksContext = useContext(TracksContext);
  const { loginInit } = useLogin();
  const loginHandler = () => {
    tracksContext?.setLoginVisible(true);
    loginInit();
  };
  return (
    <div className="my-music-no-auth-container">
      <button className="login-btn" onClick={() => loginHandler()}>
        立即登录
      </button>
    </div>
  );
}

export default MyMusicNoAuth;

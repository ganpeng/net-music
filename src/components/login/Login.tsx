import React, { useContext } from "react";
import { loginImage } from "../../constants/images";
import { TracksContext } from "../../context";
import "./index.scss";

function Login() {
  const tracksContext = useContext(TracksContext);
  return (
    <div className="login-container">
      {tracksContext?.loginVisible && (
        <div className="login-inner-container">
          <div className="login-content">
            <div className="login-header">
              <div className="title">登录</div>
              <div
                className="close-btn"
                onClick={() => tracksContext.setLoginVisible(false)}
              ></div>
            </div>
            <div className="login-body">
              <img src={loginImage} className="login-img" alt="" />
              <div className="qr-container">
                <div className="qr-title">扫码登录</div>
                <img className="qr-img" src={tracksContext.qrimg} alt="" />
                <p className="prompt">
                  使用&nbsp;
                  <a href="https://music.163.com/#/download">网易云音乐APP</a>
                  &nbsp;扫码登录
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

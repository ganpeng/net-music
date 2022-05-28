import React from "react";
import "./index.scss";

function DownloadClientTips() {
  return (
    <div className="download-client-tips-container">
      <div className="text">查看更多内容，请下载客户端</div>
      <a
        href="https://music.163.com/#/download"
        target="_blank"
        className="btn"
        rel="noreferrer"
      >
        立即下载
      </a>
    </div>
  );
}

export default DownloadClientTips;

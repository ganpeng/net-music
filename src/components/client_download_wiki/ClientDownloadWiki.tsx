/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { wikiOne, wikiTwo } from "../../constants/images";
import SectionTitle from "../section_title/SectionTitle";
import "./index.scss";

function ClientDownloadWiki() {
  return (
    <div className="client-download-wiki-container">
      <SectionTitle title="网易云音乐多端下载" moreLink=""></SectionTitle>
      <div className="client-list">
        <div className="client-item">
          <a
            href="https://apps.apple.com/cn/app/id590338362"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
        <div className="client-item">
          <a
            href="https://music.163.com/api/pc/download/latest"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
        <div className="client-item">
          <a
            href="https://music.163.com/api/android/download/latest2"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
      </div>
      <p className="tips">同步歌单，随时畅听320k好音乐</p>
      <SectionTitle title="网易云音乐公众号" moreLink=""></SectionTitle>
      <div className="wechat-container">
        <div className="img"></div>
        <div className="text">关注我，我们才能 真正拥有彼此啊~</div>
      </div>
      <SectionTitle title="用户wiki" moreLink=""></SectionTitle>
      <div className="wiki-list">
        <div className="wiki-item">
          <img src={wikiOne} alt="" />
          <a href="https://music.163.com/#/wiki/mv?mvId=14486290">
            补充或修改MV资料
          </a>
        </div>
        <div className="wiki-item">
          <img src={wikiTwo} alt="" />
          <a
            className="text-decoration"
            href="https://music.163.com/#/wiki/task-center/m/st/wiki/task-center/recommend"
          >
            用户wiki任务中心
          </a>
        </div>
      </div>
    </div>
  );
}

export default ClientDownloadWiki;

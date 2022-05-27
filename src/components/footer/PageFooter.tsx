import { times } from "lodash";
import React from "react";
import { FOOTER_IMAGE_LINKS, PAGE_FOOTER_LINKS } from "../../constants";
import { policeImage } from "../../constants/images";
import "./index.scss";

function PageFooter() {
  return (
    <div className="pagefooter-container content-w">
      <div className="left-field">
        <div className="link-list">
          {PAGE_FOOTER_LINKS.map((link, index) => (
            <div className="link-item text-decoration" key={index}>
              <a className="" href={link.url} target="_blank" rel="noreferrer">
                {link.title}
              </a>
            </div>
          ))}
        </div>
        <div className="line">
          <p className="p1">网易公司版权所有©1997-2022</p>
          <p>杭州乐读科技有限公司运营：</p>
          <a
            href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png"
            target="_blank"
            rel="noreferrer"
          >
            浙网文[2021] 1186-054号
          </a>
        </div>
        <div className="line">
          <a
            className="p1"
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
            rel="noreferrer"
          >
            粤B2-20090191-18 工业和信息化部备案管理系统网站
          </a>
          <img src={policeImage} alt="" />
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
            target="_blank"
            rel="noreferrer"
          >
            浙公网安备 33010902002564号
          </a>
        </div>
      </div>
      <div className="right-field">
        <div className="image-link-list">
          {FOOTER_IMAGE_LINKS.map((link, index) => {
            return (
              <a
                href={link}
                target="_blank"
                className="image-link-item"
                key={index}
                rel="noreferrer"
              >
                <div className="logo"></div>
                <div className="text"></div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PageFooter;

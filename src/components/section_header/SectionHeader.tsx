import React, { ReactNode } from "react";
import "./index.scss";
import { circle, rightArrowSvg } from "../../constants/svg";
import { useNavigate } from "react-router-dom";

type PropsType = {
  title: string;
  moreLink?: string;
  children?: ReactNode;
};

function SectionHeader(props: PropsType) {
  const navigator = useNavigate();
  const { title, children, moreLink } = props;
  return (
    <div className="section-header-container">
      <div className="left-field">
        <div className="section-header-icon">
          <img src={circle} alt="" />
        </div>
        <div className="section-header-title">{title}</div>
        <div className="children-field">{children}</div>
      </div>
      <div className="center-field"></div>
      <div className="right-field">
        <div
          className="section-header-more"
          onClick={() => navigator(moreLink || "/")}
        >
          <span className="text">更多</span>
          <span className="more-icon">
            <img src={rightArrowSvg} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;

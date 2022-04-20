import React, { ReactNode } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

type PropsType = {
  title: string;
  moreLink?: string;
  children?: ReactNode;
  hasTitleIcon?: boolean;
};

function SectionHeader(props: PropsType) {
  const navigator = useNavigate();
  const { title, children, moreLink = "/", hasTitleIcon = true } = props;
  return (
    <div className="section-header-container">
      <div className="left-field">
        {hasTitleIcon && (
          <div className="section-header-icon">
            <div className="cicle"></div>
          </div>
        )}
        <div className="section-header-title">{title}</div>
        <div className="children-field">{children}</div>
      </div>
      <div className="center-field"></div>
      <div className="right-field">
        {moreLink && (
          <div
            className="section-header-more"
            onClick={() => navigator(moreLink)}
          >
            <span className="text">更多</span>
            <span className="more-icon"></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;

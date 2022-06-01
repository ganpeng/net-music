import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

type SectionTitlePropsType = {
  title: string;
  moreLink?: string;
};

function SectionTitle(props: SectionTitlePropsType) {
  return (
    <div className="title-field-container">
      <div className="title">{props.title}</div>
      {props.moreLink && (
        <div className="more-link text-decoration">
          <Link to={props.moreLink}>全部&#62;</Link>
        </div>
      )}
    </div>
  );
}

export default SectionTitle;

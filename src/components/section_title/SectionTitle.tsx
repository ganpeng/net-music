import React from "react";
import "./index.scss";

type SectionTitlePropsType = {
  title: string;
};

function SectionTitle(props: SectionTitlePropsType) {
  return (
    <div className="title-field-container">
      <div className="title">{props.title}</div>
    </div>
  );
}

export default SectionTitle;

import React from "react";
import "./index.scss";

type NoDataPropsType = {
  text?: string;
};

function NoData(props: NoDataPropsType) {
  return (
    <div className="no-data-container">
      <span className="no-data-icon"></span>
      <span className="no-data-text">{props.text || "暂无数据"}</span>
    </div>
  );
}

export default NoData;

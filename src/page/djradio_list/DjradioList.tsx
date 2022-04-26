import React from "react";
import { DjCatelist, DjRecommend, ProgrammeRank } from "../../components";
import "./index.scss";

function DjradioList() {
  return (
    <div className="dj-radio-list-container content-w">
      <DjCatelist></DjCatelist>
      <div className="programme-container">
        <DjRecommend></DjRecommend>
        <ProgrammeRank></ProgrammeRank>
      </div>
    </div>
  );
}

export default DjradioList;

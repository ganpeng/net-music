import { take } from "lodash";
import React from "react";
import { useQuery } from "react-query";
import { getDjProgrammeToplist } from "../../service";
import SectionHeader from "../section_header/SectionHeader";
import "./index.scss";

function ProgrammeRank() {
  const { data: djProgrammeToplistData } = useQuery(
    "dj_programme_toplist",
    getDjProgrammeToplist
  );
  return (
    <div className="programme-rank-container">
      <SectionHeader
        title="节目排行榜"
        hasTitleIcon={false}
        moreLink="/"
      ></SectionHeader>
      <div className="programme-rank-list">
        {take(djProgrammeToplistData?.toplist, 10).map((item, index) => {
          return (
            <div className="programme-rank-item" key={index}>
              <div className={`index ${index <= 2 ? "top3" : ""}`}>
                {index <= 8 ? `0${index + 1}` : index + 1}
              </div>
              <div
                className="img"
                style={{ backgroundImage: `url(${item.program.coverUrl})` }}
              >
                <div className="play-btn"></div>
              </div>
              <div className="name-brand">
                <div className="name">{item.program.mainSong.name}</div>
                <div className="brand">{item.program.dj.brand}</div>
              </div>
              <div className="score">{item.score}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgrammeRank;

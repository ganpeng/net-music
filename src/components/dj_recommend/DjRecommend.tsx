import React from "react";
import { useQuery } from "react-query";
import { getDjProgrammeRecommend } from "../../service";
import SectionHeader from "../section_header/SectionHeader";
import "./index.scss";

function DjRecommend() {
  const { data: djProgrammeRecommendData } = useQuery(
    "dj_programme_recommend",
    getDjProgrammeRecommend
  );
  console.log(djProgrammeRecommendData);
  return (
    <div className="dj-recocmmend-container">
      <SectionHeader
        title="推荐节目"
        hasTitleIcon={false}
        moreLink="/"
      ></SectionHeader>
      <div className="dj-recommend-list">
        {djProgrammeRecommendData?.programs.map((program) => {
          return (
            <div className="dj-recommend-programme-item" key={program.id}>
              <div
                className="img"
                style={{ backgroundImage: `url(${program.coverUrl})` }}
              >
                <div className="play-btn"></div>
              </div>
              <div className="name-brand">
                <div className="name">{program.mainSong.name}</div>
                <div className="brand">{program.dj.brand}</div>
              </div>
              <div className="category">{program.radio.category}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DjRecommend;

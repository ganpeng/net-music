import React from "react";
import { useQuery } from "react-query";
import { getDjCateList } from "../../service";
import "./index.scss";

function DjCatelist() {
  const { data } = useQuery("dj_catelist", getDjCateList);
  console.log(data);
  return (
    <div className="dj-catelist-container">
      {data?.categories.map((cate) => {
        return (
          <div className="dj-cate-item" key={cate.id}>
            <div
              className="cate-img"
              style={{ backgroundImage: `url(${cate.picWebUrl})` }}
            ></div>
            <div className="cate-name">{cate.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default DjCatelist;

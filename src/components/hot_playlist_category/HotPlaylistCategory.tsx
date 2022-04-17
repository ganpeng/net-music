import React from "react";
import { useQuery } from "react-query";
import take from "lodash/take";
import { getHotPlayListCategory } from "../../service";
import "./index.scss";

function HotPlaylistCategory() {
  const { data } = useQuery("hot_palylist_category", getHotPlayListCategory);
  return (
    <div className="hot-playlist-category-container">
      {take(data?.tags, 5).map((tag) => {
        return (
          <span className="tag-item" key={tag.id}>
            {tag.name}
          </span>
        );
      })}
    </div>
  );
}

export default HotPlaylistCategory;

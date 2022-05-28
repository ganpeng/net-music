import React from "react";
import { useQuery } from "react-query";
import take from "lodash/take";
import { getHotPlayListCategory } from "../../service";
import "./index.scss";
import HotPlaylistCategoryContentLoader from "../my_content_loader/HotPlaylistCategoryContentLoader";
import { useNavigate } from "react-router-dom";

function HotPlaylistCategory() {
  const navigator = useNavigate();
  const { data, isFetching } = useQuery(
    "hot_palylist_category",
    getHotPlayListCategory
  );
  return isFetching ? (
    <HotPlaylistCategoryContentLoader />
  ) : (
    <div className="hot-playlist-category-container">
      {take(data?.tags, 5).map((tag) => {
        return (
          <span
            onClick={() => navigator(`/playlist?cat=${tag.name}`)}
            className="tag-item"
            key={tag.id}
          >
            {tag.name}
          </span>
        );
      })}
    </div>
  );
}

export default HotPlaylistCategory;

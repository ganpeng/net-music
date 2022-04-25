import React from "react";
import { useQuery } from "react-query";
import take from "lodash/take";
import { getHotPlayListCategory } from "../../service";
import "./index.scss";
import HotPlaylistCategoryContentLoader from "../my_content_loader/HotPlaylistCategoryContentLoader";

function HotPlaylistCategory() {
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
          <span className="tag-item" key={tag.id}>
            {tag.name}
          </span>
        );
      })}
    </div>
  );
}

export default HotPlaylistCategory;

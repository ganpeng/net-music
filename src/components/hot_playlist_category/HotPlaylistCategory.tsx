import React from "react";
import { useQuery } from "react-query";
import { getHotPlayListCategory } from "../../service";

function HotPlaylistCategory() {
  const { data } = useQuery("hot_palylist_category", getHotPlayListCategory);
  return <div>HotPlaylistCategory</div>;
}

export default HotPlaylistCategory;

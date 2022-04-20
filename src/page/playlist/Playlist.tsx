import React, { useState } from "react";
import { CategoryList } from "../../components";
import "./index.scss";

function Playlist() {
  const [showCatList, setShowCatList] = useState(true);
  return (
    <div className="playlist-container content-w">
      {showCatList && <CategoryList></CategoryList>}
    </div>
  );
}

export default Playlist;

import React from "react";
import { useNavigate } from "react-router-dom";
import { IBoard } from "../../constants/type";
import "./index.scss";

type ToplistItemPropsType = {
  item: IBoard;
  activeId: number;
};

function ToplistItem(prop: ToplistItemPropsType) {
  const navigator = useNavigate();

  return (
    <div
      onClick={() => navigator(`/toplist?id=${prop.item.id}`)}
      className={`toplist-item ${
        prop.activeId === prop.item.id ? "active" : ""
      }`}
    >
      <div
        className="img"
        style={{ backgroundImage: `url(${prop.item.coverImgUrl})` }}
      ></div>
      <div className="text-info">
        <div className="name">{prop.item.name}</div>
        <div className="updatetime">{prop.item.updateFrequency}</div>
      </div>
    </div>
  );
}

export default ToplistItem;

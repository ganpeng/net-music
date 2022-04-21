import { get, partition } from "lodash";
import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { Songlist, ToplistItem, ToplistItemDetail } from "../../components";
import { IBoard } from "../../constants/type";
import { getBoardList, getPlaylistDetail } from "../../service";
import "./index.scss";

function TopList() {
  const [searchParams] = useSearchParams();
  const { data } = useQuery("toplist", getBoardList);
  const [netMusicTopList, globalTopList] = partition(
    data?.list,
    (item: IBoard) => item.ToplistType
  );

  const id = Number(searchParams.get("id"));
  const activeId = id === 0 ? get(netMusicTopList, `0.id`) : id;
  const activeTopItem = data?.list.find((item) => item.id === activeId);

  const { data: playDetail } = useQuery("playlist_detail", () =>
    getPlaylistDetail(activeId)
  );

  return (
    <div className="toplist-container content-w">
      <div className="left-side-field">
        <div className="net-mmusic-toplist-container">
          <h2 className="title">云音乐特色榜</h2>
          <div className="toplist">
            {netMusicTopList.map((item: IBoard) => {
              return (
                <ToplistItem
                  item={item}
                  key={item.id}
                  activeId={activeId}
                ></ToplistItem>
              );
            })}
          </div>
        </div>
        <div className="global-toplist-container">
          <h2 className="title">全球媒体榜</h2>
          <div className="toplist">
            {globalTopList.map((item: IBoard) => {
              return (
                <ToplistItem
                  item={item}
                  key={item.id}
                  activeId={activeId}
                ></ToplistItem>
              );
            })}
          </div>
        </div>
      </div>
      <div className="right-content-field">
        <ToplistItemDetail topItem={playDetail?.playlist}></ToplistItemDetail>
        <Songlist topItem={playDetail?.playlist}></Songlist>
      </div>
    </div>
  );
}

export default TopList;

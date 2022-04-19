import { get, take } from "lodash";
import React from "react";
import { useQueries, useQuery } from "react-query";
import { SectionHeader } from "../../components";
import { getBoardList, getPlaylistDetail } from "../../service";
import "./index.scss";

function BoardList() {
  const { data } = useQuery("board-list", getBoardList);
  const takedBoardList = take(data?.list, 3);
  const boardDetailListResponse = useQueries(
    takedBoardList.map((board) => {
      return {
        queryKey: ["board-detail", board.id],
        queryFn: () => getPlaylistDetail(board.id),
      };
    })
  );
  const boardDetailList = boardDetailListResponse.map(
    (res) => res.data?.playlist
  );
  const getTracesById = (id: number) => {
    const playList = boardDetailList.find((playList) => playList?.id === id);
    const tracks = take(get(playList, `tracks`), 10) || [];
    return tracks;
  };
  return (
    <div className="board-list-container">
      <SectionHeader title="榜单"></SectionHeader>
      <div className="board-list-content">
        {takedBoardList.map((board) => {
          return (
            <div className="board-item" key={board.id}>
              <div className="board-item-header">
                <div className="image-field">
                  <div className="mask-image"></div>
                  <div
                    className="cover-image"
                    style={{ backgroundImage: `url(${board.coverImgUrl})` }}
                  ></div>
                </div>
                <div className="name-control-field">
                  <p className="name">{board.name}</p>
                  <div className="control-field">
                    <div className="play-btn"></div>
                    <div className="add-to-playlist-btn"></div>
                  </div>
                </div>
              </div>
              <div className="board-item-content">
                <ul className="track-list">
                  {getTracesById(board.id).map((track, index) => {
                    return (
                      <li className="track-item" key={track.id}>
                        <span
                          className="index"
                          style={{ color: index + 1 <= 3 ? "#c10d0c" : "#666" }}
                        >
                          {index + 1}
                        </span>
                        <p className="track-name">{track.name}</p>
                        <div className="control-field">
                          <div className="play-btn"></div>
                          <div className="save-btn"></div>
                          <div className="add-to-playlist-btn"></div>
                        </div>
                      </li>
                    );
                  })}
                  <li className="track-item check-total">
                    <p>查看全部&#62;</p>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BoardList;

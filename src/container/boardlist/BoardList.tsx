import { get, take } from "lodash";
import React from "react";
import { useQueries, useQuery } from "react-query";
import { Link } from "react-router-dom";
import { SectionHeader } from "../../components";
import { useActionTracks } from "../../hooks/useActionTracks";
import { useGetToplistSongsUrl } from "../../hooks/useGetToplistSongsUrl";
import { getBoardList, getPlaylistDetail } from "../../service";
import { linkToSongDetailPage, linkToToplistPage } from "../../utils/link";
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

  const { getSongsUrls } = useGetToplistSongsUrl();
  const { addSongToTracks } = useActionTracks();

  return (
    <div className="board-list-container">
      <SectionHeader title="榜单" moreLink="/toplist"></SectionHeader>
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
                  >
                    <Link to={linkToToplistPage(board.id)}></Link>
                  </div>
                </div>
                <div className="name-control-field">
                  <p className="name text-decoration">
                    <Link to={linkToToplistPage(board.id)}>{board.name}</Link>
                  </p>
                  <div className="control-field">
                    <div
                      className="play-btn"
                      onClick={() => getSongsUrls(board.id)}
                    ></div>
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
                        <p className="track-name text-decoration">
                          <Link to={linkToSongDetailPage(track.id)}>
                            {track.name}
                          </Link>
                        </p>
                        <div className="control-field">
                          <div
                            className="play-btn"
                            onClick={() => addSongToTracks(track)}
                          ></div>
                          <div className="save-btn"></div>
                          <div className="add-to-playlist-btn"></div>
                        </div>
                      </li>
                    );
                  })}
                  <li className="track-item check-total">
                    <p>
                      <Link to={linkToToplistPage(board.id)}>
                        查看全部&#62;
                      </Link>
                    </p>
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

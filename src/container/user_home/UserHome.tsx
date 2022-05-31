import { partition } from "lodash";
import React from "react";
import { useQuery } from "react-query";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { UserPlaylist, UserRecord } from "../../components";
import { ContextType } from "../../page/user/User";
import { getUserPlaylistById } from "../../service";
import "./index.scss";

function UserHome() {
  const context: ContextType = useOutletContext();
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { data: userPlaylistData } = useQuery(["user_palylist", id], () =>
    getUserPlaylistById(id)
  );
  const [createdPlaylist, subscribedPlaylist] = partition(
    userPlaylistData?.playlist,
    (item) => item.creator.userId === id
  );
  return (
    <div className="user-home-container">
      {context.peopleCanSeeMyPlayRecord && (
        <UserRecord listenSongs={context.listenSongs}></UserRecord>
      )}
      <UserPlaylist
        title={`${context.nickname}创建的歌单 (${createdPlaylist.length})`}
        playlist={createdPlaylist || []}
      ></UserPlaylist>
      <UserPlaylist
        title={`${context.nickname}收藏的歌单 (${subscribedPlaylist.length})`}
        playlist={subscribedPlaylist || []}
      ></UserPlaylist>
    </div>
  );
}

export default UserHome;

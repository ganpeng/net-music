import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { UserRecord } from "../../components";
import { getUserDetailById } from "../../service";
import "./index.scss";

function UserSongsRank() {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { data: userDetailData } = useQuery(["user_detail", id], () =>
    getUserDetailById(id)
  );
  return (
    <div className="user-songs-rank-container content-w">
      <UserRecord
        all={true}
        listenSongs={userDetailData?.listenSongs || 0}
      ></UserRecord>
    </div>
  );
}

export default UserSongsRank;

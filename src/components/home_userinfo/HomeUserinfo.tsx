import React, { useContext } from "react";
import { useQuery } from "react-query";
import { TracksContext } from "../../context";
import { getUserDetailById } from "../../service";
import "./index.scss";

function HomeUserinfo() {
  const tracksContext = useContext(TracksContext);
  const { data: userDetailData } = useQuery(
    ["user_detail", tracksContext?.userAccount?.profile.userId],
    () => getUserDetailById(tracksContext?.userAccount?.profile.userId),
    {
      enabled: !!tracksContext?.userAccount?.profile.userId,
    }
  );
  console.log(userDetailData);
  return (
    <div className="home-userinfo-container">
      <div className="top-info">
        <img
          className="avatar-url"
          src={userDetailData?.profile.avatarUrl}
          alt=""
        />
      </div>
      <div className="bottom-info"></div>
    </div>
  );
}

export default HomeUserinfo;

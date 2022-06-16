import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { TracksContext } from "../../context";
import { getSigninProgress, getUserDetailById } from "../../service";
import {
  linkToUserEventPage,
  linkToUserFansPage,
  linkToUserFollowsPage,
  linkToUserHomePage,
} from "../../utils/link";
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
  const { data: signinProgressData } = useQuery(
    "signin_progress",
    getSigninProgress
  );
  console.log(signinProgressData);

  console.log(userDetailData);
  return (
    <div className="home-userinfo-container">
      <div className="top-info">
        <Link to={linkToUserHomePage(userDetailData?.profile.userId)}>
          <img
            className="avatar-url"
            src={userDetailData?.profile.avatarUrl}
            alt=""
          />
        </Link>
        <div className="right-info">
          <p className="name text-decoration">
            <Link to={linkToUserHomePage(userDetailData?.profile.userId)}>
              {userDetailData?.profile.nickname}
            </Link>
          </p>
          <div className="level">
            {userDetailData?.level}
            <i></i>
          </div>
          <div className="sign-btn active">
            <i>
              {signinProgressData?.data.today.todaySignedIn
                ? "已签到"
                : "未签到"}
            </i>
          </div>
        </div>
      </div>
      <div className="bottom-info">
        <div className="event item">
          <Link to={linkToUserEventPage(userDetailData?.profile.userId)}>
            <div className="count">{userDetailData?.profile.eventCount}</div>
            <div className="label">动态</div>
          </Link>
        </div>
        <div className="v-line"></div>
        <div className="item follow">
          <Link to={linkToUserFollowsPage(userDetailData?.profile.userId)}>
            <div className="count">{userDetailData?.profile.follows}</div>
            <div className="label">关注</div>
          </Link>
        </div>
        <div className="v-line"></div>
        <div className="item fans">
          <Link to={linkToUserFansPage(userDetailData?.profile.userId)}>
            <div className="count">{userDetailData?.profile.followeds}</div>
            <div className="label">粉丝</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeUserinfo;

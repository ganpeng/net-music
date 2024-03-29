import { get } from "lodash";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { TracksContext } from "../../context";
import { followById, getUserDetailById } from "../../service";
import {
  linkToArtistDetailPage,
  linkToUserEventPage,
  linkToUserFansPage,
  linkToUserFollowsPage,
} from "../../utils/link";
import "./index.scss";

export type ContextType = {
  eventCount: number;
  follows: number;
  followeds: number;
  listenSongs: number;
  peopleCanSeeMyPlayRecord: boolean;
  nickname: string;
};

function User() {
  const tracksContext = useContext(TracksContext);
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { data: userDetailData, refetch } = useQuery(["user_detail", id], () =>
    getUserDetailById(id)
  );

  const contextProps: ContextType = {
    eventCount: userDetailData?.profile.eventCount || 0,
    follows: userDetailData?.profile.follows || 0,
    followeds: userDetailData?.profile.followeds || 0,
    listenSongs: userDetailData?.listenSongs || 0,
    peopleCanSeeMyPlayRecord: userDetailData?.peopleCanSeeMyPlayRecord || false,
    nickname: userDetailData?.profile.nickname || "",
  };

  const followHandler = async (t: number) => {
    let res = await followById(id, t);
    if (res.code === 201 || res.code === 200) {
      refetch();
    }
  };
  console.log(userDetailData);

  return (
    <div className="user-container content-w">
      <div className="user-info-container">
        <div className="left-img">
          <img src={userDetailData?.profile.avatarUrl} alt="" />
        </div>
        <div className="right-info-field">
          <div className="title-field">
            <div className="left">
              <p className="name">{userDetailData?.profile.nickname}</p>
              <span className="vip">{userDetailData?.profile.vipType}</span>
              <span className="level">
                {userDetailData?.level} <i></i>
              </span>
              <span
                className={`gender ${
                  userDetailData?.profile.gender === 1 ? "male" : "female"
                }`}
              ></span>
              {tracksContext?.userAccount?.profile?.userId !==
                userDetailData?.profile.userId && (
                <>
                  {(userDetailData?.profile.followed ||
                    userDetailData?.profile.followMe) && (
                    <div className="send-message-btn">发私信</div>
                  )}
                  {userDetailData?.profile.followed &&
                    !userDetailData?.profile.followMe && (
                      <div
                        className="subed-btn"
                        onClick={() => followHandler(2)}
                      ></div>
                    )}
                  {!userDetailData?.profile.followed && (
                    <div className="sub-btn" onClick={() => followHandler(1)}>
                      关注
                    </div>
                  )}
                  {userDetailData?.profile.followed &&
                    userDetailData.profile.followMe && (
                      <div
                        className="sub-both-btn"
                        onClick={() => followHandler(2)}
                      ></div>
                    )}
                </>
              )}
            </div>
            {userDetailData?.profile.artistId && (
              <div className="link-to-artist-page-btn">
                <Link
                  to={linkToArtistDetailPage(
                    userDetailData?.profile.artistId || 0
                  )}
                >
                  <i>查看歌手页</i>
                </Link>
              </div>
            )}
          </div>
          <div className="auth-field">
            <div
              className={`type-icon type${userDetailData?.profile.mainAuthType?.type}`}
            ></div>
            <span className="desc">
              {userDetailData?.profile?.mainAuthType?.desc}
            </span>
            <ul className="tags">
              {get(userDetailData, `profile.mainAuthType.tags`) ||
                [].map((tag: string) => {
                  return (
                    <li className="tag" key={tag}>
                      {tag}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="horizontal-split"></div>
          <div className="event-follow-fans-field">
            <div className="item">
              <Link to={linkToUserEventPage(id)}>
                <div className="count">
                  {userDetailData?.profile.eventCount}
                </div>
                <div className="label">动态</div>
              </Link>
            </div>
            <div className="item">
              <Link to={linkToUserFollowsPage(id)}>
                <div className="count">{userDetailData?.profile.follows}</div>
                <div className="label">关注</div>
              </Link>
            </div>
            <div className="item">
              <Link to={linkToUserFansPage(id)}>
                <div className="count">{userDetailData?.profile.followeds}</div>
                <div className="label">粉丝</div>
              </Link>
            </div>
          </div>
          <div className="desc">
            个人介绍: {userDetailData?.profile.signature}
          </div>
        </div>
      </div>
      <Outlet context={contextProps}></Outlet>
    </div>
  );
}

export default User;

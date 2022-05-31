import React from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../constants/type";
import {
  linkToUserEventPage,
  linkToUserFansPage,
  linkToUserFollowsPage,
  linkToUserHomePage,
} from "../../utils/link";
import "./index.scss";

type FollowPropsType = {
  follows: IUser[];
};

function Follow(props: FollowPropsType) {
  const { follows } = props;
  return (
    <ul className="follow-list">
      {follows.map((follow, index) => {
        return (
          <li
            className={`follow-item ${
              index === follows.length - 2 ? "border" : ""
            }`}
            key={follow.userId}
          >
            <div className="left-img">
              <img src={follow.avatarUrl} alt="" />
            </div>
            <div className="right-info">
              <div className="name-gender">
                <div className="name text-decoration">
                  <Link to={linkToUserHomePage(follow.userId)}>
                    {follow.nickname}
                  </Link>
                </div>
                <div
                  className={`gender ${
                    follow.gender === 1 ? "male" : "female"
                  }`}
                ></div>
              </div>
              <div className="event-follow-fans">
                <div className="event item text-decoration">
                  <Link to={linkToUserEventPage(follow.userId)}>
                    <div className="label">动态</div>
                    <div className="count">{follow.eventCount}</div>
                  </Link>
                </div>
                <span className="line">|</span>
                <div className="follow item text-decoration">
                  <Link to={linkToUserFollowsPage(follow.userId)}>
                    <div className="label">关注</div>
                    <div className="count">{follow.follows}</div>
                  </Link>
                </div>
                <span className="line">|</span>
                <div className="fans item text-decoration">
                  <Link to={linkToUserFansPage(follow.userId)}>
                    <div className="label">粉丝</div>
                    <div className="count">{follow.followeds}</div>
                  </Link>
                </div>
              </div>
              <div className="signature" title={follow.signature}>
                {follow.signature}
              </div>
            </div>
            <div className="sub-btn">关注</div>
          </li>
        );
      })}
    </ul>
  );
}

export default Follow;

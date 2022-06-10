import React from "react";
import { Link } from "react-router-dom";
import { Profile } from "../../constants/type";
import { linkToUserHomePage } from "../../utils/link";
import "./index.scss";

type UserAvatarListPropsType = {
  subscribers: Profile[];
};

function UserAvatarList(props: UserAvatarListPropsType) {
  const subscribers = props.subscribers || [];
  return (
    <div className="user-avatar-list-container">
      <ul className="user-avatar-list">
        {subscribers.map((user, index) => {
          return (
            <div className="user-avatar-item" key={index} title={user.nickname}>
              <Link to={linkToUserHomePage(user.userId)}>
                <img src={user.avatarUrl} alt={user.nickname} />
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default UserAvatarList;

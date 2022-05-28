import React from "react";
import { Profile } from "../../constants/type";
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
              <img src={user.avatarUrl} alt={user.nickname} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default UserAvatarList;

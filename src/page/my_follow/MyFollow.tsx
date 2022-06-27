import React from "react";
import { MyFollowNoAuth } from "../../components";
import "./index.scss";

function MyFollow() {
  return (
    <div className="my-follow-container content-w content-h">
      <MyFollowNoAuth></MyFollowNoAuth>
    </div>
  );
}

export default MyFollow;

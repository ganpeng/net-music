import { take } from "lodash";
import React from "react";
import { IComment } from "../../constants/type";
import { fromNow, getYearMonthDay } from "../../utils";
import "./index.scss";
type CommentListPropsType = {
  title: string;
  isHot: boolean;
  commentList: IComment[] | undefined;
};

function CommentList(props: CommentListPropsType) {
  const comments = props.isHot
    ? take(props?.commentList, 15)
    : props?.commentList || [];
  return (
    <div className="comment-list-container">
      <div className="comment-list-title">
        <h3>{props.title}</h3>
      </div>
      <ul className="comment-list">
        {comments.map((comment: IComment) => {
          return (
            <div className="comment-item" key={comment.commentId}>
              <div
                className="avatarUrl"
                style={{ backgroundImage: `url(${comment.user.avatarUrl})` }}
              ></div>
              <div className="content-field">
                <div className="name-content">
                  <div className="name">{comment.user.nickname}</div>:
                  <div className="comment-content">{comment.content}</div>
                </div>
                <div className="meta-data">
                  {/* <div className="date">{getYearMonthDay(comment.time)}</div> */}
                  <div className="date">{fromNow(comment.time)}</div>
                  <div className="thumb-replay">
                    <div className="thumb-icon"></div>
                    <div className="thumb-count">({comment.likedCount})</div>
                    <div className="split">|</div>
                    <div className="replay">回复</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default CommentList;

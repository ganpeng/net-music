import React, { useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import {
  CommentList,
  Pagination,
  SectionTitle,
  VideoPlayer,
} from "../../components";
import { COMMENT_PAGE_LIST } from "../../constants";
import { getMvComments, getMvDetailById, getMvUrlById } from "../../service";
import "./index.scss";

function MvDetail() {
  const [offset, setOffset] = useState(1);
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { data: mvUrlData } = useQuery(["mv_url", id], () => getMvUrlById(id));

  const { data: mvDetailData } = useQuery(["mv_detail", id], () =>
    getMvDetailById(id)
  );

  // 评论相关
  // 全部评论，时间排序
  const { data: commentsData } = useQuery(["mv_comments", id, offset], () =>
    getMvComments({
      id,
      offset: (offset - 1) * COMMENT_PAGE_LIST,
      limit: COMMENT_PAGE_LIST,
    })
  );
  const newCommentPageChangeHandler = (offset: number) => {
    setOffset(offset);
  };
  console.log(mvDetailData);

  return (
    <div className="mv-detail-container content-w content-h">
      <div className="left-field">
        <VideoPlayer url={mvUrlData?.data.url || ""}></VideoPlayer>
        {(commentsData?.hotComments || []).length > 0 && (
          <CommentList
            title="精彩评论"
            isHot={true}
            commentList={commentsData?.hotComments || []}
          ></CommentList>
        )}
        <CommentList
          title={`最新评论(${commentsData?.total || 0})`}
          isHot={false}
          commentList={commentsData?.comments || []}
        ></CommentList>
        <Pagination
          total={commentsData?.total || 0}
          pageLimit={COMMENT_PAGE_LIST}
          offset={(offset - 1) * COMMENT_PAGE_LIST}
          pageChangeHandler={newCommentPageChangeHandler}
        ></Pagination>
      </div>
      <div className="right-field">
        <SectionTitle title="MV简介"></SectionTitle>
        <SectionTitle title="相关推荐"></SectionTitle>
      </div>
    </div>
  );
}

export default MvDetail;

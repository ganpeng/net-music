import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import {
  CommentList,
  Pagination,
  SectionTitle,
  VideoPlayer,
} from "../../components";
import { COMMENT_PAGE_LIST } from "../../constants";
import { getMvComments, getMvDetailById, getMvUrlById } from "../../service";
import { linkToArtistDetailPage } from "../../utils/link";
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
    <div className="mv-detail-container left-right-layout content-w content-h">
      <div className="left-field">
        <div className="mv-title">
          <span className="mv-icon"></span>
          <div className="title">{mvDetailData?.data.name}</div>
          <div
            className="songers"
            title={mvDetailData?.data.artists
              .map((ar: any) => ar.name)
              .join("/")}
          >
            {mvDetailData?.data.artists.map((ar: any, _index: number) => (
              <span key={`${ar}_${_index}`}>
                <Link to={linkToArtistDetailPage(ar.id)}>{ar.name}</Link>
              </span>
            ))}
          </div>
        </div>
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
        <div className="mv-desc">
          <div className="publish-time">
            发布时间：{mvDetailData?.data.publishTime}
          </div>
          <div className="playcount">
            播放次数：{mvDetailData?.data.playCount}
          </div>
          <div className="desc">{mvDetailData?.data.desc}</div>
        </div>
        <SectionTitle title="相关推荐"></SectionTitle>
      </div>
    </div>
  );
}

export default MvDetail;

import React, { useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import {
  CommentList,
  DownloadClientTips,
  Pagination,
  SectionTitle,
  UserAvatarList,
} from "../../components";
import { COMMENT_PAGE_LIST } from "../../constants";
import { PlaylistBaseinfo, PlaylistSongs } from "../../container";
import { getCommentList, getPlaylistDetail } from "../../service";
import "./index.scss";

function PlaylistDetail() {
  const [pageNo, setPageNo] = useState(1);
  const [cursor, setCursor] = useState<string | undefined>(undefined);
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { data: playDetail } = useQuery(["playlist_detail", id], () =>
    getPlaylistDetail(id)
  );

  // 评论相关
  // 热门评论
  const { data: hotCommentData } = useQuery(["host_comment_list", id], () =>
    getCommentList({ id, type: 2 })
  );
  // 全部评论，时间排序
  const { data: newCommentData } = useQuery(
    ["new_comment_list", id, pageNo],
    () =>
      getCommentList({
        id,
        type: 2,
        sortType: 3,
        pageNo,
        pageSize: COMMENT_PAGE_LIST,
        cursor,
      })
  );
  const newCommentPageChangeHandler = (pageNo: number) => {
    setCursor(newCommentData?.data.cursor);
    setPageNo(pageNo);
  };
  console.log(playDetail);

  return (
    <div className="playlist-detail-container content-w">
      <div className="left-field">
        <PlaylistBaseinfo
          playlistBaseinfo={playDetail?.playlist}
        ></PlaylistBaseinfo>
        <PlaylistSongs topItem={playDetail?.playlist}></PlaylistSongs>
        <DownloadClientTips></DownloadClientTips>
        <CommentList
          title="精彩评论"
          isHot={true}
          commentList={hotCommentData?.data?.comments || []}
        ></CommentList>
        <CommentList
          title={`最新评论(${playDetail?.playlist?.commentCount || 0})`}
          isHot={false}
          commentList={newCommentData?.data?.comments || []}
        ></CommentList>
        <Pagination
          total={newCommentData?.data?.totalCount || 0}
          pageLimit={COMMENT_PAGE_LIST}
          offset={(pageNo - 1) * COMMENT_PAGE_LIST}
          pageChangeHandler={newCommentPageChangeHandler}
        ></Pagination>
      </div>
      <div className="right-field">
        <SectionTitle title="喜欢这个歌单的人"></SectionTitle>
        <UserAvatarList
          subscribers={playDetail?.playlist.subscribers}
        ></UserAvatarList>
        <SectionTitle title="热门歌单"></SectionTitle>
      </div>
    </div>
  );
}

export default PlaylistDetail;

import React, { useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import {
  ClientDownloadWiki,
  CommentList,
  Pagination,
  SectionTitle,
  SimiMusic,
  SimiPlaylist,
  SongDetailBaseinfo,
} from "../../components";
import { COMMENT_PAGE_LIST } from "../../constants";
import { useMusicLyric } from "../../hooks/useMusicLyric";
import { getMusicCommentsById, getSongDetailByIds } from "../../service";
import "./index.scss";

function SongDetail() {
  const [offset, setOffset] = useState(1);
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { data: songDetailData } = useQuery(["song_detail", id], () =>
    getSongDetailByIds([id])
  );

  // 评论相关
  // 全部评论，时间排序
  const { data: commentsData } = useQuery(["album_comments", id, offset], () =>
    getMusicCommentsById({
      id,
      offset: (offset - 1) * COMMENT_PAGE_LIST,
      limit: COMMENT_PAGE_LIST,
    })
  );

  const { lyricText, lyricData } = useMusicLyric(id);

  const newCommentPageChangeHandler = (offset: number) => {
    setOffset(offset);
  };

  return (
    <div className="song-detail-container content-w">
      <div className="left-field">
        <SongDetailBaseinfo
          song={songDetailData?.songs[0]}
          lyricText={lyricText}
          commentsCount={commentsData?.total}
          transUser={lyricData?.transUser}
          lyricUser={lyricData?.lyricUser}
        ></SongDetailBaseinfo>
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
        <SimiPlaylist></SimiPlaylist>
        <SectionTitle title="相似歌曲" moreLink=""></SectionTitle>
        <SimiMusic></SimiMusic>
        <ClientDownloadWiki></ClientDownloadWiki>
      </div>
    </div>
  );
}

export default SongDetail;

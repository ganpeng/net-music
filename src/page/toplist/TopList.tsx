import { get, partition } from "lodash";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import {
  CommentList,
  Pagination,
  Songlist,
  ToplistItem,
  ToplistItemDetail,
} from "../../components";
import { COMMENT_PAGE_LIST } from "../../constants";
import { IBoard } from "../../constants/type";
import { getBoardList, getCommentList, getPlaylistDetail } from "../../service";
import "./index.scss";

function TopList() {
  const [pageNo, setPageNo] = useState(1);
  const [cursor, setCursor] = useState<string | undefined>(undefined);
  const [searchParams] = useSearchParams();
  const { data } = useQuery("toplist", getBoardList);
  const [netMusicTopList, globalTopList] = partition(
    data?.list,
    (item: IBoard) => item.ToplistType
  );

  const id = Number(searchParams.get("id"));
  const activeId = id === 0 ? get(netMusicTopList, `0.id`) : id;
  const { data: playDetail } = useQuery(["playlist_detail", activeId], () =>
    getPlaylistDetail(activeId)
  );

  // 评论相关
  // 热门评论
  const { data: hotCommentData } = useQuery(
    ["host_comment_list", activeId],
    () => getCommentList({ id: activeId, type: 2 })
  );
  // 全部评论，时间排序
  const { data: newCommentData } = useQuery(
    ["new_comment_list", activeId, pageNo],
    () =>
      getCommentList({
        id: activeId,
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

  return (
    <div className="toplist-container content-w">
      <div className="left-side-field">
        <div className="net-mmusic-toplist-container">
          <h2 className="title">云音乐特色榜</h2>
          <div className="toplist">
            {netMusicTopList.map((item: IBoard) => {
              return (
                <ToplistItem
                  item={item}
                  key={item.id}
                  activeId={activeId}
                ></ToplistItem>
              );
            })}
          </div>
        </div>
        <div className="global-toplist-container">
          <h2 className="title">全球媒体榜</h2>
          <div className="toplist">
            {globalTopList.map((item: IBoard) => {
              return (
                <ToplistItem
                  item={item}
                  key={item.id}
                  activeId={activeId}
                ></ToplistItem>
              );
            })}
          </div>
        </div>
      </div>
      <div className="right-content-field">
        <ToplistItemDetail topItem={playDetail?.playlist}></ToplistItemDetail>
        <Songlist topItem={playDetail?.playlist}></Songlist>
        <CommentList
          title="精彩评论"
          isHot={true}
          commentList={hotCommentData?.data.comments || []}
        ></CommentList>
        <CommentList
          title={`最新评论(${playDetail?.playlist.commentCount || 0})`}
          isHot={false}
          commentList={newCommentData?.data.comments || []}
        ></CommentList>
        <Pagination
          total={newCommentData?.data.totalCount || 0}
          pageLimit={COMMENT_PAGE_LIST}
          offset={(pageNo - 1) * COMMENT_PAGE_LIST}
          pageChangeHandler={newCommentPageChangeHandler}
        ></Pagination>
      </div>
    </div>
  );
}

export default TopList;

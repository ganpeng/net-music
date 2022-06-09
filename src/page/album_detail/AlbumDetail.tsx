import { take } from "lodash";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import {
  AlbumBaseinfo,
  AlbumSongs,
  CommentList,
  Pagination,
  SectionTitle,
} from "../../components";
import { COMMENT_PAGE_LIST } from "../../constants";
import {
  getAlbumCommentsById,
  getAlbumDetailById,
  getArtistAlbumList,
} from "../../service";
import { dateFormatter } from "../../utils";
import { linkToAlbumDetailPage, linkToArtistAlbumPage } from "../../utils/link";
import "./index.scss";

function AlbumDetail() {
  const [offset, setOffset] = useState(1);
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { data: albumDetail } = useQuery(["album_detail", id], () =>
    getAlbumDetailById(id)
  );

  // 评论相关
  // 全部评论，时间排序
  const { data: commentsData } = useQuery(["album_comments", id, offset], () =>
    getAlbumCommentsById({
      id,
      offset: (offset - 1) * COMMENT_PAGE_LIST,
      limit: COMMENT_PAGE_LIST,
    })
  );
  const artistId = albumDetail?.album.artist.id;
  const { data: artistListData } = useQuery(
    [`artist_albums`, artistId],
    () => {
      const searchParams = {
        id: artistId,
        limit: 100,
      };
      return getArtistAlbumList(searchParams);
    },
    {
      enabled: !!artistId,
    }
  );

  const newCommentPageChangeHandler = (offset: number) => {
    setOffset(offset);
  };

  console.log(albumDetail);

  return (
    <div className="album-detail-container content-w">
      <div className="left-field">
        <AlbumBaseinfo album={albumDetail?.album}></AlbumBaseinfo>
        <AlbumSongs
          count={albumDetail?.album.size || 0}
          songs={albumDetail?.songs || []}
        ></AlbumSongs>
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
        {(artistListData?.hotAlbums || []).length > 0 && (
          <>
            <SectionTitle
              title="Ta的其他热门专辑"
              moreLink={linkToArtistAlbumPage(artistId)}
            ></SectionTitle>
            <ul className="other-artist-album-list">
              {take(artistListData?.hotAlbums, 5).map((album) => {
                return (
                  <li className="album-item" key={album.id}>
                    <Link to={linkToArtistAlbumPage(album.artist.id)}>
                      <img src={album.blurPicUrl} alt="" />
                    </Link>
                    <div className="name-date">
                      <div className="name text-decoration" title={album.name}>
                        <Link to={linkToAlbumDetailPage(album.id)}>
                          {album.name}
                        </Link>
                      </div>
                      <div className="date">
                        {album?.publishTime
                          ? dateFormatter(album?.publishTime, "YYYY-MM-DD")
                          : ""}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default AlbumDetail;

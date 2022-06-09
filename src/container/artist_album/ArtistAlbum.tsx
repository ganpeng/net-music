import React from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { NoData, Pagination } from "../../components";
import { ARTIST_ALBUM_LIST_LIMIT } from "../../constants";
import { useGetAlbumSongsUrl } from "../../hooks/useGetAlbumSongsUrl";
import { getArtistAlbumList } from "../../service";
import { dateFormatter, getParamsString } from "../../utils";
import { linkToAlbumDetailPage } from "../../utils/link";
import "./index.scss";

function ArtistAlbum() {
  const [searchParams] = useSearchParams();
  const navigator = useNavigate();
  const id = Number(searchParams.get("id"));
  const offset = Number(searchParams.get("offset")) || 0;
  const { data: artistAlbumlistData, isFetching } = useQuery(
    ["artist_albumlist", id, offset],
    () => {
      const params = {
        id,
        limit: ARTIST_ALBUM_LIST_LIMIT,
        offset,
      };
      return getArtistAlbumList(params);
    }
  );

  const { getSongsUrls } = useGetAlbumSongsUrl();

  const albumlistPageChangeHandler = (pageNo: number) => {
    const params = {
      id,
      offset: (pageNo - 1) * ARTIST_ALBUM_LIST_LIMIT,
      limit: ARTIST_ALBUM_LIST_LIMIT,
    };
    if (isFetching) {
      return false;
    } else {
      navigator(`/artist/album?${getParamsString(params)}`);
    }
  };

  return (
    <div className="artist-album-container">
      {(artistAlbumlistData?.hotAlbums || []).length > 0 ? (
        <ul className="artist-album-list">
          {artistAlbumlistData?.hotAlbums.map((album) => {
            return (
              <div className="artist-album-item" key={album.id}>
                <div className="img-container">
                  <div
                    className="pic"
                    style={{ backgroundImage: `url(${album.picUrl})` }}
                  ></div>
                  <div className="blur-pic">
                    <Link
                      className="block-a"
                      to={linkToAlbumDetailPage(album.id)}
                    ></Link>
                  </div>
                  <div
                    className="play-btn"
                    onClick={() => getSongsUrls(album.id)}
                  ></div>
                </div>
                <p className="album-name">
                  <Link to={linkToAlbumDetailPage(album.id)}>{album.name}</Link>
                </p>
                <p className="artist-album-date">
                  {dateFormatter(album.publishTime, "YYYY-MM")}
                </p>
              </div>
            );
          })}
        </ul>
      ) : (
        <NoData text="暂无专辑"></NoData>
      )}
      <Pagination
        total={artistAlbumlistData?.artist?.albumSize || 0}
        pageLimit={ARTIST_ALBUM_LIST_LIMIT}
        offset={offset}
        pageChangeHandler={albumlistPageChangeHandler}
      ></Pagination>
    </div>
  );
}

export default ArtistAlbum;

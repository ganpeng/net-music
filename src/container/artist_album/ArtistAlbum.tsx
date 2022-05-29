import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Pagination } from "../../components";
import { ARTIST_ALBUM_LIST_LIMIT } from "../../constants";
import { getArtistAlbumList } from "../../service";
import { dateFormatter, getParamsString } from "../../utils";
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
  console.log(artistAlbumlistData);

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
      <ul className="artist-album-list">
        {artistAlbumlistData?.hotAlbums.map((album) => {
          return (
            <div className="artist-album-item" key={album.id}>
              <div className="img-container">
                <div
                  className="pic"
                  style={{ backgroundImage: `url(${album.picUrl})` }}
                ></div>
                <div className="blur-pic"></div>
                <div className="play-btn"></div>
              </div>
              <p className="album-name">{album.name}</p>
              <p className="artist-album-date">
                {dateFormatter(album.publishTime, "YYYY-MM")}
              </p>
            </div>
          );
        })}
      </ul>
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

import { take } from "lodash";
import React from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Pagination, SectionHeader } from "../../components";
import { ALBUM_AREA_LIST, PAGE_LIMIT } from "../../constants";
import { useGetAlbumSongsUrl } from "../../hooks/useGetAlbumSongsUrl";
import { getNewAlbumList, getNewestAlbum } from "../../service";
import { getParamsString } from "../../utils";
import {
  linkToAlbumDetailPage,
  linkToArtistDetailPage,
} from "../../utils/link";
import "./index.scss";

function AlbumList() {
  const [searchParams] = useSearchParams();
  const navigator = useNavigate();
  const offset = Number(searchParams.get("offset")) || 0;
  const area = searchParams.get("area") || "ALL";
  const { data: newestAlbumlist } = useQuery("newest_album", getNewestAlbum);
  const { data: albumlistData, isFetching } = useQuery(
    ["albumlist", offset, area],
    () => {
      const params = {
        limit: PAGE_LIMIT,
        offset,
        area,
      };
      return getNewAlbumList(params);
    }
  );

  const { getSongsUrls } = useGetAlbumSongsUrl();

  const albumlistPageChangeHandler = (pageNo: number) => {
    const params = {
      offset: (pageNo - 1) * PAGE_LIMIT,
      limit: PAGE_LIMIT,
      area,
    };
    if (isFetching) {
      return false;
    } else {
      navigator(`/albumlist?${getParamsString(params)}`);
    }
  };

  const albumAreaChangeHandler = (area: string) => {
    const params = {
      // offset: 0,
      limit: PAGE_LIMIT,
      area,
    };
    if (isFetching) {
      return false;
    } else {
      navigator(`/albumlist?${getParamsString(params)}`);
    }
  };

  return (
    <div className="album-list-container content-w">
      <div className="newest-album-list-container">
        <SectionHeader
          title="热门新碟"
          moreLink=""
          hasTitleIcon={false}
        ></SectionHeader>
        <ul className="album-list">
          {take(newestAlbumlist?.albums, 10).map((album, index) => {
            return (
              <div className="album-item" key={album.id}>
                <div className="img-container">
                  <div
                    className="pic"
                    style={{ backgroundImage: `url(${album.picUrl})` }}
                  >
                    <div className="blur-pic">
                      <Link
                        className="block-a"
                        to={linkToAlbumDetailPage(album.id)}
                      ></Link>
                    </div>
                  </div>
                  <div
                    className="play-btn"
                    onClick={() => getSongsUrls(album.id)}
                  ></div>
                </div>
                <p className="album-name">
                  <Link to={linkToAlbumDetailPage(album.id)}>{album.name}</Link>
                </p>
                <p className="artist-name">
                  <Link to={linkToArtistDetailPage(album.artist.id)}>
                    {album.artist.name}
                  </Link>
                </p>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="total-album-list-container">
        <SectionHeader title="全部新碟" moreLink="" hasTitleIcon={false}>
          <div className="album-area-list">
            {ALBUM_AREA_LIST.map((item) => {
              return (
                <span
                  className={`album-area-item ${
                    item.area === area ? "active" : ""
                  }`}
                  key={item.title}
                  onClick={() => albumAreaChangeHandler(item.area)}
                >
                  {item.title}
                </span>
              );
            })}
          </div>
        </SectionHeader>
        <ul className="album-list">
          {albumlistData?.albums.map((album) => {
            return (
              <div className="album-item" key={album.id}>
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
                <p className="artist-name">
                  <Link to={linkToArtistDetailPage(album.artist.id)}>
                    {album.artist.name}
                  </Link>
                </p>
              </div>
            );
          })}
        </ul>
        <Pagination
          total={albumlistData?.total || 0}
          pageLimit={PAGE_LIMIT}
          offset={offset}
          pageChangeHandler={albumlistPageChangeHandler}
        ></Pagination>
      </div>
    </div>
  );
}

export default AlbumList;

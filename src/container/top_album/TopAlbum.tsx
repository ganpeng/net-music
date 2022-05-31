import React, { useState } from "react";
import { useQuery } from "react-query";
import { take, chunk } from "lodash";
import { SectionHeader } from "../../components";
import { nextArrow, prevArrow } from "../../constants/svg";
import { getNewestAlbum } from "../../service";
import "./index.scss";
import { Link } from "react-router-dom";
import {
  linkToAlbumDetailPage,
  linkToArtistDetailPage,
} from "../../utils/link";

function TopAlbum() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data } = useQuery(["newest_album"], getNewestAlbum);
  const chunkedAlbums = chunk(take(data?.albums, 10), 5);

  const chunkedAlbumsChangeHandler = (newActiveIndex: number) => {
    if (newActiveIndex < 0) {
      setActiveIndex(chunkedAlbums.length - 1);
    } else if (newActiveIndex > chunkedAlbums.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(newActiveIndex);
    }
  };

  return (
    <div className="top-album-container">
      <SectionHeader title="新碟上架" moreLink="/albumlist"></SectionHeader>
      <div className="top-album-content">
        <ul className="album-list">
          {chunkedAlbums.map((albumChunk, index) => {
            return (
              <li
                className="album-chunk"
                key={index}
                style={{
                  transform: `translateX(${(index - activeIndex) * 100}%)`,
                }}
              >
                <div className="album-item-list">
                  {albumChunk.map((album) => {
                    return (
                      <div className="album-item" key={album.id}>
                        <div className="img-container">
                          <div
                            className="pic"
                            style={{ backgroundImage: `url(${album.picUrl})` }}
                          ></div>
                          <div className="blur-pic">
                            <Link to={linkToAlbumDetailPage(album.id)}></Link>
                          </div>
                          <div className="play-btn"></div>
                        </div>
                        <p className="album-name text-decoration">
                          <Link to={linkToAlbumDetailPage(album.id)}>
                            {album.name}
                          </Link>
                        </p>
                        <div
                          className="songers"
                          title={album.artists
                            .map((artist: any) => artist.name)
                            .join("/")}
                        >
                          {album.artists.map((artist: any, _index: number) => (
                            <span key={`${artist.name}_${_index}`}>
                              <Link to={linkToArtistDetailPage(artist.id)}>
                                {artist.name}
                              </Link>
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
        <img
          className="prev-btn"
          src={prevArrow}
          width="18"
          height="18"
          alt=""
          onClick={() => chunkedAlbumsChangeHandler(activeIndex - 1)}
        />
        <img
          className="next-btn"
          src={nextArrow}
          width="18"
          height="18"
          alt=""
          onClick={() => chunkedAlbumsChangeHandler(activeIndex + 1)}
        />
      </div>
    </div>
  );
}

export default TopAlbum;

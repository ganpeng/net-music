import { take } from "lodash";
import React from "react";
import { useQuery } from "react-query";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useLocation } from "react-use";
import { SectionTitle } from "../../components";
import { getArtistDetailById, getArtistList } from "../../service";
import { linkToArtistDetailPage, linkToUserHomePage } from "../../utils/link";
import "./index.scss";

const linklist = [
  {
    title: "热门作品",
    path: "/artist",
  },
  {
    title: "所有专辑",
    path: "/artist/album",
  },
  {
    title: "相关MV",
    path: "/artist/mv",
  },
  {
    title: "艺人介绍",
    path: "/artist/desc",
  },
];

function ArtistDetail() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const id = Number(searchParams.get("id"));
  const { data: artistDetailData } = useQuery(["artist_detail", id], () =>
    getArtistDetailById(id)
  );

  const { data: artistListData } = useQuery(["artistlist"], () => {
    return getArtistList({});
  });

  return (
    <div className="artist-detail-container content-w content-h">
      <div className="left-field">
        <p className="artist-name">{artistDetailData?.data.artist.name}</p>
        <div className="cover-image-container">
          <div
            className="cover-image"
            style={{
              backgroundImage: `url(${artistDetailData?.data.artist.cover})`,
            }}
          ></div>
          <div className="mask"></div>
          <div className="btn-field">
            {artistDetailData?.data.user?.userId && (
              <div className="home-btn">
                <Link
                  to={linkToUserHomePage(artistDetailData?.data.user.userId)}
                ></Link>
              </div>
            )}
            <div className="save-btn"></div>
          </div>
        </div>
        <ul className="link-list">
          {linklist.map((link, index) => {
            return (
              <li
                className={`link-item ${
                  link.path === location.pathname ? "active" : ""
                }`}
                key={index}
              >
                <Link to={`${link.path}?id=${id}`}>
                  <span> {link.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="artist-detail-content">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="right-field">
        <SectionTitle title="热门歌手"></SectionTitle>
        <ul className="artist-list">
          {take(artistListData?.artists, 6).map((artist) => {
            return (
              <li className="artist-item" key={artist.id}>
                <div
                  className="img"
                  style={{ backgroundImage: `url(${artist.picUrl})` }}
                >
                  <Link to={linkToArtistDetailPage(artist.id)}></Link>
                </div>
                <p className="name text-decoration" title={artist.name}>
                  <Link to={linkToArtistDetailPage(artist.id)}>
                    {artist.name}
                  </Link>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ArtistDetail;

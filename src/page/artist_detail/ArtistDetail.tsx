import React from "react";
import { useQuery } from "react-query";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useLocation } from "react-use";
import { getArtistDetailById } from "../../service";
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
  return (
    <div className="artist-detail-container content-w">
      <div className="left-field">
        <p className="artist-name">{artistDetailData?.data.artist.name}</p>
        <div className="cover-image-container">
          <div
            className="cover-image"
            style={{
              backgroundImage: `url(${artistDetailData?.data.artist.cover})`,
            }}
          ></div>
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
        <Outlet></Outlet>
      </div>
      <div className="right-field"></div>
    </div>
  );
}

export default ArtistDetail;

import { get, reject, take } from "lodash";
import React from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { SectionHeader } from "../../components";
import {
  ARTIST_CATEGORY_LIST,
  ARTIST_LIST_LIMIT,
  ARTIST_NAME_SEARCH_LIST,
} from "../../constants";
import { getArtistList } from "../../service";
import { getParamsString } from "../../utils";
import { linkToArtistDetailPage } from "../../utils/link";
import "./index.scss";

function ArtistList() {
  const [searchParams] = useSearchParams();
  const navigator = useNavigate();
  const type = Number(searchParams.get("type"));
  const area = Number(searchParams.get("area"));
  const initial = searchParams.get("initial") || "-1";

  const changeArtistCategory = (type: number, area: number | undefined) => {
    let searchParams = {
      type: type === 0 ? undefined : type,
      area: area === 0 ? undefined : area,
      initial: "-1",
      limit: ARTIST_LIST_LIMIT,
    };
    if (area === 0) {
      navigator("/artistlist");
    } else {
      navigator(`/artistlist?${getParamsString(searchParams)}`);
    }
  };

  const getSectionHeaderTitle = () => {
    let title = "";
    for (let i = 0; i <= ARTIST_CATEGORY_LIST.length; i++) {
      let catChildren = get(ARTIST_CATEGORY_LIST[i], "children") || [];
      for (let j = 0; j <= catChildren.length; j++) {
        const subCat = get(catChildren, j);
        if (get(subCat, "type") === type && get(subCat, "area") === area) {
          title = subCat.title;
          break;
        }
      }
    }
    return title;
  };

  const artistNameSearchChangeHandler = (item: string) => {
    let searchParams = {
      type: type === 0 ? undefined : type,
      area: area === 0 ? undefined : area,
      initial,
      limit: ARTIST_LIST_LIMIT,
    };
    if (item === "热门") {
      searchParams.initial = "-1";
    } else if (item === "其他") {
      searchParams.initial = "0";
    } else {
      searchParams.initial = item.toLocaleLowerCase();
    }
    navigator(`/artistlist?${getParamsString(searchParams)}`);
  };

  const artistNameSearchActive = (item: string) => {
    if (item === "热门" && initial === "-1") {
      return true;
    }

    if (item === "其他" && initial === "0") {
      return true;
    }

    if (item.toLocaleLowerCase() === initial) {
      return true;
    }
    return false;
  };

  const { data: artistListData } = useQuery(
    ["artistlist", type, area, initial],
    () => {
      const searchParams = {
        type: type === 0 ? undefined : type,
        area: area === 0 ? undefined : area,
        initial,
        limit: ARTIST_LIST_LIMIT,
      };
      return getArtistList(searchParams);
    }
  );

  return (
    <div className="artist-list-container content-w">
      <div className="left-side-field">
        <div className="artist-category-list">
          {ARTIST_CATEGORY_LIST.map((cat) => {
            return (
              <div className="artist-cat-item" key={cat.title}>
                <div className="artist-cat-title">{cat.title}</div>
                <div className="sub-cat-list">
                  {cat.children.map((subCat) => {
                    return (
                      <div
                        className={`sub-cat-item ${
                          subCat.type === type && subCat.area === area
                            ? "active"
                            : ""
                        }`}
                        key={subCat.title}
                        onClick={() =>
                          changeArtistCategory(subCat.type, subCat.area)
                        }
                      >
                        {subCat.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right-content-field">
        <SectionHeader
          title={getSectionHeaderTitle() || ""}
          moreLink=""
          hasTitleIcon={false}
        ></SectionHeader>
        <div className="artist-name-search-list">
          {ARTIST_NAME_SEARCH_LIST.map((item) => {
            return (
              <div
                className={`artist-name-search-item ${
                  artistNameSearchActive(item) ? "active" : ""
                }`}
                key={item}
                onClick={() => artistNameSearchChangeHandler(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="artist-list">
          {take(artistListData?.artists, 10).map((artist) => {
            return (
              <div className="artist-item" key={artist.id}>
                <div
                  className="img"
                  style={{ backgroundImage: `url(${artist.picUrl})` }}
                >
                  <Link to={linkToArtistDetailPage(artist.id)}></Link>
                </div>
                <div className="name-icon">
                  <div className="name" title={`${artist.name}的音乐`}>
                    <Link to={linkToArtistDetailPage(artist.id)}>
                      {artist.name}
                    </Link>
                  </div>
                  {artist.accountId && <div className="icon"></div>}
                </div>
              </div>
            );
          })}
        </div>
        <div className="no-image-artist-list">
          {reject(artistListData?.artists, (artist, index) => index <= 9).map(
            (artist) => {
              return (
                <div className="no-image-artist-item" key={artist.id}>
                  <div className="name-icon">
                    <div className="name" title={`${artist.name}的音乐`}>
                      <Link to={linkToArtistDetailPage(artist.id)}>
                        {artist.name}
                      </Link>
                    </div>
                    {artist.accountId && <div className="icon"></div>}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default ArtistList;

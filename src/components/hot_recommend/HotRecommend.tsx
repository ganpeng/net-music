import React, { useContext } from "react";
import { useQuery } from "react-query";
import take from "lodash/take";
import {
  getPersonalizedList,
  getPlaylistTrackAllById,
  getSongUrlById,
} from "../../service";
import "./index.scss";
import { numberFormatter } from "../../utils";
import HotRecommendContentLoader from "../my_content_loader/HotRecommendContentLoader";
import { get, set } from "lodash";
import { ITrack } from "../../constants/type";
import { TracksContext } from "../../context";
import { useNavigate } from "react-router-dom";

function HotRecommend() {
  const navigator = useNavigate();
  const tracksContext = useContext(TracksContext);
  const { data, isFetching } = useQuery("hot-recomment", getPersonalizedList);
  const getSongsUrls = async (id: number) => {
    try {
      tracksContext?.setTracks([]);
      const tracklistRes = await getPlaylistTrackAllById(id);
      if (tracklistRes.code === 200) {
        const tracklist = tracklistRes?.songs || [];
        const songResList = await Promise.all(
          tracklist.map((track: ITrack) => getSongUrlById(track.id))
        );
        const songlist = songResList.map((res) => get(res, `data.0`));
        const resList = tracklist.map((track: any, index: number) => {
          const song = get(songlist, `${index}`);
          set(track, "song", song);
          return track;
        });

        const res = resList.filter((item: any) => get(item, `song`));

        tracksContext?.setTracks(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return isFetching ? (
    <HotRecommendContentLoader />
  ) : (
    <div className="hot-recommnend-container">
      {take(data?.result, 8).map((hotRecommend) => {
        return (
          <div className="hot-recommend-item" key={hotRecommend.id}>
            <div className="image-field">
              <div
                className="img"
                style={{ backgroundImage: `url(${hotRecommend.picUrl})` }}
              ></div>
              <div className="meta-info">
                <div className="view-count">
                  <div className="view-icon"></div>
                  <span className="count">
                    {numberFormatter(hotRecommend.playCount)}
                  </span>
                </div>
                <div className="play-btn-container">
                  <div
                    className="play-btn"
                    onClick={() => getSongsUrls(hotRecommend.id)}
                  ></div>
                </div>
              </div>
            </div>
            <p
              className="name text-decoration"
              onClick={() =>
                navigator(`/playlist-detail?id=${hotRecommend.id}`)
              }
            >
              {hotRecommend.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default HotRecommend;

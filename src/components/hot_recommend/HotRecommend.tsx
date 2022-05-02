import React, { useMemo, useState } from "react";
import { useQueries, useQuery } from "react-query";
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
// import { TracksContext } from "../../context";

function HotRecommend() {
  // const tracksContext = useContext(TracksContext);
  const [playlistId, setPlaylistId] = useState<number | undefined>(undefined);
  const { data, isFetching } = useQuery("hot-recomment", getPersonalizedList);
  const { data: playlistTrackAllData } = useQuery(
    ["playlist_track_all", playlistId],
    () => getPlaylistTrackAllById(playlistId),
    {
      enabled: !!playlistId,
    }
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tracklist = playlistTrackAllData?.songs || [];
  const songResList = useQueries(
    useMemo(() => {
      return tracklist.map((track: any) => {
        return {
          queryKey: ["song_url", track.id],
          queryFn: () => getSongUrlById(track.id),
        };
      });
    }, [tracklist])
  );

  const songlist = songResList.map((res) => get(res, `data.data.0`));

  const resList = tracklist.map((track: any, index: number) => {
    const song = get(songlist, `${index}`);
    set(track, "song", song);
    return track;
  });

  console.log(resList);

  //  resList  是最终获取到的数据，要设置到context上
  // tracksContext?.setTracks(resList);

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
                    onClick={() => setPlaylistId(hotRecommend.id)}
                  ></div>
                </div>
              </div>
            </div>
            <p className="name">{hotRecommend.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HotRecommend;

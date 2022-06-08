import { get, set } from "lodash";
import { useContext } from "react";
import { ITrack } from "../constants/type";
import { TracksContext } from "../context";
import { getPlaylistDetail, getSongUrlById } from "../service";

export function useGetToplistSongsUrl() {
  const tracksContext = useContext(TracksContext);
  const getSongsUrls = async (id: number | undefined) => {
    try {
      if (!id) return false;
      tracksContext?.setTracks([]);
      const playlistDetailRes = await getPlaylistDetail(id);
      if (playlistDetailRes.code === 200) {
        const tracklist = playlistDetailRes?.playlist.tracks || [];
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

  return { getSongsUrls };
}

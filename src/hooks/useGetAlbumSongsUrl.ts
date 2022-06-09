import { get, set } from "lodash";
import { useContext } from "react";
import { IAlbumDetailResponse, ITrack } from "../constants/type";
import { TracksContext } from "../context";
import { getAlbumDetailById, getSongUrlById } from "../service";

export function useGetAlbumSongsUrl() {
  const tracksContext = useContext(TracksContext);
  const getSongsUrls = async (id: number | undefined) => {
    try {
      if (!id) return false;
      const alblumListRes: IAlbumDetailResponse = await getAlbumDetailById(id);
      if (alblumListRes.code === 200) {
        const tracklist = alblumListRes?.songs || [];
        const songResList = await Promise.all(
          tracklist.map((track: ITrack) => getSongUrlById(track.id))
        );
        const songlist = songResList.map((res) => get(res, `data.0`));
        const resList = tracklist.map((track: any, index: number) => {
          const song = get(songlist, `${index}`);
          set(track, "song", song);
          return track;
        });

        const res = resList.filter((track: ITrack) => get(track, "song.url"));

        tracksContext?.setTracks(res);
        tracksContext?.setCurrentTrack(get(res, `0`));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { getSongsUrls };
}

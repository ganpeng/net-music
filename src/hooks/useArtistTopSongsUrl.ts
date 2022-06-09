import { get, set } from "lodash";
import { useContext } from "react";
import { IArtistTopSongResponse, ITrack } from "../constants/type";
import { TracksContext } from "../context";
import { getArtistTopSongById, getSongUrlById } from "../service";

export function useArtistTopSongsUrl() {
  const tracksContext = useContext(TracksContext);
  const getSongsUrls = async (id: number | undefined) => {
    try {
      if (!id) return false;
      const artistTopSongRes: IArtistTopSongResponse =
        await getArtistTopSongById(id);
      if (artistTopSongRes.code === 200) {
        const tracklist = artistTopSongRes?.songs || [];
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

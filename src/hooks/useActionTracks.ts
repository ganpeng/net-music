import { chain, get, isUndefined, set } from "lodash";
import { useContext } from "react";
import { ISongDetailResponse, ITrack } from "../constants/type";
import { TracksContext } from "../context";
import { getSongUrlById } from "../service";

export function useActionTracks() {
  const tracksContext = useContext(TracksContext);

  const addSongToTracks = async (track: ITrack | undefined) => {
    if (isUndefined(track)) return false;

    const existedTrack = tracksContext?.tracks?.find(
      (_track: ITrack) => _track.id === track.id
    );
    if (existedTrack) {
      tracksContext?.setCurrentTrack(existedTrack);
      return false;
    }

    const songRes: ISongDetailResponse = await getSongUrlById(track.id);
    if (songRes.code === 200) {
      let _track = chain(track)
        .cloneDeep()
        .set("song", get(songRes, `data.0`))
        .value();
      if (get(_track, `song.url`)) {
        let _tracks: ITrack[] = chain(tracksContext?.tracks || [])
          .cloneDeep()
          .push(_track)
          .value();
        tracksContext?.setTracks(_tracks);
        tracksContext?.setCurrentTrack(_track);
      }
    }
  };
  const appendSongListToTracks = async (tracks: ITrack[] | undefined) => {
    if (!tracks) return false;
    const songResList = await Promise.all(
      tracks.map((track: ITrack) => getSongUrlById(track.id))
    );
    const songlist = songResList.map((res) => get(res, `data.0`));
    const resList = tracks.map((track: any, index: number) => {
      const song = get(songlist, `${index}`);
      set(track, "song", song);
      return track;
    });

    const res = resList
      .filter((track: ITrack) => get(track, "song.url"))
      .filter((track: ITrack) => {
        let index = (tracksContext?.tracks || []).findIndex(
          (_track: ITrack) => _track.id === track.id
        );
        return index < 0;
      });

    tracksContext?.setTracks(
      chain(tracksContext.tracks || [])
        .concat(res)
        .value()
    );
  };

  return {
    addSongToTracks,
    appendSongListToTracks,
  };
}

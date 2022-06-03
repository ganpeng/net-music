import { tail } from "lodash";
import { useQuery } from "react-query";
import { getMusicLyricById } from "../service";

export function useMusicLyric(id: number) {
  const { data: lyricData } = useQuery(["music_lyric", id], () =>
    getMusicLyricById(id)
  );
  const lyric = lyricData?.lrc?.lyric;
  const tlyric = lyricData?.tlyric?.lyric;
  const lyricArr = lyric
    ?.split("\n")
    .map((line: string) => line.replace(/(\[.*?\])/, ""));
  const tlyricArr = tail<string>(tlyric?.split("\n")).map(
    (line: string) => line.replace(/(\[.*?\])/, "") || ""
  );

  const lyricText = lyricArr
    ?.map((line: string, index: number) => {
      return `${line}\n${tlyricArr[index] ? `${tlyricArr[index]}\n` : ""}`;
    })
    .join("");

  // console.log(lyricData);

  return {
    lyricData,
    lyricText,
  };
}

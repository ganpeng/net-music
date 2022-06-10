import { chain, tail, trim } from "lodash";
import { useQuery } from "react-query";
import { getMusicLyricById } from "../service";

export function useMusicLyric(id: number) {
  const { data: lyricData } = useQuery(
    ["music_lyric", id],
    () => getMusicLyricById(id),
    {
      enabled: !!id,
    }
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

  const lyricArrWithTime = lyric
    ?.split("\n")
    .map((line: string) => line.replace(/\[(.*?)\]/, "$1-"))
    .map((line: string) => {
      let res = {
        time: chain(line).split("-").get(0).split(".").get(0).value(),
        text: chain(line).split("-").get(1).value(),
      };
      return res;
    })
    .filter((item) => item.time && trim(item.text));
  console.log(lyricArrWithTime);

  return {
    lyricData,
    lyricText,
    lyricArrWithTime,
  };
}

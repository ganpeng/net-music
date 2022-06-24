import { chain, get, tail, trim } from "lodash";
import { useQuery } from "react-query";
import { getMusicLyricById } from "../service";
import { time_to_sec } from "../utils";

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

  let lyricArrWithTime =
    lyric
      ?.split("\n")
      .map((line: string) => line.replace(/\[(.*?)\]/, "$1-"))
      .map((line: string) => {
        let res: {
          time: string;
          text: string;
          duration?: number;
          seconds?: number;
        } = {
          time: chain(line).split("-").get(0).split(".").get(0).value(),
          text: chain(line).split("-").get(1).value(),
        };
        return res;
      })
      .filter((item) => item.time && trim(item.text)) || [];

  lyricArrWithTime.map((item, index) => {
    if (get(lyricArrWithTime, `${index + 1}`)) {
      let currDur = time_to_sec(get(lyricArrWithTime, `${index}.time`));
      let nextDur = time_to_sec(get(lyricArrWithTime, `${index + 1}.time`));
      item.duration = nextDur - currDur;
    } else {
      item.duration = 100000;
    }
    item.seconds = time_to_sec(get(lyricArrWithTime, `${index}.time`));
    return item;
  });

  return {
    lyricData,
    lyricText,
    lyricArrWithTime,
  };
}

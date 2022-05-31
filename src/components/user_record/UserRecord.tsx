import { get, take } from "lodash";
import React, { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import { IRecordData } from "../../constants/type";
import { getUserRecordById } from "../../service";
import "./index.scss";

type UserRecordPropsType = {
  listenSongs: number;
  all?: boolean;
};

function UserRecord(props: UserRecordPropsType) {
  const [type, setType] = useState(0); // 0 所有时间 1 最近一周
  const [searchParmas] = useSearchParams();
  const id = Number(searchParmas.get("id"));
  const { data: userRecordData } = useQuery(["user_record", id, type], () =>
    getUserRecordById(id, type)
  );
  const recordList = useMemo(() => {
    return type === 0
      ? props.all
        ? get(userRecordData, "allData") || []
        : take<IRecordData>(get(userRecordData, "allData"), 10) || []
      : props.all
      ? get(userRecordData, "weekData") || []
      : take<IRecordData>(get(userRecordData, "weekData"), 10) || [];
  }, [props.all, type, userRecordData]);
  console.log(userRecordData);
  return (
    <div className="user-record-container">
      <div className="header-field">
        <div className="left-field">
          <span className="title">听歌排行</span>
          <span className="count">累计听歌{props.listenSongs}首</span>
          <span className="tips-icon">
            <div className="prompt-dialog">
              实际播放时间过短的歌曲将不纳入计算。
            </div>
          </span>
        </div>
        <div className="right-field">
          <ul className="type-list">
            <li
              onClick={() => setType(1)}
              className={`type-item ${type === 1 ? "active" : ""}`}
            >
              最近一周
            </li>
            <span className="split"></span>
            <li
              onClick={() => setType(0)}
              className={`type-item ${type === 0 ? "active" : ""}`}
            >
              所有时间
            </li>
          </ul>
        </div>
      </div>
      <div className="user-record-list-container">
        <ul className="user-record-list">
          {recordList.map((record: IRecordData, index: number) => {
            return (
              <li className="user-record-item" key={index}>
                <div className="left-field">
                  <div className="index">{index + 1}.</div>
                  <div className="play-btn"></div>
                  <div className="song-name">{record.song.name}</div>
                  <div
                    className="songers"
                    title={record.song.ar.map((ar: any) => ar.name).join("/")}
                  >
                    -&nbsp;
                    {record.song.ar.map((ar: any, _index: number) => (
                      <span key={`${ar}_${_index}`}>
                        <Link to={`/artist?id=${ar.id}`}>{ar.name}</Link>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="top-field">
                  <div
                    className="top-score"
                    style={{ width: `${record.score}%` }}
                  ></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default UserRecord;

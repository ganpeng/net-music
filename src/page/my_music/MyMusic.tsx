import React from "react";
import { MyMusicNoAuth } from "../../components";
import { MyMusicAuthed } from "../../container";
import useIsAuthed from "../../hooks/useIsAuthed";
import "./index.scss";

function MyMusic() {
  const isAuthed = useIsAuthed();
  return (
    <div className="my-music-container content-w content-h">
      {isAuthed ? (
        <MyMusicAuthed></MyMusicAuthed>
      ) : (
        <MyMusicNoAuth></MyMusicNoAuth>
      )}
    </div>
  );
}

export default MyMusic;

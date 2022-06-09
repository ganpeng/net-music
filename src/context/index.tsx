import React, { createContext, useState } from "react";
import { ITrack } from "../constants/type";

export type TracksContextType = {
  tracks: ITrack[] | null;
  currentTrack: ITrack | null;
  setTracks: React.Dispatch<React.SetStateAction<ITrack[] | null>>;
  setCurrentTrack: React.Dispatch<React.SetStateAction<ITrack | null>>;
};

export const TracksContext = createContext<TracksContextType | null>(null);

export const TracksContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [tracks, setTracks] = useState<ITrack[] | null>([]);
  const [currentTrack, setCurrentTrack] = useState<ITrack | null>(null);
  return (
    <TracksContext.Provider
      value={{ tracks, setTracks, currentTrack, setCurrentTrack }}
    >
      {children}
    </TracksContext.Provider>
  );
};

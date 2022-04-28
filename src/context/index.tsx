import React, { createContext, useState } from "react";
import { ITrack } from "../constants/type";

export type TracksContextType = {
  tracks: ITrack[] | null;
  setTracks: React.Dispatch<React.SetStateAction<ITrack[] | null>>;
};

export const TracksContext = createContext<TracksContextType | null>(null);

export const TracksContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [tracks, setTracks] = useState<ITrack[] | null>(null);
  return (
    <TracksContext.Provider value={{ tracks, setTracks }}>
      {children}
    </TracksContext.Provider>
  );
};

import React, { createContext, useEffect, useState } from "react";
import { ITrack, IUserAccount } from "../constants/type";
import { getUserAccount } from "../service";

export type TracksContextType = {
  tracks: ITrack[] | null;
  currentTrack: ITrack | null;
  loginVisible: boolean;
  cookie: string | null;
  qrimg: string;
  userAccount: IUserAccount | null;
  setTracks: React.Dispatch<React.SetStateAction<ITrack[] | null>>;
  setCurrentTrack: React.Dispatch<React.SetStateAction<ITrack | null>>;
  setLoginVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setCookie: React.Dispatch<React.SetStateAction<string | null>>;
  setQrimg: React.Dispatch<React.SetStateAction<string>>;
  setUserAccount: React.Dispatch<React.SetStateAction<IUserAccount | null>>;
};

export const TracksContext = createContext<TracksContextType | null>(null);

export const TracksContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeCookie = window.localStorage.getItem("cookie");
  const [tracks, setTracks] = useState<ITrack[] | null>([]);
  const [currentTrack, setCurrentTrack] = useState<ITrack | null>(null);
  const [loginVisible, setLoginVisible] = useState(false);
  const [cookie, setCookie] = useState<string | null>(storeCookie);
  const [qrimg, setQrimg] = useState<string>("");
  const [userAccount, setUserAccount] = useState<IUserAccount | null>(null);
  useEffect(() => {
    if (storeCookie) {
      getUserAccount().then((res) => {
        if (res.code === 200) {
          setUserAccount(res);
        }
      });
    }
  }, [storeCookie]);
  return (
    <TracksContext.Provider
      value={{
        tracks,
        setTracks,
        currentTrack,
        setCurrentTrack,
        loginVisible,
        setLoginVisible,
        cookie,
        setCookie,
        qrimg,
        setQrimg,
        userAccount,
        setUserAccount,
      }}
    >
      {children}
    </TracksContext.Provider>
  );
};

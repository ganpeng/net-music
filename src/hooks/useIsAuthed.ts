import { useContext, useMemo } from "react";
import { TracksContext } from "../context";
export default function useIsAuthed() {
  const tracksContext = useContext(TracksContext);
  const isAuthed = useMemo(() => {
    return tracksContext?.cookie;
  }, [tracksContext?.cookie]);

  return isAuthed;
}

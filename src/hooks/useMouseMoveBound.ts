import { useEffect, useMemo, useRef, useState } from "react";

export function useMouseMoveBound(dom: HTMLElement | null) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const clientRect = dom?.getBoundingClientRect();

  const timer = useRef<NodeJS.Timeout | null>(null);
  timer.current = null;

  const isHit = useMemo(() => {
    if (clientRect) {
      return (
        x >= clientRect.left &&
        x <= clientRect.left + clientRect.width &&
        y >= clientRect.top &&
        y <= clientRect.top + clientRect.height
      );
    } else {
      return false;
    }
  }, [clientRect, x, y]);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setX(e.clientX);
      setY(e.clientY);
    });
    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return {
    isHit,
  };
}

import React, { useRef } from "react";
import { useScroll } from "react-use";
import "./index.scss";

function StudyHook() {
  const scrollRef = useRef(null);
  const { x, y } = useScroll(scrollRef);
  return (
    <div className="study-hook-container">
      <h1>
        x: {x}; y: {y}
      </h1>
      <div className="scroll-box" ref={scrollRef}>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
        <p>This is a line!</p>
      </div>
    </div>
  );
}

export default StudyHook;

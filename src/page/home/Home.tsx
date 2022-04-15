import React from "react";
import Banner from "../../components/banner/Banner";
import StudyHook from "../../components/study_hook/StudyHook";

export default function Home() {
  return (
    <div className="home-container">
      <Banner></Banner>
      <StudyHook></StudyHook>
    </div>
  );
}

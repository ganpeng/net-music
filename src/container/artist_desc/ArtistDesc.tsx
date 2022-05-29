import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getArtistDetailById } from "../../service";
import "./index.scss";

function ArtistDesc() {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { data: artistDetailData } = useQuery(["artist_detail", id], () =>
    getArtistDetailById(id)
  );
  console.log(artistDetailData);
  return (
    <div className="artist-desc-container">
      <div className="label">
        <i>&nbsp;</i>
        {artistDetailData?.data.artist.name}简介
      </div>
      <p className="desc">{artistDetailData?.data.artist.briefDesc}</p>
    </div>
  );
}

export default ArtistDesc;

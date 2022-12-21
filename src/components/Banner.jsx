import React, { useEffect, useState } from "react";
import "./Global.css";
import axios from "../axios";
import { API_KEY } from "../constants/constants";

const Banner = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[0]);
      });
  }, []);

  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_btns">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        <p className="discription">{movie ? movie.overview : ""}</p>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;

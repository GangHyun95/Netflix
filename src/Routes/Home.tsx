import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMovies, IGetMoviesResult } from "../api";

const Home = () => {
  const {
    error,
    isLoading,
    data: movies,
  } = useQuery<IGetMoviesResult>(["movies", "nowPlaying"], getMovies);
  console.log(movies);

  return <div style={{ height: "200vh" }}>Home</div>;
};

export default Home;

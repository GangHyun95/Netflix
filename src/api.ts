import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: process.env.REACT_APP_MOVIEDB_API_KEY },
});

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return httpClient
    .get("movie/now_playing", {
      params: {
        language: "en-US",
        page: 1,
      },
    })
    .then((res) => res.data);
}

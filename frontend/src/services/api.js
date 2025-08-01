const API_KEY = "7a854d48b2e046a8da1138b31493302f";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (page = 1) => {
       const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
       const data = await response.json();
       return data.results;
  }
   export const searchMovies = async (query) => {
       const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
       const data = await response.json();
       return data.results;
   }
const BASE_URL = process.env.TMDB_BASE_URL;

export const movieUrls = {
  discover: `${BASE_URL}/discover/movie`,
  popular: `${BASE_URL}/movie/popular`,
  now_playing: `${BASE_URL}/movie/now_playing`,
  trending: `${BASE_URL}/trending/movie/week`,
  top_rated: `${BASE_URL}/movie/top_rated`,
};

export const tvUrls = {
  discover: `${BASE_URL}/discover/tv`,
  popular: `${BASE_URL}/tv/popular`,
  now_playing: `${BASE_URL}/tv/on_the_air`,
  trending: `${BASE_URL}/trending/tv/week`,
  top_rated: `${BASE_URL}/tv/top_rated`,
};

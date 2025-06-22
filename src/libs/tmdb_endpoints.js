const BASE_URL = process.env.TMDB_BASE_URL;

export const movieUrls = {
  popular: `${BASE_URL}/movie/popular`,
  now_playing: `${BASE_URL}/movie/now_playing`,
  upcoming: `${BASE_URL}/movie/upcoming`,
  top_rated: `${BASE_URL}/movie/top_rated`,
};

export const tvUrls = {
  popular: `${BASE_URL}/tv/popular`,
  airing_today: `${BASE_URL}/tv/airing_today`,
  on_tv: `${BASE_URL}/tv/on_the_air`,
  top_rated: `${BASE_URL}/tv/top_rated`,
};

export const otherUrls = {
  trending: `${BASE_URL}/trending/all`,
};

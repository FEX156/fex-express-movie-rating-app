import { pick } from "../../utils/helper/pick_helper.js";

export class MovieDetailsControllers {
  constructor(tmdbServices) {
    this.tmdbServices = tmdbServices;
  }
  getMovieDetails = async (req, res) => {
    const { movie_id } = req.params;
    try {
      const data = await this.tmdbServices.getDetails(`/movie/${movie_id}`);
      const trailer = await this.tmdbServices.getTrailer(
        `/movie/${movie_id}/videos`
      );
      const video_key = trailer
        .filter((video) => video.type === "Trailer")
        .map((video) => video.key)
        .join(", ");
      const genres = data.genres.map((genre) => genre["name"]).join(", ");
      const details = pick(data, [
        "backdrop_path",
        "title",
        "overview",
        "poster_path",
        "release_date",
        "tagline",
        "runtime",
      ]);
      res.status(200).json({
        succes: true,
        movie_id: movie_id,
        movie_details: { ...details, genres: genres, video_key: video_key },
      });
    } catch (error) {
      const { message } = error;
      res.status(500).json({ succes: false, message: message });
    }
  };
  getMovieCast = async (req, res) => {
    const { movie_id } = req.params;
    try {
      const data = await this.tmdbServices.getDetails(
        `/movie/${movie_id}/credits`
      );
      const casts = data.cast.map((cast) => {
        const newCast = {
          gender: cast.gender,
          original_name: cast.original_name,
          profile_path: cast.profile_path,
          character: cast.character,
          order: cast.order,
        };
        return newCast;
      });
      res.status(200).json({
        succes: true,
        movie_id: movie_id,
        cast: casts,
      });
    } catch (error) {
      const { message } = error;
      res.status(500).json({ succes: false, message: message });
    }
  };
  getMovieKeywords = async (req, res) => {
    const { movie_id } = req.params;
    try {
      const data = await this.tmdbServices.getDetails(
        `/movie/${movie_id}/keywords`
      );
      const { keywords } = data;
      res.status(200).json({
        succes: true,
        movie_id: movie_id,
        keywords: keywords,
      });
    } catch (error) {
      const { message } = error;
      res.status(500).json({ succes: false, message: message });
    }
  };
  getSimilarMovies = async (req, res) => {
    const { movie_id } = req.params;
    try {
      const data = await this.tmdbServices.getDetails(
        `/movie/${movie_id}/similar`
      );
      const similarMovies = data.results.map((movie) => {
        const newMovie = {
          id: movie.id,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
          title: movie.title,
          vote_average: movie.vote_average,
        };
        return newMovie;
      });
      res.status(200).json({
        succes: true,
        movie_id: movie_id,
        cast: similarMovies,
      });
    } catch (error) {
      const { message } = error;
      res.status(500).json({ succes: false, message: message });
    }
  };
}

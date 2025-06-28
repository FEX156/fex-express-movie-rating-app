import { pick } from "../../utils/helper/pick_helper.js";

export class TvDetailControllers {
  constructor(tmdbServices) {
    this.tmdbServices = tmdbServices;
  }
  getTvDetails = async (req, res) => {
    const { tv_id } = req.params;
    try {
      const data = await this.tmdbServices.getDetails(`/tv/${tv_id}`);
      const trailer = await this.tmdbServices.getTrailer(`/tv/${tv_id}/videos`);
      const video_key = trailer
        .filter((video) => video.type === "Trailer")
        .map((video) => video.key)
        .join(", ");
      const genres = data.genres.map((genre) => genre["name"]).join(", ");
      const details = pick(data, [
        "backdrop_path",
        "name",
        "overview",
        "poster_path",
        "first_air_date",
        "tagline",
      ]);
      res.status(200).json({
        succes: true,
        tv_id: tv_id,
        movie_details: { ...details, genres: genres, video_key: video_key },
      });
    } catch (error) {
      const { message } = error;
      res.status(500).json({ succes: false, message: message });
    }
  };
  getTvCast = async (req, res) => {
    const { tv_id } = req.params;
    try {
      const data = await this.tmdbServices.getDetails(
        `/tv/${tv_id}/aggregate_credits`
      );
      const casts = data.cast.map((cast) => {
        const character = cast.roles.map((role) => role.character).join();
        const newCast = {
          gender: cast.gender,
          original_name: cast.original_name,
          profile_path: cast.profile_path,
          character: character,
          order: cast.order,
        };
        return newCast;
      });
      res.status(200).json({
        succes: true,
        tv_id: tv_id,
        cast: casts,
      });
    } catch (error) {
      const { message } = error;
      res.status(500).json({ succes: false, message: message });
    }
  };
  getTvKeywords = async (req, res) => {
    const { tv_id } = req.params;
    try {
      const data = await this.tmdbServices.getDetails(`/tv/${tv_id}/keywords`);
      const { keywords } = data;
      res.status(200).json({
        succes: true,
        tv_id: tv_id,
        keywords: keywords,
      });
    } catch (error) {
      const { message } = error;
      res.status(500).json({ succes: false, message: message });
    }
  };
  getSimilarTv = async (req, res) => {
    const { tv_id } = req.params;
    try {
      const data = await this.tmdbServices.getDetails(`/tv/${tv_id}/similar`);
      const similarTv = data.results.map((tv) => {
        const newTvList = {
          id: movie.id,
          poster_path: movie.poster_path,
          first_air_date: movie.first_air_date,
          name: movie.name,
          vote_average: movie.vote_average,
        };
        return newTvList;
      });
      res.status(200).json({
        succes: true,
        tv_id: tv_id,
        cast: similarTv,
      });
    } catch (error) {
      const { message } = error;
      res.status(500).json({ succes: false, message: message });
    }
  };
}

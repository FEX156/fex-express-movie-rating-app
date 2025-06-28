import { tvUrls } from "../../libs/tmdb_endpoints.js";

export class TvThumbnailsControllers {
  constructor(tmdbservices) {
    this.tmdbservices = tmdbservices;
  }
  getTumbnailOfPopularTVs = async (req, res) => {
    try {
      const data = await this.tmdbservices.getThumbnails(
        tvUrls.popular,
        req.params.page
      );
      const thumbnails = await data.map((thumbnail) => {
        const { id, poster_path, name, first_air_date, vote_average } =
          thumbnail;
        return {
          media_type: "tv",
          id,
          poster_path,
          name,
          first_air_date,
          vote_average,
        };
      });
      res.status(201).json({
        succes: true,
        page: req.params.page,
        tv_list: thumbnails,
      });
    } catch (err) {
      const { message, status } = err;
      res.status(500).json({ succes: false, message: message });
    }
  };
  getTumbnailOfAiringTodayTVs = async (req, res) => {
    try {
      const data = await this.tmdbservices.getThumbnails(
        tvUrls.airing_today,
        req.params.page
      );
      const thumbnails = await data.map((thumbnail) => {
        const { id, poster_path, name, first_air_date, vote_average } =
          thumbnail;
        return {
          media_type: "tv",
          id,
          poster_path,
          name,
          first_air_date,
          vote_average,
        };
      });
      res.status(201).json({
        succes: true,
        page: req.params.page,
        tv_list: thumbnails,
      });
    } catch (err) {
      const { message, status } = err;
      res.status(500).json({ succes: false, message: message });
    }
  };
  getTumbnailOfOnTVs = async (req, res) => {
    try {
      const data = await this.tmdbservices.getThumbnails(
        tvUrls.on_tv,
        req.params.page
      );
      const thumbnails = await data.map((thumbnail) => {
        const { id, poster_path, name, first_air_date, vote_average } =
          thumbnail;
        return {
          media_type: "tv",
          id,
          poster_path,
          name,
          first_air_date,
          vote_average,
        };
      });
      res.status(201).json({
        succes: true,
        page: req.params.page,
        tv_list: thumbnails,
      });
    } catch (err) {
      const { message, status } = err;
      res.status(500).json({ succes: false, message: message });
    }
  };
  getTumbnailOfTopRatedTVs = async (req, res) => {
    try {
      const data = await this.tmdbservices.getThumbnails(
        tvUrls.top_rated,
        req.params.page
      );
      const thumbnails = await data.map((thumbnail) => {
        const { id, poster_path, name, first_air_date, vote_average } =
          thumbnail;
        return {
          media_type: "tv",
          id,
          poster_path,
          name,
          first_air_date,
          vote_average,
        };
      });
      res.status(201).json({
        succes: true,
        page: req.params.page,
        tv_list: thumbnails,
      });
    } catch (err) {
      const { message, status } = err;
      res.status(500).json({ succes: false, message: message });
    }
  };
}

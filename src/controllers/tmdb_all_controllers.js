import { otherUrls } from "../libs/tmdb_endpoints.js";

export class TmdbControllers {
  constructor(tmdbservices) {
    this.tmdbservices = tmdbservices;
  }
  getTrendingList = async (req, res) => {
    try {
      const data = await this.tmdbservices.getTrending(
        otherUrls.trending,
        req.params.time_window
      );
      const trending_list = await data.map((list) => {
        const {
          title,
          release_date,
          poster_path,
          name,
          first_air_date,
          vote_average,
        } = list;
        return {
          poster_path,
          vote_average,
          title,
          name,
          release_date,
          first_air_date,
        };
      });
      res.status(201).json({
        succes: true,
        time_window: req.params.time_window,
        trending_list: trending_list,
      });
    } catch (err) {
      const { message, status } = err;
      res.status(500).json({ succes: false, message: message });
    }
  };
}

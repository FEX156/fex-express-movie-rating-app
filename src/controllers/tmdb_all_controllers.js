import { otherUrls } from "../libs/tmdb_endpoints.js";

export class TmdbControllers {
  constructor(tmdbservices) {
    this.tmdbservices = tmdbservices;
  }
  getTrendingList = async (req, res) => {
    try {
      const list = await this.tmdbservices.getTrending(
        otherUrls.trending,
        req.params.time_window
      );
      res.status(201).json({ succes: true, page: req.params.page, list: list });
    } catch (err) {
      res.status(500).json({ success: false, message: { error: err.message } });
    }
  };
}

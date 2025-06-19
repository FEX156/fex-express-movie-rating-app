import { tvUrls } from "../libs/tmdb_endpoints.js";

export class TvControllers {
  constructor(tmdbservices) {
    this.tmdbservices = tmdbservices;
  }
  getTvLists = async (req, res) => {
    try {
      const movies = await this.tmdbservices.get(
        tvUrls.discover,
        req.params.page
      );
      res.status(201).json({ data: movies });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
}

import { movieUrls } from "../libs/tmdb_endpoints.js";

export class MovieController {
  constructor(tmdbservices) {
    this.tmdbservices = tmdbservices;
  }
  getMovieLists = async (req, res) => {
    try {
      const movies = await this.tmdbservices.get(
        movieUrls.discover,
        req.params.page
      );
      res.status(201).json({ data: movies });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
}

import axios from "axios";

export class TmdbServices {
  async get(endpoint, page = 1) {
    try {
      const response = await axios.get(endpoint, {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: "en-US",
          page: page,
        },
      });
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }
}

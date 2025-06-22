import axios from "axios";

export class TmdbServices {
  async get(endpoint, page = 1, time_window = null) {
    try {
      const response = await axios.get(endpoint, {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: "en-US",
          page: page,
          time_window: time_window,
        },
      });
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }
  async getTrending(endpoint, time_window) {
    try {
      const response = await axios.get(endpoint + `/${time_window}`, {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: "en-US",
        },
      });
      return response.data.results;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.status_message;
        throw new Error(message); // Ubah jadi throw
      }
      throw error; // fallback untuk error lain
    }
  }
}

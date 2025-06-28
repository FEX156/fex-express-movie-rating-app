import axios from "axios";
import { axiosClient } from "../utils/axios_client.js";

export class TmdbServices {
  async getThumbnails(endpoint, page = 1) {
    try {
      const response = await axios.get(endpoint, {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: "en-US",
          page: page,
        },
      });
      const results = response.data.results;
      return results;
    } catch (error) {
      console.log(error.toJSON());
      throw error;
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
      console.log(error.toJSON());
      throw error;
    }
  }
  async getDetails(path) {
    try {
      const response = await axiosClient.get(path, {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: "en-US",
        },
      });
      return response.data;
    } catch (error) {
      console.log(error.toJSON());
      throw error;
    }
  }
  async getTrailer(path) {
    try {
      const response = await axiosClient.get(path, {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: "en-US",
        },
      });
      return response.data.results;
    } catch (error) {
      console.log(error.toJSON());
      throw error;
    }
  }
}

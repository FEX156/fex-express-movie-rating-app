import axios from "axios";

const tmdb_base_url = process.env.TMDB_BASE_URL;
const tmdb_api_token = process.env.TMDB_API_TOKEN;

export const axiosClient = axios.create({
  baseURL: tmdb_base_url,
  headers: {
    "Content-Type": "aplication/json",
    Authorization: `Bearer ${tmdb_api_token}`,
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      console.error("Network error. Server tidak merespon.");
    } else {
      const status = error.response.status;
      switch (status) {
        case 400:
          console.error("Bad Request");
          break;
        case 401:
          console.error("Unauthorized");
          break;
        case 403:
          console.error("Forbidden");
          break;
        case 404:
          console.error("Not Found");
          break;
        case 500:
          console.error("Server error");
          break;
        default:
          console.error("Unexpected error", error.message);
      }
    }
    return Promise.reject(error);
  }
);

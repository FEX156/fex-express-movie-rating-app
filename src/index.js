import express from "express";
import cors from "cors";
import "dotenv/config";
import thumbnails from "./routes/thumbnails_routes.js";
import details from "./routes/details_routes.js";

const app = express();

// MIDLLEWARE GUWEH ANJAY
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/tmdb/api", details);
app.use("/tmdb/api/thumbnails", thumbnails);

// URL ENDPOINTS
app.get("/", (req, res) => {
  res.status(200).json({ message: `hello from express` });
});

app.listen(5000, () => {
  console.log("server run at http://localhost:5000/");
});

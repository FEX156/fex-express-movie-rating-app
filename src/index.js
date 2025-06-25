import express from "express";
import cors from "cors";
import "dotenv/config";
import thumbnails from "./routes/thumbnails_routes.js";

const app = express();

// MIDLLEWARE GUWEH
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/tmdb/api/thumbnails", thumbnails);
app.get("/", (req, res) => {
  res.status(201).json({ message: `hello from express` });
});

app.listen(5000, () => {
  console.log("server run at http://localhost:5000/");
});

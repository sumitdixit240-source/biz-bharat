import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import aiRoute from "./routes/aiRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use("/api/ai", aiRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
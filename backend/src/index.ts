import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.BACKEND_PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

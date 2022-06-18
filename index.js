import express from "express";
import { movieRouter } from "./routes/movies.routes.js";
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", movieRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

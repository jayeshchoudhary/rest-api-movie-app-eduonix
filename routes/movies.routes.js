import router from "express";
import {
  addNewMovie,
  deleteMovie,
  editMovie,
  getAllMovies,
  getMovie,
} from "../controller/movies.controller.js";

export const movieRouter = router.Router();

// GET - get list of the movies
movieRouter.get("/movies", getAllMovies);

// POST - add new movie
movieRouter.post("/movies", addNewMovie);

// GET :id - get particular movie details
movieRouter.get("/movies/:id", getMovie);

// PUT :id - edit a movie details
movieRouter.put("/movies/:id", editMovie);

// DELETE :id - delete a movie data
movieRouter.delete("/movies/:id", deleteMovie);

import { getAllMoviesFromDB, saveMovieToDB } from "../utils/movies.utils.js";

export const getAllMovies = (req, res) => {
  try {
    const movies = getAllMoviesFromDB();
    res.json(movies);
  } catch {
    res.status(500).send("Something went wrong");
  }
};

export const addNewMovie = (req, res) => {
  try {
    const movies = getAllMoviesFromDB();
    const newMovie = { id: movies.length + 1, ...req.body };
    movies.push(newMovie);
    saveMovieToDB(movies);

    res.json(newMovie);
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};

export const getMovie = (req, res) => {
  try {
    const movieId = req.params.id;
    const movies = getAllMoviesFromDB();
    const requiredMovie = movies.find((movie) => movie.id == movieId);
    res.json(requiredMovie);
  } catch {
    res.status(500).send("Something went wrong");
  }
};

export const editMovie = (req, res) => {
  try {
    const movieId = req.params.id;
    const movies = getAllMoviesFromDB();
    const requiredMovieIndex = movies.findIndex((movie) => movie.id == movieId);
    const requiredMovie = movies[requiredMovieIndex];

    const updatedMovie = { ...requiredMovie, ...req.body };
    movies[requiredMovieIndex] = updatedMovie;

    saveMovieToDB(movies);
    res.json(updatedMovie);
  } catch {
    res.status(500).send("Something went wrong");
  }
};

export const deleteMovie = (req, res) => {
  try {
    const movieId = req.params.id;
    const movies = getAllMoviesFromDB();
    const updatedMovies = movies.filter((movie) => movie.id != movieId);

    saveMovieToDB(updatedMovies);
    res.json(updatedMovies);
  } catch {
    res.status(500).send("Something went wrong");
  }
};

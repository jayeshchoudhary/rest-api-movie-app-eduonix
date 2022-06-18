import fs from "fs";

const movieDataLocation = "./DB/moviesData.json";

export const getAllMoviesFromDB = () => {
  try {
    const data = fs.readFileSync(movieDataLocation, "utf8");
    return JSON.parse(data);
  } catch (err) {
    throw new Error(err);
  }
};

export const saveMovieToDB = (movies) => {
  try {
    const jsonMovies = JSON.stringify(movies, null, 4);
    fs.writeFileSync(movieDataLocation, jsonMovies);
  } catch (err) {
    throw new Error(err);
  }
};

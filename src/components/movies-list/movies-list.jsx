import { useEffect, useState } from "react";
import MovieCard from "../episodes/movie-card";
import Header from "../header/header";
import "./movieslist.scss"

const MoviesList = () => {
  const [movies, setMovies] = useState();
  const [searchInput, setSearchInput] = useState("");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };

  const getMovies = (search) => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
      .then((response) => response.json())
      .then((response) => setMovies(response))
      .catch((err) => console.error(err));
  };

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    getMovies(searchInput);
  }, [searchInput]);

  return (
    <div className="container px-10 mx-auto">
      <Header onChange={onChange} isSearchable />
      <div className="grid gap-4 grid-cols-4">
        {movies &&
          movies.results.map((movie) => (
            <div className="w-[350px] h-[197px] rounded-2xl box_item">
              <MovieCard imgWidth={350} imgHeight={197} movie={movie} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MoviesList;

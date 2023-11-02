import { useState } from "react";
import MovieCard from "../episodes/movie-card";
import { useTVContext } from "../../contexts/tv.context";
import "./tvlist.scss"

const TVList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { tvList, setTvList } = useTVContext();

  const fetchNextPage = () => {
    const nextPage = currentPage + 1;

    fetch(
      `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${nextPage}&sort_by=popularity.desc`
    )
      .then((response) => response.json())
      .then((response) => {
        setTvList({
          ...tvList,
          results: [...tvList?.results, ...response?.results],
        });
      })
      .catch((err) => console.error(err));

    setCurrentPage(nextPage);
  };

  const renderedTVList = tvList?.results.slice(
    (currentPage - 1) * tvList?.total_pages,
    currentPage * tvList?.total_pages
  );

  return (
    <div className="container px-10 mx-auto pb-20">
      <h2 className="text-white text-3xl mb-6">TV shows</h2>
      <div className="grid gap-4 grid-cols-4">
        {renderedTVList &&
          renderedTVList?.map((movie) => (
            <div className="w-[350px] h-[197px] rounded-2xl box_item" key={movie.id}>
              <MovieCard imgWidth={350} imgHeight={197} movie={movie} />
            </div>
          ))}
      </div>
      <button
        className="bg-white py-3 rounded-md mx-auto px-8 flex justify-center mt-10"
        onClick={fetchNextPage}
      >
        Load more
      </button>
    </div>
  );
};

export default TVList;

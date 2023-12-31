import { useState, useEffect } from "react";
import PostMovie from "~/components/PostMovie";
import axios from "~/api/axios";

const Movies = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios.get("/movie/all").then((res) => setMovieData(res.data))
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="relative overflow-x-auto mx-auto my-10 max-h-[620px] w-[900px] overflow-y-auto">
        <table className="w-full text-sm text-black dark:text-gray-400 text-center">
          <thead className="sticky top-0 text-xs text-black uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Movie ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Cost
              </th>
              <th scope="col" className="px-6 py-3">
                Genre
              </th>
              <th scope="col" className="px-6 py-3">
                Region
              </th>
              <th scope="col" className="px-6 py-3">
                Run Time
              </th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((movie) => (
              <tr
                key={movie.movieId}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {movie.movieId}
                </th>
                <td className="px-6 py-4">{movie.title}</td>
                <td className="px-6 py-4">{movie.cost}</td>
                <td className="px-6 py-4">{movie.genre}</td>
                <td className="px-6 py-4">{movie.region}</td>
                <td className="px-6 py-4">{movie.runTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <PostMovie />
      </div>
    </div>
  );
};

export default Movies;

import sampleData from "~/data/sampleData";

const Movies = () => {
    return (
        <div className="relative overflow-x-auto mx-auto my-auto max-h-[650px] w-[900px] overflow-y-auto">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add Movie
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </button>  
            <table className="w-full text-sm text-left text-black dark:text-gray-400">
                <thead className="text-xs text-black uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
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
                    {sampleData.movies.map((movie) => (
                        <tr key={movie.movieid} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {movie.movieid}
                            </th>
                            <td className="px-6 py-4">
                                {movie.title}
                            </td>
                            <td className="px-6 py-4">
                                {movie.cost}
                            </td>
                            <td className="px-6 py-4">
                                {movie.genre}
                            </td>
                            <td className="px-6 py-4">
                                {movie.region}
                            </td>
                            <td className="px-6 py-4">
                                {movie.runTime}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Movies
import sampleData from "~/data/sampleData";
import PostShowTime from "~/components/PostShowTime";

const Showtime = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative overflow-x-auto mx-auto my-auto max-h-[620px] w-[900px] overflow-y-auto">
        <table className="w-full text-sm text-left text-black dark:text-gray-400">
          <thead className="sticky top-0 text-xs text-black uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Showtime ID
              </th>
              <th scope="col" className="px-6 py-3">
                Movie ID
              </th>
              <th scope="col" className="px-6 py-3">
                Showing Date
              </th>
              <th scope="col" className="px-6 py-3">
                Start Time
              </th>
              <th scope="col" className="px-6 py-3">
                End Time
              </th>
              <th scope="col" className="px-6 py-3">
                Current Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleData.showtimes.map((showtime) => (
              <tr
                key={showtime.showtimeid}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {showtime.showtimeid}
                </th>
                <td className="px-6 py-4">{showtime.movieid}</td>
                <td className="px-6 py-4">{showtime.showingdate}</td>
                <td className="px-6 py-4">{showtime.starttime}</td>
                <td className="px-6 py-4">{showtime.endtime}</td>
                <td className="px-6 py-4">{showtime.currentquantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <PostShowTime/>
      </div>
    </div>
  );
};

export default Showtime;

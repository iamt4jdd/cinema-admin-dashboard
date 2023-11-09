import { useEffect, useState } from "react";
import axios from "~/api/axios";
import PostShowTime from "~/components/PostShowTime";

const Showtime = () => {

  const [showTimeData, setShowTimeData] = useState([]);

  useEffect(() => {
    axios.get("/showtime/all").then((res) => setShowTimeData(res.data))
  }, []);


  return (
    <div className="flex flex-col w-full">
      <div className="relative overflow-x-auto mx-auto my-10 max-h-[620px] w-[900px] overflow-y-auto">
        <table className="w-full text-sm text-black dark:text-gray-400 text-center">
          <thead className="sticky top-0 text-xs text-black uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Showtime ID
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Movie ID
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Showing Date
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Start Time
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                End Time
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Current Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {showTimeData.map((showtime) => (
              <tr
                key={showtime.showTimeId}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {showtime.showTimeId}
                </th>
                <td className="px-6 py-4">{showtime.movieId}</td>
                <td className="px-6 py-4">{showtime.showingDate}</td>
                <td className="px-6 py-4">{showtime.startTime}</td>
                <td className="px-6 py-4">{showtime.endTime}</td>
                <td className="px-6 py-4">{showtime.currentQuantity}</td>
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

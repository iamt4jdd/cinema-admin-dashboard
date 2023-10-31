import { useState } from "react";

import TextField from "./TextField";
import images from "~/assets";
import axios from "~/api/axios";

const PostShowTime = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTimeData, setShowTimeData] = useState({
    movieId: "",
    showingDate: "",
    startTime: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5555/showtime/add",
        showTimeData
      );

      setShowTimeData({
        movieId: "",
        showingDate: "",
        startTime: "",
      });
      
    } catch (error) {
      console.log("Error submitting form: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setShowTimeData({
      ...showTimeData,
      [name]: value,
    });

    console.log(showTimeData);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="mb-4 w-52 h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
          focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Add ShowTime
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            id="authentication-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="relative w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700 overflow-x-hidden overflow-y-auto p-4"
          >
            <div className="relative w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <img src={images.close} alt="close" />
                </button>
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Add a new ShowTime
                  </h3>
                  <form className="grid gap-3" onSubmit={handleSubmit}>
                    <TextField
                      title="Movie ID"
                      name="movieId"
                      value={showTimeData.movieId}
                      event={handleInputChange}
                    />
                    <TextField
                      title="Showing Date"
                      name="showingDate"
                      value={showTimeData.showingDate}
                      event={handleInputChange}
                    />
                    <TextField
                      title="Start Time"
                      name="startTime"
                      value={showTimeData.startTime}
                      event={handleInputChange}
                    />
                    <button
                      type="submit"
                      className="w-full mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                        focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Add ShowTime
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostShowTime;

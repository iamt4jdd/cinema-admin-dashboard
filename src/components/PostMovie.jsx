import { useState } from "react";
import TextField from "./TextField";
import images from "~/assets";
import axios from "~/api/axios";

const PostMovie = () => {
  const [movieData, setMovieData] = useState({
    title: "",
    cost: "",
    genre: "",
    region: "",
    runTime: "",
    thumbnail: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = new FormData();

    postData.append("title", movieData.title);
    postData.append("cost", movieData.cost);
    postData.append("genre", movieData.genre);
    postData.append("region", movieData.region);
    postData.append("runTime", movieData.runTime);
    postData.append("thumbnail", movieData.thumbnail);

    try {
      await axios.post("http://localhost:5555/movie", postData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMovieData({
        title: "",
        cost: "",
        genre: "",
        region: "",
        runTime: "",
        thumbnail: "",
      });
    } catch (error) {
      console.log("Error submitting form: ", error);
    }
  };

  const handleInputChange = async (e) => {
    const { value, type, name } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      setMovieData({
        ...movieData,
        thumbnail: file,
      });
    } else {
      setMovieData({
        ...movieData,
        [name]: value,
      });
    }

    console.log(movieData);
  };
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="mb-4 w-52 h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
          focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Add Movie
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
                    Add a new movie
                  </h3>
                  <form className="grid gap-3" onSubmit={handleSubmit}>
                    <TextField
                      title="Title"
                      name="title"
                      value={movieData.title}
                      event={handleInputChange}
                    />
                    <TextField
                      title="Cost"
                      name="cost"
                      value={movieData.cost}
                      event={handleInputChange}
                    />
                    <TextField
                      title="Genre"
                      name="genre"
                      value={movieData.genre}
                      event={handleInputChange}
                    />
                    <TextField
                      title="Region"
                      name="region"
                      value={movieData.region}
                      event={handleInputChange}
                    />
                    <TextField
                      title="Run Time"
                      name="runTime"
                      value={movieData.runTime}
                      event={handleInputChange}
                    />
                    <TextField
                      title="Thumbnail"
                      type="file"
                      name="thumbnail"
                      event={handleInputChange}
                      accept="image/*"
                    />
                    <button
                      type="submit"
                      className="w-full mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                        focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Add movie
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

export default PostMovie;

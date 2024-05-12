import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextComponent";
import { useParams } from "react-router-dom";

export default function Review() {
    const {user} = useContext(AuthContext)
    const {id} = useParams()
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = user.displayName;
    const rating = e.target.rating.value;
    const comment = e.target.comment.value;
    const timestamp = e.target.timestamp.value;
    const info = { name, rating, comment, timestamp };
    fetch(`${import.meta.env.VITE_API_URL}/review/${id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            alert('successfully add review')
        }
      });
  };
  return (
    <div className="container mx-auto my-12 lg:my-24">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-2xl uppercase tracking-wide font-semibold text-gray-700 text-center dark:text-white">
          Leave A Review
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 mt-4 space-y-4">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="ratingAddress"
              >
                Rating
              </label>
              <input
                id="ratingAddress"
                type="number"
                name="rating"
                min="1"
                max="5"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="comment"
              >
                Comment
              </label>
              <textarea
                id="comment"
                type="text"
                name="comment"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="timestamp"
              >
                TimeStamp
              </label>
              <input
                id="timestamp"
                type="datetime-local"
                name="timestamp"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RoomDetail() {
  const loadData = useLoaderData();
  const [startDate, setStartDate] = useState(null);

  const {
    _id,
    name,
    description,
    price_per_night,
    room_size,
    availability: initialAvailability,
    image_url,
    special_offers,
    reviews,
  } = loadData;

  const [availability, setAvailability] = useState(initialAvailability);

  const handleBook = (id, newAvailability, bookingDate) => {
    const requestBody = {
      availability: newAvailability,
      startDate: bookingDate,
    };
    fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setAvailability(newAvailability);
          toast.success("Successfully Book Room");
        }
        console.log(data);
      });
  };
  const handleConfirmBooking = () => {
    if (!startDate) {
      toast.error("Please select a booking date");
      return;
    }
    handleBook(_id, "Unavailable", startDate);
    document.getElementById("my_modal_5").close();
  };
  return (
    <div className="container mx-auto my-12 lg:my-24">
      <div className="flex gap-6">
        <div className="w-2/3 mx-auto">
          <h2 className="text-center text-4xl font-semibold">{name}</h2>
          <div className="flex justify-between my-5">
            <h2 className="text-2xl font-bold">
              Price Per Night : $ {price_per_night}
            </h2>
            <h3 className="text-xl font-bold">Size : {room_size}</h3>
          </div>
          <div className="relative">
            <img className="w-full" src={image_url} alt="" />
            <span className="badge badge-primary absolute top-5 right-5">
              {availability}
            </span>
          </div>
          <p className="text-lg mt-4">{description}</p>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-4">Special Offers:</h2>
            {special_offers.length > 0 ? (
              <ul className="list-disc list-inside">
                {special_offers.map((special, index) => (
                  <li key={index}>{special}</li>
                ))}
              </ul>
            ) : (
              <p>No Offers Available</p>
            )}
          </div>

          <button
            disabled={availability !== "Available"}
            onClick={() => {
              handleBook(_id, "Unavailable");
              document.getElementById("my_modal_5").showModal();
            }}
            className="btn btn-primary mt-5"
          >
            Book Now
          </button>
          {/* review */}
          <div className="mt-5">
            <h2 className="text-2xl font-semibold mb-4">Reviews:</h2>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-300 pb-3">
                  <p className="text-lg">{review.user}</p>
                  <p>Rating: {review.rating}</p>
                  <p>{review.comment}</p>
                  <p>{new Date(review.timestamp).toLocaleString()}</p>
                </div>
              ))
            ) : (
              <p>
                No reviews available...{" "}
                <Link className="btn-link">Add Review</Link>{" "}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <h3 className="font-bold text-lg">
            Price Per Night : $ {price_per_night}
          </h3>
          <p className="py-4">Size : {room_size}</p>
          <p className="py-4">{description}</p>
          <div className="mt-5">
            <p>Book a date</p>
            <DatePicker
              className="border p-2 rounded-md"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-success"
                disabled={!startDate}
                onClick={handleConfirmBooking}
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
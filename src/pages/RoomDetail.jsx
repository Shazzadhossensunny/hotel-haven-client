import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContextComponent";
import { Helmet } from "react-helmet-async";
import { FaStar } from "react-icons/fa";



export default function RoomDetail() {
  const loadData = useLoaderData();
  const [bookDate, setBookDate] = useState("")
  const [isRoomBooked, setIsRoomBooked] = useState(false);
  const { user } = useContext(AuthContext);
  const email = user?.email;

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
      email,
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
          setIsRoomBooked(true);
          toast.success("Successfully Book Room");
        }
      });
  };
  const handleConfirmBooking = () => {
    if (!bookDate) {
      toast.error("Please select a booking date");
      return;
    }
    handleBook(_id, "unavailable", bookDate);
    document.getElementById("my_modal_5").close();
  };



  return (
    <div className="container mx-auto my-12 lg:my-24 px-3 lg:px-0">
      <Helmet>
        <title>HotelHaven | Room Details</title>
      </Helmet>
      <div className="flex gap-6">
        <div className="w-full lg:w-2/3 mx-auto">
          <h2 className="text-center text-3xl lg:text-4xl font-semibold">{name}</h2>
          <div className="flex justify-between my-5 flex-wrap">
            <h2 className="text-2xl font-bold">
              Price Per Night : $ {price_per_night}
            </h2>
            <h3 className="text-xl font-bold">Size : {room_size}</h3>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {
                image_url.map((img, index)=>
                <div  key={index}>
                  <img className="h-full w-full object-cover lg:h-[340px]" src={img} alt="" />
                </div>
                )
              }
              <span className="badge badge-primary absolute top-5 right-5">
              {availability}
            </span>
            </div>

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
            disabled={availability !== "available"}
            onClick={() => {
              handleBook(_id, "unavailable");
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
                <div key={index} className=" border-green-300 pb-3 shadow-lg p-4 rounded-xl space-y-3 border-b-2 mt-3">
                  <p className="text-lg">{review.user}</p>
                  <p className="flex items-center gap-2"><FaStar></FaStar> {review.rating}</p>
                  <p>{review.comment}</p>
                  <p>{new Date(review.timestamp).toLocaleString()}</p>
                </div>
              ))
            ) : (
              <p>No reviews available... </p>
            )}
            {isRoomBooked && (
              <p>
                <Link to={`/review/${_id}`} className="btn-link">
                  Add Review
                </Link>
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
            <input type="date" className="border p-2 rounded-md" value={bookDate} onChange={(e)=> setBookDate(e.target.value)} name="" id="" />
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-success"
                disabled={!bookDate}
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

import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextComponent";

export default function RoomDetail() {
  const loadData = useLoaderData();


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
    total_reviews,
  } = loadData;




  const [availability, setAvailability] = useState(initialAvailability);
  const handleBook = (id, newAvailability) => {
    fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`,{
        method: "PUT",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ availability: newAvailability  }),

    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            setAvailability(newAvailability);
            alert("Booked room")
        }
        console.log(data)
    })


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
            onClick={() => handleBook(_id, "Unavailable")}
            className="btn btn-primary mt-5"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

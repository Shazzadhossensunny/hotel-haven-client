import { useLoaderData } from "react-router-dom";

export default function RoomDetail() {
  const loadData = useLoaderData();
  const {
    _id,
    name,
    description,
    price_per_night,
    room_size,
    availability,
    image_url,
    special_offers,
    reviews,
    total_reviews,
  } = loadData;
  return (
    <div className="container mx-auto my-12 lg:my-24">
      <div className="flex gap-6">
        <div className="w-2/3">
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
        </div>
        <div className="w-1/3">
          <p>Book Now</p>
        </div>
      </div>
    </div>
  );
}

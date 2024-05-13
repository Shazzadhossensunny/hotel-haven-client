import { Link } from "react-router-dom";

export default function RoomsCard({ availableRoom }) {
  const { _id, image_url, name, price_per_night, availability, reviews} =
    availableRoom;
  return (
    <Link to={`/room/${_id}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-[330px] w-full"
            src={image_url[0]}
            alt="room"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <h3 className="card-title">Price Per Night : ${price_per_night}</h3>
          <p className="text-lg font-medium">Total Review : {reviews?.length || 0}</p>
        </div>
      </div>
    </Link>
  );
}

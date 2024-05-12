import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function FeaturedRooms() {
    const [featuredRooms, setFeaturedRooms] = useState([]);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/featuredRooms`)
        .then(res => res.json())
        .then(data => {
            setFeaturedRooms(data)
        })
    },[])
console.log(featuredRooms)
  return (
    <div className="container mx-auto my-12 lg:my-24">
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl text-[#292929] uppercase tracking-wide">Featured Rooms</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    featuredRooms.filter((f)=>f.availability !== "Unavailable").map((room)=> <div key={room._id} className="space-y-4">
                    <div>
                        <img className="h-[330px] w-full" src={room.image_url} alt="" />
                    </div>
                    <h1 className="text-2xl font-semibold text-[#7e6648]">{room.name}e</h1>
                    <p>{room.description}</p>
                    <Link to={`/room/${room._id}`}>
                    <button className="btn bg-[#153D39] border-0 text-white mt-4 hover:bg-[#f57b1d]">Book Now</button>
                    </Link>
                </div>)
                }
        </div>

    </div>
  )
}

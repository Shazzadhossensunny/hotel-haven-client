import { useEffect, useState } from "react"
import RoomsCard from "../components/RoomsCard"
import { Helmet } from "react-helmet-async"



export default function Rooms() {
  const [rooms, setRooms] = useState([])
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  // const [filteredRoom, setFilteredRoom] = useState([])

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = () => {
    fetch(`${import.meta.env.VITE_API_URL}/rooms?minPrice=${minPrice}&maxPrice=${maxPrice}`)
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
      })
      .catch((error) => console.error("Error fetching rooms:", error));
  };

  const handleFilter = () => {
    fetchRooms();
  };
  // useEffect(()=>{
  //   fetch(`${import.meta.env.VITE_API_URL}/rooms`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setRooms(data)
  //     setFilteredRoom(data)
  //   })
  // },[])

  // const availableRooms = rooms.filter(room => room.availability === 'Available')
  return (
    <div className="container mx-auto my-12 lg:my-24">
      <Helmet>
        <title>HotelHaven | Rooms</title>
      </Helmet>
      <h2 className="text-center text-5xl uppercase tracking-wider mb-10">Available Rooms</h2>
      {/* filter */}
      <div className="flex items-center pb-9 gap-5">
        <div>
          <p>Min Price</p>
          <input type="number" placeholder="Type here" value={minPrice} onChange={(e)=> setMinPrice(e.target.value)} className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <p>Max Price</p>
          <input type="number" placeholder="Type here" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="input input-bordered w-full max-w-xs" />
        </div>
        <button onClick={handleFilter} className="btn btn-primary">Filter</button>


      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          rooms.map((availableRoom)=> <RoomsCard key={availableRoom._id} availableRoom={availableRoom}></RoomsCard>)
        }

      </div>

    </div>
  )
}

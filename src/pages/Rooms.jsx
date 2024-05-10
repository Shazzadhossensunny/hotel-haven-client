import { useEffect, useState } from "react"
import RoomsCard from "../components/RoomsCard"


export default function Rooms() {
  const [rooms, setRooms] = useState([])
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/rooms`)
    .then(res => res.json())
    .then(data => {
      setRooms(data)
    })
  },[])
  const availableRooms = rooms.filter(room => room.availability === 'Available')
  return (
    <div className="container mx-auto my-12 lg:my-24">
      <h2 className="text-center text-5xl uppercase tracking-wider mb-10">Available Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          availableRooms.map((availableRoom)=> <RoomsCard key={availableRoom._id} availableRoom={availableRoom}></RoomsCard>)
        }

      </div>

    </div>
  )
}

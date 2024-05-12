import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContextComponent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";

export default function MyBookings() {
  const { user } = useContext(AuthContext);
  const [userRooms, setUserRooms] = useState([]);
  // const [startDate, setStartDate] = useState(new Date());
  const [inputValue, setInputValue] = useState(new Date());

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/myRoom/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserRooms(data);
      });
  }, [user?.email]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDateUpdate = (id, newDate) => {
    console.log(id, newDate);
    fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ startDate: newDate }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const updatedRooms = userRooms.map((room) =>
          room._id === id ? { ...room, startDate: newDate } : room
        );
        setUserRooms(updatedRooms);
      });
  };

  const handleDelete = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("delete");
          const remaining = userRooms.filter((r) => r._id !== id);
          setUserRooms(remaining);
        }
      });
  };

  return (
    <div className="container mx-auto my-12 lg:my-24">
      <Helmet>
        <title>HotelHaven | My Booking</title>
      </Helmet>
      <h2 className="text-center text-3xl lg:text-5xl uppercase tracking-wide">
        My Booking Rooms
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Price Per Night</th>
              <th>Room Size</th>
              <th>Booking Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {userRooms.map((userRoom, index) => (
              <tr key={userRoom._id}>
                <th>{index + 1}</th>
                <td>{userRoom.name}</td>
                <td>$ {userRoom.price_per_night}</td>
                <td>{userRoom.room_size}</td>
                <td>
                  <input
                    className="border p-2 rounded-md"
                    type="date"
                    onChange={handleChange}
                    defaultValue={
                      new Date(userRoom.startDate).toISOString().split("T")[0]
                    }
                  />
                </td>

                <td>
                  <button
                    onClick={() => handleDateUpdate(userRoom._id, inputValue)}
                    className="btn btn-success"
                  >
                    Update Date
                  </button>
                  <button
                    onClick={() => handleDelete(userRoom._id)}
                    className="btn btn-error"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { useContext } from "react";
import { Link, NavLink} from "react-router-dom";
import { AuthContext } from "../Context/AuthContextComponent";
import { toast } from "react-toastify";

export default function Navbar() {
  const {user,logOut, loading}= useContext(AuthContext)

  if (loading) {
    return (
      <div className=" h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleLogOut = () => {
    logOut()
    .then(()=>{
      toast.success("Sign Out");
    })
    .catch((error)=>{
      console.log(error.message)
    })

  }
  return (
    <nav className="bg-[#1c1c1d]">
      <div className="container mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="text-lg font-semibold">
                <NavLink to='/rooms'>Rooms</NavLink>

              </li>
              <li className="text-lg font-semibold">
                <NavLink to='/myBookings'>My Bookings</NavLink>
              </li>
              </ul>
            </div>
            <Link to="/" className="text-2xl lg:text-4xl font-semibold uppercase text-white">
              HotelHaven
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-7">
              <li className="text-lg font-semibold text-white">
                <NavLink to='/rooms'>Rooms</NavLink>

              </li>
              <li className="text-lg font-semibold text-white">
                <NavLink to='/myBookings'>My Bookings</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {
              user ? <Link onClick={handleLogOut} className="btn bg-[#153D39] text-white border-0 text-lg hover:bg-[#f57b1d]">LogOut</Link> : <Link to='/login' className="btn bg-[#153D39] text-white border-0 text-lg hover:bg-[#f57b1d]">Login</Link>
            }


          </div>
        </div>
      </div>
    </nav>
  );
}

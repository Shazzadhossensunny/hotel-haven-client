import { Link, NavLink} from "react-router-dom";

export default function Navbar() {
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
            <a className="btn bg-[#153D39] text-white border-0 text-lg hover:bg-[#f57b1d]">Login</a>
            <a className="btn bg-[#153D39] text-white border-0 text-lg hover:bg-[#f57b1d]">LogOut</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

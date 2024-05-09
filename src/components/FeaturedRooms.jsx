import { Link } from "react-router-dom";


export default function FeaturedRooms() {

  return (
    <div className="container mx-auto my-12 lg:my-24">
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl text-[#292929] uppercase tracking-wide">Featured Rooms</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
                <div>
                    <img src="https://i.postimg.cc/Z5HgKH00/occenfront.jpg" alt="" />
                </div>
                <h1 className="text-2xl font-semibold text-[#7e6648]">Executive Suite</h1>
                <p>Elevate your stay with our executive suite. Enjoy panoramic city views, a separate living area, and personalized service.</p>
                <Link>
                <button className="btn bg-[#153D39] border-0 text-white mt-4 hover:bg-[#f57b1d]">Book Now</button>
                </Link>
            </div>
            <div className="space-y-4">
                <div>
                    <img src="https://i.postimg.cc/Z5HgKH00/occenfront.jpg" alt="" />
                </div>
                <h1 className="text-2xl font-semibold text-[#7e6648]">Executive Suite</h1>
                <p>Elevate your stay with our executive suite. Enjoy panoramic city views, a separate living area, and personalized service.</p>
                <Link>
                <button className="btn bg-[#153D39] border-0 text-white mt-4 hover:bg-[#f57b1d]">Book Now</button>
                </Link>
            </div>
            <div className="space-y-4">
                <div>
                    <img src="https://i.postimg.cc/Z5HgKH00/occenfront.jpg" alt="" />
                </div>
                <h1 className="text-2xl font-semibold text-[#7e6648]">Executive Suite</h1>
                <p>Elevate your stay with our executive suite. Enjoy panoramic city views, a separate living area, and personalized service.</p>
                <Link>
                <button className="btn bg-[#153D39] border-0 text-white mt-4 hover:bg-[#f57b1d]">Book Now</button>
                </Link>
            </div>


        </div>

    </div>
  )
}

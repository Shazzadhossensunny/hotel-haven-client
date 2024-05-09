import { HiOutlineMailOpen } from "react-icons/hi";
export default function NewsLetter() {
  return (
    <div className="bg-[#f1eee3]">
      <div className="container mx-auto py-14 lg:py-24">
        <div className="flex items-center justify-center flex-wrap gap-5">
        <HiOutlineMailOpen className="text-3xl lg:text-5xl"></HiOutlineMailOpen>
          <h2 className="text-3xl lg:text-5xl">Join our weekly Newsletter</h2>
          <div className="join">
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered join-item"
            />
            <button className="btn bg-[#153D39] text-white hover:bg-[#f57b1d] join-item">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

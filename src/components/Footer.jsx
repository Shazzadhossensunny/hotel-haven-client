import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer footer-center px-10 py-12 lg:py-24 bg-[#1c1c1d]">
      <aside className="space-y-6">
      <Link to="/" className="text-2xl lg:text-4xl font-semibold uppercase text-white">
              HotelHaven
            </Link>
        <p className="text-white">
          Copyright © 2024 <span className="text-orange-400">Sunny</span>. - All right reserved
        </p>
        <div  className="text-white">
          <h2 className="text-lg font-semibold mb-3">General Inquiries</h2>
          <p>

          <a href="mailto:contact@info.com" className="btn-link text-white">contact@info.com</a>
          </p>
          <p>

          <a href="tel:+985648274557" className="btn-link text-white">+985648274557</a>
          </p>
        </div>
        <div className="flex text-2xl gap-5 cursor-pointer text-white">
          <FaFacebookF id="my-anchor-facebook"></FaFacebookF>
          <Tooltip
            anchorSelect="#my-anchor-facebook"
            content="Facebook"
          ></Tooltip>
          <FaTwitter id="my-anchor-twitter"></FaTwitter>
          <Tooltip
            anchorSelect="#my-anchor-twitter"
            content="Twitter"
          ></Tooltip>
          <FaLinkedinIn id="my-anchor-linkedin"></FaLinkedinIn>
          <Tooltip
            anchorSelect="#my-anchor-linkedin"
            content="Linkedin"
          ></Tooltip>
        </div>
      </aside>
    </footer>
  )
}

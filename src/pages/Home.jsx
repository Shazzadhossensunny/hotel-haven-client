import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Map from "../components/Map";
import NewsLetter from "../components/NewsLetter";
import Reviews from "../components/Reviews";



export default function Home() {
  return (
    <div>
      <Helmet>
        <title>HotelHaven | Home</title>
      </Helmet>
      <Banner></Banner>
      <FeaturedRooms></FeaturedRooms>
      <NewsLetter></NewsLetter>
      <Reviews></Reviews>
      <Map></Map>

    </div>
  )
}

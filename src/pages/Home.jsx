import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Map from "../components/Map";
import NewsLetter from "../components/NewsLetter";
import Reviews from "../components/Reviews";



export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedRooms></FeaturedRooms>
      <NewsLetter></NewsLetter>
      <Reviews></Reviews>
      <Map></Map>

    </div>
  )
}

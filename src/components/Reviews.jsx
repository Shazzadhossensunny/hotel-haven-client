import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([])
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/review`)
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])
  console.log(reviews)
  return (
    <div className="p-12 md:p-24">
      <div className="w-full lg:w-1/2 mx-auto">
        <h3 className="text-5xl uppercase tracking-wide">What Clients Say</h3>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {
            reviews.map((rev, index)=> <SwiperSlide key={index}>
            <div className="space-y-5 mt-10">
              <h2 className="text-2xl font-bold">Rating : {rev.rating}</h2>
              <p>
                {rev.comment}
              </p>
                <div>
                  <h3 className="font-bold uppercase">{rev.name}</h3>
                  <p className="text-xs">{new Date(rev.timestamp).toLocaleString()}</p>
                </div>

            </div>
          </SwiperSlide>)
          }


        </Swiper>
      </div>
    </div>
  );
}

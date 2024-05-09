import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper/modules";
import ellipse1 from "../assets/ellipse1.webp";
import ellipse2 from "../assets/ellipse2.webp";
import ellipse3 from "../assets/ellipse3.webp";

export default function Reviews() {
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
          <SwiperSlide>
            <div className="space-y-5 mt-10">
              <h2 className="text-2xl font-bold">Rating : 4.9</h2>
              <p>
                Their professionalism, attention to detail, and creativity
                exceeded our expectations. Communication was seamless, and the
                final artworks are stunning. Highly recommend!
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <img src={ellipse1} alt="" />
                </div>
                <div>
                  <h3 className="font-bold">Elaine G.</h3>
                  <p className="text-xs">Private Job</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="space-y-5 mt-10">
              <h2 className="text-2xl font-bold">Rating : 4.9</h2>
              <p>
                Their professionalism, creativity, and attention to detail truly
                impressed me. I highly recommend their services to anyone in
                need of top-quality artwork.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <img src={ellipse2} alt="" />
                </div>
                <div>
                  <h3 className="font-bold">Margaret C.</h3>
                  <p className="text-xs">Advocate</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="space-y-5 mt-10">
              <h2 className="text-2xl font-bold">Rating : 4.9</h2>
              <p>
                Their attention to detail, communication, and ability to bring
                our vision to life were remarkable. I'm thrilled with the
                results and wouldn't hesitate to work with them again in the
                future.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <img src={ellipse3} alt="" />
                </div>
                <div>
                  <h3 className="font-bold">Chole H.</h3>
                  <p className="text-xs">CEO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

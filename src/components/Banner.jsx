import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import bannerImg from '../assets/banner.jpg'
import bannerImg2 from '../assets/banner2.jpg'
import bannerImg3 from '../assets/banner3.jpg'

export default function Banner() {
  return (
    <Swiper autoHeight={true} navigation={true} loop={true} modules={[Navigation]}>
    <SwiperSlide className='relative'>
      <div className='overlay'></div>
      <img src={bannerImg} className="w-full h-full lg:h-[600px] object-cover object-center" />
    <div className='absolute w-10/12 lg:w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
      <h1 className='text-white text-3xl lg:text-5xl uppercase font-semibold mb-4'>Discover Your Dream Stay: Book Top Hotels Now!</h1>
      <p className='text-white text-lg hidden md:block'>Find your ideal hotel effortlessly with our intuitive platform. Book now for unbeatable deals and seamless reservations!</p>
    </div>
    </SwiperSlide>
    <SwiperSlide className='relative'>
    <div className='overlay'></div>
    <img src={bannerImg2} className="w-full h-full lg:h-[600px] object-cover object-center" />
    <div className='absolute w-10/12 lg:w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
      <h1 className='text-white text-3xl lg:text-5xl font-semibold mb-4'>Unlock Exclusive Deals: Find Your Perfect Hotel</h1>
      <p className='text-white text-lg hidden md:block'>Explore a world of accommodations tailored to your needs. From luxury getaways to budget stays, we've got you covered. Book your next adventure today!</p>
    </div>
    </SwiperSlide>
    <SwiperSlide className='relative'>
    <div className='overlay'></div>
    <img src={bannerImg3} className="w-full h-full lg:h-[600px] object-cover object-center" />
    <div className='absolute w-10/12 lg:w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
      <h1 className='text-white text-3xl lg:text-5xl font-semibold mb-4'>Explore & Book: Your Ideal Hotel Awaits</h1>
      <p className='text-white text-lg hidden md:block'>Discover top-rated hotels at your fingertips. With our easy-to-use interface and exclusive offers, booking your dream stay has never been simpler. Start your journey now!</p>
    </div>
    </SwiperSlide>
  </Swiper>

  )
}

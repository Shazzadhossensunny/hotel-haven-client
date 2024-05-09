import bannerImg from '../assets/banner.jpg'

export default function Banner() {
  return (
    <div className='w-full bg-center bg-cover h-screen relative overlay'
    style={{
        backgroundImage: `url(${bannerImg})`,
      }}>
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='text-center space-y-7 relative z-30'>
            <h2 className='text-3xl lg:text-5xl font-semibold uppercase tracking-wider text-white'>Welcome TO</h2>
            <div className='divi'></div>
            <h1 className='text-4xl lg:text-6xl uppercase tracking-wider text-white font-bold'>Hotel Haven</h1>
            <p className='text-lg text-white'>The best hotel reservation in the world!</p>
            </div>

        </div>

    </div>
  )
}

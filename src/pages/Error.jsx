
import { Link } from 'react-router-dom'
import errorImg from '../assets/error.jpg'
export default function Error() {
  return (
    <div className='container mx-auto my-12 lg:my-24'>
      <div >
        <img className='h-full md:h-[400] lg:h-[700px] mx-auto w-full' src={errorImg} alt="" />
      </div>
      <Link to='/' className='flex justify-center'>
       <button className='btn bg-[#153D39] hover:bg-[#f57b1d] text-white'>Go to Home</button>
      </Link>

    </div>
  )
}

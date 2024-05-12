import { useState } from 'react';
import giftImg from '../assets/gift.png'
import { IoMdClose } from "react-icons/io";

export default function PopUp() {
    const [showPopup, setShowPopup] = useState(false);

    window.onload = function(){
        setTimeout(function(){
            setShowPopup(true)
        },2000)
    }
    const handleClose = () => {
        setShowPopup(false)
    }
  return (
    <div>
         {
        showPopup &&  <div className="popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="contentBox relative w-[300px] lg:w-[600px] h-auto lg:h-[400px] bg-white rounded-2xl flex flex-col lg:flex-row shadow">
            <div onClick={handleClose} className="close absolute top-0 lg:top-5 right-0 lg:right-5 w-10 h-10 bg-[#ff4d54] rounded-full z-10 cursor-pointer"><IoMdClose className='w-full h-full text-white'></IoMdClose></div>
            <div className="imgBx relative w-[300px] h-[200px] lg:h-[400px] -translate-y-12 lg:-translate-y-0 flex justify-center items-center">
                <img className='relative max-w-[250px] z-10' src={giftImg} alt="" />
            </div>
            <div className="content relative w-[300px] h-auto lg:h-[400px] text-center lg:text-left flex justify-center items-center pb-5 lg:pb-0">
                <div className='space-y-4'>
                <h3 className='text-[#333] text-3xl'>Special Offer</h3>
                <h2 className='text-5xl text-[#ff4d54] font-bold'>60<sup>%</sup><span className='text-[#333] text-2xl uppercase'>Off</span> </h2>
                <p>Discount on your first hotel room booking. </p>
                <button className='py-2 px-5 bg-[#ff4d54] text-white rounded-lg'>Get The Deal</button>

                </div>

            </div>

        </div>

    </div>
    }

    </div>


  )
}

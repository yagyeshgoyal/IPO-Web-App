import React from 'react'
import {assest} from '../assets/assets'

function Navbar() {
  return (
    <div className='flex justify-center items-center justify-between pl-[15px] pr-[15px]'>
        <div className='flex justify-center items-center'>
          <img src={assest.android} className='w-[85px] h-[45px] ' />
          <p className='font-bold text-[30px]'>BLUESTOCK</p>
        </div>

        <div className = 'flex justify-center items-center gap-6 text-[10px] text-[#9A9A9A] font-bold  sm:visible '>
          <p>IPO</p>
          <p>COMMUNITY</p>
          <p>PRODUCT</p>
          <p>BROKER</p>
          <p>LIVE NEWS</p>
        </div>

        <div className='flex justify-center itemx-center text-[10px] font-bold text-[#9A9A9A] gap-6'>
          <button>Sign In</button>
          <button className='bg-blue-500 text-white p-[5px] pl-[10px] pr-[10px] rounded '>Sign Up New</button>
        </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import {assest} from '../assets/assets'

function StockInvestor() {
  return (
    <div className='bg-gray-200 p-5 '>
      <div className='font-bold flex justify-between items-center'>
        <div className='text-[10px]'>
          <p className='text-gray-500'>Home &#62; <span className='text-blue-500'>Shark Investor</span> </p>
          <p className='text-[25px]'>Shark Investor</p>
          <p className='text-gray-500'>Look into the portfolio of these Super Investors to find out their favourite stocks.</p>
        </div>
        <div>
          <p className='text-gray-500 text-[10px]'>Search by Name</p>
          <input type='text' placeholder='eg. Damani' className='mt-2 text-[10px] rounded p-2'></input>
        </div>
      </div>
      <div className='grid  mt-7 sm:grid-cols-4 gap-x-24 gap-y-16'>
        <div className='w-[228px] h-[353px] bg-white rounded flex-col justify-center items-center p-[20px]'>
          <img src={assest.rakesh} className='w-[228px] h-[180px] ' />
          <p className='text-[16px] text-center font-bold mt-4'>Rakesh Jhunjhunwala</p>
          <p className = 'text-[12px] mt-4'>He starting inversment in the 90’s His inversement st....</p>
          <button className = 'bg-blue-700 text-white text-[12px] p-1 px-5 rounded ml-[35px] mt-4'>View Holdings</button>
        </div>
        <div className='w-[228px] h-[353px] bg-white rounded flex-col justify-center items-center p-[20px]'>
          <img src={assest.anil} className='w-[228px] h-[180px] ' />
          <p className='text-[16px] text-center font-bold mt-4'>Anil Goel</p>
          <p className = 'text-[12px] mt-4'>He starting inversment in the 90’s His inversement st....</p>
          <button className = 'bg-blue-700 text-white text-[12px] p-1 px-5 rounded ml-[35px] mt-4'>View Holdings</button>
        </div>
        <div className='w-[228px] h-[353px] bg-white rounded flex-col justify-center items-center p-[20px]'>
          <img src={assest.ashishdhawan} className='w-[228px] h-[180px] ' />
          <p className='text-[16px] text-center font-bold mt-4'>Ashish Dhawan</p>
          <p className = 'text-[12px] mt-4'>He starting inversment in the 90’s His inversement st....</p>
          <button className = 'bg-blue-700 text-white text-[12px] p-1 px-5 rounded ml-[35px] mt-4'>View Holdings</button>
        </div>
        <div className='w-[228px] h-[353px] bg-white rounded flex-col justify-center items-center p-[20px]'>
          <img src={assest.ashish} className='w-[228px] h-[180px] ' />
          <p className='text-[16px] text-center font-bold mt-4'>Ashish Kacholia</p>
          <p className = 'text-[12px] mt-4'>He starting inversment in the 90’s His inversement st....</p>
          <button className = 'bg-blue-700 text-white text-[12px] p-1 px-5 rounded ml-[35px] mt-4'>View Holdings</button>
        </div>
        <div className='w-[228px] h-[353px] bg-white rounded flex-col justify-center items-center p-[20px]'>
          <img src={assest.dolly} className='w-[228px] h-[180px] ' />
          <p className='text-[16px] text-center font-bold mt-4'>Dolly Rajeev Khanna</p>
          <p className = 'text-[12px] mt-4'>He starting inversment in the 90’s His inversement st....</p>
          <button className = 'bg-blue-700 text-white text-[12px] p-1 px-5 rounded ml-[35px] mt-4'>View Holdings</button>
        </div>
        <div className='w-[228px] h-[353px] bg-white rounded flex-col justify-center items-center p-[20px]'>
          <img src={assest.hemendra} className='w-[228px] h-[180px] ' />
          <p className='text-[16px] text-center font-bold mt-4'>Hemendra Kothari</p>
          <p className = 'text-[12px] mt-4'>He starting inversment in the 90’s His inversement st....</p>
          <button className = 'bg-blue-700 text-white text-[12px] p-1 px-5 rounded ml-[35px] mt-4'>View Holdings</button>
        </div>
        <div className='w-[228px] h-[353px] bg-white rounded flex-col justify-center items-center p-[20px]'>
          <img src={assest.nemish} className='w-[228px] h-[180px] ' />
          <p className='text-[16px] text-center font-bold mt-4'>Nemish Shah </p>
          <p className = 'text-[12px] mt-4'>He starting inversment in the 90’s His inversement st....</p>
          <button className = 'bg-blue-700 text-white text-[12px] p-1 px-5 rounded ml-[35px] mt-4'>View Holdings</button>
        </div>
        <div className='w-[228px] h-[353px] bg-white rounded flex-col justify-center items-center p-[20px]'>
          <img src={assest.porinju} className='w-[228px] h-[180px] ' />
          <p className='text-[16px] text-center font-bold mt-4'>Porinju Veliyath </p>
          <p className = 'text-[12px] mt-4'>He starting inversment in the 90’s His inversement st....</p>
          <button className = 'bg-blue-700 text-white text-[12px] p-1 px-5 rounded ml-[35px] mt-4'>View Holdings</button>
        </div>
        <div className='w-[228px] h-[353px] bg-white rounded flex-col justify-center items-center p-[20px]'>
          <img src={assest.radha} className='w-[228px] h-[180px] ' />
          <p className='text-[16px] text-center font-bold mt-4'>Radhakishan Damani </p>
          <p className = 'text-[12px] mt-4'>He starting inversment in the 90’s His inversement st....</p>
          <button className = 'bg-blue-700 text-white text-[12px] p-1 px-5 rounded ml-[35px] mt-4'>View Holdings</button>
        </div>
        <div className='w-[228px] h-[353px] bg-white rounded flex-col justify-center items-center p-[20px]'>
          <img src={assest.sunil} className='w-[228px] h-[180px] ' />
          <p className='text-[16px] text-center font-bold mt-4'>Sunil Singhania </p>
          <p className = 'text-[12px] mt-4'>He starting inversment in the 90’s His inversement st....</p>
          <button className = 'bg-blue-700 text-white text-[12px] p-1 px-5 rounded ml-[35px] mt-4'>View Holdings</button>
        </div>
        <div className='w-[228px] h-[353px] bg-white rounded flex-col justify-center items-center p-[20px]'>
          <img src={assest.vijay} className='w-[228px] h-[180px] ' />
          <p className='text-[16px] text-center font-bold mt-4'>Vijay Kedia</p>
          <p className = 'text-[12px] mt-4'>He starting inversment in the 90’s His inversement st....</p>
          <button className = 'bg-blue-700 text-white text-[12px] p-1 px-5 rounded ml-[35px] mt-4'>View Holdings</button>
        </div>
        <div className='w-[228px] h-[353px] bg-white rounded flex-col justify-center items-center p-[20px]'>
          <img src={assest.anil} className='w-[228px] h-[180px] ' />
          <p className='text-[16px] text-center font-bold mt-4'>Anil Goel</p>
          <p className = 'text-[12px] mt-4'>He starting inversment in the 90’s His inversement st....</p>
          <button className = 'bg-blue-700 text-white text-[12px] p-1 px-5 rounded ml-[35px] mt-4'>View Holdings</button>
        </div>

      </div>
    </div>
  )
}

export default StockInvestor

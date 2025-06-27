import React from 'react'
import {assest} from '../assets/assets'

const card = ({name,image,price,open,close,issue,listing}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 font-sans text-gray-700">
      <header className="mb-6 flex gap-6">
        <img src={image} className='w-[60px]'/>
        <h1 className="text-md font-semibold flex items-center space-x-2">
          <span className="text-blue-500 font-semibold">{name}</span>
        </h1>
      </header>

      <section className="grid grid-cols-3 gap-y-4 gap-x-6 mb-6">
        <div>
          <p className="text-xs text-gray-400">PRICE BAND</p>
          <p className="text-sm font-medium text-gray-900">{price}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">OPEN</p>
          <p className="text-sm font-medium text-gray-900">{open}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">CLOSE</p>
          <p className="text-sm font-medium text-gray-900">{close}</p>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-x-4 gap-y-2 items-center">
        <div>
          <p className="text-xs text-gray-400">ISSUE SIZE</p>
          <p className="text-sm font-bold text-gray-900">{issue}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">ISSUE TYPE</p>
          <p className="uppercase text-xs font-semibold  rounded  py-1 text-gray-700 cursor-default select-none">
            Book Built
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-400">LISTING DATE</p>
          <p className="text-sm font-bold text-gray-900">{listing}</p>
        </div>
      </section>

      <div className="mt-6 flex space-x-3">
        <button className="bg-blue-200 text-blue-700 text-xs font-semibold rounded px-3 py-1 border border-blue-400 cursor-pointer hover:bg-blue-300 transition">
          RHP
        </button>
        <button className="bg-red-500 text-white text-xs font-semibold rounded px-3 py-1 border border-red-600 cursor-pointer hover:bg-red-600 transition">
          DRHP
        </button>
      </div>
    </div>
  )
}

export default card;

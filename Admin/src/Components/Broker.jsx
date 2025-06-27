import React from 'react';
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoPeopleSharp } from "react-icons/io5";
import { BsCursorFill } from "react-icons/bs";
import { IoCheckbox } from "react-icons/io5";
import {assest} from '../assets/assets'


function Broker({name,color,image}){
    return (
        <div className=" rounded flex items-center justify-between py-4 pb-[25px] px-4 mb-[25px] mx-[16px] text-align"
        style={{ backgroundColor: color }}>
            <div>
                <p className='font-bold text-[20px]'>{name}</p>
                <div className='flex' >
                    <FaStar color='yellow'/>
                    <FaStar color='yellow'/>
                    <FaStar color='yellow'/>
                    <FaStar color='yellow'/>
                    <FaStarHalf color='yellow'/>
                </div>
                <div className='flex items-center gap-6 mt-[5px]'>
                    <div>
                        <div className='flex items-center gap-2'>
                            <AiFillMessage />
                            <p className='text-[13px] '>15K</p>
                        </div>
                        <p className='text-[13px]'>Reviews</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            <IoPeopleSharp />
                            <p className='text-[13px] '>50.2K</p>
                        </div>
                        <p className='text-[13px]'>Accounts</p>
                    </div>
                </div>

                <p className='text-[13px] mt-[5px]'>Open Demat A/c for FREE</p>
                <div className='flex items-center gap-4 text-[11px] mt-[6px]'>
                    <div className='flex bg-white items-center gap-1 rounded  px-2'>
                        <p>Open A/c</p>
                        <BsCursorFill/>
                    </div>
                    <p className='bg-white px-2 rounded'>Learn More</p>
                </div>
            </div>
            <div className='flex flex-col justify-between gap-2'>
                <div className='flex items-center gap-2'>
                    <IoCheckbox color='green'/>
                    <p className='text-[14px]'>Equity</p>
                </div>
                <div className='flex items-center gap-2'>
                    <IoCheckbox color='green'/>
                    <p className='text-[14px]'>Commodity</p>
                </div>
                <div className='flex items-center gap-2'>
                    <IoCheckbox color='green'/>
                    <p className='text-[14px]'>Currency</p>
                </div>
                <div className='flex items-center gap-2'>
                    <IoCheckbox color='green'/>
                    <p className='text-[14px]'>Futures</p>
                </div>
                <div className='flex items-center gap-2'>
                    <IoCheckbox color='green'/>
                    <p className='text-[14px]'>Options</p>
                </div>
            </div>
            <div className='flex flex-col justify-between text-[11px]'>
                <div>
                    <p>A/C Opening Charge</p>
                    <p>₹ Rs. 0</p>
                </div>
                <div>
                    <p>Maintenance Charge</p>
                    <p>₹300</p>
                </div>
                <div>
                    <p>Delivery Brokerage</p>
                    <p>₹20</p>
                </div>
                <div>
                    <p>Intraday Brokerage</p>
                    <p>₹20</p>
                </div>
            </div>
            <div>
                <img src={image} className='w-[95px] mt-[20px]' />
            </div>
        </div>
    )
}

export default Broker;
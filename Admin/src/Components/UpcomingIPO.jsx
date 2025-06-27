import React from 'react'
import Card from './card'
import {assest} from '../assets/assets'

const UpcomingIPO = () => {
  return (
    <div className='bg-gray-200 pb-[500px]'>
        <div className='font-bold flex justify-between items-center px-4'>
            <div className='text-[10px]'>
                <p className=''><span className='text-blue-500'>Bluestock &#62; IPO </span>&#62; Upcoming IPO </p>
                <p className='text-[25px]'>Upcoming IPO</p>
                <p className='text-gray-500'>Companies that have filled for an IPO with SEBI. Few details might be disclosed by the companies later.</p>
            </div>
        </div>
        <div className='grid  mt-7 sm:grid-cols-3 gap-x-24 gap-y-16'>
            <Card name="Nova Agritech Ltd." image={assest.nova} price="Rs 39 - 41" open="2024-01-22" close="2024-01-24" issue="14.31 Cr." listing="2024-01-30"/>
            <Card name="EPACK Durable Ltd." image={assest.epack} price="Rs 39 - 41" open="2024-01-22" close="2024-01-24" issue="14.31 Cr." listing="2024-01-30"/>
            <Card name="RK Swamy Ltd." image={assest.rk} price="Rs 39 - 41" open="2024-01-22" close="2024-01-24" issue="14.31 Cr." listing="2024-01-30"/>
            <Card name="Oravel Stays Ltd." image={assest.oravel} price="Rs 39 - 41" open="2024-01-22" close="2024-01-24" issue="14.31 Cr." listing="2024-01-30"/>
            <Card name="Imagine marketing Ltd." image={assest.boat} price="Rs 39 - 41" open="2024-01-22" close="2024-01-24" issue="14.31 Cr." listing="2024-01-30"/>
            <Card name="Kids Clinic India Ltd." image={assest.kids} price="Rs 39 - 41" open="2024-01-22" close="2024-01-24" issue="14.31 Cr." listing="2024-01-30"/>
            <Card name="OLA Electric Mobility Ltd." image={assest.ola} price="Rs 39 - 41" open="2024-01-22" close="2024-01-24" issue="14.31 Cr." listing="2024-01-30"/>
            <Card name="One Mobikwik Systems Ltd." image={assest.one} price="Rs 39 - 41" open="2024-01-22" close="2024-01-24" issue="14.31 Cr." listing="2024-01-30"/>
            <Card name="LeTravenues Technology" image={assest.ixigo} price="Rs 39 - 41" open="2024-01-22" close="2024-01-24" issue="14.31 Cr." listing="2024-01-30"/>
            <Card name="CMR Green Technologies" image={assest.cmr} price="Rs 39 - 41" open="2024-01-22" close="2024-01-24" issue="14.31 Cr." listing="2024-01-30"/>
            <Card name="Wellness Forever" image={assest.wellness} price="Rs 39 - 41" open="2024-01-22" close="2024-01-24" issue="14.31 Cr." listing="2024-01-30"/>
            <Card name="PKH Ventures Ltd." image={assest.pkh} price="Rs 39 - 41" open="2024-01-22" close="2024-01-24" issue="14.31 Cr." listing="2024-01-30"/>
            
        </div>

        <div className='p-10 mt-[30px]'>
            <p className='font-semibold text-[18px]'>Frequently Asked Questions?</p>
            <p className='text-[12px]'>Find answers to common questions that come in your mind related to IPO.</p>
        </div>

        <div className='bg-white p-5 mx-10 rounded'>
            <div className='flex justify-between py-4'>
                <p>How to Subscribe to an IPO?</p>
                <p>+</p>
            </div>
            <div className='text-[14px]'>
                <p>* Step 1: Login to your respective service provider.</p>
                <p>* Step 2: Click on the IPO button.</p>
                <p>* Step 3: Select the IPO you want to bid and enter the relevant details.</p>
                <p>* Step 4: Your subscriotion will be completed once you make the payment or give permission.</p>

            </div>
        </div>
            
        <div className='bg-white p-5 mx-10 rounded mt-5 flex justify-between'>
            <p>Should I buy an IPO first day</p>
            <p>-</p>
        </div>

        <div className='bg-white p-5 mx-10 rounded mt-5 flex justify-between'>
            <p>How do you know if an IPO is good?</p>
            <p>-</p>
        </div>

        <div className='bg-white p-5 mx-10 rounded mt-5 flex justify-between'>
            <p>How to check IPO start date?</p>
            <p>-</p>
        </div>

        <div className='bg-white p-5 mx-10 rounded mt-5 flex justify-between'>
            <p>What is issue size?</p>
            <p>-</p>
        </div>

        <div className='bg-white p-5 mx-10 rounded mt-5 flex justify-between'>
            <p>How many shares in a lot?</p>
            <p>-</p>
        </div>
      
    </div>
  )
}

export default UpcomingIPO

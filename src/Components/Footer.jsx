import React, { useState } from 'react'

const Footer = () => {
    const typeOfStays = ['Aparthotel rentals', 'Chalet rentals', 'Houseboat rentals', 'Luxury rentals', 'Rentals with lake access', 'Flat rentals',
        'Aparthotel rentals', 'Chalet rentals', 'Houseboat rentals', 'Luxury rentals', 'Rentals with lake access', 'Flat rentals',
        'Aparthotel rentals', 'Chalet rentals', 'Houseboat rentals', 'Luxury rentals', 'Rentals with lake access', 'Flat rentals']
    const [stayType, setStayType] = useState(typeOfStays)
    const [stayTypeKey, setStayTypeKey] = useState('typeOfStays')

    
    const uniqueStays = ['Yurt rentals', 'Castle rentals', 'Cabin rentals', 'Luxury cabins', 'Villa rentals', 'Holiday chalets']
    const thingsToDo = ['Things to do', 'Entertainment', 'Sightseeing', 'Wellness', 'Art culture', 'Food and drink', 'Nature and outdoors', 'Sports activities']

    return (
        <div className='mt-16'>
            <p className='text-2xl font-medium text-gray-800 mb-1'>Destinations to explore</p>
            <div className='flex'>
                <div onClick={() => { setStayType(typeOfStays); setStayTypeKey('typeOfStays') }} className={`${stayTypeKey === 'typeOfStays' ? 'border-b-2 border-gray-600' : ''} cursor-pointer text-sm font-medium`}><p className={`py-1 px-2 rounded-lg transition duration-300 hover:bg-gray-100 mb-1`}>Other types of stays</p></div>
                <div onClick={() => { setStayType(uniqueStays); setStayTypeKey('uniqueStays') }} className={`${stayTypeKey === 'uniqueStays' ? 'border-b-2 border-gray-600' : ''} ml-2 cursor-pointer text-sm font-medium`}><p className={`py-1 px-2 hover:bg-gray-100 transition duration-300 rounded-lg mb-1`}>Unique stays</p></div>
                <div onClick={() => { setStayType(thingsToDo); setStayTypeKey('thingsToDo') }} className={`${stayTypeKey === 'thingsToDo' ? 'border-b-2 border-gray-600' : ''} ml-2 cursor-pointer text-sm font-medium`}><p className={`py-1 px-2 hover:bg-gray-100 transition duration-300 rounded-lg mb-1`}>Things to do</p></div>
            </div>
            <hr className='border border-gray-200'></hr>
            <div className='w-full flex flex-wrap'>
                {stayType.map((el, index) => {
                    return <div>
                        <div key={index} className="text-nowrap w-[200px] items-left justify-center rounded-md mt-8">
                            <p className='font-normal tracking-tight'>{el}</p>
                            <p className='text-sm font-medium text-gray-500 text-left'>India</p>
                        </div>
                    </div>
                })}
            </div>

            <div className='mt-16 mb-8 flex'>
                <p className='text-md font-medium underline'>Airbnb</p>&nbsp;
                <p>{` > India`}</p>
            </div>
            <hr></hr>
            <div className='my-8 text-sm'>© 2024 Airbnb, Inc. Privacy . Terms . Site Map</div>
        </div>
    )
}

export default Footer
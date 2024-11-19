import React, { useState } from 'react'
import airbnblogo from '../images/airbnb.png'
import search from '../images/search.png'
import share from '../images/share.png'
import blackHeart from '../images/black-heart.webp'
import pinkheart from '../images/pink-heart.png'

const RentalDetailsPage = () => {

    const [save, setSave] = useState(false)

    return (
        <>
            <div className={`flex h-[80px] px-[5%] z-10 bg-white justify-between border-b py-4 w-full`}>
                <img width={'10%'} className='my-auto' src={airbnblogo} />
                <div className={`border transition duration-300 ease-out shadow-md w-[30%] mx-auto rounded-full grid grid-flow-col justify-stretch`}>
                    <div className='my-auto rounded-full pl-8 transition duration-200 hover:bg-[#ebebeb] cursor-pointer py-1'>
                        <p className='text-sm font-medium text-gray-700'>Anywhere</p>
                    </div>
                    <div className='border-l my-auto'>
                        <div className='pl-5 my-auto transition duration-200 hover:bg-[#ebebeb] cursor-pointer py-1 rounded-full'>
                            <p className='text-sm font-medium text-gray-700'>Any week</p>
                        </div>
                    </div>
                    <div className='border-l my-auto'>
                        <div className='pl-5 my-auto transition duration-200 hover:bg-[#ebebeb] cursor-pointer rounded-full flex justify-between pr-2'>
                            <div className='my-auto'>
                                <p className='text-sm font-medium text-gray-700'>Add guests</p>
                            </div>
                            <div className='rounded-full my-auto p-3 bg-gradient-to-r
                 from-red-500 to-pink-600 transition-transform'>
                                <img width={'12px'} className='' src={search} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <p className='text-md
           text-nowrap font-medium my-auto'>Airbnb your home</p>
                </div>
            </div>
            <div className='mx-16 pt-4'>
                <div className='flex justify-between'>
                <p className='text-3xl font-medium'>
                    Unique Bamboo tiny cottage house
                </p>
                <div className='flex'>
                <div className='flex my-auto'>
                    <img className='my-auto' width={'12px'} src={share}/>
                    <p className='underline ml-3'>Share</p>
                </div>
                <div className='w-[20%] flex my-auto'>
                    <img onClick={()=>setSave(!save)} className={`my-auto cursor-pointer ${save ? '' : ''}`} width={save ? '20px' : '35px'} src={save ? pinkheart : blackHeart}/>
                    <p className='my-auto underline'>Save</p>
                </div>
                </div>
                </div>
                <p>Image</p>
                <p>Tiny home in Coimbatore, India</p>
            </div>
        </>
    )
}

export default RentalDetailsPage

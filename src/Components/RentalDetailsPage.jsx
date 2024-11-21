import React, { useState } from 'react'
import airbnblogo from '../images/airbnb.png'
import search from '../images/search.png'
import share from '../images/share.png'
import blackHeart from '../images/black-heart.webp'
import pinkheart from '../images/pink-heart.png'
import detail1 from '../images/detail1.webp'
import star from '../images/star.webp'
import profile from '../images/profile.png'
import NP from '../images/NP.png'
import cool from '../images/cool.png'
import calendar from '../images/calendar.png'
import dropdown from '../images/dropdown.webp'
import kitchen from '../images/kitchen.png'
import { useNavigate } from 'react-router'

const RentalDetailsPage = () => {

    const [save, setSave] = useState(false)
    const navigate = useNavigate()

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
            <div className='mx-16 pt-5'>
                <div className='flex justify-between pb-5'>
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
                <div>
                    <img className='rounded-xl' width={'600px'} height={'300px'} src={detail1}/>
                </div>
                <p className='text-2xl font-medium pt-8'>Tiny home in Coimbatore, India</p>
                <p className='text-lg'>4 guests • 2 bedrooms • 2 beds • 2 bathrooms</p>
                <div className='flex'><img className='my-auto' width={'24px'} src={star}/><p className='text-lg font-medium'>4.85 . </p>&nbsp;<p className='underline text-lg my-auto font-medium'>20 reviews</p></div>
                <hr className='mt-6 mb-5'></hr>
                <div className='flex'>
                    <img className='my-auto mr-5' width={'50px'} src={profile}/>
                    <div>
                        <p className='text-lg font-medium'>Hosted by Sundar</p>
                        <p className='text-gray-500'>Superhost • 3 years hosting</p>
                    </div>
                </div>
                <hr className='mt-5 mb-6'></hr>

                <div className='flex mt-6 items-start ml-2'>
                    <img className='mr-5 mt-1' width={'25px'} src={NP}/>
                    <div>
                        <p className='text-lg font-medium'>50-min drive to Bannerghatta National Park</p>
                        <p className='text-gray-500'>This home is near the national park.</p>
                    </div>
                </div>
                <div className='flex mt-6 items-start ml-2'>
                    <img className=' mt-2 mr-5' width={'25px'} src={cool}/>
                    <div>
                        <p className='text-lg font-medium'>Designed for staying cool</p>
                        <p className='text-gray-500'>Beat the heat with the A/C and ceiling fan.</p>
                    </div>
                </div>
                <div className='flex mt-6 mb-6 ml-2 items-start'>
                    <img className='mt-2 mr-5' width={'25px'} src={calendar}/>
                    <div>
                        <p className='text-lg font-medium'>Free cancellation before 22 Dec</p>
                        <p className='text-gray-500'>Get a full refund if you change your mind.</p>
                    </div>
                </div>
                <hr></hr>
                <div className='mt-6 w-[50%]'>
                    <p className='text-lg'>
                    Our Boutique property is in BLR, off Hennur- Airport road / 4kms from Byg Brewsky Hennur. Our property is built with the theme of keeping Tattva (5 elements), where every aspect is carefully designed and executed. Our overall property is 8000 Sqft with a SBA of 2k sqft which includes 2 large bedrooms (A/C) with 2 semi Open to sky baths, lounge & dining area, a private swimming pool, half kitchen, and a large garden space. We can accommodate max 8 guests on request. Pls contact us for more info.
                    </p>
                </div>
                <hr className='my-10'></hr>
                <div>
                <p className='text-2xl font-medium'>What this place offers</p>
                <div className='grid grid-cols-2 w-[50%]'>
                <div className='flex my-2'>
                    <img className='my-auto' width={'20px'} src={kitchen}/>
                    <p className='text-lg ml-4 my-auto'>Kitchen</p>
                </div>
                <div className='flex my-2'>
                <img className='my-auto' width={'20px'} src={kitchen}/>
                    <p className='text-lg ml-4 my-auto'>Wifi</p>
                </div>
                <div className='flex my-2'>
                <img className='my-auto' width={'20px'} src={kitchen}/>
                    <p className='text-lg ml-4 my-auto'>Dedicated workspace</p>
                </div>
                <div className='flex my-2'>
                <img className='my-auto' width={'20px'} src={kitchen}/>
                    <p className='text-lg ml-4 my-auto'>Free parking on premises</p>
                </div>
                <div className='flex my-2'>
                <img className='my-auto' width={'20px'} src={kitchen}/>
                    <p className='text-lg ml-4 my-auto'>Pool</p>
                </div>
                <div className='flex my-2'>
                <img className='my-auto' width={'20px'} src={kitchen}/>
                <p className='text-lg ml-4 my-auto'>Pets allowed</p>
                </div>
                <div className='flex my-2'>
                <img className='my-auto' width={'20px'} src={kitchen}/>
                <p className='text-lg ml-4 my-auto'>TV</p>
                </div>
                <div className='flex my-2'>
                <img className='my-auto' width={'20px'} src={kitchen}/>
                <p className='text-lg ml-4 my-auto'>Exterior security cameras on property</p>
                </div>
                </div>
                </div>
            </div>

            {/* reserve card */}
            <div className='fixed bottom-0 w-[29%] right-20 bg-white rounded-t-xl pt-4 px-6 border shadow-lg'>
                <div className='flex'><p className='text-xl font-medium'>₹18,000</p><p className='my-auto ml-1'>night</p></div>
                <div className='rounded-lg border border-gray-400 mt-5'>
                    <div className='flex border-b border-gray-500'>
                        <div className='w-[50%] px-3 py-2'>
                            <p className='text-xs font-medium'>CHECK-IN</p>
                            <p className=''>12/02/24</p>
                        </div>
                        <div className='border-l border-gray-400 px-3 py-2'>
                            <p className='text-xs font-medium'>CHECK-OUT</p>
                            <p>15/02/24</p>
                        </div>
                    </div>
                    <div className='flex justify-between border-t px-3 py-2'>
                        <div>
                        <p className='text-xs font-medium'>GUESTS</p>
                        <p>1 guest</p>
                        </div>
                        <img className='my-auto cursor-pointer' width={'20px'} src={dropdown}/>
                    </div>
                </div>

            <button onClick={()=>navigate('/bookingPage')} className="w-full mt-4 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r
                 from-red-500 to-pink-600 transition-transform flex justify-center">Reserve</button>
            <p className='text-center text-md mt-4'>You won't be charged yet</p>
            <div className='flex justify-between pt-2'>
                <p className='underline text-lg'>₹13,333 x 3 nights</p>
                <p className='text-lg'>₹40,000</p>
            </div>
            <div className='flex justify-between pt-2'>
                <p className='underline text-lg'>Airbnb service fee</p>
                <p>₹5,647</p>
            </div>
            <hr className='my-5'></hr>
            <div className='flex justify-between mb-4'>
                <p className='text-lg font-medium'>Total before taxes</p>
                <p className='text-lg font-medium'>₹45,647</p>
            </div>
            </div>
        </>
    )
}

export default RentalDetailsPage

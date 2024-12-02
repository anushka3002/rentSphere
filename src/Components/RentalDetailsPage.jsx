import React, { useEffect, useState } from 'react'
import airbnblogo from '../images/airbnb.png'
import search from '../images/search.png'
import share from '../images/share.png'
import blackHeart from '../images/black-heart.webp'
import pinkheart from '../images/pink-heart.png'
import star from '../images/star.webp'
import profile from '../images/profile.png'
import NP from '../images/NP.png'
import cool from '../images/cool.png'
import calendar from '../images/calendar.png'
import kitchen from '../images/kitchen.png'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleData } from '../Actions/action'
import { useParams } from 'react-router-dom';
import seaView from '../images/seaView.webp';
import dishwasher from '../images/dishwasher.png';
import pool from '../images/pool.png';
import parking from '../images/premises.png';
import firepit from '../images/firepit.png';
import oven from '../images/oven.png';
import camera from '../images/camera.png';
import wifi from '../images/wifi.png';
import dining from '../images/outdoorDining.png';
import minus from '../images/minus.png';
import plus from '../images/plus.webp';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Footer from './Footer'

const RentalDetailsPage = () => {

    const { id } = useParams()
    const { details } = useSelector(state => state.details)
    const [save, setSave] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [guests, setGuests] = useState(1)
    const [checkInValue, onCheckInChange] = useState(new Date());
    const [checkOutValue, onCheckOutChange] = useState(() => {
        const initialCheckOut = new Date();
        initialCheckOut.setDate(initialCheckOut.getDate() + 1);
        return initialCheckOut;
    });

    const calculateDaysDifference = () => {
        const checkInDate = new Date(checkInValue).setHours(0, 0, 0, 0);
        const checkOutDate = new Date(checkOutValue).setHours(0, 0, 0, 0);
        const difference = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
        return difference >= 1 ? difference : 0;
    };

    useEffect(() => {
        dispatch(getSingleData(id))
    }, [id])

    return (
        <>
            <div className={`flex h-[80px] px-[5%] z-10 bg-white justify-between border-b py-4 w-full`}>
                <img onClick={() => navigate('/')} alt="img" width={'10%'} className='my-auto cursor-pointer' src={airbnblogo} />
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
                                <img alt="img" width={'12px'} className='' src={search} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <p className='text-md
                    text-nowrap font-medium my-auto'>Airbnb rentals</p>
                </div>
            </div>
            <div className='mx-16 pt-5'>
                <div className='flex justify-between pb-5'>
                    <p className='text-3xl font-medium'>
                        {details?.data?.name}
                    </p>
                    <div className='flex'>
                        <div className='flex my-auto'>
                            <img alt="img" className='my-auto' width={'12px'} src={share} />
                            <p className='underline ml-3'>Share</p>
                        </div>
                        <div className='w-[20%] flex my-auto'>
                            <img alt="img" onClick={() => setSave(!save)} className={`my-auto cursor-pointer ${save ? '' : ''}`} width={save ? '20px' : '35px'} src={save ? pinkheart : blackHeart} />
                            <p className='my-auto underline'>Save</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img alt="img" className='rounded-xl' width={'600px'} height={'300px'} src={details?.data?.images[0]} />
                </div>
                <p className='text-2xl font-medium pt-8'>{details?.data?.location}</p>
                <p className='text-lg'>{details?.data?.guests} guests • {details?.data?.bedrooms} bedrooms • {details?.data?.beds} beds • 2 bathrooms</p>
                <div className='flex'><img alt="img" className='my-auto' width={'24px'} src={star} /><p className='text-lg font-medium'>4.85 . </p>&nbsp;<p className='underline text-lg my-auto font-medium'>{details?.data?.reviews} reviews</p></div>
                <hr className='mt-6 mb-5'></hr>
                <div className='flex'>
                    <img alt="img" className='my-auto mr-5' width={'50px'} src={profile} />
                    <div>
                        <p className='text-lg font-medium'>Hosted by {details?.data?.hostedBy}</p>
                        <p className='text-gray-500'>Superhost • 3 years hosting</p>
                    </div>
                </div>
                <hr className='mt-5 mb-6'></hr>

                <div className='flex mt-6 items-start ml-2'>
                    <img alt="img" className='mr-5 mt-1' width={'25px'} src={NP} />
                    <div>
                        <p className='text-lg font-medium'>50-min drive to Bannerghatta National Park</p>
                        <p className='text-gray-500'>This home is near the national park.</p>
                    </div>
                </div>
                <div className='flex mt-6 items-start ml-2'>
                    <img alt="img" className=' mt-2 mr-5' width={'25px'} src={cool} />
                    <div>
                        <p className='text-lg font-medium'>Designed for staying cool</p>
                        <p className='text-gray-500'>Beat the heat with the A/C and ceiling fan.</p>
                    </div>
                </div>
                <div className='flex mt-6 mb-6 ml-2 items-start'>
                    <img alt="img" className='mt-2 mr-5' width={'25px'} src={calendar} />
                    <div>
                        <p className='text-lg font-medium'>Free cancellation before 22 Dec</p>
                        <p className='text-gray-500'>Get a full refund if you change your mind.</p>
                    </div>
                </div>
                <hr></hr>
                <div className='mt-6 w-[50%]'>
                    <p className='text-lg'>
                        {details?.data?.desc}
                    </p>
                </div>
                <hr className='my-10'></hr>
                <div>
                    <p className='text-2xl font-medium mb-3'>What this place offers</p>
                    <div className='grid grid-cols-2 gap-2 w-[50%]'>
                        {details?.data?.amenities.map((ame) => {
                            return <div className='flex my-2'>
                                <img alt="img" className='my-auto' width={'25px'} src={ame === 'Kitchen' ? kitchen : ame === 'Sea view' ? seaView : ame === 'Free parking on premises' ? parking :
                                    ame === 'Wifi' ? wifi : ame === 'Private pool' ? pool : ame === 'Firepit' ? firepit : ame === 'Oven' ? oven : ame === 'Dishwasher' ? dishwasher : ame ===
                                        'Security cameras on property' ? camera : ame === 'Outdoor dining area' ? dining : ''} />
                                <p className='text-lg ml-4 my-auto'>{ame}</p>
                            </div>
                        })}
                    </div>
                </div>
                <Footer />
            </div>

            {/* reserve card */}
            <div className='fixed bottom-0 w-[29%] right-20 bg-white rounded-t-xl pt-4 px-6 border shadow-lg'>
                <div className='flex'><p className='text-xl font-medium'>₹{details?.data?.price + (guests > 2 ? (guests - 2) * 900 : 0)}</p><p className='my-auto ml-1'>night</p></div>
                <div className='rounded-lg border border-gray-400 mt-5'>
                    <div className='flex border-b border-gray-500'>
                        <div className='w-[50%] px-3 py-2'>
                            <p className='text-xs font-medium'>CHECK-IN</p>
                            <DatePicker onChange={onCheckInChange} value={checkInValue} />
                        </div>
                        <div className='border-l border-gray-400 px-3 py-2'>
                            <p className='text-xs font-medium'>CHECK-OUT</p>
                            <DatePicker onChange={onCheckOutChange} value={checkOutValue} />
                        </div>
                    </div>
                    <div className='flex justify-between border-t px-3 py-2'>
                        <div>
                            <p className='text-xs font-medium'>GUESTS</p>
                            <p>{guests} {guests === 1 ? 'guest' : 'guests'}</p>
                        </div>
                        <div className='flex'><img alt='img' onClick={() => guests > 1 && setGuests(prev => prev - 1)}
                            className={`my-auto ${guests === 1 ? 'grayout' : 'cursor-pointer'} mr-2`} width={'20px'}
                            src={minus} /><img alt='img' onClick={() => setGuests(prev => prev + 1)} className='my-auto cursor-pointer' width={'26px'} src={plus} /></div>
                    </div>
                </div>
                <p className='mt-2 text-xs text-gray-500'>Children of 12 years or below don't count.</p>

                <button onClick={() => navigate(`/bookingPage/${guests}/${details?.data?.price}/${calculateDaysDifference()}/12`)} className="w-full mt-4 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r
                 from-red-500 to-pink-600 transition-transform flex justify-center">Proceed</button>
                <p className='text-center text-md mt-4'>You won't be charged yet</p>
                <div className='flex justify-between pt-2'>
                    <p className='underline text-lg'>₹{details?.data?.price + (guests > 2 ? (guests - 2) * 900 : 0)} x {calculateDaysDifference()} {calculateDaysDifference() > 1 ? 'nights' : 'night'}</p>
                    <p className='text-lg'>₹{(details?.data?.price + (guests > 2 ? (guests - 2) * 900 : 0)) * calculateDaysDifference()}</p>
                </div>
                <div className='flex justify-between pt-2'>
                    <p className='underline text-lg'>Airbnb service fee</p>
                    <p>₹ 480</p>
                </div>
                <hr className='my-5'></hr>
                <div className='flex justify-between mb-4'>
                    <p className='text-lg font-medium'>Total before taxes</p>
                    <p className='text-lg font-medium'>₹{((details?.data?.price + (guests > 2 ? (guests - 2) * 900 : 0)) * calculateDaysDifference()) + 480}</p>
                </div>
            </div>
        </>
    )
}

export default RentalDetailsPage

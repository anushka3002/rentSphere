import React, { useEffect, useState } from 'react'
import airbnblogo from '../images/airbnb.png'
import backDesign from '../images/backDesign.webp'
import search from '../images/search.png'
import chalets from '../images/chalets.webp'
import flats from '../images/flats.webp'
import houses from '../images/houses.webp'
import kitchen from '../images/kitchen.png'
import wifi from '../images/wifi.png'
import pool from '../images/pool.png'
import premises from '../images/premises.png'
import AC from '../images/AC.webp'
import star from '../images/star.webp'
import next from '../images/next.png'
import { useNavigate } from 'react-router'
import { holidayRentals } from '../constant'
import Footer from './Footer'
import DatePicker from 'react-date-picker'

const LandingPage = () => {

    const rentalType = [
        { image: chalets, name: 'Chalets', desc: 'Adventure-ready homes with après-ski style' },
        { image: flats, name: 'Flats', desc: 'Convenient locations with everyday essentials' },
        { image: houses, name: 'Houses', desc: `A space that's all yours, with room for everyone` }
    ]

    const ameneties = [
        { image: kitchen, name: 'Kitchen' },
        { image: wifi, name: 'Wifi' },
        { image: pool, name: 'Pool' },
        { image: premises, name: 'Free parking on premises' },
        { image: AC, name: 'Air conditioning' }
    ]

    const [checkInValue, onCheckInChange] = useState(new Date());
    const [checkOutValue, onCheckOutChange] = useState(() => {
        const initialCheckOut = new Date();
        initialCheckOut.setDate(initialCheckOut.getDate() + 1);
        return initialCheckOut;
    });
 
    const [showNavbar, setShowNavbar] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= window.innerHeight) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className={`flex px-[5%] bg-white justify-between py-6 w-full`}>
                <img alt="img"width={'8%'} src={airbnblogo} />
                <div className='flex'>
                    <p className='text-md text-nowrap font-medium my-auto'>Airbnb rentals</p>
                </div>
            </div>

            <div className={`fixed hidden lg:flex top-0 left-0 w-full bg-white shadow-lg z-50 px-[5%] py-2 flex justify-between 
                    transition-transform duration-500 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'
                } flex px-[5%] bg-white justify-between py-2`}>
                <img alt="img"width={'8%'} className='my-auto' src={airbnblogo} />
                <div className='flex'>
                    <p className='text-md font-medium text-nowrap my-auto'>Airbnb rentals</p>
                    <button onClick={() => navigate('/rentalspage')} class="w-full px-5 ml-8 py-3 text-white font-semibold rounded-lg bg-gradient-to-r
                 from-red-500 to-pink-600 transition-transform flex justify-center">
                        Start your search
                    </button>
                </div>
            </div>

            <div className='lg:mx-[5%]'>
                {/* 1 */}
                <div className='relative mx-6 lg:mx-0'>
                    <img alt="img"className='w-[100%] ml-0 lg:ml-[25%] lg:w-[75%] rounded-md' src={backDesign} />

                    <div className='lg:shadow-2xl lg:w-[35%] lg:absolute lg:top-1/2 lg:left-15 bg-white rounded-lg lg:p-7 lg:mt-0 mt-3 transform lg:-translate-y-1/2'>
                        <p className='text-2xl lg:text-3xl font-bold text-gray-800'>Holiday rentals in India</p>
                        <p className='mt-1 text-gray-500 text-lg leading-normal'>Find and book unique accomodation on Airbnb</p>
                        <div className='border border-gray-300 pb-2 pt-1 px-4 mt-2 rounded-lg'>
                            <div><label className='text-xs font-medium'>LOCATION</label><br />
                                <input className='outline-none' value={'India'} /></div>
                        </div>
                        <div className='flex py-2 border border-gray-300 rounded-lg mt-2'>
                            <div className='w-[50%] pl-4'><p className='text-xs font-medium '>Check in</p>
                                <DatePicker onChange={onCheckInChange} value={checkInValue} />
                            </div>
                            <div className='border-l border-gray-300 w-[50%] pl-4'><p className='text-xs font-medium'>Check out</p>
                                <DatePicker onChange={onCheckOutChange} value={checkOutValue} />
                                </div>
                        </div>
                        <button onClick={()=>navigate('/rentalspage')} class="w-full mt-4 py-3 text-white font-semibold rounded-lg bg-gradient-to-r
                        from-red-500 to-pink-600 transition-transform flex justify-center"><img alt="img"className='my-auto mr-2' width={'12px'} src={search} />
                            Search
                        </button>
                    </div>
                </div>

                {/* 2 */}
                <div className='mt-16'>
                    <p className='text-2xl font-medium text-gray-800 mx-6 lg:mx-0'>Holiday rentals for every style</p>
                    <p className='mt-1 mb-3 tracking-tight text-gray-500 text-lg leading-normal mx-6 lg:mx-0'>Get the amount of space that is right for you</p>
                    <div className='flex overflow-x-auto lg:overflow-x-hidden scroll-container'>
                        {rentalType.map((e, index) => {
                            return (
                                <div
                                    onClick={() => navigate('/rentalspage')}
                                    key={index}
                                    className={`flex-none lg:flex-auto cursor-pointer ${index === 0 ? 'lg:ml-0 ml-6' : 'ml-2'} ${index === rentalType.length - 1 ? '' : 'mr-2'}`}>
                                    <img alt="img"src={e.image} className='rounded-md'/>
                                    <p className='text-xl font-medium text-gray-800 mt-2'>{e.name}</p>
                                    <p className='mb-3 tracking-tight text-gray-500 text-lg leading-normal'>{e.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 3 */}
                <div className='mt-16'>
                    <p className='text-2xl font-medium text-gray-800 mb-8 mx-6 lg:mx-0'>Popular amenities for India holiday rentals</p>
                    <div className='flex overflow-x-auto lg:overflow-x-hidden scroll-container justify-between'>{ameneties.map((e, index) => {
                        return <div onClick={() => navigate('/rentalspage')} className={`${index === 0 ? '' : 'ml-2'} ${index === ameneties.length - 1 ? 'mr-2' : 'mr-2 lg:px-5 lg:mx-2 mx-6'}
                         cursor-pointer my-3 box-shadow w-full rounded-lg pt-6 pb-5 px-16 lg:px-5`}>
                            <img alt="img"src={e.image} width={'27px'} className='rounded-md' />
                            <p className='text-xl font-medium text-nowrap text-gray-800 mt-2'>{e.name}</p>
                        </div>
                    })}
                    </div>
                </div>

                {/* 4 */}
                <div className='mt-14 lg:mx-0 mx-6'>
                    <p className='text-2xl font-medium text-gray-800 mb-8'>Other great holiday rentals in India</p>
                    <div className='flex justify-between grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>{holidayRentals.map((e, index) => {
                        return <div onClick={() => navigate('/rentalspage')} className='relative cursor-pointer'>
                            <img alt="img"src={e.image} className='rounded-xl w-[100%] h-[250px]' />
                            <div className={`absolute top-4 ${e.type === 'Superhost' ? 'bg-gray-500 text-white border border-gray-400' : 'bg-white'} rounded-2xl text-sm font-medium px-2 pb-1 left-4`}>{e.type}</div>
                            <div className='flex justify-between items-end'>
                                <p className='text-xl font-medium text-gray-800 mt-1 tracking-tight'>{e.name}</p>
                                <div className='flex'>
                                    <img alt="img"className='my-auto' width={'20px'} src={star} />
                                    <p className='my-auto'>{e.rating}</p>
                                </div>
                            </div>
                            <p className='mb-3 tracking-tight text-gray-500 text-md leading-normal'>{e.desc}</p>
                        </div>
                    })}
                    </div>
                    <button onClick={()=>navigate('/rentalspage')} className='rounded-lg border border-gray-400 py-2 px-4 flex font-medium'>Show all <img alt="img"className='my-auto' width={'15px'} src={next} /></button>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default LandingPage
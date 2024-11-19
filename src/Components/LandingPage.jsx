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

    // const holidayRentals = [
    //     { image: rental1, name: 'Cabin in Srinagar', desc: 'An exquisite cottage with a loft near...', rating: '4.96 (56)', type: 'Guest favourite' },
    //     { image: rental2, name: 'Villa in Dehradun', desc: 'Lal Kothi, Mountain Wrapped home...', rating: '5 (58)', type: 'Guest favourite' },
    //     { image: rental3, name: 'Villa in Ithalar', desc: `Villa Camellia Balacola, Ooty`, rating: '4.97 (34)', type: 'Guest favourite' },
    //     { image: rental4, name: 'Cabin in Bengaluru', desc: 'ahu - A1 Sarjapur', rating: '4.91 (65)', type: 'Superhost' },
    //     { image: rental5, name: 'Farm stay in Bir', desc: 'Stone Farm House-Sukoon Baag', rating: '4.89 (36)', type: 'Guest favourite' },
    //     { image: rental6, name: 'Farm stay in Munnar', desc: `Calm Shack- 2 Bedroom Boutique...`, rating: '5 (42)', type: 'Guest favourite' },
    //     { image: rental7, name: 'Tiny home in Siloti P...', desc: 'Gadeni Stays : Sky cabin at...', rating: '4.94 (48)', type: 'Superhost' },
    //     { image: rental8, name: 'Bungalow in Loutulim', desc: '2 Bedroom Luxury Villa w Private Pool', rating: '4.95 (77)', type: 'Guest favourite' },
    // ]

    const typeOfStays = ['Aparthotel rentals', 'Chalet rentals', 'Houseboat rentals', 'Luxury rentals', 'Rentals with lake access', 'Flat rentals',
        'Aparthotel rentals', 'Chalet rentals', 'Houseboat rentals', 'Luxury rentals', 'Rentals with lake access', 'Flat rentals',
        'Aparthotel rentals', 'Chalet rentals', 'Houseboat rentals', 'Luxury rentals', 'Rentals with lake access', 'Flat rentals']
    const uniqueStays = ['Yurt rentals', 'Castle rentals', 'Cabin rentals', 'Luxury cabins', 'Villa rentals', 'Holiday chalets']
    const thingsToDo = ['Things to do', 'Entertainment', 'Sightseeing', 'Wellness', 'Art culture', 'Food and drink', 'Nature and outdoors', 'Sports activities']

    const [stayType, setStayType] = useState(typeOfStays)
    const [stayTypeKey, setStayTypeKey] = useState('typeOfStays')
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
                <img width={'8%'} src={airbnblogo} />
                <div className='flex'>
                    <p className='text-md text-nowrap font-medium my-auto'>Airbnb your place</p>
                </div>
            </div>

            <div className={`fixed hidden lg:flex top-0 left-0 w-full bg-white shadow-lg z-50 px-[5%] py-2 flex justify-between 
                    transition-transform duration-500 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'
                } flex px-[5%] bg-white justify-between py-2`}>
                <img width={'8%'} className='my-auto' src={airbnblogo} />
                <div className='flex'>
                    <p className='text-md font-medium text-nowrap my-auto'>Airbnb your place</p>
                    <button onClick={() => navigate('/rentalspage')} class="w-full px-5 ml-8 py-3 text-white font-semibold rounded-lg bg-gradient-to-r
                 from-red-500 to-pink-600 transition-transform flex justify-center">
                        Start your search
                    </button>
                </div>
            </div>

            <div className='lg:mx-[5%]'>

                {/* 1 */}
                <div className='relative mx-6 lg:mx-0'>
                    <img className='w-[100%] ml-0 lg:ml-[25%] lg:w-[75%] rounded-md' src={backDesign} />

                    <div className='lg:shadow-2xl lg:w-[35%] lg:absolute lg:top-1/2 lg:left-15 bg-white rounded-lg lg:p-7 lg:mt-0 mt-3 transform lg:-translate-y-1/2'>
                        <p className='text-2xl lg:text-3xl font-bold text-gray-800'>Holiday rentals in India</p>
                        <p className='mt-1 text-gray-500 text-lg leading-normal'>Find and book unique accomodation on Airbnb</p>
                        <div className='border border-gray-300 pb-2 pt-1 px-4 mt-2 rounded-lg'>
                            <div><label className='text-xs font-medium'>LOCATION</label><br />
                                <input className='outline-none' value={'India'} /></div>
                        </div>
                        <div className='flex py-2 border border-gray-300 rounded-lg mt-2'>
                            <div className='w-[50%] pl-4'><p className='text-xs font-medium '>Check in</p>
                                <p className='text-gray-700'>Thu, 14 Nov</p>
                            </div>
                            <div className='border-l border-gray-300 w-[50%] pl-4'><p className='text-xs font-medium'>Check out</p>
                                <p className='text-gray-700'>Thu, 14 Nov</p></div>
                        </div>
                        <button class="w-full mt-4 py-3 text-white font-semibold rounded-lg bg-gradient-to-r
                 from-red-500 to-pink-600 transition-transform flex justify-center"><img className='my-auto mr-2' width={'12px'} src={search} />
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
                                    className={`flex-none lg:flex-auto cursor-pointer ${index == 0 ? 'lg:ml-0 ml-6' : 'ml-2'} ${index == rentalType.length - 1 ? '' : 'mr-2'}`}>
                                    <img src={e.image} className='rounded-md'/>
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
                        return <div onClick={() => navigate('/rentalspage')} className={`${index == 0 ? '' : 'ml-2'} ${index == ameneties.length - 1 ? 'mr-2' : 'mr-2 lg:px-5 lg:mx-2 mx-6'}
                         cursor-pointer my-3 box-shadow w-full rounded-lg pt-6 pb-5 px-16 lg:px-5`}>
                            <img src={e.image} width={'27px'} className='rounded-md' />
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
                            <img src={e.image} className='rounded-xl w-[100%] h-[250px]' />
                            <div className={`absolute top-4 ${e.type == 'Superhost' ? 'bg-gray-500 text-white border border-gray-400' : 'bg-white'} rounded-2xl text-sm font-medium px-2 pb-1 left-4`}>{e.type}</div>
                            <div className='flex justify-between items-end'>
                                <p className='text-xl font-medium text-gray-800 mt-1 tracking-tight'>{e.name}</p>
                                <div className='flex'>
                                    <img className='my-auto' width={'20px'} src={star} />
                                    <p className='my-auto'>{e.rating}</p>
                                </div>
                            </div>
                            <p className='mb-3 tracking-tight text-gray-500 text-md leading-normal'>{e.desc}</p>
                        </div>
                    })}
                    </div>

                    <button className='rounded-lg border border-gray-400 py-2 px-4 flex font-medium'>Show all <img className='my-auto' width={'15px'} src={next} /></button>
                </div>

                {/* 5 */}
                <div className='mt-16 mx-6 lg:mx-0'>
                    <p className='text-2xl font-medium text-gray-800 mb-1'>Destinations to explore</p>
                    <div className='flex'>
                        <div onClick={() => { setStayType(typeOfStays); setStayTypeKey('typeOfStays') }} className={`${stayTypeKey == 'typeOfStays' ? 'border-b-2 border-gray-600' : ''} cursor-pointer text-sm font-medium`}><p className={`py-1 px-2 rounded-lg transition duration-300 hover:bg-gray-100 mb-1`}>Other types of stays</p></div>
                        <div onClick={() => { setStayType(uniqueStays); setStayTypeKey('uniqueStays') }} className={`${stayTypeKey == 'uniqueStays' ? 'border-b-2 border-gray-600' : ''} ml-2 cursor-pointer text-sm font-medium`}><p className={`py-1 px-2 hover:bg-gray-100 transition duration-300 rounded-lg mb-1`}>Unique stays</p></div>
                        <div onClick={() => { setStayType(thingsToDo); setStayTypeKey('thingsToDo') }} className={`${stayTypeKey == 'thingsToDo' ? 'border-b-2 border-gray-600' : ''} ml-2 cursor-pointer text-sm font-medium`}><p className={`py-1 px-2 hover:bg-gray-100 transition duration-300 rounded-lg mb-1`}>Things to do</p></div>
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
            </div>
        </div>
    )
}

export default LandingPage
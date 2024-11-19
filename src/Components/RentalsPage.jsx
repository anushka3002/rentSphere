import React, { useEffect, useRef, useState } from 'react'
import airbnblogo from '../images/airbnb.png'
import search from '../images/search.png'
import amazingPools from '../images/amazing-pools.jpg'
import beachFront from '../images/beachfront.jpg'
import countrySide from '../images/countryside.jpg'
import islands from '../images/islands.jpg'
import farms from '../images/farms.jpg'
import omg from '../images/omg.jpg'
import rooms from '../images/rooms.jpg'
import lakefront from '../images/lakefront.jpg'
import cabins from '../images/cabins.jpg'
import mansions from '../images/mansions.jpg'
import historicalHomes from '../images/historical-homes.jpg'
import treehouses from '../images/treehouses.jpg'
import luxes from '../images/luxe.jpg'
import tinyHomes from '../images/tiny-homes.jpg'
import castles from '../images/castles.jpg'
import bedbreak from '../images/bed-break.jpg'
import nationalParks from '../images/national-parks.jpg'
import houseboats from '../images/houseboats.jpg'
import topofworld from '../images/top-of-world.jpg'
import trending from '../images/trending.jpg'
import topCities from '../images/top-cities.jpg'
import ofthegrid from '../images/off-the-grid.jpg'
import earthHomes from '../images/earth-homes.jpg'
import arctic from '../images/arctic.jpg'
import tropical from '../images/tropical.jpg'
import domes from '../images/domes.jpg'
import vineyards from '../images/vineyards.jpg'
import filters from '../images/filters.png'
import star from '../images/star.webp'
import next from '../images/next.png'
import heart from '../images/heart.png'
import pinkHeart from '../images/pink-heart.png'
import pinkHeart2 from '../images/pink-heart-2.png'
import { holidayRentals } from '../constant'
import { useNavigate } from 'react-router'

const RentalsPage = () => {
  const area = [
    { image: amazingPools, name: 'Amazing pools' },
    { image: beachFront, name: 'Beach front' },
    { image: countrySide, name: 'Country side' },
    { image: islands, name: 'Islands' },
    { image: farms, name: 'Farms' },
    { image: omg, name: 'OMG' },
    { image: rooms, name: 'Rooms' },
    { image: lakefront, name: 'Lake front' },
    { image: cabins, name: 'Cabins' },
    { image: mansions, name: 'Mansions' },
    { image: historicalHomes, name: 'Historical homes' },
    { image: treehouses, name: 'Tree houses' },
    { image: luxes, name: 'Luxes' },
    { image: tinyHomes, name: 'Tiny homes' },
    { image: castles, name: 'Castles' },
    { image: bedbreak, name: 'Bed and breakfasts' },
    { image: nationalParks, name: 'National parks' },
    { image: houseboats, name: 'House boats' },
    { image: topofworld, name: 'Top of world' },
    { image: trending, name: 'Trending' },
    { image: topCities, name: 'Top cities' },
    { image: ofthegrid, name: 'Of the grid' },
    { image: earthHomes, name: 'Earth homes' },
    { image: arctic, name: 'Arctic' },
    { image: tropical, name: 'Tropical' },
    { image: domes, name: 'Domes' },
    { image: vineyards, name: 'Vineyards' },
  ]
  const [showSearch, setShowSearch] = useState(false);
  const [areaType, setAreaType] = useState('Amazing views')
  const [liked, setLiked] = useState([])
  const searchBarRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    const handleIntersection = (entries) => {
      const entry = entries[0];
      setShowSearch(!entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0,
    });

    if (searchBarRef.current) {
      observer.observe(searchBarRef.current);
    }

    return () => {
      if (searchBarRef.current) observer.unobserve(searchBarRef.current);
    };
  }, []);

  return (
    <>
      <div className='border-b pb-6'>
        <div className={`flex h-[80px] px-[5%] z-10 fixed top-0 bg-white justify-between py-4 w-full`}>
          <img width={'10%'} className='my-auto' src={airbnblogo} />
          {showSearch ?
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
            : <div className='flex my-auto'>
              <p className='text-lg text-gray-700 font-medium mx-3'>Stays</p>
              <p className='text-lg text-gray-500 mx-3'>Experiences</p>
            </div>}
          <div className='flex'>
            <p className='text-md
           text-nowrap font-medium my-auto'>Airbnb your home</p>
          </div>
        </div>

        {/* 2 */}
        <div ref={searchBarRef} className='border mt-20 shadow-md w-[70%] mx-auto rounded-full grid grid-flow-col justify-stretch'>
          <div className='my-auto rounded-full pl-8 transition duration-200 hover:bg-[#ebebeb] cursor-pointer py-3'>
            <p className='text-sm font-medium text-gray-700'>Where</p>
            <p className='text-gray-500 text-sm font-medium'>Search destinations</p>
          </div>
          <div className='border-l'>
            <div className='pl-5 my-auto transition duration-200 hover:bg-[#ebebeb] cursor-pointer py-3 rounded-full'>
              <p className='text-sm font-medium text-gray-700'>Check in</p>
              <p className='text-gray-500 text-sm font-medium'>Add dates</p>
            </div>
          </div>
          <div className='border-l'>
            <div className='pl-5 my-auto transition duration-200 hover:bg-[#ebebeb] cursor-pointer py-3 rounded-full'>
              <p className='text-sm font-medium text-gray-700'>Check out</p>
              <p className='text-gray-500 text-sm font-medium'>Add dates</p>
            </div>
          </div>
          <div className='border-l'>
            <div className='pl-5 my-auto transition duration-200 hover:bg-[#ebebeb] cursor-pointer rounded-full flex justify-between pr-2'>
              <div className='my-auto'>
                <p className='text-sm font-medium text-gray-700'>Who</p>
                <p className='text-gray-500 text-sm font-medium'>Add guests</p>
              </div>
              <div className='rounded-full my-2 p-4 bg-gradient-to-r
                 from-red-500 to-pink-600 transition-transform'>
                <img width={'16px'} src={search} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:mx-8 mx-6'>
        <div className='flex'>
          <div className='flex w-[90%] overflow-x-auto scroll-container'>
            {area.map((ar) => {
              return <>
                <div onClick={() => setAreaType(ar.name)} className={`mr-12 my-6 pb-3 ${areaType == ar.name ? 'border-b-2 border-gray-800' : 'greyed-out hover:border-b-2 hover:border-gray-200'}`}>
                  <img className='mx-auto' width={'25px'} src={ar.image} />
                  <p className='text-xs font-medium text-nowrap'>{ar.name}</p>
                </div>
              </>
            })}
            <div>
            </div>
          </div>
          <div className='w-[10%] my-auto pl-5 justify-end flex'>
            <button className='flex my-auto px-4 mb-3 py-3 border border-gray-300 rounded-lg'><img className='my-auto' width={'17px'} src={filters} /><p className='text-xs ml-1 font-medium'>Filters</p></button>
          </div>
        </div>
        <div className='lg:mx-0 mx-6'>
          <div className='flex justify-between grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>{holidayRentals.map((e, index) => {
            return <div onClick={() => navigate('/rentalspage')} className='relative cursor-pointer'>
              <img src={e.image} className='rounded-xl w-[100%] h-[250px]' />
              <div className={`absolute top-4 ${e.type == 'Superhost' ? 'bg-gray-500 text-white border border-gray-400' : 'bg-white'} rounded-2xl text-sm font-medium px-2 pb-1 left-4`}>{e.type}</div>
              <div>
                <img onClick={()=>liked.includes(index) ? setLiked(liked.filter((e)=>e!=index)) : setLiked([...liked,index])} className='absolute top-4 right-4 mx-1' width={'21px'} src={liked.includes(index) ? pinkHeart : heart}/>
              </div>
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
        </div>
    </>
  )
}

export default RentalsPage;

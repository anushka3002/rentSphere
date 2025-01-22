import React, { useEffect, useRef, useState } from 'react'
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
import heart from '../images/heart.png'
import pinkHeart from '../images/pink-heart.png'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getData, wishlist } from '../Actions/action'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Navbar from './Navbar'

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
  const { data } = useSelector(state => state.data)
  const [areaType, setAreaType] = useState('Amazing pools')
  const [liked, setLiked] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const storedCheckIn = JSON.parse(sessionStorage.getItem('checkInValue'))
  const showSmallNav = JSON.parse(sessionStorage.getItem('showSmallNav'))

  useEffect(() => {
    dispatch(getData())
  }, [])

  useEffect(() => {
    const savedIndices = data?.data?.map((item, index) => (item.saved ? index : null))
      .filter(index => index !== null);
    setLiked(savedIndices);
  }, [data?.data]);

  let numbers = [1,2,3,4,5,6,7,8]

  const CustomNextArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        top: "50%",
        right: "10px", 
        transform: "translateY(-50%)",
        zIndex: 2,
      }}
      onClick={onClick}
    />)

  const CustomPrevArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        zIndex: 2,
      }}
      onClick={onClick}
    />);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const handleLike = (e, index) =>{
    liked?.includes(index) ? setLiked(liked.filter((e) => e !== index)) : setLiked([...liked, index])
    dispatch(wishlist(e._id, e?.saved ? false : true))
  }

  return (
    <>
      <Navbar/>
      <div className={`mt-10 border-t lg:mx-8 mx-6`}>
        <div className='flex'>
          <div className='flex overflow-x-auto scroll-container'>
            {area.map((ar) => {
              return <>
                <div onClick={() => setAreaType(ar.name)} className={`mr-12 my-6 pb-3 ${areaType === ar.name ? 'border-b-2 border-gray-800' : 'greyed-out hover:border-b-2 hover:border-gray-200'}`}>
                  <img alt="img" className='mx-auto' width={'25px'} src={ar.image} />
                  <p className='text-xs font-medium text-nowrap'>{ar.name}</p>
                </div>
              </>
            })}
            <div>
            </div>
          </div>
        </div>
        <div>
          <div className='justify-between lg:grid md:grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>{data?.data?.length>0 ? data?.data?.map((e, index) => {
            return <div className='relative cursor-pointer mb-8 md:mb-0 lg:mb-0'>

              <Slider {...settings} className="relative scroll-container slider-container">
                {e.images.map((image) => {
                  return <img onClick={()=>navigate(`/rentalDetailsPage/${e._id}`)} alt="img" src={image} className='rounded-xl w-[100%] h-[250px]' />
                })}
              </Slider>

              <div className={`absolute top-4 ${e.typeOfRental === 'superhost' ? 'bg-gray-500 text-white border border-gray-400' : 'bg-white'} rounded-2xl text-sm font-medium px-2 pb-1 left-4`}>{e.typeOfRental == 'superhost' ? 'Superhost' : 'Guest favourite'}</div>
              <div>
                <img alt="img" onClick={(el) =>{el.stopPropagation(); handleLike(e, index)}} className='absolute top-4 right-4 mx-1' width={'21px'} src={liked?.includes(index) ? pinkHeart : heart} />
              </div>
              <div className='flex justify-between items-end'>
                <p className='text-xl font-medium text-gray-800 mt-1 tracking-tight'>{e.location}</p>
                <div className='flex'>
                  <img alt="img" className='my-auto' width={'20px'} src={star} />
                  <p className='my-auto'>4.2</p>
                </div>
              </div>
              <p className='mb-3 tracking-tight truncate text-gray-500 text-md leading-normal'>{e.desc}</p>
            </div>
          }) : numbers.map((data)=>{
            return <>
            <Skeleton width={'100%'} height={'250px'} count={1} />
            </>
          })}
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default RentalsPage;

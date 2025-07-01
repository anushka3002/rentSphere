import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, wishlist } from '../Actions/action'
import Slider from 'react-slick'
import pinkHeart from '../images/pink-heart.png'
import { useNavigate } from 'react-router'
import heart from '../images/heart.png'
import star from '../images/star.webp'
import Skeleton from 'react-loading-skeleton'

const Wishlist = () => {

  const { data, loading } = useSelector(state => state.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [liked, setLiked] = useState([])
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

  useEffect(() => {
    dispatch(getData())
  }, [])

  useEffect(() => {
    const savedIndices = data?.data?.map((item, index) => (item.saved ? index : null))
      .filter(index => index !== null);
    setLiked(savedIndices);
  }, [data?.data]);

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

  const handleLike = (e, index) => {
    liked?.includes(index) ? setLiked(liked.filter((e) => e !== index)) : setLiked([...liked, index])
    dispatch(wishlist(e._id, e?.saved ? false : true))
  }

  console.log(data, 'data')

  return (
    <div className='lg:mx-0 mx-6'>
      <p className='text-3xl text-center mt-10 font-medium'>Wishlist</p>
      <div className='justify-between grid lg:grid-cols-4 mx-10 mt-10 md:grid-cols-2 sm:grid-cols-1 gap-6'>
        {data?.data?.length > 0 ? (
          data.data.some((e) => e.saved) ? (
            data.data.map((e, index) => {
              if (e.saved) {
                return (
                  <div className="relative cursor-pointer" key={index}>
                    <Slider
                      {...settings}
                      className="relative scroll-container slider-container"
                    >
                      {e.images.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          onClick={() => navigate(`/rentalDetailsPage/${e._id}`)}
                          alt="img"
                          src={image}
                          className="rounded-xl w-[100%] h-[250px]"
                        />
                      ))}
                    </Slider>
                    <div
                      className={`absolute top-4 ${e.typeOfRental === "superhost"
                          ? "bg-gray-500 text-white border border-gray-400"
                          : "bg-white"
                        } rounded-2xl text-sm font-medium px-2 pb-1 left-4`}
                    >
                      {e.typeOfRental === "superhost" ? "Superhost" : "Guest favourite"}
                    </div>
                    <div>
                      <img
                        alt="img"
                        onClick={(el) => {
                          el.stopPropagation();
                          handleLike(e, index);
                        }}
                        className="absolute top-4 right-4 mx-1"
                        width={"21px"}
                        src={liked?.includes(index) ? pinkHeart : heart}
                      />
                    </div>
                    <div className="flex justify-between items-end">
                      <p className="text-xl font-medium text-gray-800 mt-1 tracking-tight">
                        {e.location}
                      </p>
                      <div className="flex">
                        <img
                          alt="img"
                          className="my-auto"
                          width={"20px"}
                          src={star}
                        />
                        <p className="my-auto">4.2</p>
                      </div>
                    </div>
                    <p className="mb-3 tracking-tight truncate text-gray-500 text-md leading-normal">
                      {e.desc}
                    </p>
                  </div>
                );
              }
              return null;
            })
          ) : (
            <div className='text-xl items-center'>No data in wishlist</div>
          )
        ) : numbers.map((data) => {
          return <>
            <Skeleton width={'100%'} height={'250px'} count={1} />
          </>
        })}

      </div>
    </div>
  )
}

export default Wishlist
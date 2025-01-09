import React from 'react'

const RentalCard = () => {
  return (
    <div>
        <div className='lg:mx-0 mx-6'>
          <div className='justify-between grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>{data?.data?.length>0 ? data?.data?.map((e, index) => {
            return <div className='relative cursor-pointer'>

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
    </div>
  )
}

export default RentalCard
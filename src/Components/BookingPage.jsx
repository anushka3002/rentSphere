import React from 'react'
import airbnblogo from '../images/airbnb.png'
import leftArrow from '../images/left-arrow.png'
import payment from '../images/payment.png'
import dropdown from '../images/dropdown.webp'
import radioFilled from '../images/radio-filled.png'
import radio from '../images/radio.webp'
import star from '../images/star.webp'
import rental1 from '../images/rental1.webp'
import { useNavigate } from 'react-router'

const BookingPage = () => {

  const navigate = useNavigate()

  return (
    <div>
        <div className='border-b border-gray-200 py-6'>
            <img className='ml-6' width={'8%'} src={airbnblogo}/>
        </div>
        <div className='flex ml-14 my-16'>
        <img onClick={()=>navigate(-1)} className='my-auto cursor-pointer' width={'12px'} src={leftArrow}/>
        <p className='text-4xl font-medium ml-4'>Request to book</p>
        </div>
        <div className='ml-20 w-[40%]'>
        <p className='text-2xl font-medium'>Your trip</p>
        <div className='flex justify-between mt-4'>
        <div>
            <p className='text-lg font-medium'>Dates</p>
            <p className='text-lg'>12-15 Dec</p>
        </div>
        <div>
            <p className='text-lg font-medium'>Guests</p>
            <p className='text-lg'>2 guests</p>
        </div>
        </div>
        <hr className='my-6'></hr>
        <div className='flex justify-between'>
            <p className='text-2xl font-medium'>Pay with</p>
            <img width={'40%'} className='my-auto' src={payment}/>
        </div>
        <div className='border border-gray-400 mt-7 w-full flex justify-between px-5 py-4 rounded-lg'>
        <div className='flex'>
            {/* <img src={}/> */}
            <p>UPI</p>
        </div>
        <img width={'20px'} src={dropdown}/>
        </div>

        <div className='flex mt-4'>
            <img className='my-auto' width={'25px'} src={radioFilled}/>
            <p className='ml-2 text-lg'>Pay using UPI QR code</p>
        </div>
        <div className='flex mt-2'>
            <img className='my-auto ml-[2px]' width={'20px'} src={radio}/>
            <p className='ml-3 text-lg'>UPI ID</p>
        </div>
        <hr className='my-7'></hr>
        <p className='text-2xl font-medium mb-4'>Cancellation policy</p>
        <span className='font-medium text-lg leading-tight'>Free cancellation before 7 Dec.</span>&nbsp;<span className='text-lg leading-tight'>Cancel before check-in on 12 Dec for a partial refund.</span>
        <hr className='my-7'></hr>
        <p className='text-xs mb-6'>By selecting the button below, I agree to the Host's House Rules, Ground rules for guests, Airbnb's Rebooking and Refund Policy and that Airbnb can charge my payment method if I’m responsible for damage. I agree to pay the total amount shown if the Host accepts my booking request.</p>
        </div>

        {/* payment card */}
        <div className='fixed bottom-20 right-20 border w-[37%] bg-white rounded-2xl px-7 py-6'>
            <div className='flex'>
                <img className='rounded-xl' width={'130px'} src={rental1}/>
                <div className='my-auto ml-4'>
                    <p className='text-lg font-medium'>Boutique farm stay at Bangalore</p>
                    <p>Farm stay</p>
                    <div className='flex'>
                        <img className='my-auto' width={'20px'} src={star}/>
                        <p className='mr-1 font-medium'>4.85</p>
                        <p>(20 reviews)</p>
                    </div>
                </div>
            </div>
            <hr className='my-6'></hr>
        <p className='text-2xl font-medium mb-2'>Price details</p>
        <div className='flex justify-between pt-2'>
                <p className='underline text-lg'>₹13,333 x 3 nights</p>
                <p className='text-lg'>₹40,000</p>
            </div>
            <div className='flex justify-between pt-2'>
                <p className='underline text-lg'>Airbnb service fee</p>
                <p>₹5,647</p>
            </div>
            <div className='flex justify-between pt-2'>
                <p className='underline text-lg'>Taxes</p>
                <p>₹7,200</p>
            </div>
            <hr className='my-5'></hr>
            <div className='flex justify-between'>
                <div><span className='text-lg font-medium'>Total&nbsp;</span><span className='text-lg font-medium underline'>(INR)</span></div>
                <p className='text-lg font-medium'>₹45,647</p>
            </div>
        </div>
    </div>
  )
}

export default BookingPage
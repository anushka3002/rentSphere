import React, { useEffect, useState } from 'react'
import airbnblogo from '../images/airbnb.png'
import leftArrow from '../images/left-arrow.png'
import payment from '../images/payment.png'
import dropdown from '../images/dropdown.webp'
import star from '../images/star.webp'
import rental1 from '../images/rental1.webp'
import check from '../images/check.png'
import { useNavigate, useParams } from 'react-router'
import Lottie from "lottie-react";
import paymentData from "../images/payment.json";
import greenCheck from "../images/greenCheck.PNG"
import Confetti from "react-confetti";
import { formattedDate } from '../functions'

const BookingPage = () => {

    const navigate = useNavigate()
    const {guests, price, nights, dates, date2} = useParams()
    const [paymentOption, setPaymentOption] = useState('UPI')
    const [paymentDropdown, setPaymentDropdown] = useState(false)
    const [paySuccess, setPaySuccess] = useState(false)
    const [modal, setModal] = useState(false)
    const [seconds, setSeconds] = useState(3)
    const [upi, setUpi] = useState('')
    const [card, setCard] = useState('')
    const [expire, setExpire] = useState('')
    const [cvv, setCvv] = useState('')
    const [payClick, setPayClick] = useState(false)
    const [validatePay, setValidatePay] = useState({ upi: false, card: false, expire: false, cvv: false })
    const bookedStay = JSON.parse(localStorage.getItem('bookedStay'))

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const upiIdRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+$/;
    const cardNumberRegex = /^\d{13,19}$/;
    const expirationDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    const cvvRegex = /^\d{3,4}$/;

    function validateUPI(value, paymentOption) {
        let check;
        if (paymentOption === 'UPI') {
            setUpi(value)
            check = upiIdRegex.test(value);
            setValidatePay({ ...validatePay, upi: check })
        } else {
            setCard(value)
            check = cardNumberRegex.test(value);
            setValidatePay({ ...validatePay, card: check })
        }
    }

    function validateExpiration(value) {
        setExpire(value)
        const check = expirationDateRegex.test(value)
        setValidatePay({ ...validatePay, expire: check })
    }

    function validateCvv(value) {
        setCvv(value)
        const check = cvvRegex.test(value)
        setValidatePay({ ...validatePay, cvv: check })
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (modal === true) {
            const interval = setInterval(() => {
                setPaySuccess(2)
            }, 3000)
            return () => clearInterval(interval)
        }
    }, [modal === true])

    useEffect(() => {
        if (paySuccess && seconds > 0) {
            const timeout = setTimeout(() => {
                setSeconds(prev => prev - 1)
            }, 1000);
            return () => clearInterval(timeout)
        }
    }, [seconds, paySuccess])

    useEffect(() => {
        if (seconds === 0) {
            navigate('/rentalspage')
        }
    }, [seconds === 0])

    const handlePay = () => {
        setPayClick(true)
        if (paymentOption === 'UPI') {
            if (validatePay.upi === true) {
                setModal(true)
            }
        } else {
            if (validatePay.card === true && validatePay.expire === true && validatePay.cvv === true) {
                setModal(true)
            }
        }
    }

    return (
        <>
            {modal && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="px-10 lg:w-[30%] md:w-[70%] w-[95%] h-[75%] light-bg py-8 rounded-xl shadow-lg">
                    <div className='h-[85%]'>
                        {!paySuccess ? <Lottie animationData={paymentData} loop={false} /> : <div className='h-full flex-grow flex items-center justify-center'><img alt='img' className='mx-auto' width={'80%'} src={greenCheck} /></div>}
                    </div>
                    <div className='h-[15%]'>
                        <p className='text-center text-2xl text-gray-600 font-medium'>{`Payment is ${paySuccess ? 'successful' : 'processing'}`}</p>
                        {paySuccess ? <p className='text-center text-gray-600 text-md mt-2'>{`Redirecting to homepage in ${seconds} seconds...`}</p> : <p>&nbsp;</p>}
                        {paySuccess && <>
                            <Confetti width={windowWidth} height={windowHeight} />
                        </>}
                    </div>
                </div>
            </div>}

            <div>
                <div className='border-b border-gray-200 py-6'>
                    <img onClick={()=>navigate('/')} alt="img" className='ml-6 cursor-pointer' width={'100px'} src={airbnblogo} />
                </div>
                <div className='flex ml-4 md:ml-14 lg:ml-14 my-8 md:my-16 lg:my-16'>
                    <img alt="img" onClick={() => navigate(-1)} className='my-auto cursor-pointer' width={'12px'} src={leftArrow} />
                    <p className='lg:text-4xl md:text-4xl text-3xl font-medium ml-4'>Request to book</p>
                </div>
                <div className='mx-5 md:mx-20 lg:mx-20 lg:w-[40%] sm:w-[80%]'>
                    <p className='text-2xl font-medium'>Your trip</p>
                    <div className='flex justify-between mt-4'>
                        <div>
                            <p className='text-lg font-medium'>Dates</p>
                            <p className='text-lg'>{dates} - {date2}</p>
                        </div>
                        <div>
                            <p className='text-lg font-medium'>Guests</p>
                            <p className='text-lg'>{`${guests} ${guests > 1 ? 'guests' : 'guest'}`}</p>
                        </div>
                    </div>
                    <hr className='my-6'></hr>
                    <div className='flex justify-between'>
                        <p className='text-2xl font-medium'>Pay with</p>
                        <img alt="img" width={'40%'} className='my-auto' src={payment} />
                    </div>
                    <div className='relative'>
                        <div onClick={() => setPaymentDropdown(!paymentDropdown)} className='border cursor-pointer border-gray-400 mt-7 w-full flex justify-between px-5 py-4 rounded-lg'>
                            <div className='flex'>
                                <p>{paymentOption}</p>
                            </div>
                            <img alt="img" width={'20px'} src={dropdown} />
                        </div>
                        {paymentDropdown && <div className='border absolute bg-white border-gray-400 mt-1 w-full justify-between py-2 rounded-lg'>
                            <div onClick={() => { setPaymentOption('UPI'); setPaymentDropdown(false) }} className='flex justify-between px-5 py-2 hover:bg-gray-100 w-full cursor-pointer'><p>UPI</p>{paymentOption === 'UPI' && <img alt='img' className='my-auto' width={'15px'} src={check} />}</div>
                            <div onClick={() => { setPaymentOption('Credit or Debit Card'); setPaymentDropdown(false) }} className='flex justify-between px-5 py-2 hover:bg-gray-100 w-full cursor-pointer'><p>Credit or Debit Card</p>{paymentOption === 'Credit or Debit Card' && <img alt='img' className='my-auto' width={'15px'} src={check} />}</div>
                        </div>}
                    </div>

                    {paymentOption === 'UPI' ? <div>
                        <p className='ml-3 text-lg mt-2'>UPI ID</p>
                        <input onChange={(e) => validateUPI(e.target.value, 'UPI')} value={upi} className='ml-3 border-b w-[50%] py-2 focus:outline-none focus:ring-0' placeholder='Enter UPI ID' />
                        {payClick && <p className='ml-3 mt-1 text-sm text-red-500'>{`${upi.length===0 ? 'Plese enter UPI ID' : !validatePay.upi ? 'Incorrect UPI ID' : ''}`}</p>}
                    </div> : <div className='mt-3'>
                        <div className='border p-2 rounded-lg'>
                            <label className='text-gray-600 text-sm font-medium'>Card number</label><br></br>
                            <input onChange={(e) => validateUPI(e.target.value, 'card')} className=' focus:outline-none focus:ring-0' placeholder='1234567890' />
                        </div>
                        <div className='border flex p-2 rounded-lg'>
                            <div className='w-[50%]'>
                                <label className='text-gray-600 text-sm font-medium'>Expiration</label><br></br>
                                <input onChange={(e)=>validateExpiration(e.target.value)} className=' focus:outline-none focus:ring-0' placeholder='MM/YY' />
                            </div>
                            <div className='w-[50%] border-l pl-2'>
                                <label className='text-gray-600 text-sm font-medium'>CVV</label><br></br>
                                <input onChange={(e)=>validateCvv(e.target.value)} className=' focus:outline-none focus:ring-0' placeholder='3 digits' />
                            </div>
                        </div>
                        {payClick && <p className='mt-1 text-sm text-red-500'>{`${card.length===0 ? 'Plese enter card number' : !validatePay.card ? 'Incorrect card number' : expire.length===0 ? 'Please enter expiry date' : !validatePay.expire ? 'Invalid expiry date' : cvv.length===0 ? 'Please enter CVV number' : !validatePay.cvv ? 'Incorrect CVV number' : ''}`}</p>}
                    </div>}

                    {/* payment card */}
                    <div className='lg:fixed bottom-20 mt-4 right-20 border lg:w-[37%] w-[100%] bg-white rounded-2xl lg:px-7 md:px-7 px-3 py-6'>
                    <div className='flex'>
                        <img alt="img" className='rounded-xl' width={'130px'} src={bookedStay?.data?.images[0]} />
                        <div className='my-auto ml-4'>
                            <p className='text-lg font-medium'>{bookedStay?.data?.name}</p>
                            <p>Farm stay</p>
                            <div className='flex'>
                                <img alt="img" className='my-auto' width={'20px'} src={star} />
                                <p className='mr-1 font-medium'>{bookedStay?.data?.ratings}</p>
                                <p>({bookedStay?.data?.reviews} reviews)</p>
                            </div>
                        </div>
                    </div>
                    <hr className='my-6'></hr>
                    <p className='text-2xl font-medium mb-2'>Price details</p>
                    <div className='flex justify-between pt-2'>
                        <p className='underline text-lg'>₹{price} x {nights} {nights > 1 ? 'nights' : 'night'}</p>
                        <p className='text-lg'>₹{price * nights}</p>
                    </div>
                    <div className='flex justify-between pt-2'>
                        <p className='underline text-lg'>Airbnb service fee</p>
                        <p>₹480</p>
                    </div>
                    <div className='flex justify-between pt-2'>
                        <p className='underline text-lg'>Taxes</p>
                        <p>₹398</p>
                    </div>
                    <hr className='my-5'></hr>
                    <div className='flex justify-between'>
                        <div><span className='text-lg font-medium'>Total&nbsp;</span><span className='text-lg font-medium underline'>(INR)</span></div>
                        <p className='text-lg font-medium'>₹{(price*nights)+878}</p>
                    </div>
                </div>
                <hr className='my-6'></hr>
                    <p className='text-2xl font-medium mb-4'>Cancellation policy</p>
                    <span className='font-medium text-lg leading-tight'>Free cancellation before {`${formattedDate(new Date())}`}.</span>&nbsp;<span className='text-lg leading-tight'>Cancel before check-in on {dates} for a partial refund.</span>
                    <hr className='my-7'></hr>
                    <p className='text-xs mb-6'>By selecting the button below, I agree to the Host's House Rules, Ground rules for guests, Airbnb's Rebooking and Refund Policy and that Airbnb can charge my payment method if I’m responsible for damage. I agree to pay the total amount shown if the Host accepts my booking request.</p>
                    <button onClick={handlePay} className="w-full mt-4 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r
                    from-red-500 to-pink-600 transition-transform flex justify-center mb-16">Pay ₹{(price*nights)+878}</button>
                </div>                
            </div>
        </>
    )
}

export default BookingPage
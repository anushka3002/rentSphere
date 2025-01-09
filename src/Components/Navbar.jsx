import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import airbnblogo from '../images/airbnb.png'
import search from '../images/search.png'
import profile from '../images/profile.png'
import hamburger from '../images/hamburger.webp'
import cross from '../images/cross.png'
import { formattedDate } from '../functions'
import GoogleAuth from './GoogleOauth'
import { toast } from 'react-toastify';

const Navbar = () => {

    const navigate = useNavigate()
    const [dropdown, setDropdown] = useState(false)
    const [showSearch, setShowSearch] = useState(false);
    const [modal, setModal] = useState(false)
    const [phone, setPhone] = useState()
    const [phoneError, setPhoneError] = useState(false)
    const searchBarRef = useRef(null);
    const userDetails = JSON.parse(localStorage.getItem('userdetails')) || null
    const storedCheckIn = JSON.parse(sessionStorage.getItem('checkInValue'))
    const storedCheckOut = JSON.parse(sessionStorage.getItem('checkOutValue'))
    const notify = () => toast.success("Signed in successfully!");

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

    const handleLogin = () => {
        setDropdown(false)
        userDetails ?
            localStorage.setItem('userdetails', JSON.stringify(null)) :
            setModal(true)
    }

    const handlePhone = () =>{
        if(!phone){
          setPhoneError(true)
        }else{
          localStorage.setItem('userdetails',JSON.stringify(phone))
          setModal(false)
          notify()
          setPhone()
        }
      }

    return (
        <>
            {modal && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="w-[500px] h-[75%] bg-white rounded-xl shadow-lg">
                    <div className='border-b py-3 flex px-5'>
                        <img onClick={() => { setModal(false); setPhoneError(false) }} width={'18px'} className='my-auto cursor-pointer' src={cross} />
                        <p className='mx-auto font-medium text-md'>Log in or Sign up</p>
                    </div>
                    <div className='h-[85%] px-5 py-10'>
                        <p className='text-xl font-medium'>Welcome to Airbnb</p>
                        <div className='border rounded-t-xl px-2 py-1 mt-4'>
                            <p className='text-sm text-gray-500 my-auto'>Country/Region</p>
                            <p className='text-md my-auto'>India(+91)</p>
                        </div>
                        <input onChange={(e) => setPhone(e.target.value)} value={phone} className='border mb-1 rounded-b-xl w-full px-3 py-2 focus:outline-none' type='number' />
                        {phoneError && <p className='text-red-500 text-sm'>Phone number is required</p>}
                        <button onClick={handlePhone} className="w-full my-4 py-3 text-white font-semibold rounded-lg bg-gradient-to-r
                            from-red-500 to-pink-600 transition-transform flex justify-center">
                            Continue
                        </button>
                        <p className='text-center text-md font-medium mb-4'>Or</p>
                        <GoogleAuth />
                    </div>
                </div>
            </div>}
            <div className='border-b pb-6'>
                <div className={`flex h-[80px] px-[2%] z-10 fixed top-0 bg-white justify-between py-4 w-full`}>
                    <img onClick={() => navigate('/')} alt="img" width={'10%'} className='my-auto cursor-pointer' src={airbnblogo} />
                    {storedCheckIn ? <div className={`border transition duration-300 ease-out shadow-md mx-auto rounded-full grid grid-flow-col justify-stretch`}>
                        <div className='my-auto rounded-full px-8 transition duration-200 hover:bg-[#ebebeb] cursor-pointer py-1'>
                            <p className='text-sm font-medium text-gray-700'>India</p>
                        </div>
                        <div className='border-l my-auto'>
                            <div className='px-5 my-auto transition duration-200 hover:bg-[#ebebeb] cursor-pointer py-1 rounded-full'>
                                <p className='text-sm font-medium text-gray-700'>{formattedDate(storedCheckIn)} - {formattedDate(storedCheckOut)}</p>
                            </div>
                        </div>
                        <div className='border-l my-auto'>
                            <div className='px-5 my-auto transition duration-200 hover:bg-[#ebebeb] cursor-pointer rounded-full flex justify-between pr-2'>
                                <div className='my-auto'>
                                    <p className='text-sm font-medium text-gray-700'>1 guest</p>
                                </div>
                                <div className='ml-5 rounded-full my-auto p-3 bg-gradient-to-r
                 from-red-500 to-pink-600 transition-transform'>
                                    <img alt="img" width={'12px'} className='' src={search} />
                                </div>
                            </div>
                        </div>
                    </div> : showSearch ?
                        <div className={`border transition duration-300 ease-out shadow-md  mx-auto rounded-full grid grid-flow-col justify-stretch`}>
                            <div className='my-auto rounded-full px-8 transition duration-200 hover:bg-[#ebebeb] cursor-pointer py-1'>
                                <p className='text-sm font-medium text-gray-700'>Anywhere</p>
                            </div>
                            <div className='border-l my-auto'>
                                <div className='px-5 my-auto transition duration-200 hover:bg-[#ebebeb] cursor-pointer py-1 rounded-full'>
                                    <p className='text-sm font-medium text-gray-700'>Any week</p>
                                </div>
                            </div>
                            <div className='border-l my-auto'>
                                <div className='px-5 my-auto transition duration-200 hover:bg-[#ebebeb] cursor-pointer rounded-full flex justify-between pr-2'>
                                    <div className='my-auto'>
                                        <p className='text-sm font-medium text-gray-700'>Add guests</p>
                                    </div>
                                    <div className='ml-5 rounded-full my-auto p-3 bg-gradient-to-r
                 from-red-500 to-pink-600 transition-transform'>
                                        <img alt="img" width={'12px'} className='' src={search} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <div className='flex my-auto'>
                            <p className='text-lg text-gray-700 font-medium mx-3 cursor-pointer'>Stays</p>
                            <p className='text-lg text-gray-500 mx-3 cursor-pointer'>Experiences</p>
                        </div>}
                    <div className='flex'>
                        <div onClick={() => setDropdown(!dropdown)} className='relative flex border rounded-3xl ml-5 px-2 shadow-sm cursor-pointer'>
                            <img alt='img' width={'30px'} className='my-auto' src={hamburger} />
                            <img alt='img' width={'35px'} className='my-auto ml-1 rounded-3xl' src={userDetails ? userDetails?.picture : profile} /></div>
                        {dropdown && <div className='absolute top-20 right-10 bg-white border px-6 py-3 rounded-xl shadow-md text-gray text-md'>
                            <p onClick={() => navigate('/wishlist')} className='cursor-pointer'>Wishlists</p>
                            <p onClick={handleLogin} className='pt-1 cursor-pointer'>{userDetails ? 'Logout' : 'Login'}</p>
                        </div>}
                    </div>
                </div>

                {/* 2 */}
                {!storedCheckIn && <div ref={searchBarRef} className='border mt-20 shadow-md w-[70%] mx-auto rounded-full grid grid-flow-col justify-stretch'>
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
                                <img alt="img" width={'16px'} src={search} />
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Navbar
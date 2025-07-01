import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router'
import rentsSphereLogo from '../images/rentspehereLogo.png'
import search from '../images/search.png'
import profile from '../images/profile.png'
import hamburger from '../images/hamburger.webp'
import cross from '../images/cross.png'
import minus from '../images/minus.png';
import plus from '../images/plus.webp';
import blackSearch from '../images/black-search.png'
import { formattedDate } from '../functions'
import GoogleAuth from './GoogleOauth'
import { toast } from 'react-toastify';
import DatePicker from 'react-date-picker'
import { getData } from '../Actions/action'
import { useDispatch } from 'react-redux'

const Navbar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [dropdown, setDropdown] = useState(false)
    const [showSearch, setShowSearch] = useState(false);
    const [searchModal, setSearchModal] = useState(false)
    const [modal, setModal] = useState(false)
    const [phone, setPhone] = useState()
    const [phoneError, setPhoneError] = useState(false)
    const searchBarRef = useRef(null);
    const [location, setLocation] = useState()
    const [showCheckIn, setShowCheckIn] = useState(false)
    const [showCheckOut, setShowCheckOut] = useState(false)

    const [checkInValue, onCheckInChange] = useState(null)
    const [checkOutValue, onCheckOutChange] = useState(null)
    const [guestDropdown, setGuestDropdown] = useState(false)
    const [showSmallNav, setShowSmallNav] = useState(false)
    const [guestCount, setGuestCount] = useState(1)

    const userDetails = JSON.parse(localStorage.getItem('userdetails')) || null
    const storedCheckIn = JSON.parse(sessionStorage.getItem('checkInValue'))
    const storedCheckOut = JSON.parse(sessionStorage.getItem('checkOutValue'))
    const guestCnt = JSON.parse(sessionStorage.getItem('guestCount'))
    const route = useLocation()
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

    const handlePhone = () => {
        if (!phone) {
            setPhoneError(true)
        } else {
            localStorage.setItem('userdetails', JSON.stringify(phone))
            setModal(false)
            notify()
            setPhone()
        }
    }

    const handleSearch = () => {
        checkInValue && sessionStorage.setItem('checkInValue', JSON.stringify(checkInValue))
        checkOutValue && sessionStorage.setItem('checkOutValue', JSON.stringify(checkOutValue))
        location && dispatch(getData(location))
        guestCount >= 1 && sessionStorage.setItem('guestCount', JSON.stringify(guestCount))
        if (location || checkInValue || checkOutValue || guestCount > 1) {
            setShowSmallNav(true)
            sessionStorage.setItem('showSmallNav', JSON.stringify(true))
        }
        setSearchModal(false)
    }

    return (
        <>
            {modal && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="lg:w-[500px] md:w-[500px] w-[90%] h-[75%] bg-white rounded-xl shadow-lg">
                    <div className='border-b py-3 flex px-5'>
                        <img onClick={() => { setModal(false); setPhoneError(false) }} width={'18px'} className='my-auto cursor-pointer' src={cross} />
                        <p className='mx-auto font-medium text-md'>Log in or Sign up</p>
                    </div>
                    <div className='h-[85%] px-5 py-10'>
                        <p className='text-xl font-medium'>Welcome to RentSphere</p>
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
            {searchModal && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="lg:w-[500px] relative px-5 py-3 md:w-[500px] w-[95%] h-[75%] bg-white rounded-xl shadow-lg">
                    <p className='text-xl font-medium'>Search destination</p>
                    <input onChange={(e) => setLocation(e.target.value)} className='text-gray-500 border border-gray-500 rounded-lg my-3 w-full py-3 px-4 text-sm font-medium transition 
                    duration-200 bg-transparent group-hover:bg-[#ebebeb] focus:outline-none' placeholder='Search destination' />
                    <div className='my-auto transition duration-200 cursor-pointer py-3 rounded-full'>
                        <p className='text-sm font-medium text-gray-700'>Check in</p>
                        {showCheckIn ? <DatePicker onChange={onCheckInChange} value={checkInValue} /> : <p onClick={() => setShowCheckIn(true)} className='text-gray-500 py-1 text-sm font-medium'>Add dates</p>}
                    </div>
                    <div className='my-auto transition duration-200 cursor-pointer py-3 rounded-full'>
                        <p className='text-sm font-medium text-gray-700'>Check out</p>
                        {showCheckOut ? <DatePicker onChange={onCheckOutChange} value={checkOutValue} /> : <p onClick={() => setShowCheckOut(true)} className='text-gray-500 py-1 text-sm font-medium'>Add dates</p>}
                    </div>
                    <div className='py-[15px] relative w-full'>
                        <p className='text-sm font-medium text-gray-700'>Guest</p>
                        <div className='flex justify-between'>
                        <p className='text-gray-500 mt-1 text-sm font-medium text-nowrap w-[60px]'>{guestCount}</p>
                            <div className='flex'><img alt='img' onClick={() => guestCount > 1 && setGuestCount(prev => prev - 1)}
                                className={`my-auto ${guestCount === 1 ? 'grayout' : 'cursor-pointer'} mr-2`} width={'20px'}
                                src={minus} /><img alt='img' onClick={() => setGuestCount(prev => prev + 1)} className='my-auto cursor-pointer' width={'26px'} src={plus} /></div>
                                </div>
                    </div>
                    <div className='absolute bottom-5 flex justify-between w-[89%]'>
                        <button className='px-7 py-3 rounded-lg bg-gray-400 text-nowrap text-white font-medium'>Clear all</button>
                        <button onClick={handleSearch} class="px-8 ml-8 py-3 text-white font-semibold rounded-lg bg-gradient-to-r
                 from-red-500 to-pink-600 transition-transform flex justify-center">Search</button>
                    </div>
                </div>
            </div>}

            <div onClick={() => setGuestDropdown(false)} className='pb-8'>
                <div className={`flex h-[80px] px-[2%] z-10 fixed top-0 bg-white justify-between py-4 w-full`}>
                    <img onClick={() => navigate('/')} alt="img" width={'150px'} className='my-auto cursor-pointer' src={rentsSphereLogo} />
                    <div onClick={()=>setSearchModal(true)} className='border w-[60%] border-gray-400 rounded-3xl lg:hidden md:hidden flex items-center px-10 justify-center'><img className='my-auto mr-2' width={'20px'} 
                    src={blackSearch} /><span className='text-md text-gray-600 font-medium'>{`${location ? location + '...' : 'Start your search'}`}</span></div>
                    {(storedCheckIn || showSmallNav) && !route.pathname.includes('rentalDetailsPage') ? <div className={`border transition 
                        duration-300 ease-out lg:grid md:grid hidden shadow-md mx-auto rounded-full grid-flow-col justify-stretch`}>
                        <div className='my-auto rounded-full px-8 transition duration-200 cursor-pointer py-1'>
                            <p className='text-sm font-medium text-gray-700'>{location ?? 'India'}</p>
                        </div>
                        <div className='border-l my-auto'>
                            <div className='px-5 my-auto transition duration-200 cursor-pointer py-1 rounded-full'>
                                <p className='text-sm font-medium text-gray-700'>{formattedDate(storedCheckIn)} - {formattedDate(storedCheckOut)}</p>
                            </div>
                        </div>
                        <div className='border-l my-auto'>
                            <div className='px-5 my-auto transition duration-200 cursor-pointer rounded-full flex justify-between pr-2'>
                                <div className='my-auto'>
                                    <p className='text-sm font-medium text-gray-700'>{guestCnt ?? guestCount} {`${guestCnt > 1 || guestCnt > 1 ? 'guests' : 'guest'}`}</p>
                                </div>
                                <div className='ml-5 rounded-full my-auto p-3 bg-gradient-to-r
                                from-red-500 to-pink-600 transition-transform'>
                                    <img alt="img" width={'12px'} className='' src={search} />
                                </div>
                            </div>
                        </div>
                    </div> : showSearch && !route.pathname.includes('rentalDetailsPage') ?
                        <div className={`border lg:grid md:grid hidden transition duration-300 ease-out shadow-md  mx-auto rounded-full grid-flow-col justify-stretch`}>
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
                        : !route.pathname.includes('rentalDetailsPage') && <div className='lg:flex md:flex hidden my-auto'>
                            <p className='text-lg text-gray-700 font-medium mx-3 cursor-pointer'>Stays</p>
                            <p className='text-lg text-gray-500 mx-3 cursor-pointer'>Experiences</p>
                        </div>}
                    <div className='lg:flex md:flex hidden'>
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
                {!storedCheckIn && !showSmallNav && !route.pathname.includes('rentalDetailsPage') && <div ref={searchBarRef} className='border lg:grid hidden mb-[-40px] mt-20 shadow-md w-[70%] mx-auto rounded-full grid-flow-col justify-stretch'>
                    <div className='my-auto rounded-full pl-8 transition duration-200 hover:bg-[#ebebeb] cursor-pointer py-3 group'>
                        <p className='text-sm font-medium text-gray-700'>Where</p>
                        <input onChange={(e) => setLocation(e.target.value)} className='text-gray-500 text-sm font-medium transition duration-200 bg-transparent group-hover:bg-[#ebebeb] focus:outline-none' placeholder='Search destination' />
                    </div>
                    <div className='border-l'>
                        <div className='pl-5 my-auto transition duration-200 hover:bg-[#ebebeb] cursor-pointer py-3 rounded-full'>
                            <p className='text-sm font-medium text-gray-700'>Check in</p>
                            {showCheckIn ? <DatePicker onChange={onCheckInChange} value={checkInValue} /> : <p onClick={() => setShowCheckIn(true)} className='text-gray-500 py-1 text-sm font-medium'>Add dates</p>}
                        </div>
                    </div>
                    <div className='border-l'>
                        <div className='pl-5 my-auto transition duration-200 hover:bg-[#ebebeb] cursor-pointer py-3 rounded-full'>
                            <p className='text-sm font-medium text-gray-700'>Check out</p>
                            {showCheckOut ? <DatePicker onChange={onCheckOutChange} value={checkOutValue} /> : <p onClick={() => setShowCheckOut(true)} className='text-gray-500 py-1 text-sm font-medium'>Add dates</p>}
                        </div>
                    </div>
                    <div className='border-l'>
                        <div className='pl-5 my-auto transition duration-200 hover:bg-[#ebebeb] cursor-pointer rounded-full flex justify-between pr-2'>
                            <div onClick={(e) => { e.stopPropagation(); setGuestDropdown(true) }} className='py-[15px] relative w-full'>
                                <p className='text-sm font-medium text-gray-700'>Guest</p>
                                <p className='text-gray-500 text-sm font-medium text-nowrap w-[60px]'>{guestCount > 1 ? guestCount : 'Add guests'}</p>
                                {guestDropdown && <div className='flex top-20 absolute w-full z-20 bg-white border rounded-xl p-4 w-full justify-between'><p className=''>{guestCount}</p>
                                    <div className='flex'><img alt='img' onClick={() => guestCount > 1 && setGuestCount(prev => prev - 1)}
                                        className={`my-auto ${guestCount === 1 ? 'grayout' : 'cursor-pointer'} mr-2`} width={'20px'}
                                        src={minus} /><img alt='img' onClick={() => setGuestCount(prev => prev + 1)} className='my-auto cursor-pointer' width={'26px'} src={plus} /></div></div>}
                            </div>
                            <div onClick={handleSearch} className='rounded-full my-auto p-4 bg-gradient-to-r
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
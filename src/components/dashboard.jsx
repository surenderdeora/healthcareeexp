import React from 'react'
import rechargeLogo from '../images/money-bag.png'
import Navbar from './navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress, faCloudArrowDown, faGift, faMoneyBillTransfer, faSackDollar, faShareNodes, faUserGroup, faWallet } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Carousel from './carousel'
import SliderNews from './newsSlider'

const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <div className='container mx-auto bg-[#2667e5] py-5 px-3'>
            <h1 className='text-white text-center text-3xl font-extrabold'>Philips</h1>
            <div className='flex justify-center items-center py-5'>
                <Carousel />
            </div>
            <div className='flex justify-center px-20 '>
                <SliderNews />
            </div>
            <div className='flex justify-around gap-8 max-w-[1300px] mx-auto flex-wrap py-10 my-10 bg-white rounded-xl'>
                <div className='w-[260px] flex  flex-col justify-center items-center    '>
                    <div onClick={() => navigate('/recharge-form')} className='bg-[#4d60fc] cursor-pointer p-6 rounded-3xl '>
                        <FontAwesomeIcon icon={faWallet} className='text-[#fcfef9] text-5xl' />
                    </div>
                    <span className='text-xl my-2 text-black'>Recharge</span>
                </div>
                <div onClick={() => navigate('/withdraw')} className='w-[260px] flex flex-col justify-center items-center   '>
                    <div className='bg-[#ff9164] p-6  rounded-3xl '>
                        <FontAwesomeIcon icon={faMoneyBillTransfer} className='text-[#fcfef9] text-5xl' />
                    </div>
                    <span className='text-xl my-2 text-black'>Withdraws</span>
                </div>
                <div className='w-[260px] flex flex-col justify-center items-center cursor-pointer   '>
                    <div className='bg-[#098ffe] p-6 rounded-3xl '>
                        <FontAwesomeIcon icon={faUserGroup} className='text-[#fcfef9] text-5xl' />
                    </div>
                    <span className='text-xl my-2 text-black'>My teams</span>
                </div>
                <div onClick={() => navigate('/referallink')} className='w-[260px] flex flex-col justify-center items-center cursor-pointer   '>
                    <div className='bg-[#fdaf3e] p-6 rounded-3xl '>
                        <FontAwesomeIcon icon={faShareNodes} className='text-[#fcfef9] text-5xl' />
                    </div>
                    <span className='text-xl my-2 text-black'>Invitation</span>
                </div>
                <div className='w-[260px] flex flex-col justify-center items-center cursor-pointer   '>
                    <div className='bg-[#c5c1bf] p-6 rounded-3xl '>
                        <FontAwesomeIcon icon={faSackDollar} className='text-[#fcfef9] text-5xl' />
                    </div>
                    <span className='text-xl my-2 text-black'>Money making task</span>
                </div>
                <div className='w-[260px] flex flex-col justify-center items-center cursor-pointer   '>
                    <div className='bg-[#fc5f68] p-6 rounded-3xl '>
                        <FontAwesomeIcon icon={faGift} className='text-[#fcfef9] text-5xl' />
                    </div>
                    <span className='text-xl my-2 text-black'>Gift redemption</span>
                </div>
                <div className='w-[260px] flex flex-col justify-center items-center cursor-pointer   '>
                    <div className='bg-[#ff8556] p-6 rounded-3xl '>
                        <FontAwesomeIcon icon={faBarsProgress} className='text-[#fcfef9] text-5xl' />
                    </div>
                    <span className='text-xl my-2 text-black'>My projects</span>
                </div>
                <div className='w-[260px] flex flex-col justify-center items-center cursor-pointer   '>
                    <div className='bg-[#7186fe] p-6 rounded-3xl '>
                        <FontAwesomeIcon icon={faCloudArrowDown} className='text-[#fcfef9] text-5xl' />
                    </div>
                    <span className='text-xl my-2 text-black'>APP download</span>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default Dashboard;
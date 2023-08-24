import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import axios from 'axios'
import profileImg from '../images/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignCenter, faBarsProgress, faBuilding, faBuildingColumns, faGear, faGift, faMoneyBillTransfer, faPersonCircleCheck, faPersonCirclePlus, faTicket, faWallet } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const profile = () => {

    const navigate = useNavigate()
    const { state } = useAuth();


    // Access the user ID
    const user = state.user;
  
    if(user){
        alert("NOTICE:-")
    }


    console.log("userId_-}", user)
    // console.log("userdata_-}", userdata)
    return (
        <div className='container mx-auto bg-[#2667e5] py-5 px-8 '>
            <div className='bg-[#124cb5] shadow-slate-700 shadow-lg py-10 px-10 rounded-lg relative'>
                <div className='flex items-start gap-8 '>
                    <div className='max-w-[200] max-h-[200] rounded-full border-2'>
                        <img src={profileImg} width={200} alt="" />
                    </div>
                    <div className='flex flex-col gap-y-4 mt-8'>
                        <h4 className='text-white font-medium text-2xl'>{user.phoneNo}</h4>
                        <span className='text-white text-lg'>ID: 871568</span>
                    </div>
                </div>
                <div className='absolute duration-300 top-3 md:top-10 right-10'>
                    <FontAwesomeIcon icon={faGear} className='text-5xl text-white ' />
                </div>
            </div>
            <div className='rounded-2xl flex flex-col md:flex-row  gap-7 justify-between my-10'>
                <div onClick={() => navigate('/recharge-form')} className='px-7 cursor-pointer   py-5 flex border-2 bg-[#b9c1ff] w-full rounded-2xl border-[#c7d8f5]  items-center'>
                    <FontAwesomeIcon icon={faWallet} className='text-6xl text-[#5848ee] ' />
                    <h4 className='font-semibold text-2xl ml-2'>Recharge</h4>
                </div>
                <div onClick={() => navigate('/withdraw')} className='px-7 py-5 flex cursor-pointer border-2 bg-[#87dfe3] w-full rounded-2xl border-[#c7d8f5]  items-center'>
                    <FontAwesomeIcon icon={faMoneyBillTransfer} className='text-6xl text-[#00a7b7] ' />
                    <h4 className='font-semibold text-2xl ml-2'>Withdraws</h4>
                </div>
            </div>
            <div className='bg-white rounded-2xl flex flex-wrap  justify-center md:justify-between px-12 py-6'>
                <div className='flex flex-col gap-3 justify-center mx-2 items-center'>
                    <h5 className='text-lg text-[#a0a0a0] font-semibold'>Earnings today</h5>
                    <h4 className='text-4xl font-bold font-mono'>0.00</h4>
                </div>
                <div className='flex flex-col gap-3 justify-center mx-2  items-center'>
                    <h5 className='text-lg text-[#a0a0a0] font-semibold'>Total earnings</h5>
                    <h4 className='text-4xl font-bold font-mono'>0.00</h4>
                </div>
                <div className='flex flex-col gap-3 justify-center mx-2  items-center'>
                    <h5 className='text-lg text-[#a0a0a0] font-semibold'>Team Income</h5>
                    <h4 className='text-4xl font-bold font-mono'>0.00</h4>
                </div>
            </div>
            <div className='bg-white rounded-2xl flex flex-wrap flex-col justify-between my-10 px-12 py-6'>
                <div className='flex  justify-between  gap-4 flex-wrap'>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <h5 className='text-4xl font-bold'>0%</h5>
                        <h4 className='text-4xl font-bold font-mono'>B(0)</h4>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <h5 className='text-4xl font-bold'>0%</h5>
                        <h4 className='text-4xl font-bold font-mono'>C(0)</h4>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <h5 className='text-4xl font-bold'>0%</h5>
                        <h4 className='text-4xl font-bold font-mono'>D(0)</h4>
                    </div>
                </div>
                <button className='bg-[#0b5ed6] text-center text-2xl  py-5 rounded-full font-bold mt-7  text-white'>Team commission</button>
            </div>
            <div className='flex gap-8 max-w-[1300px] mx-auto flex-wrap py-10 my-10 bg-white rounded-xl'>
                <h2 className='text-3xl ml-7 mb-2 font-bold'>Common Functions</h2>
                <div className='flex justify-around gap-8 flex-wrap '>
                    <div className='w-full md:w-[400px] flex flex-col justify-center items-center cursor-pointer   '>
                        <div className=' px-5 pt-5  rounded-3xl '>
                            <FontAwesomeIcon icon={faBarsProgress} className='text-[#fbaa12] text-6xl' />
                        </div>
                        <span className='text-xl my-2 text-black'>My Projects</span>
                    </div>
                    <div className='w-full md:w-[400px] flex flex-col justify-center items-center cursor-pointer   '>
                        <div className='px-5 pt-5 rounded-3xl '>
                            <FontAwesomeIcon icon={faTicket} className='text-[#ef8b5a] text-6xl' />
                        </div>
                        <span className='text-xl my-2 text-black'>Coupon</span>
                    </div>
                    <div className='w-full md:w-[400px] flex flex-col justify-center items-center cursor-pointer   '>
                        <div className='px-5 pt-5 rounded-3xl '>
                            <FontAwesomeIcon icon={faAlignCenter} className='text-[#7dbcf5] text-6xl' />
                        </div>
                        <span className='text-xl my-2 text-black'>Funding details</span>
                    </div>
                    <div className='w-full md:w-[400px] flex flex-col justify-center items-center cursor-pointer   '>
                        <div className='px-5 pt-5   rounded-3xl '>
                            <FontAwesomeIcon icon={faBuildingColumns} className='text-[#37cec9] text-6xl' />
                        </div>
                        <span className='text-xl my-2 text-black'>Bind bank account</span>
                    </div>
                    <div onClick={() => navigate('/referallink')} className='w-full md:w-[400px] flex flex-col justify-center items-center cursor-pointer   '>
                        <div className='px-5 pt-5  rounded-3xl '>
                            <FontAwesomeIcon icon={faPersonCirclePlus} className='text-[#587bf7] text-6xl' />
                        </div>
                        <span className='text-xl my-2 text-black'>Invitation</span>
                    </div>
                    <div className='w-full md:w-[400px] flex flex-col justify-center items-center cursor-pointer   '>
                        <div className='px-5 pt-5  rounded-3xl '>
                            <FontAwesomeIcon icon={faGift} className='text-[#ff4945] text-6xl' />
                        </div>
                        <span className='text-xl my-2 text-black'>Gift redemption</span>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}
export default profile

import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const qckPaymentLink = () => {
    const navigate =  useNavigate()

    return (
        <div className='container mx-auto bg-white shadow-2xl'>
            <div className='bg-[#6a9fb5]'>
                <h1 className='text-white text-5xl text-center font-semibold py-4'>Recharge</h1>
            </div>
            <div className='bg-white text-black my-8 px-8  rounded-3xl flex flex-col items-center gap-y-10 justify-center'>
                <h2 className='text-lg font-semibold underline'>Please select payment channel</h2>
                <div onClick={()=>navigate('/payment')} className="p-8 sm:flex sm:space-x-6 shadow-2xl cursor-pointer hover:bg-gray-300 duration-75  rounded-xl flex justify-around gap-x-0 md:gap-x-32">
                    <div className="w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <FontAwesomeIcon icon={faBolt} className='text-6xl text-yellow-700' />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">Quick payment 01</h2>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <span className="font-medium text-gray-500">Quick payment 01</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div onClick={()=>navigate('/payment')} className="p-8 sm:flex sm:space-x-6 shadow-2xl cursor-pointer hover:bg-gray-300 duration-75  rounded-xl flex justify-around gap-x-0 md:gap-x-32">
                    <div className=" w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <FontAwesomeIcon icon={faBolt} className='text-6xl text-yellow-700' />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">Quick payment 02</h2>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <span className="font-medium text-gray-500">Quick payment 02</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div onClick={()=>navigate('/payment')} className="p-8 sm:flex sm:space-x-6 shadow-2xl cursor-pointer hover:bg-gray-300 duration-75  rounded-xl flex justify-around gap-x-0 md:gap-x-32">
                    <div className=" w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <FontAwesomeIcon icon={faBolt} className='text-6xl text-yellow-700' />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">Quick payment 03</h2>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <span className="font-medium text-gray-500">Quick payment 03</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div onClick={()=>navigate('/payment')} className="p-8 sm:flex sm:space-x-6 shadow-2xl cursor-pointer hover:bg-gray-300 duration-75  rounded-xl flex justify-around gap-x-0 md:gap-x-32">
                    <div className=" w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <FontAwesomeIcon icon={faBolt} className='text-6xl text-yellow-700' />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">Quick payment 04</h2>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <span className="font-medium text-gray-500">Quick payment 04</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div onClick={()=>navigate('/payment')} className="p-8 sm:flex sm:space-x-6 shadow-2xl cursor-pointer hover:bg-gray-300 duration-75  rounded-xl flex justify-around gap-x-0 md:gap-x-32">
                    <div className=" w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <FontAwesomeIcon icon={faBolt} className='text-6xl text-yellow-700' />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">Quick payment 05</h2>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <span className="font-medium text-gray-500">Quick payment 05</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full  py-7 px-8 bg-[#6a9fb5db] '>
            </div>
        </div>
    )
}

export default qckPaymentLink


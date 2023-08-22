import React, { useState } from 'react'

const withdraw = () => {
    const [amount, setAmount] = useState()
    return (
        <div className='container mx-auto bg-white shadow-2xl'>
            <div className='bg-[#47a219]'>
                <h1 className='text-white text-5xl text-center font-semibold py-4'>Withdraws</h1>
            </div>
            <div className='bg-white text0-black my-8 px-8'>
                <h4 className='text-2xl font-medium pt-4'>Balance: ₹{amount || 0.00}</h4>
                <div>
                    <h4 className='text-2xl font-medium my-4 border-b-2 border-[#47a219]'>Bank account</h4>
                    <form className='pl-10 pr-7'>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-[#47a219] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bank Name</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-[#47a219] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Realname</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="Number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-[#47a219] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Account  No.</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="Number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-[#47a219] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">IFSC.</label>
                        </div>
                    </form>
                    <div>
                        <div>
                            <h4 className='text-2xl font-medium my-4 '>Amount:</h4>
                            <input onChange={(e)=>setAmount(e.target.value)}  type="Number" className="bg-gray-50 border font-semibold border-[#abb577] text-gray-900 text-sm outlie-[2px] outline-[#abb577] rounded-lg focus:ring-[#abb577] focus:border-[#abb577] block w-full p-2.5 " />
                        </div>
                        <div>
                            <h4 className='text-2xl font-medium my-4 '>Password:</h4>
                            <input type="password" className="bg-gray-50 border font-bold border-[#abb577] text-gray-900 text-sm outlie-[2px] outline-[#abb577] rounded-lg focus:ring-[#abb577] focus:border-[#abb577] block w-full p-2.5 " />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full  py-7 px-8 bg-[#76c84c] '>
                <div className="text-white bg-[#47a219] hover:bg-[#549534] duration-200 focus:ring-4 focus:outline-none  focus:ring-[#47a219] font-medium rounded-lg text-xl cursor-pointer sm:w-auto px-5 py-4 text-center ">Submit</div>
            </div>
        </div>
    )
}
export default withdraw

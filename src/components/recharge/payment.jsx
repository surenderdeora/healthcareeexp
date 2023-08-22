import React from 'react'
import PaymentQrScanner from '../../images/paymnetqrscner.jpg' 

const payment = () => {
    return (
        <div className='container mx-auto bg-white shadow-2xl'>
            <div className='bg-[#59c4a2]'>
                <h1 className='text-white text-5xl text-center font-semibold py-4'>Payment</h1>
            </div>
            <div>
                <h1 className='text-4xl my-4 font-extrabold text-center'>QR Scan</h1>
                <div className='flex justify-center bg-[#f3f6fd]'>
                    <img src={PaymentQrScanner} alt="" width={500} className='rounded-3xl my-8 shadow-xl' />
                </div>
            </div>
            <div className='w-full  py-7 px-8 bg-[#59c4a2] '>
            </div>
        </div>
    )
}
export default payment

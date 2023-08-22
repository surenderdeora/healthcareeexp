import React from 'react'
import Navbar from './navbar'
import product1 from '../images/Laboratory-Medical-Blood-Cell-Smear-Cytology-Centrifuge-with-CE.jpg'
import product2 from '../images/ON-22G-1.jpg'
import product3 from '../images/50211-0WH-600x600.png'
import product4 from '../images/microplate-elisa-reader-500x500.webp'
import product5 from '../images/633fed6b0d958d1cb44c09d4-jiawanshun-prp-centrifuge-machine-for.jpg'

const products = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-6xl font-bold text-center my-5'>Our products</h2>

            <div className='w-full flex justify-around flex-wrap gap-x-6 gap-y-14 my-20'>
                <div className="w-full max-w-sm bg-white  shadow-2xl border border-gray-200 rounded-2xl ">
                    <a href="#">
                        <img className="mx-auto my-2 p-1 rounded-2xl" src={product1} width={300} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#" className=''>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">M-1000</h5>
                            <h5 className="text-2xl font-semibold text-gray-900 my-1"><span>Price: </span>$1000</h5>
                        </a>
                        <span className="text-xl font-semibold tracking-tight my-1 text-gray-900 ">Validiy period: <b className='font-medium my-2'>40 days</b></span>
                        <p className="text-xl font-semibold tracking-tight my-1 text-gray-900 ">Dilay: <b className='font-medium my-2'>51.25</b></p>
                        <div className="flex items-center justify-between">
                            <h5 className="text-2xl font-bold text-gray-900 "><span className='text-2xl font-bold'>Total Reverse:</span> 2050</h5>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="w-full max-w-sm bg-white  shadow-2xl border border-gray-200 rounded-2xl">
                    <a href="#">
                        <img className="mx-auto my-2 p-5 rounded-2xl" src={product2} width={300} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#" className=''>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">M-3550</h5>
                            <h5 className="text-2xl font-semibold text-gray-900 my-1"><span>Price: </span>$3550</h5>
                        </a>
                        <span className="text-xl font-semibold tracking-tight my-1 text-gray-900 ">Validiy period: <b className='font-medium my-2'>55 days</b></span>
                        <p className="text-xl font-semibold tracking-tight my-1 text-gray-900 ">Dilay: <b className='font-medium my-2'>127.27</b></p>
                        <div className="flex items-center justify-between">
                            <h5 className="text-2xl font-bold text-gray-900 "><span className='text-2xl font-bold'>Total Reverse:</span> 7000</h5>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="w-full max-w-sm bg-white  shadow-2xl border border-gray-200 rounded-2xl">
                    <a href="#">
                        <img className="mx-auto my-2 p-5 rounded-2xl" src={product3} width={300} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#" className=''>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">M-15800</h5>
                            <h5 className="text-2xl font-semibold text-gray-900 my-1"><span>Price: </span>$15800</h5>
                        </a>
                        <span className="text-xl font-semibold tracking-tight my-1 text-gray-900 ">Validiy period: <b className='font-medium my-2'>60 days</b></span>
                        <p className="text-xl font-semibold tracking-tight my-1 text-gray-900 ">Dilay: <b className='font-medium my-2'>526.66</b></p>
                        <div className="flex items-center justify-between">
                            <h5 className="text-2xl font-bold text-gray-900 "><span className='text-2xl font-bold'>Total Reverse:</span> 31600</h5>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="w-full max-w-sm bg-white  shadow-2xl border border-gray-200 rounded-2xl">
                    <a href="#">
                        <img className="mx-auto my-2 p-5 rounded-2xl" src={product4} width={300} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#" className=''>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">M-32500</h5>
                            <h5 className="text-2xl font-semibold text-gray-900 my-1"><span>Price: </span>$32500</h5>
                        </a>
                        <span className="text-xl font-semibold tracking-tight my-1 text-gray-900 ">Validiy period: <b className='font-medium my-2'>56 days</b></span>
                        <p className="text-xl font-semibold tracking-tight my-1 text-gray-900 ">Dilay: <b className='font-medium my-2'>1160.01</b></p>
                        <div className="flex items-center justify-between">
                            <h5 className="text-2xl font-bold text-gray-900 "><span className='text-2xl font-bold'>Total Reverse:</span> 65000</h5>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="w-full max-w-sm bg-white  shadow-2xl border border-gray-200 rounded-2xl">
                    <a href="#">
                        <img className="mx-auto my-2 p-5 rounded-2xl" src={product5} width={300} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#" className=''>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">M-55900</h5>
                            <h5 className="text-2xl font-semibold text-gray-900 my-1"><span>Price: </span>$55900</h5>
                        </a>
                        <span className="text-xl font-semibold tracking-tight my-1 text-gray-900 ">Validiy period: <b className='font-medium my-2'>75 days</b></span>
                        <p className="text-xl font-semibold tracking-tight my-1 text-gray-900 ">Dilay: <b className='font-medium my-2'>1490.66</b></p>
                        <div className="flex items-center justify-between">
                            <h5 className="text-2xl font-bold text-gray-900 "><span className='text-2xl font-bold'>Total Reverse:</span> 111800</h5>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}
export default products

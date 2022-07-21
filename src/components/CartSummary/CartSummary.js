import React from 'react';
import { ShoppingCartIcon, TruckIcon } from '@heroicons/react/outline';

const CartSummary = () => {
    return (
        <div>
            <section className='flex ml-32'>
                <div>
                    <div className='border-2 rounded-full p-2 border-emerald-400'><ShoppingCartIcon className='h-6'></ShoppingCartIcon></div>
                    </div>
                    <div className='border-x-8 h-0.5 mx-3 mt-5'></div>
                    <div>
                    <div className='border-0 rounded-full p-2 bg-emerald-400'><TruckIcon className='h-6 text-white'></TruckIcon></div>
                </div>
            </section>
            <section>
                <p className='font-medium text-gray-600 pt-10 pb-5'>Your cart</p>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <div className='border-2 rounded-full p-2 border-emerald-400 mr-4'><ShoppingCartIcon className='h-6'></ShoppingCartIcon></div>
                        <div>
                            <p className='font-medium text-gray-600'>T-Shirt</p>
                            <p className='font-medium text-gray-600'>Summer Vibes</p>
                            <p className='font-medium text-gray-300 pt-2 text-sm'>#261311</p>
                        </div>
                    </div>
                    <p className='font-medium text-gray-600 ml-12'>$89.99</p>
                </div>
            </section>
            <section className='mt-5'>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <div className='border-2 rounded-full p-2 border-emerald-400 mr-4'><ShoppingCartIcon className='h-6'></ShoppingCartIcon></div>
                        <div>
                            <p className='font-medium text-gray-600'>Basic Slim</p>
                            <p className='font-medium text-gray-600'>Fit T-Shirt</p>
                            <p className='font-medium text-gray-300 pt-2 text-sm'>#212315</p>
                        </div>
                    </div>
                    <p className='font-medium text-gray-600 ml-20'>$69.99</p>
                </div>
            </section>
            <div>
                <button className='rounded-full border-0 px-8 py-3 ml-3 mt-8 flex bg-gray-200'>
                    <p className='mr-10 text-gray-500'>Total cost</p>
                    <p>$159.98</p>
                </button>
            </div>
            <div className='flex items-center text-gray-600 mt-10 ml-7 text-sm'>
                <TruckIcon className='h-5 mr-6'></TruckIcon>
                <p><span className='block'>You are <span className='text-black'>$30.02</span> away</span>from free shipping!</p>
            </div>
        </div>
    );
};

export default CartSummary;
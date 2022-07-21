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
                            <p className='font-medium text-gray-200 pt-2'>#261311</p>
                        </div>
                    </div>
                    <p className='font-medium text-gray-600 ml-12'>$89.99</p>
                </div>
            </section>
            <section className='mt-6'>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <div className='border-2 rounded-full p-2 border-emerald-400 mr-4'><ShoppingCartIcon className='h-6'></ShoppingCartIcon></div>
                        <div>
                            <p className='font-medium text-gray-600'>Basic Slim</p>
                            <p className='font-medium text-gray-600'>Fit T-Shirt</p>
                            <p className='font-medium text-gray-200 pt-2'>#212315</p>
                        </div>
                    </div>
                    <p className='font-medium text-gray-600 ml-12'>$69.99</p>
                </div>
            </section>
            <div>
                <button className='uppercase rounded-full border-2 px-8 py-3 ml-3'>Sign Up</button>
            </div>
        </div>
    );
};

export default CartSummary;
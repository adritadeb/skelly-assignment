import React from 'react';
import { Link } from 'react-router-dom';

const ShippingInfo = () => {
    return (
        <div>

            {/* Login options */}
            <h4 className='pb-14 text-xl font-medium text-gray-600'>Shipping and Payment</h4>
            <section>
                <button className='uppercase rounded-full border-0 px-10 py-4 bg-emerald-400 text-white'>
                    <Link to='/login'>Log in</Link>
                </button>
                <button className='uppercase rounded-full border-2 px-8 py-3 ml-3'>
                    <Link to='/login'>Sign Up</Link>
                </button>
            </section>

            {/* Shipping form */}
            <p className='font-medium text-gray-600 pt-10 pb-5'>Shipping Information</p>
            <form className='flex'>
                {/* first row */}
                <div>
                    <input className='rounded-full border-2 py-2 pl-7 w-52' type="text" name="Email" placeholder='Email' />
                    <input className='rounded-full border-2 py-2 pl-7 my-4 w-52 block' type="text" name="First name" placeholder='First name' />
                    <input className='rounded-full border-2 py-2 pl-7 w-52' type="text" name="Last name" placeholder='Last name' />
                    <input className='rounded-full border-2 py-2 pl-7 mt-4 w-52 block' type="text" name="Phone" placeholder='Phone number' />
                </div>

                {/* second row */}
                <div className='ml-3'>
                    <input className='rounded-full border-2 py-2 pl-7 w-52' type="text" name="Address" placeholder='Address' />
                    <input className='rounded-full border-2 py-2 pl-7 my-4 w-52 block' type="text" name="City" placeholder='City' />
                    <input className='rounded-full border-2 py-2 pl-7 w-52' type="text" name="Code" placeholder='Postal Code / ZIP' />
                    <input className='rounded-full border-2 py-2 pl-7 mt-4 w-52 block' type="text" name="Poland" placeholder='Poland' />
                </div>
            </form>
        </div>
    );
};

export default ShippingInfo;
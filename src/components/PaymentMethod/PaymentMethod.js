import React from 'react';

const PaymentMethod = () => {
    return (
        <div>
            <p className='font-medium text-gray-600 pt-20 pb-5'>Payment method</p>
            <div className='grid grid-cols-3 gap-2'>
                <button className='rounded-3xl border-2 px-6 py-3'>PayPal</button>
                <button className='rounded-3xl border-2 px-6 py-3'>Visa</button>
                <button className='rounded-3xl border-2 px-6 py-3'>Most</button>
                <button className='rounded-3xl border-2 px-6 py-3'>payment</button>
                <button className='rounded-3xl border-2 px-6 py-3'>discover</button>
                <button className='rounded-3xl border-2 px-6 py-3'>deal</button>
            </div>
            <p className='font-medium text-gray-600 pt-12 pb-5'>Delivery method</p>
            <div className='grid grid-cols-2 gap-2'>
            <button className='rounded-full border-2 px-6 py-3'>InPost</button>
                <button className='rounded-3xl border-2 px-6 py-3'>dpd</button>
                <button className='rounded-3xl border-2 px-6 py-3'>dhl</button>
                <button className='rounded-3xl border-2 px-6 py-3'>Fedex</button>
            </div>
        </div>
    );
};

export default PaymentMethod;
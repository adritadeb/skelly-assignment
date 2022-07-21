import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/outline';

const LastSection = () => {
    return (
        <div className='px-14 py-12 flex items-center justify-between'>
            <div className='flex items-center'>
                <ArrowLeftIcon className='h-5 mr-6'></ArrowLeftIcon>
                <p>Back</p>
            </div>
            <div>
                <button className='uppercase rounded-full border-2 border-black px-8 py-3 mr-3'>Continue Shopping</button>
                <button className='uppercase rounded-full border-0 px-10 py-4 bg-emerald-400 text-white'>Proceeed to payment</button>
            </div>
        </div>
    );
};

export default LastSection;
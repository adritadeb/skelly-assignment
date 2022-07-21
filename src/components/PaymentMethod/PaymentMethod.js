import React from 'react';
import paypal from '../../Images/payment/paypal.png';
import Visa from '../../Images/payment/Visa.png';
import mastercard from '../../Images/payment/mastercard.png';
import maestro from '../../Images/payment/maestro.png';
import Discover from '../../Images/payment/Discover.png';
import IDEAL from '../../Images/payment/IDEAL.png';
import inpost from '../../Images/delivery/inpost.png';
import dpd from '../../Images/delivery/dpd.jpg';
import DHL from '../../Images/delivery/DHL.png';
import FedEx from '../../Images/delivery/FedEx.jpg';

const PaymentMethod = () => {
    return (
        <div>
            <p className='font-medium text-gray-600 pt-20 pb-5'>Payment method</p>
            <div className='grid grid-cols-3 gap-2'>
                <button className='rounded-3xl border-2 px-6 py-2'>
                    <img className='h-8' src={paypal}/>
                </button>
                <button className='rounded-3xl border-2 px-6 py-2'>
                    <img className='h-8' src={Visa}/>
                </button>
                <button className='rounded-3xl border-2 px-6 py-2'>
                    <img className='h-8' src={mastercard}/>
                </button>
                <button className='rounded-3xl border-2 border-orange-100 px-6 py-2'>
                    <img className='h-8' src={maestro}/>
                </button>
                <button className='rounded-3xl border-2 px-6 py-2'>
                    <img className='h-8' src={Discover}/>
                </button>
                <button className='rounded-3xl border-2 px-6 py-2'>
                    <img className='h-8' src={IDEAL}/>
                </button>
            </div>
            <p className='font-medium text-gray-600 pt-12 pb-5'>Delivery method</p>
            <div className='grid grid-cols-2 gap-2'>
                <button className='rounded-3xl border-2 px-6 py-2 flex justify-between items-center'>
                    <img className='h-8' src={inpost}/>
                    <p>$20.00</p>
                </button>
                <button className='rounded-3xl border-2 px-6 py-2 flex justify-between items-center'>
                    <img className='h-8' src={dpd}/>
                    <p>$12.00</p>
                </button>
                <button className='rounded-3xl border-2 px-6 py-2 flex justify-between items-center'>
                    <img className='h-8' src={DHL}/>
                    <p>$15.00</p>
                </button>
                <button className='rounded-3xl border-2 px-6 py-2 flex justify-between items-center'>
                    <img className='h-8' src={FedEx}/>
                    <p>$10.00</p>
                </button>
            </div>
        </div>
    );
};

export default PaymentMethod;
import React from 'react';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import ShippingInfo from '../ShippingInfo/ShippingInfo';

const PaymentPage = () => {
    return (
        <div className='flex py-12 px-14'>
            <ShippingInfo></ShippingInfo>
            <PaymentMethod></PaymentMethod>
        </div>
    );
};

export default PaymentPage;
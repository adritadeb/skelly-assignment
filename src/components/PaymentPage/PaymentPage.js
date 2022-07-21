import React from 'react';
import CartSummary from '../CartSummary/CartSummary';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import ShippingInfo from '../ShippingInfo/ShippingInfo';

const PaymentPage = () => {
    return (
        <div className='flex justify-between py-12 px-14'>
            <ShippingInfo></ShippingInfo>
            <PaymentMethod></PaymentMethod>
            <CartSummary></CartSummary>
        </div>
    );
};

export default PaymentPage;
import React from 'react';
import { SearchIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/outline';
import Logo from '../../Images/Logo.PNG';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='border-b-2 mx-8'>
            <div className='flex justify-between items-center mx-10 py-6'>
                <div className='flex items-center'>
                    <img className='h-14' src={Logo} />
                    <Link to='/'><h3 className='text-xl pl-5'><span className='text-orange-300'>E-</span>Shop</h3></Link>
                </div>

                {/* Menubar */}
                <section className='flex'>
                    <p>Men</p>
                    <p className='px-14'>Women</p>
                    <p>Kids</p>
                </section>

                {/* Icons */}
                <section className='flex'>
                    <SearchIcon className='h-5'></SearchIcon>
                    <ShoppingCartIcon className='h-5 px-8'></ShoppingCartIcon>
                    <UserIcon className='h-5'></UserIcon>
                </section>
            </div>
        </div>
    );
};

export default Header;
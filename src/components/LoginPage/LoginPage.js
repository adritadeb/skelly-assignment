import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [ signInWithEmailAndPassword ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();

    //   Login method
      const login = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);
        event.target.reset();
        navigate('/');
      }

    return (
        <div className='border-2 border-black rounded-2xl mx-auto my-14 py-8 pl-20 w-2/6'>
            <h3 className='uppercase text-2xl font-bold text-emerald-300 pl-20'>Login</h3>
            
            {/* Login Form */}
            <form onSubmit={login}>
                <input className='rounded-xl border-2 py-2 pl-7 mt-8' type="email" name="email" placeholder='Email' required />
                <input className='rounded-xl border-2 py-2 pl-7 my-5 block' type="password" name="password" placeholder='Password' required />
                <input className='rounded-xl border-emerald-300 border-2 py-2 px-24' type="submit" value='Login' />
            </form>
        </div>
    );
};

export default LoginPage;
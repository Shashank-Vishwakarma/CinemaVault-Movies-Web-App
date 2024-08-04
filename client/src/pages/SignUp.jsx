import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { KeyRound, Mail, UserIcon } from 'lucide-react';
import useSignUp from '../hooks/useSignUp.js';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, signup } = useSignUp();

    const navigateTo = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        await signup({ email, username, password });
        navigateTo('/');
    }

    return (
        <div className='h-screen w-full bg-gradient-to-r from-slate-300 to-slate-500'>
            <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
                <Link to={"/"}>
                    <div className='flex flex-row gap-4 items-center'>
                        <img src='/logo.png' alt='logo' className='w-20' />
                        <span className='text-lg text-sky-500 font-bold'>CinemaVault</span>
                    </div>
                </Link>
            </header>

            <div className='flex justify-center items-center mt-20 mx-3'>
                <div className='w-full max-w-md p-8 space-y-6 bg-slate-600 rounded-lg shadow-md'>
                    <h1 className='text-center text-white text-2xl font-bold mb-4'>Sign Up</h1>

                    <form className='space-y-4' onSubmit={handleSignUp}>
                        <div className='flex flex-row items-center mt-1 px-2 gap-2 w-full border-2 border-gray-700 rounded-md bg-transparent text-white'>
                            <Mail />
                            <input
                                type='email'
                                className='w-full px-3 py-2 rounded-md bg-transparent text-white focus:outline-none'
                                placeholder='Email'
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-row items-center mt-1 px-2 gap-2 w-full border-2 border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'>
                            <UserIcon />
                            <input
                                type='text'
                                className='w-full px-3 py-2 rounded-md bg-transparent text-white focus:outline-none'
                                placeholder='Username'
                                id='username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-row items-center mt-1 px-2 gap-2 w-full border-2 border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'>
                            <KeyRound />
                            <input
                                type='password'
                                className='w-full px-3 py-2 rounded-md bg-transparent text-white focus:outline-none'
                                placeholder='Password'
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>


                        <button
                            type='submit'
                            className='flex justify-center w-full py-2 cursor-pointer bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-600'
                        >
                            {loading ? (
                                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            ) : "Sign Up"}
                        </button>
                    </form>
                    <div className='text-center text-gray-400'>
                        Already have a membership?{" "}
                        <Link to={"/login"} className='text-sky-500 hover:underline'>
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp

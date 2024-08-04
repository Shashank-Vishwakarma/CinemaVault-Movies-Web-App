import React from 'react'
import { Link } from 'react-router-dom';

const AuthScreen = () => {
    return (
        <div className="relative bg-[url('/bg-image.jpg')] bg-contain">
            {/* Navbar */}
            <header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
                <div className='flex gap-4 items-center'>
                    <img src='/logo.png' alt='CinemaVault Logo' className='w-16 md:w-16' />
                    <span className="font-bold text-xl text-sky-500">CinemaVault</span>
                </div>

                <Link to={"/login"} className='text-white bg-sky-600 hover:bg-sky-700 font-bold py-1 px-3 rounded-lg w-20 text-center'>
                    Login
                </Link>
            </header>

            {/* hero section */}
            <div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>
                <h1 className='text-4xl md:text-6xl font-bold mb-4'>Unlimited Movies, TV shows, and more</h1>
            </div>

            {/* separator */}
            <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

            {/* 3rd section */}
            <div className='py-10 bg-black text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                    {/* left side */}
                    <div className='flex-1 text-center md:text-left'>
                        <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Watch Anywhere</h2>
                        <p className='text-lg md:text-xl'>
                            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                        </p>
                    </div>

                    {/* right side */}
                    <video
                        className='flex top-2 left-1/2 -translate-x-1/2 w-64 z-10 max-w-[63%] '
                        playsInline
                        autoPlay={true}
                        muted
                        loop
                    >
                        <source src='/frontend_public_video-devices.m4v' type='video/mp4' />
                    </video>
                </div>
            </div>

            <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

            <div className='py-10 bg-black text-white'>
                <div
                    className='flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row px-4 md:px-2'
                >
                    <div className='flex-1 relative'>
                        <img src='/latest-movie.jpg' alt='Latest Movie' className='mt-4 w-80' />
                    </div>

                    <div className='flex-1 text-center md:text-left'>
                        <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Watch Latest Movies</h2>
                        <p className='text-lg md:text-xl'>
                            Enjoy the latest released movies and TV shows
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthScreen

import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Info, Play } from "lucide-react";
import useAuthStore from "../store/useAuthStore.js";
import AuthScreen from "./AuthScreen.jsx";

const Home = () => {
    const { user } = useAuthStore();

    return user ? <div className="relative h-screen text-white bg-[url('/bg-image.jpg')] bg-contain">
        <Navbar />

        <div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center shimmer -z-10' />
        <img
            src=""
            alt='Image'
            className='absolute top-0 left-0 w-full h-full object-cover -z-50'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black/50 -z-50' aria-hidden='true' />

        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32'>
            <div
                className='bg-gradient-to-b from-black via-transparent to-transparent 
            absolute w-full h-full top-0 left-0 -z-10'
            />

            <div className='max-w-2xl'>
                <h1 className='mt-4 text-6xl font-extrabold text-balance'>
                    Trending
                </h1>
                <p className='mt-2 text-lg'>
                    Hello
                </p>

                <p className='mt-4 text-lg'>
                    What?
                </p>
            </div>

            <div className='flex mt-8'>
                <Link
                    to={`/watch`}
                    className='bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center'
                >
                    <Play className='size-6 mr-2 fill-black' />
                    Play
                </Link>

                <Link
                    to={`/watch`}
                    className='bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center'
                >
                    <Info className='size-6 mr-2' />
                    More Info
                </Link>
            </div>
        </div>
    </div> : <AuthScreen />
};
export default Home;
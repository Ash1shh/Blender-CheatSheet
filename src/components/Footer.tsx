import React from 'react';
import { FaHeart } from 'react-icons/fa';

function Footer() {
    return (
        <footer
            className="flex flex-col w-full items-center text-xl md:text-2xl py-20 font-thin bg-purple-100 text-violet-700 uppercase">
            <div className="text-sm text-gray-700">Made with</div>
            <div className="flex justify-center items-center border-4 border-rose-100  bg-rose-200 my-2 w-10 h-10  p-2 rounded-full">
                <FaHeart color="red" />
            </div>
            <a className="text-2xl capitalize" href="https://ashishchandra.vercel.app/">
                Ashish Chandra
            </a>
        </footer>
    );
}

export default Footer;
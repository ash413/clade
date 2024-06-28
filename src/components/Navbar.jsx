import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { LuBell } from "react-icons/lu";
import { default as logo } from '../assets/logo.png';

const Navbar = () => {
return (
    <div className='text-black flex justify-between m-8 items-center'>
        <div className='flex items-center bg-gray-400'>
            <p className='text-orange'>Logo</p>
        </div>
        <div className='flex justify-between border-8 m-4'>
            <button>Jobs</button>
            <p>Messages</p>
            <p>Payments</p>
        </div>
        <div className='flex'>
            <LuBell className='mr-4 mt-2'/>
            <div className='flex '>
                <img src={logo} alt="" className='w-8 h-8 mr-2 rounded-full'/>
                <FaChevronDown className='mt-2'/>
            </div>
        </div>
    </div>
)
}

export default Navbar
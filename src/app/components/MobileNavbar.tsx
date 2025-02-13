"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import tics from '@/assets/ticz.png'
import logo from '@/assets/hugeicons_ticket-01.png'
import arrow from '@/assets/Line 5.png'
import { Button } from '@/components/ui/button'

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='lg:hidden p-1'>
      {/* Centered Navbar */}
      <div className="  w-[100%] max-w-[400px]  bg-navBar shadow-sm border-border border-[0.01rem] 
                     backdrop-blur-lg bg-opacity-70 rounded-2xl flex justify-between items-center px-4 py-2">
        {/* Left Side - Logo (Click to open modal) */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setIsOpen(true)}>
          <div className='border-border border-[0.006rem] rounded-lg p-1'>
            
          <Image src={logo} alt="logo" className='w-6 h-6'/>
          </div>
          <Image src={tics} alt="logo" className='w-6 h-4'/>
        </div>

        {/* Right Side - Ticket Button */}
        <div>
          <Button className='text-black bg-white flex items-center'>
            <span>Ticket</span>
            <Image src={arrow} alt="logo" className='w-6 h-2 ml-1'/>
          </Button>
        </div>
      </div>

      {/* Modal - Slide-in from Left */}
      <div className={`fixed top-0 left-0 h-screen w-64 bg-[#08252B] border-r-2 border-[#2BA4B9] 
                      p-5 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                      transition-transform duration-300 ease-in-out z-50`}>
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="text-white text-lg mb-4">
          ✖ Close
        </button>

        {/* Navigation Links */}
        <div className='flex flex-col space-y-4'>
          <a href="#" className="text-white text-lg font-jejun">Event</a>
          <a href="#" className="text-white text-lg font-jejun">My Tickets</a>
          <a href="#" className="text-white text-lg font-jejun">About Project</a>
        </div>
      </div>

      {/* Overlay (Click to close modal) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default MobileNavbar;

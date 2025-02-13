'use client'
import Image from 'next/image'
import React from 'react'
import tics from '@/assets/ticz.png'
import logo from '@/assets/hugeicons_ticket-01.png'
import arrow from '@/assets/Line 5.png'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const DesktopNavbar = () => {
  return (
    <div className='hidden  lg:block'>
      <div className="flex justify-center">
        <nav className="fixed top-4 mx-auto w-[80%] lg:w-[80%] bg-navBar shadow-sm rounded-2xl border-border border-[0.01rem] 
                       items-center p-1 backdrop-blur-lg bg-opacity-70">
          <div className='flex items-center justify-between '>
            <div className='flex space-x-1 items-center pl-1'>
              <Image src={logo} alt="logo" className='w-6 h-6'/>
              <Image src={tics} alt="logo" className='w-6 h-4'/>
            </div>
            <div className='flex items-center space-x-6'>
              <Link href="/AttendeeForm" className="text-white font-jejun">Event</Link>
              <Link href="/TicketsDisplay" className="text-white font-jejun">Attendees</Link>
              <a href="#" className="text-white font-jejun">About Project</a>
            </div>
            <div className='flex items-center '>
             <Button className='text-black bg-white'><span>Ticket  </span>
             <Image src={arrow} alt="logo" className='w-6 h-2'/>
             </Button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default DesktopNavbar

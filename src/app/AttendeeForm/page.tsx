import AttendeeForm from '@/components/ui/AttendeeForm'
import React from 'react'
import MobileNavbar from '../components/MobileNavbar'
import DesktopNavbar from '../components/DesktopNavbar'

const page = () => {
  return (
    <div>
        <MobileNavbar/>
        <DesktopNavbar/>
 <div className="min-h-screen flex items-center justify-center bg-deepDark">
        <AttendeeForm />
      </div>
    </div>
  )
}

export default page

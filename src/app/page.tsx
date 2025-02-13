import Image from 'next/image';
import Link from 'next/link';
import DesktopNavbar from './components/DesktopNavbar';
import TicketSection from './components/TicketSection';
import MobileNavbar from './components/MobileNavbar';

export default function Home() {


  return (
    <div className='bg-deepDark flex flex-col justify-center  items-center  '>
 
  <TicketSection/>

     
    </div>
  );
}

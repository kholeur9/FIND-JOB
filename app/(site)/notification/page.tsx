import Link from 'next/link';

import { Navbar } from '../../components/Navbar';
import { Icons } from '../../components/ui/Icons';

import { TfiHome, TfiEye } from "react-icons/tfi";

export default function Notification() {

  const currentPage = 'Notifications';
  
  return (
    <>
     <Navbar 
       currentPage={currentPage}
     >
       <Link
        href='/'>
            <Icons>
                <TfiHome size={20} />
            </Icons>
       </Link>

       <Link
         href='#'>
             <Icons>
                 <TfiEye size={20} />
             </Icons>
        </Link>
       
     </Navbar>
    </>
  )
}

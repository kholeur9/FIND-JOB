import Link from 'next/link';

import { Navbar } from '../../components/Navbar';
import { Icons } from '../../components/ui/Icons';

import { TfiSettings,TfiHome } from 'react-icons/tfi';

export default function Profil() {
   return (
     <>
       <Navbar currentPage="Profil">
         <Link href="/">
         <Icons>
            <TfiHome size={20} />
          </Icons>
         </Link>

         <Link href="/#">
         <Icons>
           <TfiSettings size={20} />
         </Icons>
         </Link>
       
       </Navbar>
     </>
   )
}

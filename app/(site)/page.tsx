import Link from 'next/link'
import clsx from 'clsx'

import { Navbar } from '../components/Navbar'
import { Icons } from '../components/ui/Icons';
import { HelloTime } from '../components/HelloTime';
import styles from '../../styles/page.module.css'

import { TfiBell, TfiEye } from "react-icons/tfi";

export default function Home() {

  const currentPage = '';
  
  return (
    <div className="flex flex-col min-h-full">
      <Navbar currentPage={currentPage}>
      <Link
        href='/notification'>
            <Icons>
               <TfiBell size={20} />
            </Icons>
       </Link>
      </Navbar>

      <main className={clsx(`mt-16`, styles.home)}>
        <section className="py-2.5 px-2.5 mt-0.5">
         <div className="flex justify-between items-center">
           <div className="flex flex-col">
             <HelloTime />
             <span className="font-semibold">Yann Wilfried !</span>
           </div>
           <div>

            <Link href='/profil/cv'>
              <button className="flex items-center p-2 rounded-md bg-sky-100 text-sky-700">
                <TfiEye size={18} />
                <span className="ml-2">votre cv</span>
              </button>
            </Link>
           
           </div>
         </div>
        </section>
      </main>
    </div>
  )
}
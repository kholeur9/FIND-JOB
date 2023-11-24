'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';

import { Icons } from '../components/ui/Icons';
import { Search } from './Search';

import { TfiSearch } from "react-icons/tfi";

interface navbarProps {
  currentPage: string;
  children: React.ReactNode;
}

export const Navbar: React.FC<navbarProps> = ({ children, currentPage }) => {

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [nameNav, setNameNav] = useState<string>('');

  useEffect(() => {
    setNameNav(currentPage);
  }, [currentPage]);
  
  return !showSearch ? (
    <div className="relative">
      <div className="fixed top-0 right-0 left-0 bg-white h-16 flex justify-between items-center pr-2.5 py-6 overflow-hidden">
        {nameNav === '' && (
      <div className="flex items-center">
        <Image alt="logo FindJob" src="/FindJobLetter.jpeg" width={120} height={120} />
        <Link href='/login'>
           <button className="items-center p-2 rounded-md bg-sky-100 text-sky-700">
             <span className="public-2.5">Connexion</span>
           </button>
         </Link>
      </div>
        )}
      
        {nameNav !== '' && (
          <h1 className="text-[28px] font-bold pl-2.5">{nameNav}</h1>
        )}
        
         <div className="flex flex-row border rounded-md w-auto h-12 px-1 items-center shadow-sm">
            {children}
            <Icons onClick={() => setShowSearch(true)}>
              <TfiSearch size={20} />
            </Icons>
         </div>
      </div>
    </div>
    ) : (
      <Search 
        closeSearch ={setShowSearch}
      />
    )
}
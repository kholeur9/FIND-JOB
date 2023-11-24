import clsx from 'clsx';

import { Icons } from '../components/ui/Icons';

import { TfiAngleLeft } from "react-icons/tfi";
import styles from '../../styles/page.module.css';


interface searchProps {
  closeSearch: (arg: boolean) => any;
}

export const Search: React.FC<searchProps> = ({ closeSearch }) => {
  return (
    <div className={clsx(`absolute top-0 left-0 right-0 h-screen bg-white z-50 divide-y-[0.1px] divide-slate-200`, styles.searchcontainer, styles.active)}>
      
    <div className="flex items-center py-2.5 px-2.5">

      <Icons onClick={() => closeSearch(false)}>
        <TfiAngleLeft size={20} />
      </Icons>
      
      <input type="text" placeholder="Rechercher une entreprise" className='w-full bg-[#dfe4ea] placeholder-slate-500 ml-2 px-2.5 py-2 text-md text-black outline-none rounded-full border-0 autoFocus'/>
      
    </div>

    <main>
       <p className="text-center text-gray-500 mt-2.5">Aucune recherche</p>
    </main>

    </div>
  )
};
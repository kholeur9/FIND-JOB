import Link from 'next/link';

import { Form } from '../../components/authForm/Form';

export default function Register() {
   return (
     <div className="bg-white min-h-full">
       <header className="flex flex-row justify-between px-6 py-2.5 w-full bg-white h-16">
         <h1 className="text-[28px] font-bold">S'inscrire</h1>
         <Link href='/login'>
           <button className="items-center p-2 rounded-md bg-sky-100 text-sky-700">
             <span className="p-2.5">je veux me connecter</span>
           </button>
         </Link>
       </header>
       <main className="py-2.5">
         <p className="font-bold text-[18px] my-[20px] px-6">Bienvenue, pour vous inscrire sur <span className="text-sky-500">FindJob</span>, commençez par renseigner les informations suivantes.</p>
         <Form isRegister={true} />
       </main>
     </div>
   );
}

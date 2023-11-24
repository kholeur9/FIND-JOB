import Link from 'next/link';

import { Form } from '../../components/authForm/Form';

export default function Login() {
   return (
     <div className="bg-white min-h-full">
       <header className="flex flex-row justify-between px-6 py-2.5 w-full bg-white h-16">
         <h1 className="text-[24px] font-semibold">Se connecter</h1>
         <Link href='/register'>
            <button className="items-center p-2 rounded-md bg-sky-100 text-sky-700">
              <span className="p-2.5">je veux m'inscrire</span>
            </button>
          </Link>
       </header>
       
       <main>
         <Form isLogin={true} />
       </main>
     </div>
   )
}

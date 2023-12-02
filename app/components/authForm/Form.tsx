'use client';

import axios from 'axios';
import { signIn } from 'next-auth/react';

import Image from 'next/image';
import Link from 'next/link';

import { InputForm } from './InputForm';
import { ButtonForm } from './ButtonForm';
import { SocialButton } from './SocialButton';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

import { useRouter } from "next/navigation";

import { useState, useEffect } from 'react';


interface FormProps {
  isLogin?: boolean;
  isRegister?: boolean;
}

type FormData = {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
};

export const Form: React.FC<FormProps> = ({ isLogin, isRegister }) => {

  const router = useRouter()

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    lastName: '',
    firstName: '',
  });

  const [error, setError] = useState<FormData>({
    email: '',
    password: '',
    lastName: '',
    firstName: '',
  });

  /** useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/')
    }
  }, [session?.status, router]);*/

  const handleChangeField = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setError((prevError) => ({
      ...prevError,
      [name]: '',
    }));
  };

  const errorForm = {
    email: () => {
      setError((prevError) => ({
        ...prevError,
        email: 'Votre adresse e-mail est obligatoire',
      }));
    },

    password: () => {
      setError((prevError) => ({
        ...prevError,
        password: 'Votre mot de passe est obligatoire',
      }));
    },

    lastName: () => {
      setError((prevError) => ({
        ...prevError,
        lastName: 'Votre nom est obligatoire',
      }));
    },

    firstName: () => {
      setError((prevError) => ({
        ...prevError,
        firstName: 'Votre prénom est obligatoire',
      }));
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      if (!formData.email) {
        errorForm.email();
      } else if (!formData.password) {
        errorForm.password();
      } else {
        alert(formData.password)
        signIn('credentials', {
          ...formData,
          redirect: false
        })
        .then((callback) => {
        if (callback?.error) {
          alert('erreur')
        }

        if (callback?.ok) {
          router.push('/')
        }
      })
        setFormData({
          email: '',
          password: '',
          lastName: '',
          firstName: '',
        });
      }
    } else {
      if (!formData.lastName) {
        errorForm.lastName();
      } else if (!formData.firstName) {
        errorForm.firstName();
      } else if (!formData.password) {
        errorForm.password();
      } else {
        axios.post('/api/register', formData);
        setFormData({
          email: '',
          password: '',
          lastName: '',
          firstName: '',
        });
      }
    }
  };

  const socialAction = (action: string) => {

    signIn(action, { redirect: false })
      .then((callback) => {
        /**if (callback?.error) {
          toast.error('Invalid credentials!');
        }*/

        if (callback?.ok) {
          router.push('/')
        }
      })
  }

  return (
    <div className="sm:w-full sm:max-w-md bg-white flex flex-col px-4">
      {isLogin && <Image className="pb-0 mb-0" alt="logo FindJob" src="/images/FindJobLetter.jpeg" width={120} height={120} />}
        {isLogin && <span className="mb-3 font-semibold text-[23px]">Connectez-vous à votre compte</span>}
        <form className="w-full mb-6" onSubmit={handleSubmit}>
            <InputForm
              type="email"
              placeholder="Adresse e-mail"
              value={formData.email}
              onChange={(e) => handleChangeField('email', e.target.value)}
              error={error.email}
              name="email"
              height
            />

          {isRegister && (
           <>
            <InputForm
              type="text"
              placeholder="Votre prénom"
              value={formData.lastName}
              onChange={(e) => handleChangeField('lastName', e.target.value)}
              error= {error.lastName}
              name="lastName"
              height
            />

            <InputForm
              type="text"
              placeholder="Votre nom"
              value={formData.firstName}
              onChange={(e) => handleChangeField('firstName', e.target.value)}
              error={error.firstName}
              name="firstName"
              height
            />
           </>
          )}

          <InputForm
            type="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={(e) => handleChangeField('password', e.target.value)}
            error={error.password}
            name="password"
            height
          />

          <ButtonForm type="submit">
          {isLogin ? "Se connecter" : "S'inscrire"}
          </ButtonForm>

          {isLogin && (
            <Link href="/password">
              <span className="text-sm text-slate-600 font-semibold float-right">Mot de passe oublié ?</span>
            </Link>
          )}

          {isRegister && (
            <p className="my-2.5 text-sm text-slate-600">S'inscrire sur la plateforme de Find Job, implique que vous acceptez les <span className="text-sky-600">conditions d'utilisation</span>, et la <span className="text-sky-600">politique de confidentialité</span> de vos informations.</p>
          )}

        </form>

        <div className="relative">
           <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"/>
           </div>
           <div className="relative flex">
              <span className="text-gray-500 text-sm bg-white pr-2">Ou via les réseaux</span>
          </div>
        </div>

        <div className="mt-6 inline-flex gap-2">
         <SocialButton onClick={() => socialAction('google')} icon={FcGoogle}>
           Google
         </SocialButton>

         <SocialButton onClick={() => socialAction('facebook')} className="bg-blue-500" icon={FaFacebook}>
           Facebook
       </SocialButton>
        </div>
    </div>
  );
};
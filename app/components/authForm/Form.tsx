'use client';
import axios from 'axios';
import Image from 'next/image';
import { InputForm } from './InputForm';
import { ButtonForm } from './ButtonForm';

import { useState } from 'react';


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
        // Traitez le login ici
        // Affichez un message de succès ou une erreur dans l'interface utilisateur
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
        axios.post('/api/register', {
          lastName: formData.lastName,
          firstName: formData.firstName,
          email: formData.email,
          password: formData.password,

        })
        setFormData({
          email: '',
          password: '',
          lastName: '',
          firstName: '',
        });
      }
    }
  };

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white flex flex-col px-6 items-center justify-center">
      {isLogin && <Image className="mx-auto w-auto" alt="logo FindJob" src="/FindJobLetter.jpeg" width={120} height={120} />}

        <form className="w-full" onSubmit={handleSubmit}>
          {isLogin && 
          <>
            <InputForm
              type="email"
              placeholder="Adresse e-mail"
              value={formData.email}
              onChange={(e) => handleChangeField('email', e.target.value)}
              error={error.email}
              name="email"
            />
          </>
          }

          {isRegister && (
           <>
            <InputForm
              type="text"
              placeholder="Votre nom"
              value={formData.lastName}
              onChange={(e) => handleChangeField('lastName', e.target.value)}
              error= {error.lastName}
              name="lastName"
            />

            <InputForm
              type="text"
              placeholder="Votre prénom"
              value={formData.firstName}
              onChange={(e) => handleChangeField('firstName', e.target.value)}
              error={error.firstName}
              name="firstName"
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
          />

          <ButtonForm type="submit">
          {isLogin ? "Se connecter" : "S'inscrire"}
          </ButtonForm>

          {isLogin && (
            <span className="text-sm text-slate-600 font-semibold right">Mot de passe oublié ?</span>
          )}

          {isRegister && (
            <p className="my-2.5 text-sm text-slate-600">S'inscrire sur la plateforme de Find Job, implique que vous acceptez les <span className="text-sky-600">conditions d'utilisation</span>, et la <span className="text-sky-600">politique de confidentialité</span> de vos informtions.</p>
          )}

        </form>
    </div>
  );
};
'use client';

import { InputForm } from '../../components/authForm/InputForm';
import { ButtonForm } from '../../components/authForm/ButtonForm';

import { useState } from 'react';

export const PasswordForm = () => {

  const [changePassword, setChangePassword] = useState("");
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const newValue = e.target.value;
    setChangePassword(newValue);
    setError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!changePassword){
      setError("Entrez votre adresse e-mail")
    }

    setChangePassword('')
  }

  return (
    <div className="py-2.5 px-4">
      <form onSubmit={handleSubmit}>

        <InputForm 
          type="email" 
          placeholder="Votre adresse e-mail"
          name="email"
          value={changePassword}
          onChange={handleChange}
          error={error}
          height={false}
        />

        <ButtonForm type="submit">
          Envoyer
        </ButtonForm>

      </form>
    </div>
  )
}
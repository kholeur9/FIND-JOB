'use client';

import { useState, useEffect } from 'react';

export const HelloTime = () => {

  const [hello, setHello] = useState('');

  useEffect(() => {
    const greeting = new Date().toLocaleTimeString();

    if(greeting >= '06:00:00' && greeting < '18:00:00') {
      setHello('Bonjour');
    } else {
      setHello('Bonsoir');
    }
  
  }, []);
  
  return (
    <>
      <span className="text-slate-500">
        {hello},
      </span>
    </>
  )
}
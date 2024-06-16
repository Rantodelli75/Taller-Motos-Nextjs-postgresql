"use client"
import React, { useState } from "react";
import { useRouter } from 'next/navigation';


const Form = () => {
  const router = useRouter();

  return (
    <div className='w-full max-w-md'>
      <div className='mb-5'>
        <h2 className='text-2xl text-black font-bold my-1'>Iniciar sesión</h2>
        <p className='text-gray-500 text-sm'>
            Ingrese su correo y contraseña para ingresar
        </p>
      </div>
      <div className='w-full' >
        <input type='text' placeholder='Email' className="flex max-w-full rounded-xl p-4 bg-gray-100 w-full h-12"/>
        <input type='password' placeholder='Contraseña' className="text-slate-900 mt-4 mb-4 rounded-xl p-4 w-full bg-gray-100 flex h-12"/>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="size-3 mb-6 mt--3 ml-3"
          />
            <span className="text-gray-500 mb-6 mt--3 ml-3 text-sm">Recordarme</span>
        </label>
        <button className="w-full max-w-md rounded-full bg-amber-600 hover:bg-amber-700 h-12 text-white relative p-1 px-8">Iniciar Sesión</button>
        <div className='mt-5 mb-16 flex items-center justify-center gap-x-2'>
          <p className='text-gray-500'>¿No tienes cuenta?</p>
          <button
            type='button'
            onClick={() => router.push('/auth/register')}
            className='font-semibold hover:text-primary text-amber-600 transition-colors duration-300'
          >
            Regístrate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
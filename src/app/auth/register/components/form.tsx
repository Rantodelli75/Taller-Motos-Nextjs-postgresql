"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import router from 'next/router';

const Form = () => {


  return (
    <div className='w-full max-w-md'>
      <div className='mb-6'>
      <h2 className='text-2xl font-bold text-black my-1'>Regístrate</h2>
      <p className='text-gray-500 text-sm'>Ingresa los siguientes datos para realizar el registro</p>
      </div>
    <form>
      <label className='text-gray-500 ml-3 mt-3 text-sm'>NOMBRE Y APELLIDO </label>
      <input
        className='mt-2 flex max-w-full mb-3 rounded-xl text-slate-950 p-4 bg-gray-200 w-full h-12'
        type="text"
        placeholder=""
        required
      />
        <label className='text-gray-500 ml-3 mt-2 mb--3 text-sm'>C.I </label>
        <input
        className='mt-2 rounded-xl mb-3 p-4 w-full text-slate-950 bg-gray-200 flex h-12 placeholder-slate-400'
        type="text"
        placeholder="EJ: V-28439221"
        required
            />
      <label className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>NÚMERO TELEFÓNICO </label>
      <input
        className='mt-2 rounded-xl mb-3 text-slate-950 p-4 w-full bg-gray-200 flex h-12 placeholder-slate-400'
        type="text"
        placeholder="EJ: +584125514378"
        required
      />
      <label className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>EMAIL </label>
      <input
        className='mt-2 rounded-xl mb-3 p-4 w-full text-slate-950 bg-gray-200 flex h-12 placeholder-slate-400 text-md'
        type="email"
        placeholder="EJ: marcomartinez@email.com"
        required
      />
      <label className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>CONTRASEÑA </label>
      <input
        className='mt-2 rounded-xl p-4 w-full text-slate-950 bg-gray-200 flex h-12'
        type="password"
        placeholder=""
        required
      />
      <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="size-3 mb-6 mt-8 ml-3"
          />
            <span className="text-gray-500 mb-6 mt-8 ml-3 text-sm">He leído y acepto los</span><a className="text-amber-600 hover:text-amber-700 mb-6 mt-8 text-sm" href='#'>Términos y Condiciones</a>
        </label>
      <button type="submit" className='w-full max-w-md rounded-full bg-amber-600 hover:bg-amber-700 h-12 text-white relative p-1 px-8 mt-5'>
        Registrarse
      </button>
      <div className='mt-5 mb-10 flex items-center justify-end gap-x-2 mt-5'>
          <p className='text-gray-500'>¿Tienes una cuenta?</p>
          <button
            type='button'
            onClick={() => router.push('@/app/auth/login')}
            className='font-semibold hover:text-amber-800 transition-colors text-amber-600 duration-300'
          >
            Iniciar Sesión
          </button>
        </div>
    </form>
    </div>
  );
};

export default Form;



import type { Metadata } from 'next';
import Logo from '@/app/elements1/sport_bgr.png';
import Form from './components/form';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export const metadata: Metadata = {
  title: 'Iniciar Sesión',
  description: 'Inicio de sesión de la página',
};

export default async function Login() {
   
      
  return (
    <section className='h-full flex flex-col bg-white items-center justify-center'>
      <Image className="size-72" src={require('@/app/elements1/fmclogo.png')} alt="Logo" />
      <Form />
    </section>
  );
}

import type { Metadata } from 'next';
import Form from './components/form';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Registrar Usuario',
  description: 'Register | Auth',
};

export default function Register() {
  return (
    <section className='h-full flex flex-col items-center bg-white justify-center'>
      <Image className="size-72" src={require('@/app/elements1/sport_bgr.png')} alt="Logo" />
      <Form />
    </section>
  );
}

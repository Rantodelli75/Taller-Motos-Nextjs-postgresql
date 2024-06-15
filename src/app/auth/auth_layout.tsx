
import Image from 'next/image';
import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className='min-h-screen grid grid-cols-1 lg:grid-cols-2 p-5'>
      <section className='hidden h-full lg:flex flex-col items-center justify-center gap-y-5 bg-primary rounded-2xl'>
        <div className='relative w-96 h-96'>
          <Image src='/wallpaper.svg' alt='Wallpaper' fill />
        </div>
        <div>
          <h3 className='text-white text-4xl font-semibold text-center mb-5'>
            Help You Switch Careers <br /> To Become a Programmer
          </h3>
          <p className='text-gray-300 text-xl text-center'>
            Addiotional Classes that you caen learn
          </p>
          <p className='text-gray-300 text-center'>anywhere and anytime!</p>
        </div>
      </section>
      {children}
    </main>
  );
};

export default AuthLayout;

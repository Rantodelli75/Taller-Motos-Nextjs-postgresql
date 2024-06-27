import React from 'react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
;

const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <h1 className="font-sans text-slate-600 text-3xl font-bold mb-4">ERROR 404</h1>
            <Image className="size-72" src={require('@/app/elements1/404.png')} alt="Logo" />
            <p className="text-lg text-gray-600 mb-8">Lo sentimos, la página que estás buscando no existe.</p>
            <button
            onClick={() => redirect('/src/app/auth/login')}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
                Volver al inicio
            </button>
        </div>
    );
};

export default Error;
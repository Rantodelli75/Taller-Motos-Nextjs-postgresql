import { useState } from 'react';
import { useRouter } from 'next/navigation';
import router from 'next/router';
import { FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contacto = () => {
    return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h1 className="font-serif text-slate-600 text-xl font-bold mb-4 mt-8">CONTACTO</h1>
        <div className="bg-white shadow-xl rounded-lg p-3 items-center w-9/12 overflow-hidden mb-8">
            <div className="px-4 mb-5">
                <div className="flex justify-between">
                    <div className='w-full max-w-md'>
                        <div className='mb-4 mr-10'>
                        <p className='font-serif font-semibold text-white text-l p-2 pl-10 w-full m-4 mb-4 rounded-full bg-gray-600'>   NUESTRAS REDES</p>
                        </div>
                <form className='mb-12 ml-8'>
                  {/* ... Contenido del primer formulario ... */}
                    <div className="space-y-7 mt-10">
                        <div className="flex items-center space-x-2">
                            <FaInstagram className="text-amber-500 text-3xl"/>
                            <span>@forzamotorclub</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaLinkedinIn className="text-amber-500 text-3xl"/>
                            <span>linkedin.com/in/forzamotorclub</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaEnvelope className="text-amber-500 text-3xl"/>
                            <span>clubforza@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaPhone className="text-amber-500 text-3xl"/>
                            <span>0212-5441866 / 04122728654</span>
                            </div>
                    </div>
                </form>
                    </div>
            <div className='w-full max-w-md'>
                <div className='mb-4 mr-8'>
                <p className='font-serif font-semibold text-white text-l p-2 pl-10 w-full m-4 rounded-full bg-gray-600'>COMENTARIOS Y RECLAMOS</p>
                </div>
                <form className="mt-6 ml-10" action="#" method="POST">
                    <div className="mt-4">
                        <label htmlFor="title" className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>TÍTULO</label>
                        <input type="text" id="title" name="title" className='mt-2 rounded-xl mb-3 p-3 w-9/12 text-slate-950 bg-gray-200 flex h-10 placeholder-slate-400 text-md'/>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="description" className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>DESCRIPCIÓN</label>
                        <textarea id="description" name="description" rows={4} className='mt-2 rounded-xl mb-3 p-3 w-9/12 text-slate-950 bg-gray-200 flex h-18 placeholder-slate-400 text-md'></textarea>
                    </div>
                    </form>
                    <div className="flex justify-center mt-12">
                        <button type='submit' 
                        className='w-7/12 rounded-xl justify-center bg-amber-600 border border-amber-600 hover:border-amber-600 hover:bg-white hover:text-amber-600 font-semibold h-12 text-white relative p-1 px-8'>
                        Enviar
                        </button>
                        </div>
            </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Contacto;
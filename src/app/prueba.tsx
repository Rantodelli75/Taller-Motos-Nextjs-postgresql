import { useState } from 'react';
import { useRouter } from 'next/navigation';
import router from 'next/router';

const Registro = () => {
    return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h1 className="font-serif text-slate-600 text-xl font-bold mb-4 mt-8">NUEVO REGISTRO</h1>
        <div className="bg-white shadow-xl rounded-lg p-3 items-center w-9/12 overflow-hidden mb-8">
            <div className="px-4 mb-5">
                <div className="flex justify-between">
                    <div className='w-full max-w-md'>
                        <div className='mb-4 mr-10'>
                        <p className='font-serif font-semibold text-white text-l p-2 pl-10 w-full m-4 mb-4 rounded-full bg-gray-600'> DATOS DEL CLIENTE</p>
                        </div>
                <form className='mb-12 ml-8'>
                  {/* ... Contenido del primer formulario ... */}
                <label className='text-gray-500 ml-3 mt-1 text-sm'>NOMBRE Y APELLIDO </label>
                <input
                    className='mt-2 flex max-w-full mb-3 rounded-xl text-slate-950 p-3 bg-gray-200 w-9/12 h-10'
                    type="text"
                    placeholder=""
                    required
                />
                <label className='text-gray-500 ml-3 mt-2 mb--3 text-sm'>CÉDULA </label>
                <input
                className='mt-2 rounded-xl mb-3 p-3 w-9/12 text-slate-950 bg-gray-200 flex h-10 placeholder-slate-400'
                type="text"
                placeholder=""
                required
                    />
                <label className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>EMAIL </label>
                        <input
                className='mt-2 rounded-xl mb-3 text-slate-950 p-3 w-9/12 bg-gray-200 flex h-10 placeholder-slate-400'
                type="email"
                placeholder="EJ: marcomartinez@email.com"
                required
                />
                <label className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>TELÉFONO </label>
                <input
                className='mt-2 rounded-xl mb-3 p-3 w-9/12 text-slate-950 bg-gray-200 flex h-10 placeholder-slate-400 text-md'
                type="text"
                placeholder="EJ: +584125514378"
                required
                />
                </form>
                    </div>
            <div className='w-full max-w-md'>
                <div className='mb-4 mr-8'>
                <p className='font-serif font-semibold text-white text-l p-2 pl-10 w-full m-4 rounded-full bg-gray-600'>DATOS DEL VEHÍCULO</p>
                </div>
                <form className='mb-12 ml-8'>
                  {/* ... Contenido del segundo formulario ... */}
                <label className='text-gray-500 ml-3 mt-1 text-sm'>MARCA </label>
                <input
                    className='mt-2 flex max-w-full mb-3 rounded-xl text-slate-950 p-3 bg-gray-200 w-9/12 h-10'
                    type="select"
                    placeholder=""
                    required
                />
                <label className='text-gray-500 ml-3 mt-2 mb--3 text-sm'>MODELO </label>
                <input
                className='mt-2 rounded-xl mb-3 p-3 w-9/12 text-slate-950 bg-gray-200 flex h-10 placeholder-slate-400'
                type="select"
                placeholder="EJ: V-28439221"
                required
                    />
                <label className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>NRO° DE PLACA </label>
                        <input
                className='mt-2 rounded-xl mb-3 text-slate-950 p-3 w-9/12 bg-gray-200 flex h-10 placeholder-slate-400'
                type="text"
                placeholder="EJ: AE139MI"
                required
                />
                <label className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>KILOMETRAJE </label>
                <input
                className='mt-2 rounded-xl mb-3 p-3 w-9/12 text-slate-950 bg-gray-200 flex h-10 placeholder-slate-400 text-md'
                type="number"
                placeholder="EJ: 1500"
                required
                />
                </form>
            </div>
            </div>
            <div className="flex justify-center mt-2">
            <button className='w-3/12 rounded-xl bg-amber-600 border border-amber-600 hover:border-amber-600 hover:bg-white hover:text-amber-600 font-semibold h-12 text-white relative p-1 px-8'>
                Enviar
            </button>
            </div>
        </div>
    </div>
</div>
    );
};

export default Registro
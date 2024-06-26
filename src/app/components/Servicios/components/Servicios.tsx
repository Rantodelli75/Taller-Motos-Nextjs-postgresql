import { useState } from 'react';
import { useRouter } from 'next/navigation';
import router from 'next/router';
import { FaMale, FaAddressCard, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const Services = () => {
    return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h1 className="font-serif text-slate-600 text-xl font-bold mb-4 mt-8">ORDEN DE PAGO</h1>
        <div className="bg-white shadow-xl rounded-lg p-3 items-center w-9/12 overflow-hidden mb-8">
            <div className="px-4 mb-5">
                <div className="flex justify-between">
                    <div className='w-full max-w-md'>
                        <div className='mb-4 mr-10'>
                        <p className='font-serif font-semibold text-white text-l p-2 pl-10 w-full m-4 mb-4 rounded-full bg-gray-600'>   TU ORDEN</p>
                        </div>
                <form className='mb-12 ml-8'>
                  {/* ... Contenido del primer formulario ... */}
                    <div className="space-y-7 mt-10">
                        <div className="flex items-center space-x-2">
                            <FaMale className="text-amber-500 text-xl"/>
                            <span>Cliente: </span>
                            <span>Rafael Alejandro Quiñonez Goncalves</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaAddressCard className="text-amber-500 text-xl"/>
                            <span>C.I: </span>
                            <span>30906399</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaPhoneAlt className="text-amber-500 text-xl"/>
                            <span>Contacto: </span>
                            <span>0412-2024006</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaEnvelope className="text-amber-500 text-xl"/>
                            <span>Email: </span>
                            <span>rappc@gmail.com</span>
                        </div>
                    </div>
                </form>
                    </div>
            <div className='w-full max-w-md'>
                <div className='mb-4 mr-8 ml-8 justify-end -mt-6'>
                <Image className="size-44" src={require('@/app/elements1/fmclogo.png')} alt="Logo" />
                </div>
                <form className="mt-6 ml-10" action="#" method="POST">
                    <div className="mt-4">
                        <label htmlFor="title" className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>Fecha</label>
                        <label htmlFor="title" className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>27/06/2024</label>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="description" className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>Orden N°</label>
                        <label htmlFor="description" className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>0001</label>
                    </div>
                    </form>
            </div>
            </div>
            <table className="min-w-full table-auto">
                <thead className="justify-between">
                    <tr className="bg-gray-300">
                        <th className="px-16 py-2">
                            <span className="text-gray-600">Mecánico</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-600">Servicio</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-600">Costos</span>
                        </th>
                    </tr>
                </thead>
            <tbody className="bg-gray-200">
                
            <tr className="bg-white border-4 border-gray-200 text-center">
                <td className="px-4 py-2">
                    <span
                        className="text-amber-600 font-bold hover:text-amber-700"
                    >
                        Eduard Bello
                    </span>
                </td>
                <td className="px-16 py-2 font-serif text-gray-700 font-semibold flex justify-center">Cambio de Amortiguador</td>
                <td className="px-16 py-2 text-green-800 font-semibold">$85</td>
            </tr>
            <tr className="bg-white border-4 border-gray-200 text-center">
                <td className="px-4 py-2">
                    <span
                        className="text-amber-600 font-bold hover:text-amber-700"
                    >
                        Ramón Giménez
                    </span>
                </td>
                <td className="px-16 py-2 font-serif text-gray-700 font-semibold flex justify-center">Revisión Eléctrica</td>
                <td className="px-16 py-2 text-green-800 font-semibold">$5</td>
            </tr>
            </tbody>
            </table>
            <div className="flex justify-end font-bold mt-4 mr-6 text-green-800">
                Total: $90
            </div>
        </div>
    </div>
</div>
    );
};

export default Services;
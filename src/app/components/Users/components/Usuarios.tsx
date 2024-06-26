import { useState } from 'react';
import { useRouter } from 'next/navigation';
import router from 'next/router';
import { FaUserCircle, FaPencilAlt, FaTrash, } from 'react-icons/fa';

const Users = () => {
    return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="bg-white shadow-xl rounded-lg p-3 items-center w-4/12 overflow-hidden mb-8">
            <div className="px-4 mb-5">
                <div className="flex justify-center">
                    <div className='w-full max-w-md'>
                        <div className='mb-4 mr-9'>
                        <p className='font-serif text-center font-semibold text-white text-l p-2 w-full m-4 mb-4 rounded-full bg-gray-600'>   USUARIOS</p>
                        </div>
                <form className='mb-12 ml-8'>
                  {/* ... Contenido del primer formulario ... */}
                    <div className="space-y-7 mt-10">
                        <div className="flex items-center space-x-2">
                            <FaUserCircle className="text-amber-500 text-3xl"/>
                            <span className='font-semibold text-gray-400'>Mortadelo Perez</span>
                            <div className='items-center flex relative gap-2'>
                            <span className='flex justify-end ml-36'>
                                <FaPencilAlt className="text-amber-500 text-l"/>
                            </span>
                            <button className='flex justify-end'>
                                <FaTrash className="text-amber-500 text-l"/>
                            </button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaUserCircle className="text-amber-500 text-3xl"/>
                            <span className='font-semibold text-gray-400'>Pedro Sanchez</span>
                            <div className='items-center flex relative gap-2'>
                            <span className='flex justify-end ml-36'>
                                <FaPencilAlt className="text-amber-500 text-l"/>
                            </span>
                            <button className='flex justify-end'>
                                <FaTrash className="text-amber-500 text-l"/>
                            </button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaUserCircle className="text-amber-500 text-3xl"/>
                            <span className='font-semibold text-gray-400'>Pancho Villa</span>
                            <div className='items-center flex relative gap-2'>
                            <span className='flex justify-end ml-36'>
                                <FaPencilAlt className="text-amber-500 text-l"/>
                            </span>
                            <button className='flex justify-end'>
                                <FaTrash className="text-amber-500 text-l"/>
                            </button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaUserCircle className="text-amber-500 text-3xl"/>
                            <span className='font-semibold text-gray-400'>Flaco Hernandez</span>
                            <div className='justify-between items-center flex relative gap-2'>
                            <span className='flex justify-end'>
                                <FaPencilAlt className="text-amber-500 text-l"/>
                            </span>
                            <button className='flex justify-end'>
                                <FaTrash className="text-amber-500 text-l"/>
                            </button>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Users;
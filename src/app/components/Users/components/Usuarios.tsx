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
                    <div className="h-18 relative w-full mt-10 -inset-4 bg-white dark:bg-gray-200 dark:highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5">
                        <div className="flex items-center gap-4 p-4">
                            <span className='text-amber-500 text-3xl'><FaUserCircle/></span>
                                <div className="flex flex-col">
                                    <strong className="text-slate-600 text-sm font-medium">Mortadelo Martínez</strong>
                                    <span className="text-slate-500 text-sm font-medium">mdmtz@gmail.com</span>
                                    <div className='flex mt-2 space-x-2'>
                                    <button className='text-amber-500 text-md'><FaPencilAlt/></button>
                                    <button className='text-amber-500 text-md'><FaTrash/></button>
                                    </div>
                                    
                                </div>
                        </div>
                    </div>
                    <div className="h-18 relative w-full mt-10 -inset-4 bg-white dark:bg-gray-200 dark:highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5">
                        <div className="flex items-center gap-4 p-4">
                            <span className='text-amber-500 text-3xl'><FaUserCircle/></span>
                                <div className="flex flex-col">
                                    <strong className="text-slate-600 text-sm font-medium">Potro Álvarez</strong>
                                    <span className="text-slate-500 text-sm font-medium">ptrvvz@gmail.com</span>
                                    <div className='flex mt-2 space-x-2'>
                                    <button className='text-amber-500 text-md'><FaPencilAlt/></button>
                                    <button className='text-amber-500 text-md'><FaTrash/></button>
                                    </div>
                                    
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
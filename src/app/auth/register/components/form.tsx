"use client"
import { SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import router from 'next/router';
import { useForm } from 'react-hook-form';



interface IFormInput{
  rol: String
  nombre: string
  apellido: string
  cedula: string
  telefono: string
  email: string
  clave: string
}


function Registerpage()  {
    const { register, handleSubmit, formState: {errors} } = useForm<IFormInput>()
  const router = useRouter()

    const onSubmit = handleSubmit(async (data) => {
   
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          nombre: data.nombre,
          rol:data.rol,
          apellido: data.apellido,
          cedula: data.cedula,
          n_telefono: data.telefono,
          email: data.email,
          clave: data.clave
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    if (res.ok) {
      router.push('/auth/login')
    }

    console.log(errors)
    })

  return (
    <div className='w-full max-w-md'>
      <div className='mb-6'>
      <h2 className='text-2xl font-bold text-black my-1'>Regístrate</h2>
      <p className='text-gray-500 text-sm'>Ingresa los siguientes datos para realizar el registro</p>
      </div>
    <form onSubmit={onSubmit}>
    <label className='text-gray-500 ml-3 mt-3 text-sm'>ROL </label>
      <select required  id="rol" className='mt-2 flex max-w-full mb-3 rounded-xl text-slate-950 p-4 bg-gray-200 w-full h-13'
      {...register("rol", { validate: (value) => value !== "0",
    setValueAs: (value) => value})}
      >
      <option value="admin">Administrador</option>
      <option value="empleado">Empleado</option>
      <option value="cliente" selected>Cliente</option>
      </select>


      <label className='text-gray-500 ml-3 mt-3 text-sm'>NOMBRE </label>
      <input
        className='mt-2 flex max-w-full mb-3 rounded-xl text-slate-950 p-4 bg-gray-200 w-full h-12'
        type="text"
        pattern="[a-zA-Z\u00F1\u00D1áéíóúÁÉÍÓÚ ']+"
        title="Ingrese solo caracteres alfabéticos"
        required
        {...register("nombre", {required: {
          value: true,
          message: 'Campo vacío'
      }})}
      />

      <label className='text-gray-500 ml-3 mt-3 text-sm'>APELLIDO </label>
        <input
          className='mt-2 flex max-w-full mb-3 rounded-xl text-slate-950 p-4 bg-gray-200 w-full h-12'
          type="text"
          pattern="[a-zA-Z\u00F1\u00D1áéíóúÁÉÍÓÚ ']+"
          title="Ingrese solo caracteres alfabéticos"
          required
          {...register("apellido", {required: {
            value: true,
            message: 'Campo vacío'
          }})}
      />

        <label className='text-gray-500 ml-3 mt-2 mb--3 text-sm'>C.I </label>
        <input
        className='mt-2 rounded-xl mb-3 p-4 w-full text-slate-950 bg-gray-200 flex h-12 placeholder-slate-400'
        type="text"
        min={8}
        max={8}
        placeholder="EJ: 28439221"
        inputMode="numeric" 
        pattern="[0-9]{8}" 
        title="Ingrese 8 dígitos numéricos"
        required
        {...register("cedula")}
        />

      <label className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>NÚMERO TELEFÓNICO </label>
      <input
        className='mt-2 rounded-xl mb-3 text-slate-950 p-4 w-full bg-gray-200 flex h-12 placeholder-slate-400'
        type="text"
        min={11}
        max={11}
        placeholder="EJ: 04125514378"
        inputMode="numeric" 
        pattern="[0-9]{11}" 
        title="Ingrese 11 dígitos numéricos"
        required
        {...register("telefono")}
      />

      <label className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>EMAIL </label>
      <input
        className='mt-2 rounded-xl mb-3 p-4 w-full text-slate-950 bg-gray-200 flex h-12 placeholder-slate-400 text-md'
        type="email"
        placeholder="EJ: marcomartinez@email.com"
        required
        {...register("email")}
      />

      <label className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>CONTRASEÑA </label>
      <input
        className='mt-2 rounded-xl p-4 w-full text-slate-950 bg-gray-200 flex h-12'
        type="password"
        placeholder=""
        pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        title="La contraseña debe tener al menos una mayúscula, un número y un símbolo especial."
        required
        {...register("clave")}
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
      <div className='mt-5 mb-10 flex items-center justify-end gap-x-2'>
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

export default Registerpage;


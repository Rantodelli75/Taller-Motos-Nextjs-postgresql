import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import axios from "axios";


//se define la entrada del dato en cada input
interface IFormInput{
    marca: string
    modelo: string
    placa: string
    kilometraje: string
  }

//se define la entrada del dato en cada input
  interface IFormInput{
    nombre: string
    apellido: string
    cedula: string
    telefono: string
    email: string
    clave: string
  }


function Registro () {
    const { data: session, status, update } = useSession();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const [usuarios, setUsuarios] = useState<any[]>([]);
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        /*
        if (status === 'authenticated') {
            setLoading(false);
            if (session.user?.rol !== 'empleado') {
                router.push('/unauthorized');
            }
        } else if (status === 'unauthenticated') {
            setLoading(false);
            router.push('/api/auth/signin');
        }*/
    }, [router, status, session]);
  
    useEffect(() => {
      async function fetchUsuarios() {
        const response = await axios.get('/api/usuarios'); // Make API call to server-side API
        console.log(response.config)
        console.log(response.data)
        setUsuarios(response.data);
      }
      fetchUsuarios();
    }, []);
  
    const handleUserChange = async (e: any) => {
      const cedula = e.target.value;
      if (cedula) {
        const response = await axios.get(`/api/usuarios/${cedula}`); // Make API call to server-side API
        setSelectedUser(response.data);
      } else {
        setSelectedUser(null);
      }
    };
  
    useEffect(() => {
      if (selectedUser) {
        register('nombre', { value: selectedUser.nombre });
        register('apellido', { value: selectedUser.apellido });
        register('email', { value: selectedUser.email });
        register('telefono', { value: selectedUser.telefono });
      } else {
        register('nombre', { value: '' });
        register('apellido', { value: '' });
        register('email', { value: '' });
        register('telefono', { value: '' });
      }
    }, [register, selectedUser]);
  
    console.log(errors);


//captura y envio de datos de la moto a la base de datos
    const onSubmit = handleSubmit(async (data) => {
        const res = await fetch('/api/auth/register/moto', {
          method: 'POST',
          body: JSON.stringify({
            marca: data.marca,
            modelo: data.modelo,
            placa: data.placa,
            kilometraje: data.kilometraje,
            nombre: data.nombre,
            apellido: data.apellido,
            n_telefono: data.telefono,
            email: data.email
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      if (res.ok) {
        router.push('/auth/login')
      }
  
      })

    return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h1 className="font-serif text-slate-600 text-xl font-bold mb-4 mt-8">NUEVO REGISTRO ${JSON.stringify(session)}</h1>
        <div className="bg-white shadow-xl rounded-lg p-3 items-center w-9/12 overflow-hidden mb-8">
            <div className="px-4 mb-5">
                <div className="flex justify-between">
                    <div className='w-full max-w-md'>
                        <div className='mb-4 mr-10'>
                        <p className='font-serif font-semibold text-white text-l p-2 pl-10 w-full m-4 mb-4 rounded-full bg-gray-600'> DATOS DEL CLIENTE</p>
                        </div>
                        <form className="mb-12 ml-8">
                <label className="text-gray-500 ml-3 mt-1 text-sm">CÉDULA</label>
                <select
                  className="mt-2 rounded-xl mb-3 p-3 w-9/12 text-slate-950 bg-gray-200 flex h-10"
                  onChange={handleUserChange}
                >
                  <option value="">Seleccione un usuario</option>
                  {usuarios.map((usuario) => (
                    <option key={usuario.cedula} value={usuario.cedula} {...register('cedula')}>
                      {usuario.cedula}
                    </option>
                  ))}
                </select>
                <label className="text-gray-500 ml-3 mt-2 mb--3 text-sm">NOMBRE Y APELLIDO</label>
                <input
                  className="mt-2 flex max-w-full mb-3 rounded-xl text-slate-950 p-3 bg-gray-200 w-9/12 h-10"
                  type="text"
                  placeholder=""
                  required
                  {...register('nombre')}
                />
                <label className="text-gray-500 ml-3 mt-3 mb--3 text-sm">EMAIL</label>
                <input
                  className="mt-2 rounded-xl mb-3 text-slate-950 p-3 w-9/12 bg-gray-200 flex h-10 placeholder-slate-400"
                  type="email"
                  placeholder="EJ: marcomartinez@email.com"
                  required
                  {...register('email')}
                />
                <label className="text-gray-500 ml-3 mt-3 mb--3 text-sm">TELÉFONO</label>
                <input
                  className="mt-2 rounded-xl mb-3 p-3 w-9/12 text-slate-950 bg-gray-200 flex h-10 placeholder-slate-400 text-md"
                  type="text"
                  placeholder="EJ: +584125514378"
                  required
                  {...register('telefono')}
                />
              </form>
                    </div>
            <div className='w-full max-w-md'>
                <div className='mb-4 mr-8'>
                <p className='font-serif font-semibold text-white text-l p-2 pl-10 w-full m-4 rounded-full bg-gray-600'>DATOS DEL VEHÍCULO</p>
                </div>


                <form className='mb-12 ml-8'onSubmit={onSubmit}>
                  {/* ... Contenido del segundo formulario ... */}
                <label className='text-gray-500 ml-3 mt-1 text-sm'>MARCA </label>
                <input
                    className='mt-2 flex max-w-full mb-3 rounded-xl text-slate-950 p-3 bg-gray-200 w-9/12 h-10'
                    type="select"
                    placeholder=""
                    required
                    {...register("marca")}
                />


                <label className='text-gray-500 ml-3 mt-2 mb--3 text-sm'>MODELO </label>
                <input
                className='mt-2 rounded-xl mb-3 p-3 w-9/12 text-slate-950 bg-gray-200 flex h-10 placeholder-slate-400'
                type="select"
                placeholder="EJ: V-28439221"
                required
                {...register("modelo")}
                />


                <label className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>NRO° DE PLACA </label>
                <input
                className='mt-2 rounded-xl mb-3 text-slate-950 p-3 w-9/12 bg-gray-200 flex h-10 placeholder-slate-400'
                type="text"
                placeholder="EJ: AE139MI"
                required
                {...register("placa")}
                />


                <label className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>KILOMETRAJE </label>
                <input
                className='mt-2 rounded-xl mb-3 p-3 w-9/12 text-slate-950 bg-gray-200 flex h-10 placeholder-slate-400 text-md'
                type="number"
                placeholder="EJ: 1500"
                required
                {...register("kilometraje")}
                />

                <div className="flex justify-center mt-2">
                <button className='w-3/12 rounded-xl bg-amber-600 border border-amber-600 hover:border-amber-600 hover:bg-white hover:text-amber-600 font-semibold h-12 text-white relative p-1 px-8'>
                    Enviar
                </button>
                </div>
                </form>
            </div>
            </div>
            
        </div>
    </div>
</div>
    );
};

export default Registro; 

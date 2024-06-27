"use client"
import { redirect } from 'next/navigation';
import { useForm } from 'react-hook-form'; 
import Link from 'next/link';


  
  interface IFormInput {
    marca: string;
    modelo: string;
    placa: string;
    kilometraje: string;
  }
  
  interface IFormInput {
    nombre: string;
    apellido: string;
    cedula: string;
    telefono: string;
    email: string;
    clave: string;
  }
  
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      nombre: formData.get("nombre"),
      apellido: formData.get("apellido"),
      cedula: formData.get("cedula"),
      email: formData.get("email"),
      telefono: formData.get("telefono"),
      marca: formData.get("marca"),
      modelo: formData.get("modelo"),
      placa: formData.get("placa"),
      kilometraje: formData.get("kilometraje"),
    };
  
    // Enviar datos al servidor
    fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          window.location.href = "/auth/login";
        }
      })
      .catch((error) => console.error(error));
  };
  
  const Registro = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<IFormInput>()
  
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h1 className="font-serif text-slate-600 text-xl font-bold mb-4 mt-8">
          NUEVO REGISTRO
        </h1>
        <div className="bg-white shadow-xl rounded-lg p-3 items-center w-9/12 overflow-hidden mb-8">
          <div className="px-4 mb-5">
            <div className="flex justify-between">
              <div className="w-full max-w-md">
                <div className="mb-4 mr-10">
                  <p className="font-serif font-semibold text-white text-l p-2 pl-10 w-full m-4 mb-4 rounded-full bg-gray-600">
                    DATOS DEL CLIENTE
                  </p>
                </div>
                <form onSubmit={handleFormSubmit} className="mb-12 ml-8">
                  {/* ... Contenido del primer formulario ... */}
                  <label className="text-gray-500 ml-3 mt-1 text-sm">
                    NOMBRE Y APELLIDO
                  </label>
                  <input
                    className="mt-2 flex max-w-full mb-3 rounded-xl text-slate-950p-3 bg-gray-200 w-9/12 h-12 p-3"
                    type="text"
                    placeholder=""
                    required
                    name="nombre"
                  />
                  <label className="text-gray-500 ml-3 mt-1 text-sm">
                    CÉDULA
                  </label>
                  <input
                    className="mt-2 flex max-w-full mb-3 rounded-xl text-slate-950p-3 bg-gray-200 w-9/12 h-12 p-3"
                    type="number"
                    placeholder=""
                    required
                    name="cedula"
                  />
                  <label className="text-gray-500 ml-3 mt-1 text-sm">
                    EMAIL
                  </label>
                  <input
                    className="mt-2 flex max-w-full mb-3 rounded-xl text-slate-950p-3 bg-gray-200 w-9/12 h-12 p-3"
                    type="email"
                    placeholder="EJ: marcomartinez@gmail.com"
                    required
                    name="email"
                  />
                  <label className="text-gray-500 ml-3 mt-1 text-sm">
                    TELÉFONO
                  </label>
                  <input
                    className="mt-2 flex max-w-full mb-3 rounded-xl text-slate-950p-3 bg-gray-200 w-9/12 h-12 p-3"
                    type="number"
                    placeholder="EJ: 04125514378"
                    required
                    name="telefono"
                  />
                  {/* ... */}
                </form>
              </div>
              <div className="w-full max-w-md">
                <div className="mb-4 mr-8">
                  <p className="font-serif font-semibold text-white text-l p-2 pl-10 w-full m-4 rounded-full bg-gray-600">
                    DATOS DEL VEHÍCULO
                  </p>
                </div>
                <form onSubmit={handleFormSubmit} className="mb-12 ml-8">
                  {/* ... Contenido del segundo formulario ... */}
                  <label className="text-gray-500 ml-3 mt-1 text-sm">
                    MARCA
                  </label>
                  <input
                    className="mt-2 flex max-w-full mb-3 rounded-xl text-slate-950 p-3 bg-gray-200 w-9/12 h-12"
                    type="select"
                    placeholder=""
                    required
                    name="marca"
                  />
                  <label className="text-gray-500 ml-3 mt-1 text-sm">
                    MODELO
                  </label>
                  <input
                    className="mt-2 flex max-w-full mb-3 rounded-xl text-slate-950 p-3 bg-gray-200 w-9/12 h-12"
                    type="select"
                    placeholder=""
                    required
                    name="modelo"
                  />
                  <label className="text-gray-500 ml-3 mt-1 text-sm">
                    N° PLACA
                  </label>
                  <input
                    className="mt-2 flex max-w-full mb-3 rounded-xl text-slate-950 p-3 bg-gray-200 w-9/12 h-12"
                    type="select"
                    placeholder="EJ: AE139MI"
                    required
                    name="placa"
                  />
                  <label className="text-gray-500 ml-3 mt-1 text-sm">
                    KILOMETRAJE
                  </label>
                  <input
                    className="mt-2 flex max-w-full mb-3 rounded-xl text-slate-950 p-3 bg-gray-200 w-9/12 h-12"
                    type="number"
                    placeholder="EJ: 1250"
                    required
                    name="kilometraje"
                  />
                  {/* ... */}
                </form>
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <button
                className="w-3/12 rounded-xl bg-amber-600 border border-amber-600 hover:border-amber-600 hover:bg-white hover:text-amber-600 font-semibold h-12 text-white relative p-1 px-8"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
;
  export default Registro;
import React, { useState } from 'react';

interface ServiceItem {
  name: string;
  cost: number;
  estimatedTime: string;
}

const availableServices: ServiceItem[] = [
  { name: 'Cambio de Aceite', cost: 500, estimatedTime: '30 minutos' },
  // ... otros servicios disponibles
];

const Mimoto = () => {
  const [services, setServices] = useState<ServiceItem[]>([
    { name: 'Cambio de Amortiguador', cost: 7286, estimatedTime: '1-2 días' },
    { name: 'Revisión Eléctrica', cost: 1093, estimatedTime: '5 horas' },
  ]);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleAddService = () => {
    const serviceToAdd = availableServices.find(service => service.name === selectedService);
    if (serviceToAdd) {
      setServices([...services, serviceToAdd]);
      setSelectedService(''); // Resetear el servicio seleccionado
    }
  };

  const handleRemoveService = (index: number) => {
    setServices(services.filter((_, serviceIndex) => serviceIndex !== index));
  };

  const totalCost = services.reduce((acc, service) => acc + service.cost, 0);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Gestión de Garaje</h1>
      <div className="mb-4">
        <label htmlFor="service" className="block mb-2">Seleccione el servicio</label>
        <div className="flex">
          <select
            id="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
          >
            <option value="">Seleccione un servicio</option>
            {availableServices.map((service, index) => (
              <option key={index} value={service.name}>{service.name}</option>
            ))}
          </select>
          <button onClick={handleAddService} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
            Agregar
          </button>
        </div>
      </div>
      <table className="min-w-full table-auto">
        <thead className="justify-between">
          <tr className="bg-gray-800">
            <th className="px-16 py-2">
              <span className="text-gray-300">Eliminar</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Servicio</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Costos</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Tiempo estimado</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {services.map((service, index) => (
            <tr key={index} className="bg-white border-4 border-gray-200 text-center">
              <td className="px-4 py-2">
                <button
                  onClick={() => handleRemoveService(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </td>
              <td className="px-16 py-2 flex justify-center">
                {service.name}
              </td>
              <td className="px-16 py-2">Bs. {service.cost.toLocaleString()}</td>
              <td className="px-16 py-2">{service.estimatedTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end font-bold mt-4">
        Total: Bs. {totalCost.toLocaleString()}
      </div>
    </div>
  );
};

export default Mimoto;


"use client"
import React, { Component } from 'react';

interface ServiceItem {
  name: string;
  cost: number;
  estimatedTime: string;
}

const availableServices: ServiceItem[] = [
    { name: 'Mantenimiento General', cost: 50, estimatedTime: '1 hora'},
    { name: 'Cambio de Aceite', cost: 20, estimatedTime: '15 minutos'},
    { name: 'Cambio de Cauchos', cost: 130, estimatedTime: '20 minutos'},
    { name: 'Parche de Tripa', cost: 15, estimatedTime: '30 minutos'},
    { name: 'Cambio de Amortiguador', cost: 85, estimatedTime: '1 hora'},
    { name: 'Cambio de Monoshock', cost: 65, estimatedTime: '45 minutos'},
    { name: 'Cambio de Rodamientos', cost: 40, estimatedTime: '20 minutos'},
    { name: 'Cambio de Cadena', cost: 20, estimatedTime: '15 minutos'},
    { name: 'Cambio de Corona D', cost: 15, estimatedTime: '20 minutos'},
    { name: 'Cambio de Corona T', cost: 15, estimatedTime: '20 minutos'},
    { name: 'Cambio de Bombillo Principal', cost: 15, estimatedTime: '10 minutos'},
    { name: 'Cambio de Bombillo Freno', cost: 15, estimatedTime: '10 minutos'},
    { name: 'Cambio de Bombillo Cruce', cost: 10, estimatedTime: '10 minutos'},
    { name: 'Cambio de Parrillera', cost: 35, estimatedTime: '15 minutos'},
    { name: 'Ajuste General', cost: 20, estimatedTime: '35 minutos'},
    { name: 'Cambio de Batería', cost: 55, estimatedTime: '30 minutos'},
    { name: 'Revisión Electrica', cost: 5, estimatedTime: '15 minutos'},
];

class Registro extends Component {
    state = {
        services: [
            { name: 'Cambio de Amortiguador', cost: 85, estimatedTime: '1 hora' },
            { name: 'Revisión Electrica', cost: 5, estimatedTime: '15 minutos'},
    ],
    selectedService: '',
    };

    handleAddService = () => {
        const serviceToAdd = availableServices.find(service => service.name === this.state.selectedService);
        if (serviceToAdd) {
            this.setState({
            services: [...this.state.services, serviceToAdd],
            selectedService: '',
            });
        }
    };

    handleRemoveService = (index: number) => {
        this.setState({
            services: this.state.services.filter((_, serviceIndex) => serviceIndex !== index),
        });
    };

    handleSelectService = (serviceName: string) => {
        this.setState({ selectedService: serviceName });
    };

    render() {
        const totalCost = this.state.services.reduce((acc, service) => acc + service.cost, 0);

        return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <h1 className="font-serif text-slate-600 text-xl font-bold mb-4 mt-6">MI MOTO</h1>
        <div className="bg-white shadow-xl rounded-lg p-16 items-center w-9/12 mb-8">
            <div className="px-4 mb-5">
                <div className="flex justify-between">
                    <div className='w-full min-w-md'>
                        <div className='mb-4 mr-10'>
                            <p className='font-serif font-semibold text-white text-l p-2 pl-10 w-full m-4 mb-4 rounded-full bg-gray-600'>GESTIÓN DE GARAGE</p>
                        </div>
                {/* Inicio de la gestión de servicios */}
                    <div className="flex flex-row items-center mb-4">
                        <div className='flex left-44'>
                            <label htmlFor="service" className="ml-12 mr-10 font-serif font-semibold text-md mb-2">Seleccione el servicio</label>
                        </div>
                    <div className="flex items-center">
                        <select
                            id="service"
                            value={this.state.selectedService}
                            onChange={(e) => this.handleSelectService(e.target.value)}
                            className="mt-2 rounded-xl mb-3 mr-3 p-3 w-max text-slate-950 bg-gray-200 flex h-12 placeholder-slate-400 text-md"
                        >
                        <option value=""></option>
                        {availableServices.filter(
                            service => !this.state.services.some(addedService => addedService.name === service.name)
                        ).map((service, index) => (
                        <option key={index} value={service.name}>{service.name}</option>
                        ))}
                        </select>
                    </div>
                    <div className="ml-4">
                        <button
                            className="w-full rounded-xl bg-amber-600 border border-amber-600 hover:border-amber-600 hover:bg-white hover:text-amber-600 font-semibold h-12 text-white relative p-1 px-8"
                            onClick={this.handleAddService}
                        >
                        Agregar
                        </button>
                    </div>
                    </div>
                {/* Fin de la gestión de servicios */}
                <table className="min-w-full table-auto">
                    <thead className="justify-between">
                        <tr className="bg-gray-300">
                            <th className="px-16 py-2">
                                <span className="text-gray-600">Acciones</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-600">Servicio</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-600">Costos</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-600">Tiempo estimado</span>
                            </th>
                    </tr>
                    </thead>
                <tbody className="bg-gray-200">
                    {this.state.services.map((service, index) => (
                    <tr key={index} className="bg-white border-4 border-gray-200 text-center">
                        <td className="px-4 py-2">
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => this.handleRemoveService(index)}
                            >
                            Eliminar
                            </button>
                        </td>
                        <td className="px-4 py-2">{service.name}</td>
                        <td className="px-4 py-2">${service.cost.toLocaleString()}</td>
                        <td className="px-4 py-2">{service.estimatedTime}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
                <div className="flex justify-end font-bold mt-4 mr-4 text-green-800">
                Total: $ {totalCost.toLocaleString()}
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };
};

export default Registro;
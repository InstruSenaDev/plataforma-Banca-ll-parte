import React from "react";

const Empleados = () => {
  const empleados = [
    {
      id: "#00001",
      nombre: "Eduardo Dutra",
      rol: "Cajero",
      estado: "Activo",
      saldo: "$100.000",
      accion: "Transferir",
      fechaYHora: "1/06/2024 8:44 am",
    },
    {
      id: "#00002",
      nombre: "Eduardo Dutra",
      rol: "Cajero",
      estado: "Activo",
      saldo: "$100.000",
      accion: "Transferir",
      fechaYHora: "1/06/2024 8:44 am",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Informes de Cajeros </h1>
      <div className="text-1xl  mb-4 hidden w-full md:block md:w-auto">
        <span className=" bg-green mr-4 overflow-x-auto  sm:rounded-lg px-4 py-3 text-left text-white">
          31/05/2023 2:27Pm
        </span>
      </div>
      <div className="shadow-md overflow-hidden relative overflow-x-auto  sm:rounded-lg">
        <table className="w-full table-auto sm:w-full md:w-full lg:w-full xl:w-full ">
          <thead>
            <tr className="w-full bg-green  ">
              <th className="px-4 py-3 text-left text-white uppercase tracking-wider">
                ID
              </th>
              <th className="px-4 py-3 text-left text-white uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-4 py-3 text-left text-white uppercase tracking-wider">
                Rol
              </th>
              <th className="px-4 py-3 text-left text-white uppercase tracking-wider">
                Estado
              </th>
              <th className="px-4 py-3 text-left text-white uppercase tracking-wider">
                Saldo
              </th>
              <th className="px-4 py-3 text-left text-white uppercase tracking-wider">
                Acción
              </th>
              <th className="px-4 py-3 text-left text-white uppercase tracking-wider">
                Fecha y Hora
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {empleados.map((cajero) => (
              <tr key={cajero.id} className="bg-lightgreen hover:bg-gray-200">
                <td className="px-4 py-3 ">{cajero.id}</td>
                <td className="px-4 py-3">{cajero.nombre}</td>
                <td className="px-4 py-3">{cajero.rol}</td>
                <td className="px-4 py-3">{cajero.estado}</td>
                <td className="px-4 py-3">{cajero.saldo}</td>
                <td className="px-4 py-3">{cajero.accion}</td>
                <td className="px-4 py-3">{cajero.fechaYHora}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Empleados;

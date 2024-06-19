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
    <>
      <div className="p-4 sm:ml-64">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Informes de Cajeros</h1>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="w-full table-auto sm:w-full md:w-full lg:w-full xl:w-full">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-gray-500 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-4 py-3 text-left text-gray-500 uppercase tracking-wider">
                    Rol
                  </th>
                  <th className="px-4 py-3 text-left text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-4 py-3 text-left text-gray-500 uppercase tracking-wider">
                    Saldo
                  </th>
                  <th className="px-4 py-3 text-left text-gray-500 uppercase tracking-wider">
                    Acción
                  </th>
                  <th className="px-4 py-3 text-left text-gray-500 uppercase tracking-wider">
                    Fecha y Hora
                  </th>
                </tr>
              </thead>
              <tbody>
                {empleados.map((cajero) => (
                  <tr key={cajero.id} className="bg-gray-100 hover:bg-gray-200">
                    <td className="px-4 py-3">{cajero.id}</td>
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
      </div>
    </>
  );
};

export default Empleados;

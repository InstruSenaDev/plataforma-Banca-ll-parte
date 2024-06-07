import React from "react";
import Avatar from "../../assets/Img/UsoVario/Cristiano.png";

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
    {
      id: "#00002",
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
    {
      id: "#00002",
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
    <div className="w-full px-6 mx-auto">
      <div className="flex flex-wrap mt-6 -mx-3 ">
        <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-12/15 lg:flex-none">
          <div className="p-4 pb-0 mb-0 rounded-t-4">
            <div className="flex justify-between">
              <h6 className="mb-2 text-2xl font-bold text-gray">
                Informes de Cajeros
              </h6>
              <div className=" flex-co text-xs  mb-4 hidden w-full md:block md:w-auto">
                <span className=" bg-green mr-3 overflow-x-auto  sm:rounded-lg px-3 py-2 text-left text-white">
                  31/05/2023 2:27Pm
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto bg-DarkSlate  rounded-3xl py-2 bg-clip-border mb-2">
            <div className="flex flex-col">
              <div className="flex justify-between  px-10  text-xs font-semibold leading-tight   text-white  ">
                <span className="flex items-center text-center">
                  ID <box-icon name="down-arrow-alt" color="#ffffff"></box-icon>
                </span>
                <span className="flex items-center text-center">
                  Nombre{" "}
                  <box-icon name="down-arrow-alt" color="#ffffff"></box-icon>
                </span>
                <span className="flex items-center text-center">
                  Rol{" "}
                  <box-icon name="down-arrow-alt" color="#ffffff"></box-icon>
                </span>
                <span className="flex items-center text-center">
                  Estado{" "}
                  <box-icon name="down-arrow-alt" color="#ffffff"></box-icon>
                </span>
                <span className="flex items-center text-center">
                  Saldo{" "}
                  <box-icon name="down-arrow-alt" color="#ffffff"></box-icon>
                </span>
                <span className="flex items-center text-center">
                  Acción{" "}
                  <box-icon name="down-arrow-alt" color="#ffffff"></box-icon>
                </span>
                <span className="flex items-center text-center">
                  Fecha y Hora
                </span>
              </div>
            </div>
          </div>
          {empleados.map((empleado, index) => (
            <div
              key={index}
              className="overflow-x-auto bg-lightgreen  rounded-3xl py-3 bg-clip-border mb-1"
            >
              <div className="flex flex-col">
                <div className="flex justify-between  px-8   text-xs font-semibold leading-tight   text-black  ">
                  <span className="flex items-center text-center">
                    {empleado.id}
                  </span>
                  <span className="flex items-center text-center">
                    <img
                      src={Avatar}
                      alt="Avatar"
                      className="w-6 h-6 rounded-full mr-4"
                    />
                    {empleado.nombre}
                  </span>
                  <span className="flex items-center text-center">
                    {empleado.rol}
                  </span>
                  <span className="flex items-center text-center bg-verde mr-3 overflow-x-auto   sm:rounded-3xl px-2 py-1 text-white">
                    {empleado.estado}
                    <box-icon name="check" color="#f3efef"></box-icon>
                  </span>
                  <span className="flex items-center text-center">
                    {empleado.saldo}
                  </span>
                  <button>
                    <span className="flex items-center text-center  bg-green mr-2 overflow-x-auto  sm:rounded-3xl px-4 py-2 text-white">
                      {empleado.accion}
                    </span>
                  </button>
                  <span className="flex items-center text-center">
                    {empleado.fechaYHora}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Empleados;

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
  ];

  return (
    <>
      <div className="p-4 sm:ml-64">
        <section class="container px-4 mx-auto">
          <div class="sm:flex sm:items-center sm:justify-between">
            <h6 className="mb-2 text-2xl font-bold text-gray">
              Informes de Cajeros
            </h6>
            <div className="flex-co flex flex-row text-xs ">
              <span className="bg-green-500 mr-3 overflow-x-auto rounded-lg px-3 py-2 text-left text-white ">
                31/05/2023 2:27Pm
              </span>
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg max-w-3/6">
                  <table className="w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-3xl  ">
                    <tbody>
                      <tr className="shadow hover:shadow-md transition duration-200 overflow-x-auto bg-DarkSlate  rounded-3xl py-2 bg-clip-border mb-2 border-spacing-3">
                        <th
                          scope="col"
                          class="px-6 py-2 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>ID</span>
                            <box-icon
                              name="down-arrow-alt"
                              color="#ffffff"
                            ></box-icon>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-6 py-2 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Nombre</span>
                            <box-icon
                              name="down-arrow-alt"
                              color="#ffffff"
                            ></box-icon>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-6 py-2 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Rol</span>
                            <box-icon
                              name="down-arrow-alt"
                              color="#ffffff"
                            ></box-icon>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-2 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Estado</span>
                            <box-icon
                              name="down-arrow-alt"
                              color="#ffffff"
                            ></box-icon>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-2 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Saldo</span>
                            <box-icon
                              name="down-arrow-alt"
                              color="#ffffff"
                            ></box-icon>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-2 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Acción</span>
                            <box-icon
                              name="down-arrow-alt"
                              color="#ffffff"
                            ></box-icon>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-2 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Fecha y Hora</span>
                          </div>
                        </th>
                      </tr>
                    </tbody>
                    <tbody className="bg-lightgreen">
                      {empleados.map((cajero) => (
                        <tr
                          key={cajero.id}
                          className="shadow hover:shadow-md transition duration-200 rounded-3xl py-3 bg-clip-border mb-1"
                        >
                          <td className="w-1/6 px-5 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <div>
                                  <h2 className="font-normal text-gray-800">
                                    {cajero.id}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="w-1/6 px-3 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <div className="flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full dark:bg-gray-800 overflow-hidden">
                                  <img
                                    src={Avatar}
                                    alt="Avatar"
                                    className="w-full h-full object-cover rounded-full"
                                  />
                                </div>

                                <div>
                                  <h2 className="font-normal text-gray-800 dark:text-white">
                                    {cajero.nombre}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="w-1/6 px-5 py-5 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <div>
                                  <h2 className="font-normal text-gray-800">
                                    {cajero.rol}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="w-1/6 px-4 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center text-center gap-x-2 bg-verde -500 mr-3 overflow-x-auto rounded-3xl px-2 py-1">
                                <div>
                                  <h2 className="flex items-center text-center font-normal text-white">
                                    {cajero.estado}
                                    <box-icon
                                      name="check"
                                      color="#f3efef"
                                    ></box-icon>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="w-1/6 px-4 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <div>
                                  <h2 className="font-normal text-gray-800">
                                    {cajero.saldo}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="w-1/6 px-4 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2 bg-green-500 mr-2 overflow-x-auto rounded-3xl px-4 py-2">
                                <div>
                                  <button className="font-normal text-white">
                                    {cajero.accion}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="w-1/6 px-4 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <div>
                                  <h2 className="font-normal text-gray-800">
                                    {cajero.fechaYHora}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Empleados;

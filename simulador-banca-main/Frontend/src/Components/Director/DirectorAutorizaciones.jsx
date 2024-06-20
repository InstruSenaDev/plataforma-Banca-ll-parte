import React from "react";
import Avatar from "../../assets/Img/UsoVario/Cristiano.png";

const DashboardDirector = () => {
  const cliente = [
    {
      Cliente: "Angelica Cuero",
      Cuenta: "Cuentas de Ahorros",
      N_Cuenta: "10000000001",
      Estado: "Pendiente",
      Acción: "Admitir",
      Fecha: "1/06/2024",
      Hora: "8:44 a.m",
    },
    {
      Cliente: "Angelica Cuero",
      Cuenta: "Cuentas de Ahorros",
      N_Cuenta: "10000000001",
      Estado: "Pendiente",
      Acción: "Admitir",
      Fecha: "1/06/2024",
      Hora: "8:44 a.m",
    },
  ];

  return (
    <section className="container px-4 mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h6 className="mb-2 text-2xl font-bold text-gray-800">
          Autorización de cuentas
        </h6>
        <div className="flex-co flex flex-row text-xs"></div>
      </div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-3 lg:px-5">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg max-w-3/6">
              <table className="w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-3xl border-separate border-spacing-y-1">
                <thead className="text-sm font-normal text-white bg-DarkSlate">
                  <tr>
                    <th scope="col" className="px-6 py-3 rounded-s-lg">
                      <div className="flex items-center gap-x-3">
                        <span>Cliente</span>
                        <box-icon
                          name="down-arrow-alt"
                          color="#ffffff"
                        ></box-icon>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <span>Cuenta</span>
                        <box-icon
                          name="down-arrow-alt"
                          color="#ffffff"
                        ></box-icon>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <span>N° Cuenta</span>
                        <box-icon
                          name="down-arrow-alt"
                          color="#ffffff"
                        ></box-icon>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <span>Estado</span>
                        <box-icon
                          name="down-arrow-alt"
                          color="#ffffff"
                        ></box-icon>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <span>Acción</span>
                        <box-icon
                          name="down-arrow-alt"
                          color="#ffffff"
                        ></box-icon>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex items-center gap-x-4">
                        <span>Fecha</span>
                        <box-icon
                          name="down-arrow-alt"
                          color="#ffffff"
                        ></box-icon>
                      </div>
                    </th>
                    <th scope="col" className="px-3 py-3 rounded-e-lg">
                      Hora
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-lightgreen">
                  {cliente.map((cajero, index) => (
                    <tr
                      key={index} // Use index or a unique identifier like cajero.N_Cuenta if it's unique
                      className="shadow hover:shadow-md transition duration-200 py-3 bg-clip-border mb-1"
                    >
                      <td className="w-1/6 px-5 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <div>
                              <h2 className="font-normal text-gray-800">
                                {cajero.Cliente}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="w-1/6 px-3 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
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
                                {cajero.Cuenta}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="w-1/6 px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2 bg-green-500 mr-2 overflow-x-auto rounded-3xl px-1 py-1">
                            <div>
                              <button className="font-light text-white">
                                {cajero.N_Cuenta}
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="w-1/6 px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <div>
                              <h2 className="font-normal text-gray-800">
                                {cajero.Estado}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="w-1/6 px-5 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <div>
                              <h2 className="font-normal text-gray-800">
                                {cajero.Acción}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="w-1/6 px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <div>
                              <h2 className="font-normal text-gray-800">
                                {cajero.Fecha}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="w-1/6 px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <div>
                              <h2 className="font-normal text-gray-800">
                                {cajero.Hora}
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
  );
};

export default DashboardDirector;

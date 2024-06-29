import React from "react";

export const ReportesMovimientos = () => {
  return (
    <>
      <section className="container p-4 mx-auto" style={{ minHeight: "87vh" }}>
        <div className="flex justify-between items-center gap-x-3">
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-row items-center gap-x-3">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                Información de movimientos
              </h2>
              <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                0 movimientos
              </span>
            </div>
            <p className="text-sm text-gray-500 m-0 p-0">
              Todos los movimientos realizados en el día
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-DarkSlate dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                      >
                        <div className="flex justify-center items-center gap-x-3">
                          <button>
                            <span>ID Movimiento</span>
                          </button>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                      >
                        <div className="flex justify-center items-center gap-x-3">
                          <button>
                            <span>Realizado por</span>
                          </button>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                      >
                        <div className="flex justify-center items-center gap-x-2">
                          <button>
                            <span>Cliente</span>
                          </button>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                      >
                        <div className="flex justify-center items-center gap-x-2">
                          <button>
                            <span>Saldo</span>
                          </button>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                      >
                        <div className="flex justify-center items-center gap-x-2">
                          <button>
                            <span>Fecha y Hora</span>
                          </button>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                      >
                        <div className="flex justify-center items-center gap-x-2">
                          <button>
                            <span>Acción</span>
                          </button>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div className="w-full inline-flex justify-center items-center gap-x-3">
                          <span># 0001</span>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="w-full inline-flex justify-center items-center gap-x-3">
                          <div class="flex items-center gap-x-2">
                            <img
                              class="object-cover w-10 h-10 rounded-full"
                              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                              alt=""
                            />
                            <div>
                              <h2 class="font-medium text-gray-800 dark:text-white ">
                                Arthur Melo
                              </h2>
                              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Cajero
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex flex-col justify-center items-center gap-x-2">
                          <h2 class="font-medium text-gray-800 dark:text-white ">
                            Juan Esteban
                          </h2>
                          <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                            N° 1000000001
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div className="w-full inline-flex justify-center items-center gap-x-3">
                          <span>$ 100.000.000,00</span>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div className="w-full inline-flex justify-center items-center gap-x-3">
                          <span>22/06/2024 9:16:06 a. m</span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="w-full inline-flex justify-center items-center">
                          <div className="flex justify-center items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="text-emerald-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.3}
                                stroke="currentColor"
                                className="size-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                            </span>

                            <h2 className="text-sm font-normal text-emerald-500">
                              Consignación
                            </h2>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportesMovimientos;

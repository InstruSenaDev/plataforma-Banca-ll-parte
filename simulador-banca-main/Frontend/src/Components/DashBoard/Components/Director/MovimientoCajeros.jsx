import React, { useEffect, useState } from "react";

export const MovimientosCajeros = () => {
  const [movCajeros, setMoviCajeros] = useState([]);

  const fetchCajeros = async () => {
    try {
      const response = await fetch("http://localhost:3000/get_users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      if (response.ok) {
        const data = await response.json();
        const filterCajeros = data.filter((users) => users.id_rol === 3);
        setMoviCajeros(filterCajeros);
      } else {
        console.error("Error fetching user info:", response.status);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  useEffect(() => {
    fetchCajeros();
  });

  // Función para formatear el costo a miles sin decimales.
  const formatSaldo = (saldo) => {
    // Crea una instancia de Intl.NumberFormat con la configuración regional "es-CO" (Colombia)
    const formatter = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });

    // Formatea el costo usando la configuración especificada.
    return formatter.format(saldo);
  };

  return (
    <>
      <section className="container p-4 mx-auto" style={{ minHeight: "87vh" }}>
        <div className="flex flex-col justify-center items-between h-full">
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
                              <span>ID Cajero</span>
                            </button>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div className="flex justify-center items-center gap-x-3">
                            <button>
                              <span>Nombre</span>
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
                              <span>Estado</span>
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
                      {movCajeros?.map((data) => (
                        <React.Fragment key={data.id_empleado}>
                          <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                              <div className="w-full inline-flex justify-center items-center gap-x-3">
                                <span># {data.id_empleado}</span>
                              </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="w-full inline-flex justify-center items-center gap-x-3">
                                <div className="flex justify-start w-40">
                                  <div className="flex items-center gap-x-2">
                                    <img
                                      className="object-cover w-10 h-10 rounded-full"
                                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                      alt=""
                                    />
                                    <div>
                                      <h2 className="font-medium text-gray-800 dark:text-white ">
                                        {data.username}
                                      </h2>
                                      <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                        {data.id_rol === 3 && <>Cajero</>}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                              <div className="w-full inline-flex justify-center items-center gap-x-3">
                                <span>{formatSaldo(data.saldo)}</span>
                              </div>
                            </td>

                            <td className="flex justify-center px-5 py-5 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                <h2 className="text-sm font-normal text-emerald-500">
                                  Activo
                                </h2>
                              </div>
                            </td>

                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                              <div className="w-full inline-flex justify-center items-center gap-x-3">
                                <span>03/07/2024, 04:56:02 p. m.</span>
                              </div>
                            </td>

                            <td className="flex justify-center px-5 py-5 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center px-3 py-1 text-gray-500 dark:text-gray-400">
                                <button className="text-gray-500 transition-colors duration-200 dark:hover:text-amber-500 dark:text-gray-300 hover:text-amber-500 focus:outline-none">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovimientosCajeros;

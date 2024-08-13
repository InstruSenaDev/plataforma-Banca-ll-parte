import React, { useEffect, useState } from "react";
import ConsgnacionCuentaAhorro from "../Cajero/ConsignacionCuentaAhorro";

const AperturaCuentaAhorro = () => {
  const [openConsignacion, setOpenConsignacion] = useState(false);

  const openModal = () => setOpenConsignacion(true);
  const closeModal = () => setOpenConsignacion(false);

  const [dataUser, setDataUser] = useState([]);

  const firstCosing = async () => {
    try {
      const response = await fetch("http://localhost:3000/firstCosing");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.result && data.result.rows) {
        setDataUser(data.result.rows);
      } else {
        console.error("Unexpected data structure:", data);
      }
    } catch (error) {
      console.error("Error fetching information:", error);
    }
  }
  useEffect(() => {
    firstCosing();
  }, []);
  return (
    <>
      <section className="container p-4 mx-auto" style={{ minHeight: "87vh" }}>
        <div className="flex flex-col justify-center items-between h-full">
          <div className="flex justify-between items-center gap-x-3">
            <div className="flex flex-col justify-center items-start">
              <div className="flex flex-row items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                  Nuevas Cuentas
                </h2>
              </div>
              <p className="text-sm text-gray-500 m-0 p-0">
                Primera Consignación
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
                              <span>Nombre de Cliente</span>
                            </button>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div className="flex justify-center items-center gap-x-3">
                            <button>
                              <span>Producto bancario</span>
                            </button>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div className="flex justify-center items-center gap-x-2">
                            <button>
                              <span>N° Cuenta</span>
                            </button>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div className="flex justify-center items-center gap-x-2">
                            <button>
                              <span> Acción</span>
                            </button>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {dataUser?.map((data) => (
                        <React.Fragment key={data.id_detalle}>
                      <tr>
                        <td className="px-8 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="w-full inline-flex justify-center items-center gap-x-3">
                            <h2 className="font-medium text-gray-800 dark:text-white ">{data.nombre}</h2>
                          </div>
                        </td>

                        <td className="px-8 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="w-full inline-flex justify-center items-center gap-x-3">
                            <h2 className="text-sm font-normal text-gray-500 dark:text-white ">{data.descripcion}</h2>
                          </div>
                        </td>

                        <td className="px-8 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="w-full inline-flex justify-center items-center gap-x-3">
                            <h2 className="text-sm font-normal text-gray-500 dark:text-white "> {data.num_cuenta}</h2>
                          </div>
                        </td>

                        <td className="flex justify-center px-8 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-2 px-3 py-1 text-gray-500 dark:text-gray-400">
                            <button
                              className="text-gray-500 transition-colors duration-200 dark:hover:text-bg-emerald-500 dark:text-gray-300 hover:text-red-600 focus:outline-none"
                              onClick={openModal}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
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
        <ConsgnacionCuentaAhorro
          openConsignacion={openConsignacion}
          closeModal={closeModal}
        />
      </section>
    </>
  );
};

export default AperturaCuentaAhorro;

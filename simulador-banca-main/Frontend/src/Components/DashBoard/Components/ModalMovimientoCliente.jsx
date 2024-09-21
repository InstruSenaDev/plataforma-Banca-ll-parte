import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { dateFormatter } from "../../../utils/dateFormatter";
import { saldoFormatter } from "../../../utils/saldoFormatter";

const ModalMovimientoCliente = ({
  openMovimientos,
  setOpenMovimientos,
  idClienteDetails,
  setIdClienteDetails,
  idCuentaSeleccionada,
}) => {
  const [allMovimientos, setAllMovimientos] = useState([]);
  const [movementsPage, setMovementsPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useAuth();

  useEffect(() => {
    const fetchMovimientos = async () => {
      try {
        const response = await fetch("http://localhost:3000/get_movimientos");
        if (response.ok) {
          const data = await response.json();
          console.log("Datos obtenidos:", data);
  
          // Filtrar los datos basados en el rol del usuario
          let filteredData;
          if (user?.id_rol === 2) {
            filteredData = data.filter((item) => item.cliente);
          } else {
            filteredData = data;
          }
  
          // Filtrar por el id_detalle de la cuenta seleccionada
          if (idCuentaSeleccionada) {
            filteredData = filteredData.filter((item) => item.id_detalle === idCuentaSeleccionada);
          }
  
          console.log("Datos filtrados:", filteredData);
          setAllMovimientos(filteredData);
        } else {
          console.error("Error fetching data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchMovimientos();
  }, [user, idCuentaSeleccionada]);
  
   

  const movementsTotal = allMovimientos.length;
  const lastIndex = currentPage * movementsPage;
  const firstIndex = lastIndex - movementsPage;

  const closeMovimientos = () => {
    setIdClienteDetails(null);
    setOpenMovimientos(false);
  };

  return (
    <>
      {openMovimientos && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="rounded-lg bg-white shadow-sm w-full max-w-3xl h-auto max-h-screen overflow-auto">
            <div className="flex flex-col space-y-1.5 p-6 h-full gap-4">
              <div className="flex items-center justify-between">
                <h3 className="whitespace-nowrap text-2xl font-semibold">
                  Movimientos de Cuenta
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent transition hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={closeMovimientos}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-2">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-DarkSlate dark:bg-gray-800">
                        <tr>
                          <th scope="col" className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400">
                            <div className="flex justify-center items-center gap-x-3">
                              <button><span>N° Cuenta</span></button>
                            </div>
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400">
                            <div className="flex justify-center items-center gap-x-3">
                              <button><span>Saldo</span></button>
                            </div>
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400">
                            <div className="flex justify-center items-center gap-x-3">
                              <button><span>Fecha Creación</span></button>
                            </div>
                          </th>
                          <th scope="col" className="px-4 py-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400">
                            <div className="flex justify-center items-center gap-x-2">
                              <button><span>Acción</span></button>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {allMovimientos.slice(firstIndex, lastIndex).map((data) => (
                      <tr key={data.id_movimiento}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                              <div className="flex justify-center items-center">
                                <span>{data.num_cuenta}</span>
                              </div>
                            </td>
                           
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                              <div className="flex justify-center items-center">
                                <span>{saldoFormatter(data.saldo)}</span>
                              </div>
                            </td>

                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                              <div className="flex justify-center items-center">
                                <span>{dateFormatter(data.fecha)}</span>
                              </div>
                            </td>

                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap w-32">
                              <div className="flex justify-center items-center">
                                {data.id_tipomov === 1 && (
                                  <>
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
                                        {data.tipo_movimiento}
                                      </h2>
                                    </div>
                                  </>
                                )}

                                {data.id_tipomov === 2 && (
                                  <>
                                    <div className="flex justify-center items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                                      <span className="text-red-500">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="size-4"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 12h14"
                                          />
                                        </svg>
                                      </span>

                                      <h2 className="text-sm font-normal text-red-500">
                                        {data.tipo_movimiento}
                                      </h2>
                                    </div>
                                  </>
                                )}
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
          </div>
        </div>
      )}
    </>
  );
};

export default ModalMovimientoCliente;

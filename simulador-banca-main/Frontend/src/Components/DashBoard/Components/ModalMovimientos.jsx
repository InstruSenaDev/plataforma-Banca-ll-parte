import React, { useEffect, useState } from "react";
import userProfile from "../../../assets/Img/Login/user.png";

export const ModalMovimientos = ({
  modalMovimientos,
  setModalMovimientos,
  detalleAccount,
}) => {
  const [allMovimientos, setAllMovimientos] = useState([]);

  // Funcion para traer movimientos de un cliente
  const fetchMovimientos = async () => {
    if (!detalleAccount) return;

    try {
      const response = await fetch(
        `http://localhost:3000/account_movimientos/${detalleAccount}`
      );
      if (response.ok) {
        const data = await response.json();
        setAllMovimientos(data);
        console.log("Movimientos recibidos:", data);
      } else {
        console.error("Error fetching user info:", response.status);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  console.log(allMovimientos);

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

  // Función para formatear la fecha en "dd/mm/yyyy hh:mm:ss a.m./p.m.".
  const formatFecha = (fecha) => {
    const date = new Date(fecha);

    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    return new Intl.DateTimeFormat("es-CO", options).format(date);
  };

  // Solo llamar a fetchMovimientos cuando detalleAccount cambie
  useEffect(() => {
    fetchMovimientos();
  }, [detalleAccount]);

  const closeModal = () => {
    setModalMovimientos(false);
    setAllMovimientos([]);
  };

  return (
    <>
      {modalMovimientos && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-[600px] h-[500px] lg:w-5/6 bg-white rounded-lg p-4 max-h-screen overflow-y-auto">
            <div className="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600">
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm w-4 h-4 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
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

            <div className="flex flex-col justify-center items-between flex-1">
              <div className="flex flex-col justify-between flex-1">
                <div className="flex flex-col mt-6">
                  <div className="overflow-x-auto">
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
                            {allMovimientos?.map((data) => (
                              <React.Fragment key={data.id_movimiento}>
                                <tr>
                                  <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                    <div className="w-full inline-flex justify-center items-center gap-x-3">
                                      <span># {data.id_movimiento}</span>
                                    </div>
                                  </td>
                                  <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="w-full inline-flex justify-center items-center gap-x-3">
                                      <div className="flex justify-start w-40">
                                        <div className="flex items-center gap-x-2">
                                          <img
                                            className="object-cover w-10 h-10 rounded-full"
                                            // src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                            src={userProfile}
                                            alt=""
                                          />
                                          <div>
                                            {data.empleado ? (
                                              <>
                                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                                  {data.empleado}
                                                </h2>
                                                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                  {data.rol}
                                                </p>
                                              </>
                                            ) : (
                                              <>
                                                <h2>Usuario eliminado</h2>
                                              </>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    <div className="flex flex-col justify-center items-center gap-x-2">
                                      {data.consing_em ? (
                                        <>
                                          <div className="flex justify-center w-40">
                                            <div className="flex items-center gap-x-2">
                                              <img
                                                className="object-cover w-10 h-10 rounded-full"
                                                // src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                src={userProfile}
                                                alt=""
                                              />
                                              <div>
                                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                                  {data.empleado_consing}
                                                </h2>
                                                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                  {data.rol_consing}
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </>
                                      ) : data.cliente ? (
                                        <>
                                          <h2 className="font-medium text-gray-800 dark:text-white">
                                            {data.cliente}
                                          </h2>
                                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                            N° {data.num_cuenta}
                                          </p>
                                        </>
                                      ) : (
                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                          Bóveda
                                        </p>
                                      )}
                                    </div>
                                  </td>

                                  <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                    <div className="w-full inline-flex justify-center items-center gap-x-3">
                                      <span>{formatSaldo(data.saldo)}</span>
                                    </div>
                                  </td>

                                  <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                    <div className="w-full inline-flex justify-center items-center gap-x-3">
                                      <span>{formatFecha(data.fecha)}</span>
                                    </div>
                                  </td>

                                  <td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="w-full inline-flex justify-center items-center">
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

                                      {data.id_tipomov === 3 && (
                                        <>
                                          <div className="flex justify-center items-center px-3 py-1 rounded-full gap-x-2 bg-amber-100/60 dark:bg-gray-800">
                                            <span className="text-amber-500">
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

                                            <h2 className="text-sm font-normal text-amber-500">
                                              {data.tipo_movimiento}
                                            </h2>
                                          </div>
                                        </>
                                      )}

                                      {data.id_tipomov === 4 && (
                                        <>
                                          <div className="flex justify-center items-center px-3 py-1 rounded-full gap-x-2 bg-orange-100/60 dark:bg-gray-800">
                                            <span className="text-orange-500">
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
                                                  d="M5 12h14"
                                                />
                                              </svg>
                                            </span>

                                            <h2 className="text-sm font-normal text-orange-500">
                                              {data.tipo_movimiento}
                                            </h2>
                                          </div>
                                        </>
                                      )}

                                      {data.id_tipomov === 5 && (
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

                {/* <Pagination
              movementsPage={movementsPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              movementsTotal={movementsTotal}
            /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

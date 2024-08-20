import React, { useEffect, useState } from "react";
import { ModalBusqueda } from "./ModalBusqueda";

export const BusquedaC = () => {
  const [dataUser, setDataUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalData, setModalData] = useState(null); // Para almacenar los datos del modal
  const [showModal, setShowModal] = useState(false); // Para controlar la visibilidad del modal

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/get_search");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDataUser(data);
      } catch (error) {
        console.error("error al encontrar informacion", error);
      }
    };
    fetchData();
  }, []);

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData =
    dataUser?.filter(
      (item) => item?.ip_documento?.includes(searchTerm.trim()) ?? false
    ) || [];

  console.log(filteredData);

  const openModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalData(null); // Limpiar modalData
    setShowModal(false);
  };

  return (
    <>
      <section className="container p-4 mx-auto" style={{ minHeight: "87vh" }}>
        <div className="flex flex-col justify-center items-between h-full">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col justify-center items-start">
              <div className="flex flex-row items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                  Explorar clientes
                </h2>
              </div>
              <p className="text-sm text-gray-500 m-0 p-0">
                Descubre una variedad de productos bancarios.
              </p>
            </div>

            <div className="w-80">
              <div class="flex items-center">
                <span class="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mx-3 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  defaultValue={searchTerm}
                  onChange={handleSearch}
                  placeholder="Busqueda por documento"
                  className="w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5  focus:border-DarkSlate focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse gap-4 mt-6">
            {searchTerm !== "" && (
              <>
                <div className="w-3/4 bg-white rounded-md p-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <h1 className="text-lg font-medium text-gray-800">
                        Detalle del Cliente
                      </h1>

                      <button className="flex justify-center items-center text-gray-400 transition hover:text-amber-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex flex-col border border-gray-300 rounded-md p-2 text-gray-500 mt-2">
                      <span>Nombres: </span>
                      <span>Apellidos: </span>
                      <span>Nº Documento: </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h1 className="text-lg font-medium text-gray-800">
                      Productos del cliente
                    </h1>

                    <div>
                      <div class="w-full overflow-auto">
                        <table class="w-full caption-bottom text-sm">
                          <thead class="border-b">
                            <tr class="border-b hover:bg-gray-50">
                              <th class="py-2.5 px-4 font-semibold text-gray-600">
                                Nº Cuenta
                              </th>
                              <th class="py-2.5 px-4 font-semibold text-gray-600">
                                Balance
                              </th>
                              <th class="py-2.5 px-4 font-semibold text-gray-600">
                                Tipo de Cuenta
                              </th>
                              <th class="py-2.5 px-4 font-semibold text-gray-600">
                                Transferencias
                              </th>
                            </tr>
                          </thead>
                          <tbody class="border-0">
                            <tr class="border-b hover:bg-gray-50">
                              <td class="py-2.5 px-4 flex justify-center items-center font-normal text-black">
                                123456789
                              </td>
                              <td class="py-2.5 px-4 flex justify-center items-center font-semibold text-black">
                                $5,000.00
                              </td>
                              <td class="py-2.5 px-4 flex justify-center items-center font-normal text-gray-500">
                                Checking
                              </td>
                              <td class="py-2.5 px-4 flex justify-center items-center font-normal">
                                <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 rounded-md px-3">
                                  View Transactions
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <button className="flex justify-center items-center gap-2 bg-emerald-600 py-2 px-4 rounded text-white font-semibold hover:bg-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>

                      <span>Crear Producto</span>
                    </button>
                  </div>
                </div>
              </>
            )}
            <div className="w-full -mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                              <span>N° Documento</span>
                            </button>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div className="flex justify-center items-center gap-x-3">
                            <button>
                              <span>Nombre Cliente</span>
                            </button>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div className="flex justify-center items-center gap-x-3">
                            <button>
                              <span>Fecha y Hora</span>
                            </button>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div className="flex justify-center items-center gap-x-3">
                            <div className="flex justify-center items-center gap-x-3">
                              <button>
                                <span> Acción</span>
                              </button>
                            </div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {searchTerm !== "" &&
                        filteredData?.map((data) => (
                          <React.Fragment key={data.id_cliente}>
                            <tr>
                              <td className="px-4 py-4 text-sm font-medium text-black dark:text-gray-200 whitespace-nowrap">
                                <div className="w-full inline-flex justify-center items-center gap-x-3">
                                  <span>{data.ip_documento}</span>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                                <div className="w-full inline-flex justify-center items-center gap-x-3">
                                  <span>{data.nombre}</span>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <div className="w-full inline-flex justify-center items-center gap-x-3">
                                  <span>{formatFecha(data.fecha)}</span>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <div className="w-full inline-flex justify-center items-center gap-x-3">
                                  <button
                                    onClick={() => openModal(data)}
                                    className="text-gray-500 transition-colors duration-200 hover:text-amber-500 focus:outline-none"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="size-5"
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

                <ModalBusqueda
                  data={modalData}
                  closeModal={closeModal}
                  showModal={showModal}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

import React, { useEffect, useState } from "react";
import { ModalBusqueda } from "./ModalBusqueda";
import { ModalInfoCliente } from "./ModalInfoCliente";

export const BusquedaC = () => {
  const [dataUser, setDataUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [modalData, setModalData] = useState(null); // Para almacenar los datos del modal
  const [showModal, setShowModal] = useState(false); // Para controlar la visibilidad del modal
  const [showInfo, setShowInfo] = useState(false);

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

  const getAccounts = async (documento) => {
    try {
      const response = await fetch(
        `http://localhost:3000/get_client/${documento}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setAccounts(data);
    } catch (error) {
      console.error("error al encontrar informacion", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const documento =
      filteredData.length > 0 ? filteredData[0].ip_documento : null;
    if (documento) {
      getAccounts(documento);
    }
  }, [searchTerm, dataUser]); // Llamamos a getAccounts cuando searchTerm o dataUser cambia

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

  const openInfo = (id_cliente) => {
    setShowInfo(true);
    setModalData(filteredData.find((data) => data.id_cliente === id_cliente));
  };

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
              <div className="flex items-center">
                <span className="absolute">
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
                              <span>Fecha Creación</span>
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
                                    onClick={() => openInfo(data.id_cliente)}
                                    className="text-gray-500 transition-colors duration-200 hover:text-emerald-500 focus:outline-none"
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
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                      />
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
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

                <ModalInfoCliente
                  accounts={accounts}
                  filteredData={filteredData}
                  showInfo={showInfo}
                  setShowInfo={setShowInfo}
                  modalData={modalData}
                  setModalData={setModalData}
                  setShowModal={setShowModal}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

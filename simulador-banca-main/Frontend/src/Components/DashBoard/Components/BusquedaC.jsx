import React, { useEffect, useState } from "react";
import { ModalBusqueda } from "./ModalBusqueda";

export const BusquedaC = () => {
  const [datauser, setDatauser] = useState([]);
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
        setDatauser(data);
      } catch (error) {
        console.error("error al encontrar informacion", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = datauser?.filter(item => 
    item?.ip_documento?.includes(searchTerm) ?? false
  ) || [];

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
          <div className="flex flex-col items-center gap-5 p-5">
            <div className="w-3/4 text-black text-4xl flex items-center justify-center font-semibold text-center gap-5 p-10">
              <p>Busqueda de Cuentas</p>
            </div>
            <div className="w-8/12 flex justify-start flex-col  max-[500px]:justifu-center  max-[500px]:w-full ">
              <label htmlFor="">Busca tu Numero de documento </label>
              <input
                type="text"
                defaultValue={searchTerm}
                onChange={handleSearch}
                className=" rounded-md border-gray-300 focus:ring-green focus:border-green"
              />
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
                              <span>Fecha y Hora</span>
                            </button>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div className="flex justify-center items-center gap-x-3">
                            <button>
                              <span>Producto bancario</span>
                            </button>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div className="flex justify-center items-center gap-x-3">
                            <button>
                              <span>N° Cuenta</span>
                            </button>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div className="flex justify-center items-center gap-x-3">
                            <button>
                              <span> Estado</span>
                            </button>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div className="flex justify-center items-center gap-x-3">
                            <button>
                              <svg
                                className="w-6 h-6 text-white  dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="square"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                            </button>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {searchTerm !== "" &&
                        filteredData?.map((data) => (
                          <>
                            <tr key={data.id_cliente}>
                              <td className="px-4 py-4 text-sm font-medium text-black dark:text-gray-200 whitespace-nowrap">
                                <div className="w-full inline-flex justify-center items-center gap-x-3">
                                  <span>{data.ip_documento}</span>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <div className="w-full inline-flex justify-center items-center gap-x-3">
                                  <span>{data.nombre}</span>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <div className="w-full inline-flex justify-center items-center gap-x-3">
                                  <span>{data.fecha}</span>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <div className="w-full inline-flex justify-center items-center gap-x-3">
                                  <span>{data.tipo_cuenta}</span>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <div className="w-full inline-flex justify-center items-center gap-x-3">
                                  <span>{data.num_cuenta}</span>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <div className="w-full inline-flex justify-center items-center gap-x-3">
                                  <span>{data.estadocliente}</span>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <div className="w-full inline-flex justify-center items-center gap-x-3">
                                  <button
                                    onClick={() => openModal(data)}
                                    className="text-gray-500 transition-colors duration-200 dark:hover:text-emerald-500 dark:text-gray hover:text-emerald-500 focus:outline-none"
                                  >
                                    <svg
                                      className="w-6 h-6 "
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M8 7V2.221a2 2 0 0 0-.5.365L3.586 6.5a2 2 0 0 0-.365.5H8Zm2 0V2h7a2 2 0 0 1 2 2v.126a5.087 5.087 0 0 0-4.74 1.368v.001l-6.642 6.642a3 3 0 0 0-.82 1.532l-.74 3.692a3 3 0 0 0 3.53 3.53l3.694-.738a3 3 0 0 0 1.532-.82L19 15.149V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z"
                                        clip-rule="evenodd"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        d="M17.447 8.08a1.087 1.087 0 0 1 1.187.238l.002.001a1.088 1.088 0 0 1 0 1.539l-.377.377-1.54-1.542.373-.374.002-.001c.1-.102.22-.182.353-.237Zm-2.143 2.027-4.644 4.644-.385 1.924 1.925-.385 4.644-4.642-1.54-1.54Zm2.56-4.11a3.087 3.087 0 0 0-2.187.909l-6.645 6.645a1 1 0 0 0-.274.51l-.739 3.693a1 1 0 0 0 1.177 1.176l3.693-.738a1 1 0 0 0 .51-.274l6.65-6.646a3.088 3.088 0 0 0-2.185-5.275Z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </>
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

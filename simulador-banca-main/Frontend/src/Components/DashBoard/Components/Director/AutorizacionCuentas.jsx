import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalAutorizaciones } from "../ModalAutorizaciones";

export const AutorizacionCuentas = () => {
  const [datauser, setdatauser] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await fetch("http://localhost:3000/waiting");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setdatauser(data.result.rows);
        console.log(data.result.rows[0]);
      } catch (error) {
        console.error("error al encontrar informacion");
      }
    };
    fecthData();
  }, []);

  const estado = datauser.map((user) => user.estado_cliente == "Pendiente");

  const autorizar = (id) => {
    console.log(id);
    try {
      // Realiza una solicitud al servidor para cambiar el estado del cliente con el ID proporcionado
      fetch(`http://localhost:3000/client_status/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nuevoEstado: "Autorizado",
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.message);
          toast.success("Autorizado");
          setTimeout(() => {
            // Actualiza localmente el estado del cliente según sea necesario
            // Puedes utilizar la función setDatauser para actualizar el estado local
            // Ejemplo: setDatauser(prevData => [...prevData, data.updatedClient]);
            // alert('Autorización exitosa')
            // Redirige a la página '/DashBoardMenu' después de procesar la respuesta
            window.location = "/DashBoardMenu";
          }, 1500); // 2000 milisegundos = 2 segundos
        })
        .catch((error) => {
          console.error("Error al cambiar el estado del cliente:", error);
        });
    } catch (error) {
      console.error("Error general:", error);
    }
  };

  const [modalData, setModalData] = useState(null); // Para almacenar los datos del modal
  const [showModal, setShowModal] = useState(false);

  const denegar = (id) => {
    try {
      // Realiza una solicitud al servidor para cambiar el estado del cliente con el ID proporcionado
      fetch(`http://localhost:3000/client_status/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nuevoEstado: "Denegado",
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.message);
          toast.error("denegado");
          setTimeout(() => {
            // Actualiza localmente el estado del cliente según sea necesario
            // Puedes utilizar la función setDatauser para actualizar el estado local
            // Ejemplo: setDatauser(prevData => [...prevData, data.updatedClient]);
            // alert('Autorización exitosa')
            // Redirige a la página '/DashBoardMenu' después de procesar la respuesta
            window.location = "/DashBoardMenu";
          }, 1500); // 2000 milisegundos = 2 segundos
        })
        .catch((error) => {
          console.error("Error al cambiar el estado del cliente:", error);
        });
    } catch (error) {
      console.error("Error general:", error);
    }
  };

  const openModal = (datauser) => {
    setModalData(datauser);
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
          <div className="flex justify-between items-center gap-x-3">
            <div className="flex flex-col justify-center items-start">
              <div className="flex flex-row items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                  Autorización de Cuentas
                </h2>
                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                  0 movimientos
                </span>
              </div>
              <p className="text-sm text-gray-500 m-0 p-0">
                Cuentas por autorizar y denegar
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
                          className="px-4 py-3 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
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
                              <span> Acción</span>
                            </button>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {datauser?.map((data) => (
                        <React.Fragment key={data.id_detalle}>
                          <tr>
                            <td className="px-8 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="w-full inline-flex justify-center items-center gap-x-3">
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  {data.nombre}
                                </h2>
                              </div>
                            </td>
                            <td className="px-8 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="w-full inline-flex justify-center items-center gap-x-3">
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  {data.descripcion}
                                </h2>
                              </div>
                            </td>
                            <td className="px-8 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="w-full inline-flex justify-center items-center gap-x-3">
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  {data.num_cuenta}
                                </h2>
                              </div>
                            </td>
                            <td className="px-8 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="w-full inline-flex justify-center items-center gap-x-3">
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  {data.estado_cliente}
                                </h2>
                              </div>
                            </td>
                            <td className="px-8 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <button
                                onClick={() => openModal(data)}
                                href="#"
                                class="hover:bg-gray-200 p-1 rounded-sm"
                              >
                                <svg
                                  class="w-6 h-6 text-red-600 dark:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18 18 6m0 12L6 6"
                                  />
                                </svg>
                              </button>

                              <button
                                onClick={() => autorizar(data.id_detalle)}
                                href="#"
                                class="hover:bg-gray-200 p-1 rounded-sm"
                              >
                                <svg
                                  class="w-6 h-6 text-neutralGreen dark:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m5 12 4.7 4.5 9.3-9"
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <ModalAutorizaciones
                data={modalData}
                closeModal={closeModal}
                showModal={showModal}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

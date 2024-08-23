import React, { useEffect, useState } from "react";
import { ModalBusqueda } from "./ModalBusqueda";

export const ModalInfoCliente = ({
  filteredData,
  showInfo,
  setShowInfo,
  modalData,
  setModalData,
}) => {
  const [accounts, setAccounts] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  const formatNac = (date) => {
    if (!date) return "Fecha no disponible";
    try {
      const dateObj = new Date(date);
      if (isNaN(dateObj.getTime())) {
        throw new Error("Invalid date");
      }
      return dateObj.toLocaleDateString("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      console.error("Error al formatear la fecha:", error);
      return "Fecha inválida";
    }
  };

  const openAddAcount = () => {
    console.log("Cuenta agregada");
  };

  const openModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowInfo(false);
    setModalData(null);
  };

  // Efecto para cargar las cuentas cuando se abre el modal
  useEffect(() => {
    if (showInfo && modalData) {
      getAccounts(modalData.ip_documento);
    }
  }, [showInfo, modalData]);

  return (
    <>
      {showInfo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-2/5 bg-white rounded-md p-4">
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-md font-medium text-gray-800">
                  Detalle del Cliente
                </h1>

                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent transition hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crud-modal"
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

              <div className="flex flex-wrap gap-4 border border-gray-300 rounded-md p-2 text-gray-500 text-xs sm:text-sm mt-2">
                {modalData && (
                  <React.Fragment key={modalData.id_cliente}>
                    <div className="flex-1 flex flex-col">
                      <span>
                        {modalData.nombre} {modalData.primerapellido}{" "}
                        {modalData.segundoapellido}
                      </span>
                      <span>
                        {modalData.tipodocumento} {modalData.ip_documento}
                      </span>

                      <span>{modalData.celular}</span>
                      <span>{modalData.correo}</span>
                      <span>
                        F. Nacimiento: {formatNac(modalData.fechanacimiento)}
                      </span>
                    </div>

                    <div className="border-r border-gray-300 "></div>

                    <div className="flex-1 flex flex-col">
                      <span>Nacionalidad: {modalData.nacionalidad}</span>
                      <span>
                        Residencia: {modalData.ciudad} ({modalData.depa})
                      </span>
                      <span>
                        Dirección: {modalData.direccion} {modalData.barrio}
                      </span>

                      <span>Profesión: {modalData.profesion}</span>
                      <span>Renta: {modalData.renta}</span>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>

            <div className="mt-4">
              <div className="flex flex-col sm:flex-row justify-between sm:justify-between flex-wrap gap-2">
                <h1 className="text-sm sm:text-md font-medium text-gray-800">
                  Productos del cliente
                </h1>

                <div className="flex flex-col sm:flex-row sm:justify-end gap-4">
                  <button
                    onClick={() => openModal(modalData)}
                    className="flex justify-center items-center gap-2 text-xs sm:text-sm text-center bg-amber-500 text-white py-1.5 px-2 rounded transition hover:bg-amber-600"
                  >
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
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>

                    <span>Editar Información</span>
                  </button>

                  <button
                    onClick={() => openAddAcount()}
                    className="flex justify-center items-center gap-2 text-xs sm:text-sm  text-center bg-emerald-500 text-white py-1.5 px-2 rounded transition hover:bg-emerald-600"
                  >
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
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>

                    <span>Agregar Producto</span>
                  </button>
                </div>
              </div>

              <div className="mt-2">
                <div className="w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="border-b">
                      <tr className="border-b hover:bg-gray-50">
                        <th className="py-2.5 px-4 font-semibold text-gray-600">
                          Nº Cuenta
                        </th>
                        <th className="py-2.5 px-4 font-semibold text-gray-600">
                          Balance
                        </th>
                        <th className="py-2.5 px-4 font-semibold text-gray-600">
                          Tipo de Cuenta
                        </th>
                        <th className="py-2.5 px-4 font-semibold text-gray-600">
                          Transferencias
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-0">
                      {accounts
                        ?.filter((data) => data.estado_cuenta === "Autorizado")
                        .map((data) => (
                          <tr
                            className="border-b hover:bg-gray-50"
                            key={data.id_detalle}
                          >
                            <td className="py-2.5 px-4  font-normal text-black">
                              <div className="flex justify-center items-center">
                                {data.num_cuenta}
                              </div>
                            </td>
                            <td className="py-2.5 px-4 font-semibold text-black">
                              <div className="flex justify-center items-center">
                                {formatSaldo(data.saldo)}
                              </div>
                            </td>
                            <td className="py-2.5 px-4 text-gray-500">
                              <div className="flex justify-center items-center">
                                {data.descripcion}
                              </div>
                            </td>
                            <td className="py-2.5 px-4 font-normal">
                              <div className="flex justify-center items-center">
                                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm hover:underline">
                                  Ver transferencias
                                </button>
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
      )}

      <ModalBusqueda
        data={modalData}
        setModalData={setModalData}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

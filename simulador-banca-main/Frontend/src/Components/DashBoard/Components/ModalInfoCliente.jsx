import React, { useState } from "react";
import { ModalBusqueda } from "./ModalBusqueda";

export const ModalInfoCliente = ({
  accounts,
  filteredData,
  showInfo,
  setShowInfo,
  modalData,
  setModalData,
}) => {
  const [showModal, setShowModal] = useState(false);
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

  const formatNac = (fecha) => {
    const date = new Date(fecha);

    return new Intl.DateTimeFormat("es-CO").format(date);
  };

  const openModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowInfo(false);
  };
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
                {filteredData?.map((data) => (
                  <React.Fragment key={data.id_cliente}>
                    <div className="flex-1 flex flex-col">
                      <span>
                        {data.nombre} {data.primerapellido}{" "}
                        {data.segundoapellido}
                      </span>
                      <span>
                        {data.tipodocumento} {data.ip_documento}
                      </span>

                      <span>{data.celular}</span>
                      <span>{data.correo}</span>
                      <span>
                        F. Nacimiento: {formatNac(data.fechanacimiento)}
                      </span>
                    </div>

                    <div className="border-r border-gray-300 "></div>

                    <div className="flex-1 flex flex-col">
                      <span>Nacionalidad: {data.nacionalidad}</span>
                      <span>
                        Residencia: {data.ciudad} ({data.depa})
                      </span>
                      <span>
                        Dirección: {data.direccion} {data.barrio}
                      </span>

                      <span>Profesión: {data.profesion}</span>
                      <span>Renta: {data.renta}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="flex flex-col sm:flex-row justify-between sm:justify-between flex-wrap gap-2">
                <h1 className="text-sm sm:text-md font-medium text-gray-800">
                  Productos del cliente
                </h1>

                <div className="flex flex-col sm:flex-row sm:justify-end gap-4">
                  <button
                    onClick={() => openModal(filteredData[0])}
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

                  <button className="flex justify-center items-center gap-2 text-xs sm:text-sm  text-center bg-emerald-500 text-white py-1.5 px-2 rounded transition hover:bg-emerald-600">
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
                      {accounts?.map((data) => (
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
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

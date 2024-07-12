import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import { useAuth } from "../../../../context/AuthContext";
import { toast } from "react-toastify";

const Transfers = () => {
  const [empleadoDetails, setEmpleadoDetails] = useState([]);
  const [filterEmpleados, setFilterEmpleados] = useState([]);
  const [selectedEmpleado, setSelectedEmpleado] = useState(null);
  const [amount, setAmount] = useState("");

  const { user } = useAuth();

  const [openModal1, setOpenModal1] = useState(false);

  const onCloseModal = () => {
    setOpenModal1(false);
    setSelectedEmpleado(null);
    setAmount(""); // Reset amount when closing the modal
  };

  const fetchEmpleados = async () => {
    try {
      const response = await fetch("http://localhost:3000/get_users");
      if (response.ok) {
        const userData = await response.json();
        setEmpleadoDetails(userData.result.rows);

        const filteredEmpleados = userData.result.rows.filter(
          (empleado) => empleado.estado === "Solicitud"
        );

        setFilterEmpleados(filteredEmpleados);
      } else {
        console.error("Error fetching user info:", response.status);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const handleConsign = async () => {
    // Funcion para filtrar usuarios con rol de cajero principal
    const filterEmpleadoPrincipal = empleadoDetails.filter(
      (users) => users.id_rol === 4
    );

    const { id_empleado, saldo, estado } = selectedEmpleado;

    const idPricipal = filterEmpleadoPrincipal[0].id_empleado;
    const saldoPrincipal = filterEmpleadoPrincipal[0].saldo;
    const amountToConsign = parseFloat(amount);

    if (
      selectedEmpleado === null ||
      isNaN(amountToConsign) ||
      amountToConsign <= 0
    ) {
      toast.error("Datos del usuario o monto inválidos.");
    }

    const newBalanceEmpleado = parseFloat(saldo) + amountToConsign;
    const newBalancePrincipal = parseFloat(saldoPrincipal) - amountToConsign;

    if (estado === "Solicitud") {
      try {
        const responseEmpleado = await fetch(
          `http://localhost:3000/balance_request/${id_empleado}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nuevoSaldo: newBalanceEmpleado,
              newStatus: "Activo",
              saldoSolicitado: 0,
            }),
          }
        );

        if (!responseEmpleado.ok) {
          throw new Error("Network response was not ok");
        }

        const responsePrincipal = await fetch(
          `http://localhost:3000/balance_request/${idPricipal}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nuevoSaldo: newBalancePrincipal,
              newStatus: "Activo",
              saldoSolicitado: 0,
            }),
          }
        );

        if (!responsePrincipal.ok) {
          throw new Error("Network response was not ok");
        }

        toast.success("Consignación realizada correctamente.");
        setTimeout(() => {
          window.location = "/DashBoardMenu";
        }, 1500);
      } catch (error) {
        toast.error("Error al realizar la consignación.");
      }
    } else {
      return toast.error(
        "Error al realizar la consignación: El usuario ha cancelado la solicitud"
      );
    }
  };

  // Función para formatear el costo a miles sin decimales.
  const formatSaldo = (saldo) => {
    // Crea una instancia de Intl.NumberFormat con la configuración regional "es-CO" (Colombia)
    const formatter = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 2,
    });

    // Formatea el costo usando la configuración especificada.
    return formatter.format(saldo);
  };

  const openModal = (empleado) => {
    setSelectedEmpleado(empleado);
    setOpenModal1(true);
    setAmount("");
  };

  return (
    <section className="container px-4 mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
          Cajeros
        </h2>
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
                          <span>ID Empleado</span>
                        </button>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                    >
                      <div className="flex justify-center items-center gap-x-3">
                        <button>
                          <span>Solicitud por</span>
                        </button>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                    >
                      <div className="flex justify-center items-center gap-x-2">
                        <button>
                          <span>Saldo solicitado</span>
                        </button>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
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
                  {filterEmpleados.map((empleado, index) => (
                    <tr key={index}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div className="w-full inline-flex justify-center items-center gap-x-3">
                          <span>{empleado.id_empleado}</span>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="w-full inline-flex justify-center items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-10 h-10 rounded-full"
                              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                              alt=""
                            />
                            <div>
                              <h2 className="font-medium text-gray-800 dark:text-white">
                                {empleado.username}
                              </h2>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Cajero
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div className="w-full inline-flex justify-center items-center gap-x-3">
                          <span>{empleado.saldo}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="w-full inline-flex justify-center items-center">
                          <button
                            className="flex justify-center items-center px-5 py-2 rounded-full gap-x-2 bg-emerald-100/60 hover:bg-emerald-500 group transition dark:bg-gray-800"
                            onClick={() => openModal(empleado)}
                          >
                            <h2 className="text-md font-normal text-emerald-500 group-hover:text-white">
                              Transferir Saldo
                            </h2>
                            <span className="text-emerald-500 group-hover:text-white">
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
                                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                              </svg>
                            </span>
                          </button>
                          <Modal
                            className="bg-black bg-opacity-60 flex justify-center items-center w-screen h-screen p-0"
                            show={openModal1}
                            size="md"
                            onClose={onCloseModal}
                            popup
                          >
                            <Modal.Header>
                              <span className="text-xl py-2 pl-4 pr-3 font-medium text-gray-900 dark:text-white">
                                Consignar
                              </span>
                            </Modal.Header>
                            <Modal.Body className="px-5 pt-2 pb-5">
                              <div className="space-y-6">
                                {selectedEmpleado && (
                                  <>
                                    <div>
                                      <div className="mb-2 block">
                                        <label
                                          htmlFor="accountNumber"
                                          className="font-medium text-gray-700 dark:text-white"
                                        >
                                          ID de empleado:
                                        </label>
                                      </div>
                                      <input
                                        id="accountNumber"
                                        type="number"
                                        value={selectedEmpleado.id_empleado}
                                        readOnly
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                      />
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="accountOwner"
                                        className="font-medium text-gray-700 dark:text-white"
                                      >
                                        Nombre del empleado
                                      </label>
                                      <input
                                        id="accountOwner"
                                        type="text"
                                        value={selectedEmpleado.username}
                                        readOnly
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                      />
                                    </div>
                                  </>
                                )}
                                <div>
                                  <label
                                    htmlFor="amount"
                                    className="font-medium text-gray-700 dark:text-white"
                                  >
                                    Monto a consignar:
                                  </label>
                                  <input
                                    id="amount"
                                    type="number"
                                    placeholder="Monto a consignar"
                                    value={amount}
                                    onChange={(event) =>
                                      setAmount(event.target.value)
                                    }
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                  />
                                </div>
                                <div className="w-full">
                                  <button
                                    onClick={handleConsign}
                                    className="w-full bg-green hover:bg-green hover:scale-105 duration-100 text-white font-bold py-2 px-4 rounded transition-all"
                                  >
                                    Enviar
                                  </button>
                                </div>
                              </div>
                            </Modal.Body>
                          </Modal>
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
    </section>
  );
};

export default Transfers;

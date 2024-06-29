import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import { useAuth } from "../../../../context/AuthContext";



const Transfers = () => {
  const [empleadoDetails, setEmpleadoDetails] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  const { user } = useAuth();

  const [date, setDate] = useState({
    id_empleado: '',
    username: '',
    saldo: 0
  });

  // Abrir Modal
  const [openModal1, setOpenModal] = useState(false);
  const [amount, setAmount] = useState('');


  function onCloseModal() {
    setOpenModal(false);

  }

  //Disable Modales
  const [accountNumber, setAccountNumber] = useState("");
  const [accountOwner, setAccountOwner] = useState("");
  const [isAccountNumberFilled, setIsAccountNumberFilled] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  // Función para realizar la consignación
  const handleConsign = async (obj) => {

    console.log(obj);
    console.log(obj.id_empleado);
    console.log(obj.username);

    setDate({
      id_empleado: obj.id_empleado,
      username: obj.username
    });

    console.log("Datos de date:", date);
    console.log("Monto a consignar:", amount);

    // Verificación inicial de datos
    if (!obj || !obj.id_empleado || !obj.username || !amount) {
      console.error("Datos del usuario o monto inválidos.");
      toast.error("Datos del usuario o monto inválidos.");
      return;
    }

    const idEmpleado = obj.id_empleado;
    const nombreEmpleado = obj.username;
    const saldoEmpleado = parseFloat(obj.saldo); // Convierte el saldo a número

    const amountToConsign = parseFloat(amount);

    // Validación del monto a consignar
    if (isNaN(amountToConsign) || amountToConsign <= 0) {
      console.error("Monto a consignar inválido.");
      toast.error("Monto a consignar inválido.");
      return;
    }

    const newBalanceEmpleado = saldoEmpleado + amountToConsign;

    try {
      console.log("Datos a enviar:", { idEmpleado, nombreEmpleado, saldoEmpleado, amountToConsign, newBalanceEmpleado });

      const responseEmpleado = await fetch(
        `http://localhost:3000/empleado_balance/${idEmpleado}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nuevoSaldo: newBalanceEmpleado,
            nombreEmpleado: nombreEmpleado,
          }),
        }
      );

      if (!responseEmpleado.ok) {
        const errorText = await responseEmpleado.text();
        console.error("Error en la respuesta de la red:", errorText);
        throw new Error("Network response was not ok: " + errorText);
      }

      const updatedEmpleadoDetails = await responseEmpleado.json();
      // Actualizar el estado de empleadoDetails si es necesario
      // setEmpleadoDetails((prevState) => ({
      //   ...prevState,
      //   saldo: updatedEmpleadoDetails.nuevoSaldo,
      // }));

      toast.success("Consignación realizada correctamente.");
      setTimeout(() => {
        window.location = "/DashBoardMenu";
      }, 1500);

    } catch (error) {
      console.error("Error general:", error);
      toast.error("Error al realizar la consignación.");
    }
  };


  // Function to fetch all employees.
  const fetchEmpleados = async () => {
    try {
      const response = await fetch("http://localhost:3000/get_users");
      if (response.ok) {
        const userData = await response.json();
        // Filter employees by state "Solicitud"
        const filteredEmpleados = userData.result.rows.filter(empleado => empleado.estado === "Solicitud");
        setEmpleadoDetails(filteredEmpleados);
      } else {
        console.error("Error fetching user info:", response.status);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  useEffect(() => {
    fetchEmpleados();
  }, []); // Only run once when the component mounts


  const openModal = (dataUser) => {
    setModalData(dataUser);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalData(null);
    setShowModal(false);
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
                  {empleadoDetails.map((empleado, index) => (
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
                          <button className="flex justify-center items-center px-5 py-2 rounded-full gap-x-2 bg-emerald-100/60 hover:bg-emerald-500 group transition dark:bg-gray-800">
                            <h2 className="text-md font-normal text-emerald-500 group-hover:text-white" onClick={() =>
                              setOpenModal(true)}

                            >
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
                                    placeholder="Número de cuenta"
                                    onChange={(event) => setDate(event.target.value)}
                                    value={empleado.id_empleado}
                                    readOnly // Campo de solo lectura para evitar que se modifique
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
                                    placeholder="Nombre del dueño"
                                    onChange={(event) => setDate(event.target.value)}
                                    value={empleado.username}
                                    readOnly
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                  />
                                </div>
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
                                    onChange={(event) => setAmount(event.target.value)}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                  />
                                </div>
                                <div className="w-full">
                                  <button
                                    onClick={() => handleConsign(date)} // Llama a handleConsign sin argumentos
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

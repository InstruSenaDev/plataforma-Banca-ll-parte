import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../../../context/AuthContext";

export const Movimientos = () => {
  //Disable Modales
  const [accountNumber, setAccountNumber] = useState("");
  const [accountOwner, setAccountOwner] = useState("");
  const [amount, setAmount] = useState("");
  const [isAccountNumberFilled, setIsAccountNumberFilled] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const { user, isLoggedIn } = useAuth();
  const [empleadoDetails, setEmpleadoDetails] = useState("");

  // Abrir Modal
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  // Funciones Consignar -----------------------------------------------------------------------------------------------------------------------------
  const handleAccountNumberChange = (event) => {
    const value = event.target.value;
    setAccountNumber(value);
    setIsAccountNumberFilled(value.trim() !== "");
    setIsFormDisabled(value.trim() === "");
  };

  const [dataUser, setDataUser] = useState();

  const handleConsultClick = async () => {
    try {
      const accountNumberInt = parseInt(accountNumber, 10);

      // Realizar la consulta a la base de datos utilizando el número de cuenta convertido
      const response = await fetch(
        `http://localhost:3000/get_account/${accountNumberInt}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      // Verificar si se encontraron datos
      if (data) {
        const { primernombre, primerapellido, segundoapellido } = data;
        const ownerName = `${primernombre} ${primerapellido} ${segundoapellido}`;
        console.log(ownerName);
        setAccountOwner(ownerName);
        setIsFormDisabled(false);
        setDataUser(data);
        console.log(data);
        console.log(accountOwner); // Habilitar el formulario después de obtener los datos
      } else {
        console.log(
          "No se encontraron datos para el número de cuenta proporcionado."
        );
        // Puedes establecer un mensaje de error o realizar otras acciones según sea necesario
      }
    } catch (error) {
      console.error("Error al consultar la base de datos:", error);
      // Puedes establecer un mensaje de error o realizar otras acciones según sea necesario
    }
  };

  console.log(dataUser);

  const handleConsign = async () => {
    const id = dataUser.id_cliente;
    const saldo = dataUser.saldo;
    const idEmpleado = empleadoDetails.id_empleado;
    const saldoEmpleado = empleadoDetails.saldo;

    const newBalanceClient = parseFloat(amount) + parseFloat(saldo);
    const newBalanceEmploye = saldoEmpleado - parseFloat(amount);

    if (saldoEmpleado > 0) {
      try {
        // Realiza una solicitud al servidor para cambiar el estado del cliente con el ID proporcionado
        const responseClient = await fetch(
          `http://localhost:3000/update_balance/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nuevoSaldo: newBalanceClient,
            }),
          }
        );
        if (!responseClient.ok) {
          throw new Error("Network response was not ok");
        }

        const responseEmploye = await fetch(
          `http://localhost:3000/empleado_balance/${idEmpleado}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nuevoSaldo: newBalanceEmploye,
            }),
          }
        );

        if (!responseEmploye.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await responseClient.json();
        console.log(data.message);
        toast.success("Saldo consignado correctamente.");

        // Actualizar el estado del empleado en el componente
        setEmpleadoDetails((prevState) => ({
          ...prevState,
          saldo: newBalanceEmploye,
        }));

        setTimeout(() => {
          // Actualiza localmente el estado del cliente según sea necesario
          // Puedes utilizar la función setDatauser para actualizar el estado local
          // Ejemplo: setDatauser(prevData => [...prevData, data.updatedClient]);
          // alert('Autorización exitosa')
          // Redirige a la página '/DashBoardMenu' después de procesar la respuesta
          window.location = "/DashBoardMenu";
        }, 1500); // 2000 milisegundos = 2 segundos
      } catch (error) {
        console.error("Error general:", error);
      }
    } else {
      toast.error("Sin saldo suficiente");
    }
  };

  // Modal retirar-----------------------------------------------------------------------------------------------------------------------------------------

  //Abir Modal
  const [openModal1, setOpenModal1] = useState(false);
  const [email1, setEmail1] = useState("");

  function onCloseModal1() {
    setOpenModal1(false);
    setEmail1("");
  }

  //Funciones Modal Retirar
  const handleAccountNumberChangeRetirar = async () => {
    const value = event.target.value;
    setAccountNumber(value);
    setIsAccountNumberFilled(value.trim() !== "");
    setIsFormDisabled(value.trim() === "");
  };

  const handleConsultClickRetirar = async () => {
    try {
      const accountNumberInt = parseInt(accountNumber, 10);

      // Realizar la consulta a la base de datos utilizando el número de cuenta convertido
      const response = await fetch(
        `http://localhost:3000/get_account/${accountNumberInt}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      // Verificar si se encontraron datos
      if (data) {
        const { primernombre, primerapellido, segundoapellido } = data;
        const ownerName = `${primernombre} ${primerapellido} ${segundoapellido}`;
        console.log(ownerName);
        setAccountOwner(ownerName);
        setIsFormDisabled(false);
        setDataUser(data);
        console.log(data);
        console.log(accountOwner); // Habilitar el formulario después de obtener los datos
      } else {
        console.log(
          "No se encontraron datos para el número de cuenta proporcionado."
        );
        // Puedes establecer un mensaje de error o realizar otras acciones según sea necesario
      }
    } catch (error) {
      console.error("Error al consultar la base de datos:", error);
      // Puedes establecer un mensaje de error o realizar otras acciones según sea necesario
    }
  };

  const handleRetirar = () => {
    const id = dataUser.id_cliente;
    const saldo = dataUser.saldo;
    const nuevoSaldo = parseFloat(saldo) - parseFloat(amount);

    // Verificar que el nuevo saldo no sea menor que cero

    try {
      // Realiza una solicitud al servidor para cambiar el estado del cliente con el ID proporcionado
      fetch(`http://localhost:3000/update_balance/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nuevoSaldo: nuevoSaldo,
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
          toast.success("Monto retirado correctamente");
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
      toast.error("Error al retirar");
      console.error("Error general:", error);
    }

    console.log(
      `Retirando: ${amount} de la cuenta ${accountNumber} perteneciente a ${accountOwner}`
    );
  };

  useEffect(() => {
    const fetchEmpleado = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/get_users/${user.id_empleado}`
        );
        if (response.ok) {
          const userData = await response.json();
          setEmpleadoDetails(userData);
        } else {
          console.error("Error fetching user info:", response.status);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    if (user) {
      fetchEmpleado();
    }
  }, [user]);

  return (
    <>
      {
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div
              className="flex justify-center items-center flex-col gap-10"
              style={{ minHeight: "85vh" }}
            >
              <span>Seleccione el movimiento que desee realizar</span>
              {empleadoDetails && (
                <div>
                  <h2>Saldo actual: {empleadoDetails.saldo}</h2>
                </div>
              )}
              <div className="flex gap-10">
                <div>
                  <Button
                    className="border-green hover:scale-110 duration-100"
                    onClick={() => setOpenModal(true)}
                  >
                    <div className="flex flex-col items-center justify-center w-32 h-32">
                      <svg
                        className="w-14 text-darkGreen dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v13m0-13 4 4m-4-4-4 4"
                        />
                      </svg>
                      <svg
                        className="w-24 text-green dark:text-white group-hover:text-green"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                          clipRule="evenodd"
                        />
                        <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                      </svg>
                      <span className="font-bold text-xl text-darkGreen">
                        Consignar
                      </span>
                    </div>
                  </Button>
                  <Modal
                    className="bg-black bg-opacity-60 flex justify-center items-center w-screen h-screen p-0"
                    show={openModal}
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
                              Número de cuenta de ahorro:
                            </label>
                          </div>
                          <input
                            id="accountNumber"
                            type="number"
                            placeholder="Número de cuenta"
                            value={accountNumber}
                            onChange={handleAccountNumberChange}
                            required
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                              !isAccountNumberFilled
                                ? "border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                : ""
                            }`}
                          />
                          {isAccountNumberFilled && (
                            <button
                              onClick={() => handleConsultClick()}
                              className={`mt-2 bg-green hover:bg-green hover:scale-105 duration-100 text-white font-bold py-2 px-4 rounded transition-all ${
                                isFormDisabled
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }`}
                              disabled={isFormDisabled}
                            >
                              Consultar
                            </button>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="accountOwner"
                            className="font-medium text-gray-700 dark:text-white"
                          >
                            Nombre del dueño de la cuenta:
                          </label>
                          <input
                            id="accountOwner"
                            type="text"
                            placeholder="Nombre del dueño"
                            value={accountOwner}
                            onChange={(event) =>
                              setAccountOwner(event.target.value)
                            }
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                              isFormDisabled || !isAccountNumberFilled
                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                : "border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                            }`}
                            readOnly
                            disabled={!isAccountNumberFilled}
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
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                              isFormDisabled || !isAccountNumberFilled
                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                : "border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                            }`}
                            disabled={!isAccountNumberFilled}
                          />
                        </div>
                        <div className="w-full">
                          <button
                            onClick={() => handleConsign(dataUser)}
                            className={`w-full bg-green hover:bg-green hover:scale-105 duration-100 text-white font-bold py-2 px-4 rounded transition-all ${
                              isFormDisabled || !isAccountNumberFilled
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            disabled={isFormDisabled || !isAccountNumberFilled}
                          >
                            Enviar
                          </button>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>

                <div>
                  <Button
                    className="border-green hover:scale-110 duration-100"
                    onClick={() => setOpenModal1(true)}
                  >
                    <div className="flex flex-col items-center justify-center w-32 h-32">
                      <svg
                        className="w-24 text-red-600 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                          clipRule="evenodd"
                        />
                        <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                      </svg>
                      <svg
                        className="w-14 text-red-600 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19V5m0 14-4-4m4 4 4-4"
                        />
                      </svg>
                      <span className="font-bold text-xl text-darkGreen ">
                        Retirar
                      </span>
                    </div>
                  </Button>
                  <Modal
                    className="bg-black bg-opacity-60 flex justify-center items-center w-screen h-screen p-0"
                    show={openModal1}
                    size="md"
                    onClose={onCloseModal1}
                    popup
                  >
                    <Modal.Header>
                      <span className="text-xl py-2 pl-4 pr-3 font-medium text-gray-900 dark:text-white">
                        Retirar
                      </span>
                    </Modal.Header>
                    {/* retirar-------------------------------------------------------------------------------------------------- */}
                    <Modal.Body className="px-5 pt-2 pb-5">
                      <div className="space-y-6">
                        <div>
                          <div className="mb-2 block">
                            <label
                              htmlFor="accountNumberRetirar"
                              className="font-medium text-gray-700 dark:text-white"
                            >
                              Número de cuenta de ahorro:
                            </label>
                          </div>
                          <input
                            id="accountNumberRetirar"
                            type="number"
                            placeholder="Número de cuenta"
                            value={accountNumber}
                            onChange={handleAccountNumberChangeRetirar}
                            required
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                              !isAccountNumberFilled
                                ? "border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                : ""
                            }`}
                          />
                          {isAccountNumberFilled && (
                            <button
                              onClick={handleConsultClickRetirar}
                              className={`mt-2 bg-green hover:bg-green hover:scale-105 duration-100 text-white font-bold py-2 px-4 rounded transition-all ${
                                isFormDisabled
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }`}
                              disabled={isFormDisabled}
                            >
                              Consultar
                            </button>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="accountOwnerRetirar"
                            className="font-medium text-gray-700 dark:text-white"
                          >
                            Nombre del dueño de la cuenta:
                          </label>
                          <input
                            id="accountOwnerRetirar"
                            type="text"
                            placeholder="Nombre del dueño"
                            value={accountOwner}
                            onChange={(event) =>
                              setAccountOwner(event.target.value)
                            }
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                              isFormDisabled || !isAccountNumberFilled
                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                : "border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                            }`}
                            readOnly
                            disabled={!isAccountNumberFilled}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="amountRetirar"
                            className="font-medium text-gray-700 dark:text-white"
                          >
                            Monto a retirar:
                          </label>
                          <input
                            id="amountRetirar"
                            type="number"
                            placeholder="Monto a retirar"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                              isFormDisabled || !isAccountNumberFilled
                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                : "border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                            }`}
                            disabled={!isAccountNumberFilled}
                          />
                        </div>
                        <div className="w-full">
                          <button
                            onClick={() => handleRetirar(dataUser)}
                            className={`w-full bg-red-600 hover:bg-red-600 hover:scale-105 duration-100 text-white font-bold py-2 px-4 rounded transition-all ${
                              isFormDisabled || !isAccountNumberFilled
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            disabled={isFormDisabled || !isAccountNumberFilled}
                          >
                            Retirar
                          </button>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

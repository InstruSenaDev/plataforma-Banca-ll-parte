import React, { useState } from 'react';


const ConsgnacionCuentaAhorro = ({ openConsignacion, closeModal }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountOwner, setAccountOwner] = useState("");
  const [amount, setAmount] = useState("");
  const [isAccountNumberFilled, setIsAccountNumberFilled] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const [dataUser, setDataUser] = useState();
  const [idEmpleadoDetails, setIdEmpleadoDetails] = useState("");
  const [empleadoDetails, setEmpleadoDetails] = useState("");
  const [bovedaDetails, setBovedaDetails] = useState("");


  // Funciones Consignar -----------------------------------------------------------------------------------------------------------------------------
  const handleAccountNumberChange = (event) => {
    const value = event.target.value;
    setAccountNumber(value);
    setIsAccountNumberFilled(value.trim() !== "");
    setIsFormDisabled(value.trim() === "");
  };

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
        setAccountOwner(ownerName);
        setIsFormDisabled(false);
        setDataUser(data);
      } else {
        console.log(
          "No se encontraron datos para el número de cuenta proporcionado."
        );

        // Puedes establecer un mensaje de error o realizar otras acciones según sea necesario
      }
    } catch (error) {
      console.error("Error al consultar la base de datos:", error);
      toast.error("Error: Número de cuenta no encontrado.");
      // Puedes establecer un mensaje de error o realizar otras acciones según sea necesario
    }
  };

  const handleConsign = async () => {
    const id = dataUser.id_detalle;
    const { saldo, estado } = dataUser;

    const idEmpleado = idEmpleadoDetails.id_empleado;
    const saldoEmpleado = idEmpleadoDetails.saldo;

    const newBalanceClient = parseFloat(amount) + parseFloat(saldo);
    const newBalanceEmploye = parseFloat(saldoEmpleado) + parseFloat(amount);

    // Verificar que la cuenta este autorizada y que el saldo no sea menor o igual a cero
    if (estado === "Denegado") {
      toast.error("Error: Esta cuenta ha sido rechazada por un Director.");
    } else if (estado === "Pendiente") {
      toast.error("Error: Esta cuenta no ha sido autorizada por un Director.");
      // } else if (parseFloat(amount) > saldoEmpleado) {
      //   toast.error("Error: No tienes saldo suficiente para esta consignación.");
    } else if (parseFloat(amount) <= 0) {
      toast.error("Error: El saldo a consignar no puede ser 0 o menor a 0.");
    } else {
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
          `http://localhost:3000/balance_request/${idEmpleado}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nuevoSaldo: newBalanceEmploye,
              newStatus: "Activo",
              saldoSolicitado: 0,
            }),
          }
        );

        if (!responseEmploye.ok) {
          throw new Error("Network response was not ok");
        }

        const responseMovimiento = await fetch(
          `http://localhost:3000/post_movimiento`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: id,
              idEmpleado: idEmpleado,
              saldo: amount,
              tipoMovimiento: 1,
            }),
          }
        );

        if (!responseMovimiento.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await responseClient.json();
        console.log(data.message);
        toast.success("Saldo consignado correctamente.");

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
    }
  };
  return (
    <>
      {openConsignacion && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="rounded-lg bg-white shadow-sm w-full max-w-md">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center justify-between">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Consignar
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent transition hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeModal}
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
            </div>
            <div className="px-6 space-y-4">
              <div className="flex justify-between flex-col w-full gap-y-2">
                <div className="space-y-2 w-full md:w-auto">
                  <label
                    className="text-sm text-gray-600 font-normal leading-none"
                    htmlFor="accountNumber"
                  >
                    Número de cuenta de ahorro
                  </label>
                  <input
                    id="accountNumber"
                    name="accountNumber"
                    type="number"
                    placeholder="Número de cuenta"
                    value={accountNumber}
                    onChange={handleAccountNumberChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none ${!isAccountNumberFilled
                        ? "border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                        : ""
                      }`}
                  />
                </div>
                {isAccountNumberFilled && (
                  <div className="flex items-center justify-end  ">
                  <button
                    onClick={() => handleConsultClick()}
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-white text-sm font-medium transition-colors bg-emerald-600 hover:bg-emerald-700 h-10 px-6 py-2 ml-auto"
                 ${isFormDisabled
                        ? ""
                        : ""
                      }`}
                    disabled={isFormDisabled}
                  >
                    Consultar
                  </button>
                  </div>
                )}

                <div className="space-y-2 w-full md:w-auto">
                  <label
                    className="text-sm text-gray-600 font-normal leading-none"
                    htmlFor="accountOwner"
                  >
                    Nombre del dueño de la cuenta
                  </label>
                  <input
                    id="accountOwner"
                    type="text"
                    placeholder="Nombre del dueño"

                    value={accountOwner}
                    onChange={(event) =>
                      setAccountOwner(event.target.value)
                    }
                    className={`flex h-10 w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${isFormDisabled || !isAccountNumberFilled
                        ? ""
                        : ""
                      }`}
                    readOnly
                    disabled={!isAccountNumberFilled} />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm text-gray-600 font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="saldo"
                  >
                    Saldo a consignar
                  </label>
                  <input
                    id="saldo"
                    type="number"
                    min="0"
                    step="1000"
                    disabled={!isAccountNumberFilled}
                    placeholder="Ingrese saldo a consignar"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    className={`flex h-10 w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${isFormDisabled || !isAccountNumberFilled
                        ? ""
                        : ""
                      }`} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end p-4 px-4 gap-2">
              <button
              onClick={() => handleConsign(dataUser)}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-white text-sm font-medium transition-colors bg-emerald-600 hover:bg-emerald-700 h-10 px-6 py-2 ml-auto"
                  ${
                isFormDisabled || !isAccountNumberFilled
                  ? ""
                  : ""
              }`}
              disabled={isFormDisabled || !isAccountNumberFilled}
            >
              
                Consignar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsgnacionCuentaAhorro;

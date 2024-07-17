import React, { useState } from "react";
import { toast } from "react-toastify";

export const ModalConsignarCajero = ({
  dataUser,
  openConsing,
  setOpenConsing,
  idEmpleadoDetails,
  setIdEmpleadoDetails,
}) => {
  const [amount, setAmount] = useState("");

  // Función para realizar la consignación
  const handleConsign = async () => {
    const filterEmpleadoPrincipal = dataUser.filter(
      (users) => users.id_rol === 4
    );

    const { id_empleado, saldo } = idEmpleadoDetails;

    // const idPrincipal = filterEmpleadoPrincipal[0].id_empleado;
    const saldoPrincipal = filterEmpleadoPrincipal[0].saldo;

    const newBalanceEmpleado = parseFloat(saldo) + parseFloat(amount);
    const newBalancePrincipal = parseFloat(saldoPrincipal) - parseFloat(amount);

    if (amount <= 0 || isNaN(amount)) {
      return toast.error("El saldo no puede ser menor o igual a 0.");
    } else if (parseFloat(amount) > parseFloat(saldoPrincipal)) {
      return toast.error("El salo no es suficiente.");
    } else {
      try {
        const responseEmpleado = await fetch(
          `http://localhost:3000/empleado_balance/${id_empleado}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nuevoSaldo: newBalanceEmpleado,
              nuevoSaldoCajero: newBalancePrincipal,
            }),
          }
        );

        if (!responseEmpleado.ok) {
          throw new Error("Network response was not ok");
        }

        toast.success("Consignación realizada correctamente.");
        setTimeout(() => {
          window.location = "/DashBoardMenu";
        }, 1500);
      } catch (error) {
        toast.error("Error al realizar la consignación.");
      }
    }
  };

  const closeConsing = () => {
    setIdEmpleadoDetails(null);
    setOpenConsing(false);
  };

  return (
    <>
      {openConsing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="rounded-lg bg-white shadow-sm w-full max-w-md">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center justify-between">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Enviar saldo
                </h3>

                <button
                  type="button"
                  onClick={closeConsing}
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
              <p className="text-sm text-gray-600">
                Ingrese el saldo a consignar para el empleado seleccionado.
              </p>
            </div>
            <div className="px-6 space-y-4">
              <div className="flex justify-between">
                <div className="space-y-2">
                  <label
                    className="text-sm text-gray-600 font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="idEmpleado"
                  >
                    ID Empleado
                  </label>
                  <input
                    id="idEmpleado"
                    type="number"
                    value={idEmpleadoDetails?.id_empleado || ""}
                    disabled
                    className="flex h-10 w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm text-gray-600 font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="username"
                  >
                    Nombre
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={idEmpleadoDetails?.username || ""}
                    disabled
                    className="flex h-10 w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
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
                  placeholder="Ingrese saldo a consignar"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  className="flex h-10 w-full rounded-md border-gray-400 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
            <div className="flex items-center p-6">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-white text-sm font-medium transition-colors bg-emerald-600 hover:bg-emerald-700 h-10 px-6 py-2 ml-auto"
                onClick={handleConsign}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

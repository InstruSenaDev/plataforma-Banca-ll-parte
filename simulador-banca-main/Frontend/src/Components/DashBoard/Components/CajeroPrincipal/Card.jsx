import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../context/AuthContext";
import { toast } from "react-toastify";
import { ModalRetirar } from "./ModalRetirar";

const Card = () => {
  const [idEmpleadoDetails, setIdEmpleadoDetails] = useState("");
  const [empleadoDetails, setEmpleadoDetails] = useState("");
  const [bovedaDetails, setBovedaDetails] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  //Login, user context
  const { user } = useAuth();

  // Funcion para traer un empleado por id.
  const fetchEmpleadoId = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/get_users/${user.id_empleado}`
      );
      if (response.ok) {
        const data = await response.json();
        setIdEmpleadoDetails(data);
      } else {
        console.error("Error fetching user info:", response.status);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  // Funcion para traer todos los empleados.
  const fetchEmpleados = async () => {
    try {
      const response = await fetch("http://localhost:3000/get_users");
      if (response.ok) {
        const data = await response.json();
        setEmpleadoDetails(data);
      } else {
        console.error("Error fetching user info:", response.status);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  // Función para traer información de la bóveda.
  const fetchBoveda = async () => {
    try {
      const response = await fetch("http://localhost:3000/get_boveda");
      if (response.ok) {
        const data = await response.json();
        setBovedaDetails(data);
      } else {
        console.error("Error fetching data info:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data info:", response.status);
    }
  };

  // Función para devolver saldo a la boveda y registrar sus respectivos movimientos
  const devolverBalance = async () => {
    const idEmpleado = idEmpleadoDetails.id_empleado;
    const saldoEmpleado = idEmpleadoDetails.saldo;
    const saldoBoveda = bovedaDetails.saldo_boveda;

    const newBalanceBoveda =
      parseFloat(saldoEmpleado) + parseFloat(saldoBoveda);

    if (saldoEmpleado > 0) {
      try {
        // Realiza una solicitud al servidor para actualizar el saldo del cajero principal
        const responseCajero = await fetch(
          `http://localhost:3000/empleado_balance/${idEmpleado}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nuevoSaldo: 0,
            }),
          }
        );

        if (!responseCajero.ok) {
          throw new Error(
            "Network response was not ok al actualizar el saldo del cajero"
          );
        }

        // Realiza una solicitud al servidor para actualizar el saldo de la boveda y regitrar el movimiento.
        const entradaBoveda = await fetch(
          `http://localhost:3000/entrada_boveda/${idEmpleado}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              entradaSaldo: saldoEmpleado,
              nuevoSaldo: newBalanceBoveda,
            }),
          }
        );

        if (!entradaBoveda.ok) {
          throw new Error(
            "Network response was not ok al actualizar el saldo del cajero"
          );
        }

        console.log("saldo actualizado correctamente");
        toast.success("Saldo devuelto y actualizado correctamente.");

        setTimeout(() => {
          // Actualiza localmente el estado del cliente según sea necesario
          // Puedes utilizar la función setDatauser para actualizar el estado local
          // Ejemplo: setDatauser(prevData => [...prevData, data.updatedClient]);
          // alert('Autorización exitosa')
          // Redirige a la página '/DashBoardMenu' después de procesar la respuesta
          window.location = "/DashBoardMenu";
        }, 1500);
      } catch (error) {
        console.error("Error: ", error);
        toast.error("Error al devolver el saldo.");
      }
    } else {
      toast.error("No tienes saldo para devolver a bóveda.");
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

  // Función para manejar el clic del ícono del ojo
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchEmpleados();
      fetchEmpleadoId();
      fetchBoveda();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto sm:p-0 lg:p-4 xl:p-4">
      <div className="flex flex-wrap gap-4">
        {/* content saldo total */}
        <div className="w-full md:flex-auto md:w-0">
          <div className="flex flex-col bg-DarkSlate p-4 dark:bg-slate-850 dark:shadow-dark-xl rounded-xl bg-clip-border">
            <div className="mb-2 w-12 h-12 bg-white rounded-md p-3 text-center text-green">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold leading-normal uppercase text-white dark:opacity-60">
              Saldo Total
            </p>
            <h5 className="text-3xl sm:text-2xl xl:text-3xl font-bold text-white">
              {formatSaldo(idEmpleadoDetails.saldo)}
            </h5>
          </div>
        </div>

        {/* content saldo boveda */}
        <div className="w-full md:flex-auto md:w-0">
          <div className="flex flex-col bg-darkGray p-4 dark:bg-slate-850 rounded-xl bg-clip-border">
            <div className="mb-2 w-12 h-12 bg-white rounded-md p-3 text-center text-darkGreen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold leading-normal uppercase text-white dark:opacity-60">
              Saldo T. en Bóveda
            </p>
            <div className="flex items-center justify-between">
              <h5 className="text-3xl sm:text-2xl xl:text-3xl font-bold text-white">
                {isVisible ? formatSaldo(bovedaDetails.saldo_boveda) : "****"}
              </h5>
              <div className="text-white sm:flex sm:items-center sm:justify-between">
                <button onClick={toggleVisibility}>
                  {isVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
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
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* content buttons  */}
        <div className="w-full md:flex-auto md:w-0">
          <div className="flex flex-col gap-y-2 h-full">
            <button
              className="flex-auto flex items-center justify-center p-4 gap-x-2 bg-red-600 hover:bg-red-800 transition text-white font-semibold rounded-lg"
              onClick={() => setOpenModal(!openModal)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
                />
              </svg>
              <span>Retirar de Bóveda</span>
            </button>
            <button
              className="flex-auto flex items-center justify-center p-4 gap-x-2 bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold rounded-lg"
              onClick={devolverBalance}
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
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>

              <span>Devolver a Bóveda</span>
            </button>
          </div>
        </div>
      </div>

      <ModalRetirar openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Card;

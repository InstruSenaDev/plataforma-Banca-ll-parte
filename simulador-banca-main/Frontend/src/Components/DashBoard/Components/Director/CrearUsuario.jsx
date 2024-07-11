import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalCreacionU } from "./ModalCreacionU";
import { Button, Modal } from "flowbite-react";
import { data } from "autoprefixer";
import { useAuth } from "../../../../context/AuthContext";
import { ModalConsignarCajero } from "../CajeroPrincipal/ModalConsignarCajero";

export const CrearUsuario = () => {
  const [dataUser, setDataUser] = useState([]);
  const [idEmpleadoDetails, setIdEmpleadoDetails] = useState(null);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  // Abrir Modal
  const [openModal1, setOpenModal] = useState(false);

  const [openConsing, setOpenConsing] = useState(false);
  const [amount, setAmount] = useState("");

  const { user } = useAuth();

  // Funcion para traer todos los empleados.
  const fetchEmpleados = async () => {
    try {
      const response = await fetch("http://localhost:3000/get_users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      if (response.ok) {
        const data = await response.json();
        setDataUser(data.result.rows);
      } else {
        console.error("Error fetching user info:", response.status);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  // Funcion para traer un empleado por id.
  const fetchEmpleadoId = async (idEmpleado) => {
    console.log(idEmpleado);
    try {
      const response = await fetch(
        `http://localhost:3000/get_users/${idEmpleado}`
      );
      if (response.ok) {
        const data = await response.json();
        setIdEmpleadoDetails(data);
        setOpenModal(true);
      } else {
        console.error("Error fetching user info:", response.status);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  // Función para realizar la consignación
  const handleConsign = async (obj) => {
    console.log(obj);
    console.log(obj.id_empleado);
    console.log(obj.username);

    setIdEmpleadoDetails({
      id_empleado: obj.id_empleado,
      username: obj.username,
    });

    console.log("Datos de date:", idEmpleadoDetails);
    console.log("Monto a consignar:", amount);

    // Verificación inicial de datos
    if (!obj || !obj.id_empleado || !obj.username || !amount) {
      console.error("Datos del usuario o monto inválidos.");
      toast.error("Datos del usuario o monto inválidos.");
      return;
    }

    const idEmpleado = idEmpleadoDetails.id_empleado;
    const nombreEmpleado = idEmpleadoDetails.username;
    const saldoEmpleado = parseFloat(idEmpleadoDetails.saldo); // Convierte el saldo a número

    const amountToConsign = parseFloat(amount);

    // Validación del monto a consignar
    if (isNaN(amountToConsign) || amountToConsign <= 0) {
      console.error("Monto a consignar inválido.");
      toast.error("Monto a consignar inválido.");
      return;
    }

    const newBalanceEmpleado = saldoEmpleado + amountToConsign;

    try {
      console.log("Datos a enviar:", {
        idEmpleado,
        nombreEmpleado,
        saldoEmpleado,
        amountToConsign,
        newBalanceEmpleado,
      });

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

  const AddUser = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/add_user", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          password: data.password,
          rol: data.rol,
        }),
      });
      console.log(data);
    } catch (error) {
      console.error("Error al añadir usuario:", error);
    }
  };

  const eliminarUsuario = async (userId) => {
    console.log(userId);
    try {
      const response = await fetch(
        `http://localhost:3000/delete_user/${userId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        toast.error("Usuario eliminado correctamente");
        setTimeout(() => {
          setForceUpdate((prev) => !prev);
        }, 1000);
      } else {
        console.error("Error al eliminar usuario");
        alert("Error al eliminar usuario");
      }
    } catch (error) {
      console.error("Error en el servidor", error);
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

  const countUsers = () => {
    return dataUser.length;
  };

  const openModal = (dataUser) => {
    setModalData(dataUser);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalData(null);
    setShowModal(false);
  };

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  useEffect(() => {
    fetchEmpleadoId();
    fetchEmpleados();
  }, [forceUpdate]);

  return (
    <>
      <section className="container p-4 mx-auto" style={{ minHeight: "87vh" }}>
        <div className="flex justify-between items-center gap-x-3">
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-row items-center gap-x-2">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                Miembros del equipo
              </h2>
              <span className="px-2 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                {countUsers()} users
              </span>
            </div>
            {user?.id_rol === 1 && (
              <>
                <p className="text-sm text-gray-500 m-0 p-0">
                  Información de todos los empleados
                </p>
              </>
            )}

            {user?.id_rol === 4 && (
              <>
                <p className="text-sm text-gray-500 m-0 p-0">
                  Información de todos los cajeros
                </p>
              </>
            )}
          </div>

          {user?.id_rol === 1 && (
            <button
              class="flex gap-x-1 items-center px-4 py-2 font-normal text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green"
              onClick={() => openModal(dataUser)}
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
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>

              <span class="mx-1">Crear usuario</span>
            </button>
          )}
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              {/* Tabla solo para administradores/director */}
              {user?.id_rol === 1 && (
                <>
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-DarkSlate dark:bg-gray-800">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                          >
                            <div className="flex justify-center items-center gap-x-3">
                              <button>
                                <span>ID Empleado</span>
                              </button>
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                          >
                            <div className="flex items-center gap-x-3">
                              <span>Nombre</span>
                            </div>
                          </th>

                          <th
                            scope="col"
                            className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                          >
                            <button className="flex items-center gap-x-2">
                              <span>Estado</span>
                            </button>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                          >
                            <button className="flex items-center gap-x-2">
                              <span>Rol</span>
                            </button>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                          >
                            <button className="flex items-center gap-x-2">
                              <span>Acción</span>
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {dataUser?.map((date) => (
                          <React.Fragment key={date.id_empleado}>
                            <tr>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                  <span># {date.id_empleado}</span>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                  <div className="flex items-center gap-x-2">
                                    <img
                                      className="object-cover w-10 h-10 rounded-full"
                                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                      alt=""
                                    />
                                    <div>
                                      <h2 className="font-medium text-gray-800 dark:text-white ">
                                        {date.username}
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                  <h2 className="text-sm font-normal text-emerald-500">
                                    Activo
                                  </h2>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                {date.id_rol === 1 && <>Director</>}
                                {date.id_rol === 2 && <>Asesor</>}
                                {date.id_rol === 3 && <>Cajero</>}
                                {date.id_rol === 4 && <>Cajero Principal</>}
                              </td>

                              <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">
                                  <button
                                    className="text-gray-500 transition-colors duration-200 dark:hover:text-red dark:text-gray-300 hover:text-red focus:outline-none"
                                    onClick={() =>
                                      eliminarUsuario(date.id_empleado)
                                    }
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-5 h-5"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                      />
                                    </svg>
                                  </button>

                                  <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-5 h-5"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {/* Tabla solo para cajero principal */}
              {user?.id_rol === 4 && (
                <>
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-DarkSlate dark:bg-gray-800">
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                          >
                            <div className="flex justify-center items-center gap-x-3">
                              <button>
                                <span>ID Empleado</span>
                              </button>
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="px-8 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                          >
                            <div className="flex justify-center items-center gap-x-3">
                              <button>
                                <span>Nombre</span>
                              </button>
                            </div>
                          </th>

                          <th
                            scope="col"
                            className="px-8 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                          >
                            <div className="flex justify-center items-center gap-x-2">
                              <button>
                                <span>Estado</span>
                              </button>
                            </div>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                          >
                            <div className="flex justify-center items-center gap-x-2">
                              <button>
                                <span>Rol</span>
                              </button>
                            </div>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                          >
                            <div className="flex justify-center items-center gap-x-2">
                              <button>
                                <span>Saldo</span>
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
                        {dataUser
                          ?.filter((user) => user.id_rol === 3)
                          .map((date) => (
                            <React.Fragment key={date.id_empleado}>
                              <tr>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                  <div className="w-full inline-flex justify-center items-center gap-x-3">
                                    <span># {date.id_empleado}</span>
                                  </div>
                                </td>

                                <td className="px-8 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                  <div className="w-full inline-flex justify-center items-center gap-x-3">
                                    <div className="flex items-center gap-x-2">
                                      <img
                                        className="object-cover w-10 h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                        alt=""
                                      />
                                      <div>
                                        <h2 className="font-medium text-gray-800 dark:text-white ">
                                          {date.username}
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <td className="px-8 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                  <div className="w-full inline-flex justify-center items-center">
                                    <div className="flex justify-center items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                      <h2 className="text-sm font-normal text-emerald-500">
                                        Activo
                                      </h2>
                                    </div>
                                  </div>
                                </td>

                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                  <div className="w-full inline-flex justify-center items-center">
                                    <span>Cajero</span>
                                  </div>
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                  <div className="w-full inline-flex justify-center items-center">
                                    <span>{formatSaldo(date.saldo)}</span>
                                  </div>
                                </td>

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                  <div className="flex justify-center items-center gap-x-6">
                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-emerald-500 dark:text-gray-300 hover:text-emerald-500 focus:outline-none">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className={`w-5 h-5 ${date.id_empleado}`}
                                        onClick={() =>
                                          setOpenConsing(!openConsing)
                                        }
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                                        />
                                      </svg>
                                    </button>
                                    {/* <Modal
                                      className="bg-black bg-opacity-50 flex justify-center items-center w-screen h-screen p-0"
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
                                                htmlFor="idEmpleado"
                                                className="font-medium text-gray-700 dark:text-white"
                                              >
                                                ID de empleado:
                                              </label>
                                            </div>
                                            <input
                                              id="idEmplead"
                                              type="number"
                                              placeholder="ID de empleado"
                                              value={
                                                idEmpleadoDetails?.id_empleado
                                              }
                                              readOnly // Campo de solo lectura para evitar que se modifique
                                              className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                            />
                                          </div>
                                          <div>
                                            <label
                                              htmlFor="username"
                                              className="font-medium text-gray-700 dark:text-white"
                                            >
                                              Nombre del empleado
                                            </label>
                                            <input
                                              id="username"
                                              type="text"
                                              placeholder="Nombre del empleado"
                                              onClick={""}
                                              value={
                                                idEmpleadoDetails?.username
                                              }
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
                                              onChange={(event) =>
                                                setAmount(event.target.value)
                                              }
                                              className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                            />
                                          </div>
                                          <div className="w-full">
                                            <button
                                              onClick={() =>
                                                handleConsign(idEmpleadoDetails)
                                              } // Llama a handleConsign sin argumentos
                                              className="w-full bg-green hover:bg-green hover:scale-105 duration-100 text-white font-bold py-2 px-4 rounded transition-all"
                                            >
                                              Enviar
                                            </button>
                                          </div>
                                        </div>
                                      </Modal.Body>
                                    </Modal> */}
                                  </div>
                                </td>
                              </tr>
                            </React.Fragment>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <ModalCreacionU
          setShowModal={setShowModal}
          data={modalData}
          showModal={showModal}
          closeModal={closeModal}
        />

        <ModalConsignarCajero
          openConsing={openConsing}
          setOpenConsing={setOpenConsing}
        />
      </section>
    </>
  );
};

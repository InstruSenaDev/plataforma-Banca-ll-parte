import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalCreacionU } from "./ModalCreacionU";

export const CrearUsuario = () => {
  const [datauser, setdatauser] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/get_users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setdatauser(data.result.rows);
      } catch (error) {
        console.error("Error al encontrar información");
      }
    };
    fetchData();
  }, [forceUpdate]);

  const abrir = () => {
    setactiveModal((prev) =>
      prev ===
      "absolute overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full sr-only"
        ? "absolute flex items-center overflow-y-auto overflow-x-hidden bg-gray-400 bg-opacity-60 justify-center items-center w- md:inset-0 h-[calc(100%)] max-h-full not-sr-only"
        : "absolute overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full sr-only"
    );
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

  const openModal = (datauser) => {
    setModalData(datauser);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalData(null);
    setShowModal(false);
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

  return (
    <>
      <div
        className="flex justify-center items-center flex-col gap-10"
        style={{ minHeight: "75vh" }}
      >
        <div className="w-3/4 text-black text-4xl flex items-center justify-center font-semibold text-center">
          <p>Creacion de Usuarios</p>
        </div>
        <div className="w-11/12 md:w-8/12 relative overflow-x-auto overflow-y-auto  shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Rol
                </th>
                <th scope="col" className="px-6 py-3">
                  Estado
                </th>
                <th scope="col" className="w-48 px-6 py-3">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {datauser?.map((date) => (
                <React.Fragment key={date.id_empleado}>
                  {date.rol !== 1 && date.rol !== 5 && (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <svg
                          className="w-6 h-6 text-gray-800 dark:text-white"
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
                            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                        <div className="ps-3">
                          <div className="text-base font-semibold">
                            {date.username}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">
                        {date.id_rol === 1 && <>Director</>}
                        {date.id_rol === 2 && <>Asesor</>}
                        {date.id_rol === 3 && <>Cajero</>}
                        {date.id_rol === 4 && <>Cajero Principal</>}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                          Activo
                        </div>
                      </td>
                      <td className="px-6 py-4 flex gap-5 justify-center">
                        <button
                          type="button"
                          onClick={() => openModal(date)}
                          className="hover:bg-gray-200 p-1 rounded-sm"
                        >
                          <svg
                            className="w-6 h-6 text-black dark:text-white"
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
                              d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </button>
                        <button
                          href="#"
                          onClick={() => eliminarUsuario(date.id_empleado)}
                          className="hover:bg-gray-200 p-1 rounded-sm"
                        >
                          <svg
                            className="w-6 h-6 text-red-600 dark:text-white"
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
                              d="M6 18 18 6m0 12L6 6"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <ModalCreacionU
          setShowModal={setShowModal}
          data={modalData}
          showModal={showModal}
          closeModal={closeModal}
        />
      </div>
    </>
  );
};

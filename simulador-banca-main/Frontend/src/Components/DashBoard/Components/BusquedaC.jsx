import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import { BusquedaInfoC } from "./BusquedaInfoC";
import { dateFormatter } from "../../../utils/dateFormatter";

export const BusquedaC = () => {
  const [dataUser, setDataUser] = useState([]);
  const [accounts, setAccounts] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const { user } = useAuth();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/get_search");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setDataUser(data);
    } catch (error) {
      console.error("Error al encontrar información:", error);
    }
  };

  const fetchAccounts = async (id_cliente) => {
    try {
      const response = await fetch(
        `http://localhost:3000/user_accounts/${id_cliente}`
      );
      if (!response.ok) {
        throw new Error(`Network response was not ok for ID ${id_cliente}`);
      }
      const data = await response.json();
      setAccounts((prevAccounts) => ({
        ...prevAccounts,
        [id_cliente]: data,
      }));
    } catch (error) {
      console.error(
        "Error al encontrar información de cuentas bancarias:",
        error
      );
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  // const openAccount = async (id_cliente) => {
  //   const id_empleado = user.id_empleado;
  //   try {
  //     const response = await fetch(
  //       `http://localhost:3000/create_account/${id_cliente}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           idEmpleado: id_empleado,
  //           tipoCuenta: 1,
  //         }),
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     toast.success("Cuenta de ahorros creada correctamente.");
  //     setTimeout(() => {
  //       window.location = "/DashBoardMenu";
  //     }, 1500);
  //   } catch (error) {
  //     console.error("Error general:", error);
  //   }
  // };

  // Filtrar cliente y sus cuentas según la búsqueda por documento.
  const filteredData =
    dataUser?.filter((item) => {
      const hasAccount = accounts[item.id_cliente]?.length > 0; // Verifica si el cliente tiene cuentas
      const isDocumentComplete = searchTerm.trim().length > 0; // Verifica que el término de búsqueda no esté vacío

      // Compara el documento solo si está completo y específico
      return (
        isDocumentComplete &&
        item?.ip_documento === searchTerm.trim() && // Comparación exacta del documento
        hasAccount
      );
    }) || [];

  useEffect(() => {
    // Agregar un retraso de 2 segundos antes de cargar los datos
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 2000); // 2000 milisegundos = 2 segundos

    // Limpiar el timeout si el componente se desmonta antes de que se complete el tiempo
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // Cuando se cargan los usuarios, se obtienen sus cuentas
    dataUser.forEach((user) => {
      fetchAccounts(user.id_cliente);
    });
  }, [dataUser]);

  return (
    <>
      <section className="container p-4 mx-auto" style={{ minHeight: "87vh" }}>
        <div className="flex flex-col justify-center items-between gap-y-6 h-full">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col justify-center items-start">
              <div className="flex flex-row items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                  Gestion de Clientes
                </h2>
              </div>
              <p className="text-sm text-gray-500 m-0 p-0">
                Información y Productos bancarios.
              </p>
            </div>

            <div className="w-80">
              <div className="flex items-center">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mx-3 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Busqueda por documento"
                  className="w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5  focus:border-DarkSlate focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
          </div>

          {searchTerm === "" ? (
            <div className="border-t border-gray-300 text-gray-500 text-center py-5">
              Por favor, ingrese un término de búsqueda.
            </div>
          ) : filteredData.length === 0 ? (
            <div className="border-t border-gray-300 text-gray-500 text-center py-5">
              No se encontraron clientes.
            </div>
          ) : (
            <>
              <div className="border-y border-gray-300 py-5">
                <BusquedaInfoC data={filteredData} />
              </div>

              <div className="flex flex-col">
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
                                  <span>N° Documento</span>
                                </button>
                              </div>
                            </th>

                            <th
                              scope="col"
                              className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                            >
                              <div className="flex justify-center items-center gap-x-3">
                                <button>
                                  <span>Nombre Cliente</span>
                                </button>
                              </div>
                            </th>

                            <th
                              scope="col"
                              className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                            >
                              <div className="flex justify-center items-center gap-x-3">
                                <button>
                                  <span>Productos bancarios</span>
                                </button>
                              </div>
                            </th>

                            <th
                              scope="col"
                              className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                            >
                              <div className="flex justify-center items-center gap-x-3">
                                <button>
                                  <span>Fecha Creación</span>
                                </button>
                              </div>
                            </th>

                            <th
                              scope="col"
                              className="px-4 py-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
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
                          {searchTerm === "" ? (
                            <tr>
                              <td
                                colSpan="5"
                                className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 text-center"
                              >
                                <span>
                                  Por favor, ingrese un término de búsqueda.
                                </span>
                              </td>
                            </tr>
                          ) : filteredData.length === 0 ? (
                            <tr>
                              <td
                                colSpan="5"
                                className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 text-center"
                              >
                                <span>No se encontraron clientes.</span>
                              </td>
                            </tr>
                          ) : (
                            filteredData.map((client) => {
                              const clientAccounts =
                                accounts[client.id_cliente] || [];

                              const filterAccounts = clientAccounts.filter(
                                (acount) => acount.estado === "Autorizado"
                              );

                              const totalAccounts = filterAccounts.length;

                              const creationDate =
                                clientAccounts.length > 0
                                  ? dateFormatter(clientAccounts[0].fecha)
                                  : "No disponible";

                              return (
                                <React.Fragment key={client.id_cliente}>
                                  <tr>
                                    <td className="px-4 py-4 text-sm font-medium text-black dark:text-gray-200 whitespace-nowrap">
                                      <div className="w-full inline-flex justify-center items-center gap-x-3">
                                        <span>{client.ip_documento}</span>
                                      </div>
                                    </td>

                                    <td className="px-4 py-4 text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                                      <div className="w-full inline-flex justify-center items-center gap-x-3">
                                        <span>{client.nombre}</span>
                                      </div>
                                    </td>

                                    <td className="px-4 py-4 text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                                      <div className="w-full inline-flex justify-center items-center gap-x-3">
                                        <span>{totalAccounts}</span>
                                      </div>
                                    </td>

                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                      <div className="w-full inline-flex justify-center items-center gap-x-3">
                                        <span>{creationDate}</span>
                                      </div>
                                    </td>

                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                      <div className="w-full inline-flex justify-center items-center gap-x-3">
                                        <button
                                          onClick={() =>
                                            openUpdate(client.id_cliente)
                                          }
                                          className="text-gray-500 transition-colors duration-200 hover:text-amber-500 focus:outline-none"
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
                                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                            />
                                          </svg>
                                        </button>

                                        <button
                                          onClick={() =>
                                            openAccount(client.id_cliente)
                                          }
                                          className="text-gray-500 transition-colors duration-200 hover:text-emerald-500 focus:outline-none"
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
                                              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                            />
                                          </svg>
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                </React.Fragment>
                              );
                            })
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

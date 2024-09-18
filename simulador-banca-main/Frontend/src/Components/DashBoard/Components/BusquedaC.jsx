import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { ModalBusqueda } from "./ModalBusqueda";
import { toast } from "react-toastify";

export const BusquedaC = () => {
  const [dataUser, setDataUser] = useState([]);
  const [accounts, setAccounts] = useState({}); // Manejo de múltiples clientes
  const [searchTerm, setSearchTerm] = useState("");

  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { user } = useAuth();

  

  // Función para traer información del cliente.
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

  

  // Función para traer las cuentas bancarias en base al id del cliente.
  const fetchAccounts = async (id_cliente) => {
    try {
      const response = await fetch(
        `http://localhost:3000/user_accounts/${id_cliente}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAccounts((prevAccounts) => ({
        ...prevAccounts,
        [id_cliente]: data, // Asocia las cuentas con el id_cliente
      }));
    } catch (error) {
      console.error(
        "Error al encontrar información de cuentas bancarias:",
        error
      );
    }
  };

  const formatFecha = (fecha) => {
    const date = new Date(fecha);
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return new Intl.DateTimeFormat("es-CO", options).format(date);
  };

  // Función para abrir cuenta (ahorro) para el cliente seleccionado.
  const openAccount = async (id_cliente) => {
    const id_empleado = user.id_empleado;
    try {
      const response = await fetch(
        `http://localhost:3000/create_account/${id_cliente}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idEmpleado: id_empleado,
            tipoCuenta: 1,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      toast.success("Cuenta de ahorros creada correctamente.");
      setTimeout(() => {
        window.location = "/DashBoardMenu";
      }, 1500);
    } catch (error) {
      console.error("Error general:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar cliente según la búsqueda por documento.
  const filteredData =
    dataUser?.filter(
      (item) => item?.ip_documento?.includes(searchTerm.trim()) ?? false
    ) || [];

  // Función para abrir modal para actualizar los datos del cliente.
  const openUpdate = (id_cliente) => {
    setShowModal(true);
    setModalData(filteredData.find((data) => data.id_cliente === id_cliente));
  };

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    // Buscar cuentas bancarias para cada cliente filtrado
    filteredData.forEach((client) => {
      fetchAccounts(client.id_cliente);
    });
  }, [filteredData]);

  return (
    <>
      <section className="container p-4 mx-auto" style={{ minHeight: "87vh" }}>
        <div className="flex flex-col justify-center items-between h-full">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col justify-center items-start">
              <div className="flex flex-row items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                  Explorar clientes
                </h2>
              </div>
              <p className="text-sm text-gray-500 m-0 p-0">
                Descubre una variedad de productos bancarios.
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
                              <span>N° Cuenta</span>
                            </button>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div className="flex justify-center items-center gap-x-3">
                            <button>
                              <span>Tipo de cuenta</span>
                            </button>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          <div className="flex justify-center items-center gap-x-3">
                            <button>
                              <span>Saldo</span>
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

                          const totalAccounts = clientAccounts.length;

                          const creationDate =
                            clientAccounts.length > 0
                              ? formatFecha(clientAccounts[0].fecha)
                              : "No disponible";

                          return clientAccounts.map((account) => (
                            <React.Fragment key={account.num_cuenta}>
                              <tr>
                                <td className="px-4 py-4 text-sm font-medium text-black dark:text-gray-200 whitespace-nowrap">
                                  <div className="w-full inline-flex justify-center items-center gap-x-3">
                                    <span>{account.num_cuenta}</span>
                                  </div>
                                </td>

                                <td className="px-4 py-4 text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                                  <div className="w-full inline-flex justify-center items-center gap-x-3">
                                    <span>{account.descripcion}</span>
                                  </div>
                                </td>

                                <td className="px-4 py-4 text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                                  <div className="w-full inline-flex justify-center items-center gap-x-3">
                                    <span>{account.saldo}</span>
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
                                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            </React.Fragment>
                          ));
                        })
                      )}
                    </tbody>
                  </table>
                </div>

                <ModalBusqueda
                  data={modalData}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

import React from "react";

export const SideOriginal = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={Abrir}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <HiOutlineViewList className="h-8 w-5 flex items-center" />
                <span className="sr-only">Open sidebar</span>
              </button>
              <a href="#" className="flex ms-2 md:me-24">
                <img src={Logo} className="h-8 me-3" alt="ClarBankLogo" />
                <span className="">
                  <img src={Namelogo} alt="" className="relative h-4  top-2 " />
                </span>
              </a>
            </div>

            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <div className="flex flex-row items-center  text-sm bg-white rounded-full focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-600">
                      {" "}
                      <p className=" flex items-center text-sm bg-white rounded-full focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-600 ">
                        {user?.username} - {user?.id_rol == 2 && <> Asesor </>}
                        {user?.id_rol == 1 && <> Director </>}
                        {user?.id_rol == 3 && <> Cajero </>}
                        {user?.id_rol == 4 && <> Cajero Principal </>}{" "}
                      </p>
                      <HiUserCircle color="gray" className="w-16 h-10 " />{" "}
                    </div>
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{user?.username}</span>
                    <span className="block truncate text-sm font-medium">
                      {user?.username}@ClarBank.com
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handlelogout}>Salir</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Sidebar className={active} aria-label="Sidebar">
        <div className="fixed left-0 top-1 py-10 h-full px-3 pb-4 w-full  overflow-y-auto bg-green dark:bg-gray-800  ">
          <Sidebar.ItemGroup className="space-y-2 font-medium ">
            <ul className="flex flex-col space-y-1 pl-0 mb-0">
              <button
                className="flex items-center px-4 py-2 font-medium text-darkGray transition-colors duration-300 transform bg-transparent rounded-md hover:bg-darkGray hover:text-white focus:outline-none space-x-2 w-full"
                onClick={() => handleBotonClick("PrincipalPage")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.4}
                  stroke="currentColor"
                  className="size-5 xl:size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                  />
                </svg>

                <span className="mx-1">Inicio</span>
              </button>
            </ul>

            {user?.id_rol == 1 && (
              <>
                <li>
                  <a
                    href="#"
                    onClick={() => handleBotonClick("AutorizacionCuentas")}
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                      <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                      <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Autorización de Cuentas
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleBotonClick("CrearUsuario")}
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1c0-.6.4-1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Creación de Usuarios
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleBotonClick("Reportes")}
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.6 2c.4 0 .8 0 1.1.3L8 3.6l1.3-1.3a1 1 0 0 1 1.4 0L12 3.6l1.3-1.3a1 1 0 0 1 1.4 0L16 3.6l1.3-1.3A1 1 0 0 1 19 3v18a1 1 0 0 1-1.7.7L16 20.4l-1.3 1.3a1 1 0 0 1-1.4 0L12 20.4l-1.3 1.3a1 1 0 0 1-1.4 0L8 20.4l-1.3 1.3A1 1 0 0 1 5 21V3c0-.4.2-.8.6-1ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Reportes Generales
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    onClick={() => handleBotonClick("Historial")}
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Z" />
                      <path
                        fillRule="evenodd"
                        d="M11 7V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm4.7 5.7a1 1 0 0 0-1.4-1.4L11 14.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l4-4Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Historial de Apertura{" "}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleBotonClick("HistorialD")}
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Historial de Denegados
                    </span>
                  </a>
                </li>
              </>
            )}

            {user?.id_rol == 2 && (
              <>
                <Sidebar.Collapse
                  className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-white hover:text-black dark:text-white dark:hover:bg-gray-700"
                  label={
                    <label className="flex  flex-row  relative right-4 items-center ">
                      {" "}
                      <HiShoppingCart
                        color="white || black"
                        className="flex relative right-1 items-center justify-center w-12"
                      />{" "}
                      Apertura de cuentas{" "}
                    </label>
                  }
                >
                  <Sidebar.Collapse
                    label={
                      <label className="flex  flex-row  relative right-4 items-center">
                        {" "}
                        <HiClipboard
                          color="white || black"
                          className="flex relative right-1 items-center justify-center w-12"
                        />{" "}
                        Cuenta de Ahorro{" "}
                      </label>
                    }
                    className="flex items-center w-full p-2 text-base text-white  transition duration-75 rounded-lg group hover:bg-gray-100  hover:text-black dark:text-white dark:hover:bg-gray-700"
                  >
                    <Sidebar.Item
                      onClick={() =>
                        handleBotonClick("FormularioPersonaNatural")
                      }
                      className="flex items-center  relative left-4 w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      {
                        <p className="flex  flex-row  relative right-5 items-center">
                          <HiUser
                            color="white || black"
                            className="flex relative right-1 items-center justify-center w-12"
                          />{" "}
                          Persona Natural
                        </p>
                      }
                    </Sidebar.Item>
                    {/* <Sidebar.Item onClick={() => handleBotonClick('FormularioPersonaJuridica')} className="flex items-center relative left-4  w-full p-2 text-base text-white transition duration-75 rounded-lg group  hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700">{<p className='flex  flex-row  relative right-5 items-center'><HiUserGroup color='white || black' className='flex relative right-1 items-center justify-center w-12' /> Persona Juridica</p>}</Sidebar.Item> */}
                  </Sidebar.Collapse>
                </Sidebar.Collapse>
                <Sidebar.Item
                  onClick={() => handleBotonClick("Busqueda")}
                  className=" flex items-center justify-start p-2 text-white w-full rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {
                    <p className="flex justify-start items-center relative right-5">
                      <HiUser
                        color="white || black"
                        className="flex   items-center justify-start h-5 w-12"
                      />
                      Busqueda de Cuentas
                    </p>
                  }
                </Sidebar.Item>
              </>
            )}

            {user?.id_rol == 3 && (
              <>
                <li>
                  <a
                    href="#"
                    onClick={() => handleBotonClick("Movimientos")}
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="w-6 h-6 text-white dark:text-white group-hover:text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Movimientos
                    </span>
                  </a>
                </li>
              </>
            )}

            {user?.id_rol == 4 && (
              <>
                <ul className="flex flex-col space-y-1 pl-0 mb-0">
                  <button
                    className="flex items-center px-4 py-2 font-medium text-darkGray transition-colors duration-300 transform bg-transparent rounded-md hover:bg-darkGray hover:text-white focus:outline-none space-x-2 text-base"
                    onClick={() => handleBotonClick("Empleados")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.4}
                      stroke="currentColor"
                      className="size-5 xl:size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                      />
                    </svg>

                    <span className="mx-1">Empleados</span>
                  </button>

                  <button className="flex items-center px-4 py-2 font-medium text-darkGray transition-colors duration-300 transform bg-transparent rounded-md hover:bg-darkGray hover:text-white focus:outline-none space-x-2 text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.4}
                      stroke="currentColor"
                      className="size-5 xl:size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>

                    <span className="mx-1">Movimientos</span>
                  </button>

                  <button className="flex items-center px-4 py-2 font-medium text-darkGray transition-colors duration-300 transform bg-transparent rounded-md hover:bg-darkGray hover:text-white focus:outline-none space-x-2 text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.4}
                      stroke="currentColor"
                      className="size-5 xl:size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                      />
                    </svg>

                    <span className="mx-1">Bóveda</span>
                  </button>
                </ul>
              </>
            )}
          </Sidebar.ItemGroup>
        </div>
      </Sidebar>
      <div>
        {contenidoSeleccionado === "FormularioPersonaNatural" && (
          <ContentCuentaAhorroNatural />
        )}
        {contenidoSeleccionado === "FormularioPersonaJuridica" && (
          <ContentCuentaAhorroJuridica />
        )}
        {contenidoSeleccionado === "PrincipalPage" && <PrincipalPage />}
        {contenidoSeleccionado === "NoDisponible" && <No_Disponible />}
        {contenidoSeleccionado === "AutorizacionCuentas" && (
          <AutorizacionCuentas />
        )}
        {contenidoSeleccionado === "CrearUsuario" && <CrearUsuario />}
        {contenidoSeleccionado === "Reportes" && <Reportes />}
        {contenidoSeleccionado === "Historial" && <Historial />}
        {contenidoSeleccionado === "HistorialD" && <HistorialD />}
        {contenidoSeleccionado === "Busqueda" && <BusquedaC />}
        {contenidoSeleccionado === "Movimientos" && <Movimientos />}
        {contenidoSeleccionado === "Empleados" && <Empleados />}
        {/* Renderiza otros contenidos según sea necesario */}
      </div>
    </>
  );
};

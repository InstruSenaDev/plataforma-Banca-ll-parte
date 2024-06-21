import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import Logo from "../assets/Img/Logos/ClarBank LogoOnly.svg";

export const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-beige">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:flex lg:flex-col absolute lg:static z-40 left-0 top-0 lg:translate-x-0 bg-beige h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-80 shrink-0 transition-all duration-200 ease-in-out transform`}
          aria-label="Sidebar"
        >
          <div className="h-full bg-white xl:border-r-2 border-beige">
            {/* Sidebar header */}
            <div className="flex flex-col justify-between h-full">
              {/* Close sidebar (only movil) */}
              <button
                className="lg:hidden text-slate-500 hover:text-slate-400 px-2"
                aria-controls="sidebar"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Close sidebar</span>
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
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </button>

              <div className="flex flex-col justify-between w-full h-full">
                {/* Logo */}
                <NavLink
                  to="/Dashboard"
                  className="flex justify-center items-center h-20 my-6"
                >
                  <img
                    src={Logo}
                    alt="ClarBank"
                    className="inline h-full max-w-full transition-all duration-200"
                  />
                </NavLink>

                <div className="items-center block w-full max-h-screen overflow-auto h-sidenav grow basis-full px-6">
                  <hr class="border-gray-200 dark:border-gray-700 mb-6" />
                  <ul className="flex flex-col space-y-1 pl-0 mb-0">
                    <button className="flex items-center px-4 py-2 font-medium tracking-wide text-darkGray capitalize transition-colors duration-300 transform bg-transparent rounded-md hover:bg-darkGray hover:text-white focus:outline-none space-x-2 w-full xl:text-sm 2xl:text-base">
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

                    <button className="flex items-center px-4 py-2 font-medium tracking-wide text-darkGray capitalize transition-colors duration-300 transform bg-transparent rounded-md hover:bg-darkGray hover:text-white focus:outline-none space-x-2 xl:text-sm 2xl:text-base">
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

                    <button className="flex items-center px-4 py-2 font-medium tracking-wide text-darkGray capitalize transition-colors duration-300 transform bg-transparent rounded-md hover:bg-darkGray hover:text-white focus:outline-none space-x-2 xl:text-sm 2xl:text-base">
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

                    <button className="flex items-center px-4 py-2 font-medium tracking-wide text-darkGray capitalize transition-colors duration-300 transform bg-transparent rounded-md hover:bg-darkGray hover:text-white focus:outline-none space-x-2 xl:text-sm 2xl:text-base">
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
                  <hr class="border-gray-200 dark:border-gray-700 mt-6" />
                </div>

                <div className="mx-4">
                  <div
                    className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border"
                    sidenav-card="true"
                  >
                    <img
                      className="w-1/1 mx-auto"
                      src="/src/assets/Img/UsoVario/Analytics.svg"
                      alt="sidebar illustrations"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-25 z-30 lg:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <header className="bg-white sticky top-0 border-b border-gray">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 -mb-px">
                {/* Header: Left side */}
                <div className="flex">
                  {/* Hamburger button */}
                  <button
                    className="text-slate-500 hover:text-slate-600 lg:hidden"
                    aria-controls="sidebar"
                    onClick={toggleSidebar}
                  >
                    <span className="sr-only">Open sidebar</span>
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
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>

                {/* Botón para configuraciones */}
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <div className="flex flex-row items-center text-sm bg-white rounded-full focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-600 gap-x-3">
                      <div className="flex flex-col my-0">
                        <span className="flex items-center justify-end text-sm font-semibold text-gray-700 dark:text-gray-200">
                          Angelica Cuero
                        </span>
                        <span className="flex items-center justify-end text-sm text-gray-500 dark:text-gray-400">
                          Director
                        </span>
                      </div>
                      <div className="flex items-center gap-x-6">
                        <div class="relative">
                          <img
                            class="object-cover w-10 h-10 rounded-full ring ring-gray-300 dark:ring-gray-600"
                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                            alt=""
                          />
                          <span class="h-2.5 w-2.5 rounded-full bg-emerald absolute right-0 ring-1 ring-white bottom-0"></span>
                        </div>
                      </div>
                    </div>
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">Angelica Cuero</span>

                    <span className="block truncate text-sm font-medium">
                      angelicacb@clarkbank.com
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.4}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                      />
                    </svg>
                    <p className="ml-2">Cerrar Sesión</p>
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main
            className={`p-4 sm:p-6 lg:p-8 transition-opacity duration-200 ${
              sidebarOpen ? "opacity-50" : "opacity-100"
            }`}
          >
            {/* Your main content here */}
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

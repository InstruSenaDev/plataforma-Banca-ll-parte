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
            sidebarOpen ? "block" : "hidden"
          } lg:flex lg:flex-col absolute lg:static z-40 left-0 top-0 lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-80 shrink-0 p-4 transition-all duration-200 ease-in-out`}
          aria-label="Sidebar"
        >
          <div className="bg-white shadow-lg rounded-xl">
            {/* Sidebar header */}
            <div className="flex justify-between mb-10 pr-3 sm:px-2">
              {/* Close sidebar (only movil) */}
              <button
                className="lg:hidden text-slate-500 hover:text-slate-400"
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
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </button>

              {/* Logo */}
              <NavLink to="/Dashboard" className="block h-20">
                <img
                  src={Logo}
                  alt="ClarBank"
                  className="inline h-full max-w-full transition-all duration-200"
                />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <header className="sticky top-0 border-b border-gray">
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
                      <div className="flex flex-col justify-end ps-8 my-0">
                        <p className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-200">
                          Angelica Cuero
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Director
                        </p>
                      </div>
                      <div className="flex items-center gap-x-6">
                        <div className="relative">
                          <img
                            className="object-cover w-10 h-10 rounded-full ring ring-gray-300 dark:ring-gray-600"
                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                            alt=""
                          />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 absolute right-0 ring-1 ring-white bottom-0"></span>
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
          <main className="p-4 sm:p-6 lg:p-8">
            {/* Your main content here */}
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

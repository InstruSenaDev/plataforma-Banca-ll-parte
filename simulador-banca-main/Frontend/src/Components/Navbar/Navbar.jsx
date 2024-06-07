import React from "react";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-5 py-3  transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start">
      <div className="w-full xl:mt-9 mx-auto flex-wrap-inherit">
        <div className="flex items-center justify-between xl:justify-end">
          {/* <div className="flex items-center md:ml-auto md:pr-4">
            {/* Barra de búsqueda
          </div> */}

          {/* Botón para abrir el menú lateral en pantallas pequeñas */}
          <div className="flex items-center xl:hidden">
            <button className="block p-0 text-sm text-gray transition-all ease-nav-brand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.4}
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
                    Cajero Principal
                  </p>
                </div>
                <div class="flex items-center gap-x-6">
                  <div class="relative">
                    <img
                      class="object-cover w-10 h-10 rounded-full ring ring-gray-300 dark:ring-gray-600"
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                      alt=""
                    />
                    <span class="h-2.5 w-2.5 rounded-full bg-emerald-500 absolute right-0 ring-1 ring-white bottom-0"></span>
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
    </nav>
  );
};

export default Navbar;

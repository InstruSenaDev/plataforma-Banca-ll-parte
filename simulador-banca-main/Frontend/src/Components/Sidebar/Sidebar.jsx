import React from "react";
import Logo from "../../assets/Img/Logos/ClarBank LogoOnly.svg";

const Sidebar = () => {
  return (
    <aside
      className="bg-greenlight fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0"
      aria-expanded="false"
    >
      <div className="h-19">
        <i
          className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden"
          sidenav-close
        ></i>
        <a
          className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700"
          href="https://demos.creative-tim.com/argon-dashboard-tailwind/pages/dashboard.html"
          target="_blank"
        >
          <div className="h-20 flex justify-center items-center">
             <img
              src={Logo}
              className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-full"
              alt="main_logo"
            />{" "}
            <img
              src={Logo}
              className="hidden h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand max-h-full"
              alt="main_logo"
            />{" "}
          </div>
        </a>
      </div>

      <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
        <ul className="flex flex-col pl-0 mb-0">
          <li className="mt-0.5 w-full">
            <a
              className="py-2.7 bg-blue-500/13 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
              href="../pages/dashboard.html"
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-blue-500 ni ni-tv-2"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Inicio
              </span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a
              className="py-2.7 bg-blue-500/13 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
              href="../pages/dashboard.html"
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-blue-500 ni ni-tv-2"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Usuarios
              </span>
            </a>
          </li>
          <li className="mt-0.5 w-full">
            <a
              className="py-2.7 bg-blue-500/13 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
              href="../pages/dashboard.html"
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-blue-500 ni ni-tv-2"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Movimientos
              </span>
            </a>
          </li>
          <li className="mt-0.5 w-full">
            <a
              className="py-2.7 bg-blue-500/13 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
              href="../pages/dashboard.html"
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-blue-500 ni ni-tv-2"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Bóveda
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="mx-4">
        <p className="invisible hidden text-gray-800 text-red-500 text-red-600 text-blue-500 dark:bg-white bg-slate-500 bg-gray-500/30 bg-cyan-500/30 bg-emerald-500/30 bg-orange-500/30 bg-red-500/30 after:bg-gradient-to-tl after:from-zinc-800 after:to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 after:from-blue-700 after:to-cyan-500 after:from-orange-500 after:to-yellow-500 after:from-green-600 after:to-lime-400 after:from-red-600 after:to-orange-600 after:from-slate-600 after:to-slate-300 text-emerald-500 text-cyan-500 text-slate-400"></p>
        <div
          className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border"
          sidenav-card
        >
          <img
            className="w-1/1 mx-auto"
            src="/src/assets/Img/UsoVario/Analytics.svg"
            alt="sidebar illustrations"
          />
          <div className="flex-auto w-full p-4 pt-0 text-center">
            <div className="transition-all duration-200 ease-nav-brand">
              <h6 className="mb-0 dark:text-white text-slate-700">
                Need help?
              </h6>
              <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                Please check our docs
              </p>
            </div>
          </div>
        </div>
        <a
          href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/"
          target="_blank"
          className="inline-block w-full px-8 py-2 mb-4 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 hover:shadow-xs hover:-translate-y-px"
        >
          Documentation
        </a>
        <a
          className="inline-block w-full px-8 py-2 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-green border-0 rounded-lg shadow-md select-none bg-150 bg-x-25 hover:shadow-xs hover:-translate-y-px"
          href="https://www.creative-tim.com/product/argon-dashboard-pro-tailwind?ref=sidebarfree"
          target="_blank"
        >
          Upgrade to pro
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;

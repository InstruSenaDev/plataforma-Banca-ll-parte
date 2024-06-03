import React from "react";
import Logo from "../../assets/Img/Logos/ClarBank LogoOnly.svg";
import Avatar from "../../assets/Img/UsoVario/Cristiano.png"; 

const Navbar = () => {
  return (
   
      <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start">
        <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">

          <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
            <div className="flex items-center md:ml-auto md:pr-4">
              {/* Barra de búsqueda */}
           </div>

            {/* Botón para abrir el menú lateral en pantallas pequeñas */}
            <div className="flex items-center pl-4 xl:hidden">
              <button className="block p-0 text-sm text-green transition-all ease-nav-brand">
              <box-icon name='grid-alt'></box-icon>
                <div className="w-4.5 overflow-hidden">
                  <div className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></div>
                  <div className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></div>
                  <div className="ease relative block h-0.5 rounded-sm bg-white transition-all"></div>
                </div>
              </button>
            </div>

            {/* Botón para configuraciones */}
           <div className="flex items-center px-4">
              <div className="flex flex-col">
                <a className="p-0 text-sm text-darkGray transition-all ease-nav-brand">
                  <i className="fa fa-cog"> Angelica Cuero</i>
                </a>
                <a  className="p-0 text-xs text-gray transition-all ease-nav-brand ">
                  <i className="fa fa-cog">Cajero principal</i>
                </a>
              </div>
              <img src={Avatar} alt="Avatar" className="w-10 h-10 rounded-full mr-4" />

            </div>
          </div>
        </div>
      </nav>

  );
};

export default Navbar;

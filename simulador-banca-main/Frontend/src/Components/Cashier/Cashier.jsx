import React from "react";
import LogoOnly from "../../assets/Img/Logos/ClarBank LogoOnly.svg";

export const CajeroPrincipal = () => {
  return (
    <div className="flex">
      <div className="w-1/6 bg-greenlight h-screen">
        <div className="mt-4 mb-8 text-center">
          <img src={LogoOnly} alt="Logo" className="mx-auto h-28" />
        </div>
        <ul className="mt-8">
          <li className="mb-4"><a href="#" className="block px-10 py-2 text-lg font-bold text-darkGreen focus:text-white rounded-md hover:bg-darkGreen hover:text-white hover:mx-4">Inicio</a></li>
          <li className="mb-4"><a href="#" className="block px-10 py-2 text-lg font-bold text-darkGreen focus:text-white rounded-md hover:bg-darkGreen hover:text-white hover:mx-4">Usuarios</a></li>
          <li className="mb-4"><a href="#" className="block px-10 py-2 text-lg font-bold text-darkGreen focus:text-white rounded-md hover:bg-darkGreen hover:text-white hover:mx-4">Movimientos</a></li>
          <li className="mb-4"><a href="#" className="block px-10 py-2 text-lg font-bold text-darkGreen focus:text-white rounded-md hover:bg-darkGreen hover:text-white hover:mx-4">Bóveda</a></li>
        </ul>
      </div>
      <div className="w-5/6 bg-white h-screen">
        {/* Aquí irá el contenido de tu aplicación */}
        <div className="w-full bg-white flex-1">
          <div className="flex justify-between mx-8 mt-8">
            <div className="w-1/2 bg-gray-200 h-32 rounded-lg mr-4">
              {/* Contenido de la primera caja */}
            </div>
            <div className="w-1/2 bg-gray-200 h-32 rounded-lg ml-4">
              {/* Contenido de la segunda caja */}
            </div>
          </div>
        </div>
        <div className="mx-8 mt-8 bg-gray-200 h-32 rounded-lg ">
          {/* Contenido de la tercera caja */}
        </div>
      </div>
    </div>
  );
};

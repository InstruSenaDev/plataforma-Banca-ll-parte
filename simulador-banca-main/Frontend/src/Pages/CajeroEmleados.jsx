import React from 'react'
import Empleados from '../Components/CajeroPrincipal/Empleados'
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";

const CajeroEmleados = () => {
  return (
    <div className="bg-White flex">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl ps ps--active-y">
          <div className="w-full px-6 py-6 mx-auto">
           <Empleados/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default CajeroEmleados

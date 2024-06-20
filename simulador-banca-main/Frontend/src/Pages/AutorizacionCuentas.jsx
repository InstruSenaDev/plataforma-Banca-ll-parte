import React from 'react'
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Director from '../Components/Director/DirectorAutorizaciones';

const AutorizacionCuentas = () => {
  return (
    <div className="flex flex-col xl:flex-row bg-beige h-screen">
      {/* El Sidebar solo se mostrará en dispositivos grandes */}
      <div className="hidden xl:block xl:w-1/6">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow">
        <Navbar />
        <main className="relative flex-grow overflow-auto rounded-xl">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-6 mx-auto">
           
            <Director />
          </div>
        </main>
      </div>
    </div>
  )
}

export default AutorizacionCuentas

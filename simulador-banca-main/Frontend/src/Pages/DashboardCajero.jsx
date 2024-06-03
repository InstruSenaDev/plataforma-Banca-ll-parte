import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Card from "../Components/Card/Card";

const DashboardCajero = () => {
  return (
    <div className="bg-beige flex">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl ps ps--active-y">
          <div className="w-full px-6 py-6 mx-auto">
            <Card />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardCajero;

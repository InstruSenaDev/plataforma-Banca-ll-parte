import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { DashboardMenu } from "./Pages/DashboardMenu";
import { LandingPage } from "./Pages/LandingPage";
import Login from "./Pages/Login";
import { CrearUsuario } from "./Components/DashBoard/Components/Director/CrearUsuario";
import { AutorizacionCuentas } from "./Components/DashBoard/Components/Director/AutorizacionCuentas";
import { ContentCuentaAhorroJuridica } from "./Components/DashBoard/Components/ContentCuentaAhorroJuridica/ContentCuentaAhorroJuridica";
import { LoaderMenu } from "./Components/Loader/LoaderMenu";

import DashboardCajero from "./Pages/DashboardCajero";
import DashboardBoveda from "./Pages/DasboardBoveda";
import CajeroEmleados from "./Pages/CajeroEmleados";
import CajeroMovimientos from "./Pages/CajeroMovientos";
import DashboardPage from "./Pages/DashboardPage";

export default function MyPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simula la carga inicial de la aplicación
  useEffect(() => {
    // Simulación de una carga de datos con un timeout
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {/* Muestra el loader mientras isLoading es true */}
      {isLoading ? (
        <LoaderMenu />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/DashboardMenu" element={<DashboardMenu />} />
          <Route path="/Landing" element={<LandingPage />} />
          <Route path="/CrearUsuario" element={<CrearUsuario />} />
          <Route
            path="/AutorizacionCuentas"
            element={<AutorizacionCuentas />}
          />
          <Route path="/juridica" element={<ContentCuentaAhorroJuridica />} />

          <Route path="/DashboardCajero" element={<DashboardCajero />} />
          <Route path="/CajeroEmpleados" element={<CajeroEmleados />} />
          <Route path="/CajeroMovimientos" element={<CajeroMovimientos />} />
          <Route path="/DashboardBoveda" element={<DashboardBoveda />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
        </Routes>
      )}
    </Router>
  );
}

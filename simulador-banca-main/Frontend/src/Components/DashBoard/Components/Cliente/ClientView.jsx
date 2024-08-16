import React, { useEffect, useState } from "react";

import ChipCard from "../../../../assets/Img/Client/chip.png";
import Logo from "../../../../assets/Img/Logos/ClarBank LogoOnly.svg";
import { ClientMovimientos } from "./ClientMovimientos";
import { AllTarjets } from "./AllTarjets";

export const ClientView = ({
  userData,
  contenidoCliente,
  setContenidoCliente,
}) => {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [loading, setLoading] = useState(true);

  const [allMovimientos, setAllMovimientos] = useState([]);

  const handleSetAllMovimientos = (movimientos) => {
    setAllMovimientos(movimientos);
  };

  // Función para formatear el costo a miles sin decimales.
  const formatSaldo = (saldo) => {
    // Crea una instancia de Intl.NumberFormat con la configuración regional "es-CO" (Colombia)
    const formatter = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });

    // Formatea el costo usando la configuración especificada.
    return formatter.format(saldo);
  };

  useEffect(() => {
    if (userData && userData.length > 0) {
      const storedAccount = localStorage.getItem("selectedAccount");
      if (storedAccount) {
        setSelectedAccount(JSON.parse(storedAccount));
      } else {
        const initialAccount = userData[0];
        setSelectedAccount(initialAccount);
        localStorage.setItem("selectedAccount", JSON.stringify(initialAccount));
      }
      setLoading(false);
    }
  }, [userData]);

  useEffect(() => {
    if (selectedAccount) {
      localStorage.setItem("selectedAccount", JSON.stringify(selectedAccount));
    }
  }, [selectedAccount]);

  return (
    <>
      <section>
        <h1 className="text-2xl font-semibold">Inicio</h1>
        {loading ? (
          <p>Cargando datos...</p>
        ) : (
          <div className="flex flex-row gap-4">
            <div className="w-3/4">
              <ul className="flex flex-col gap-x-4">
                <li>
                  <div className="flex flex-col justify-between md:flex-row items-start gap-6 mx-auto p-4 bg-white rounded">
                    <div className="py-6 px-8 flex flex-col gap-4 w-96 bg-gradient-to-r from-teal-600 to-teal-300 shadow-xl relative rounded-lg">
                      <div>
                        <img src={Logo} alt="ClarkBank" className="h-10" />
                      </div>
                      <div className="flex items-center justify-between gap-5">
                        <div className="text-2xl font-semibold text-white">
                          {selectedAccount.num_cuenta}
                        </div>

                        <img className="h-10" src={ChipCard} alt="" />
                      </div>
                      <div className="flex flex-col items-start justify-center text-muted-foreground text-md text-white">
                        <div>{selectedAccount.descripcion}</div>
                        <div>
                          {selectedAccount.nombre}{" "}
                          {selectedAccount.ip_primerApellido}{" "}
                          {selectedAccount.ip_segundoApellido}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 flex-auto">
                      <div className="bg-card rounded-lg p-6 flex items-center justify-between">
                        <div className="text-muted-foreground text-lg font-medium">
                          Saldo total
                        </div>
                        <div className="text-3xl font-bold">
                          {formatSaldo(selectedAccount.saldo)}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <AllTarjets
                userData={userData}
                contenidoCliente={contenidoCliente}
                onSelectAccount={setSelectedAccount}
              />
            </div>

            <ClientMovimientos
              userData={userData}
              contenidoCliente={contenidoCliente}
              setAllMovimientos={handleSetAllMovimientos}
              setContenidoCliente={setContenidoCliente}
            />
          </div>
        )}
      </section>
    </>
  );
};

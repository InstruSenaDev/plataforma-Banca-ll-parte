import React, { useEffect, useState } from "react";

import ChipCard from "../../../../assets/Img/Client/chip.png";
import Logo from "../../../../assets/Img/Logos/ClarBank LogoOnly.svg";

export const ClientView = ({
  user,
  isLoggedIn,
  userName,
  setUserName,
  userData,
  setUserData,
}) => {
  return (
    <>
      <section>
        <h1 className="text-2xl font-semibold">Inicio</h1>
        <ul className="flex flex-col gap-x-4">
          {userData.map((data) => (
            <li key={data.id_cliente}>
              <div className="flex flex-col justify-between md:flex-row items-start gap-6 mx-auto p-4 bg-white rounded">
                <div className="py-6 px-8 flex flex-col gap-4 w-96 bg-gradient-to-r from-teal-600 to-teal-300 shadow-xl relative rounded-lg">
                  <div>
                    <img src={Logo} alt="ClarkBank" className="h-10" />
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <div className="text-2xl font-semibold text-white">
                      {data.num_cuenta}
                    </div>

                    <img className="h-10" src={ChipCard} alt="" />
                  </div>
                  <div className="flex flex-col items-start justify-center text-muted-foreground text-md text-white">
                    <div>{data.descripcion}</div>
                    <div>
                      {data.nombre} {data.ip_primerapellido}{" "}
                      {data.ip_segundoapellido}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 flex-auto">
                  <div className="bg-card rounded-lg p-6 flex items-center justify-between">
                    <div className="text-muted-foreground text-lg font-medium">
                      Saldo total
                    </div>
                    <div className="text-3xl font-bold">${data.saldo}</div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* <div className="flex flex-col justify-between md:flex-row items-start gap-6 mx-auto p-4 bg-white rounded">
          <div className="py-6 px-8 flex flex-col gap-4 w-full md:w-auto bg-gradient-to-r from-teal-600 to-teal-300 shadow-xl relative rounded-lg">
            <div>
              <img src={Logo} alt="ClarkBank" className="h-10" />
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="text-2xl font-semibold text-white">
                4235 3765 8776 4532
              </div>

              <img className="h-10" src={ChipCard} alt="" />
            </div>
            <div className="flex flex-col items-start justify-center text-muted-foreground text-md text-white">
              <div>Cuenta de Ahorros</div>
              <div>Juan Esteban Molina</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-auto">
            <div className="bg-card rounded-lg p-6 flex items-center justify-between">
              <div className="text-muted-foreground text-lg font-medium">
                Saldo total
              </div>
              <div className="text-3xl font-bold">$ 5,432.00</div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

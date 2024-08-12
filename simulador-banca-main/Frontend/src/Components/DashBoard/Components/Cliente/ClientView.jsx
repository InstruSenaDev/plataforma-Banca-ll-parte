import React, { useEffect, useState } from "react";

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
        <ul className="flex gap-x-4">
          {userData.map((data) => (
            <li key={data.id_cliente}>
              <div className="mt-8 bg-white bg-gradient-to-r from-green to-white h-80 w-128 rounded-xl shadow-xl relative">
                <div className="flip-content">
                  <div
                    className={`text-gray-800 pt-16 flex justify-center text-4xl `}
                  >
                    <p>${data.saldo}</p>
                  </div>
                  <div
                    className={`text-gray-800 mt-24 flex flex-col justify-end items-end px-2 `}
                  >
                    <p>{data.descripcion}</p>
                    <p>{data.num_cuenta}</p>
                    <p className="text-lg">
                      {data.nombre} {data.ip_primerapellido}{" "}
                      {data.ip_segundoapellido}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

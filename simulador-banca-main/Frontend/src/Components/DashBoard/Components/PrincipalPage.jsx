import React from "react";
import PrincipalImage from "../../../assets/Img/UsoVario/Analytics.svg";
import { useAuth } from "../../../context/AuthContext";
import Transfers from "./CajeroPrincipal/Transfers";
import Card from "./CajeroPrincipal/Card";

export const PrincipalPage = () => {
  const { user } = useAuth();

  console.log(user);

  if (user?.id_rol === 4) {
    return (
      <>
        <div
          className="flex justify-start items-center flex-col"
          style={{ minHeight: "87vh" }}
        >
          <div className="w-full flex justify-start items-center mb-2 lg:mb-0 lg:px-4 lg:pt-4">
            <p className="font-semibold text-2xl">
              Bienvenido, {user?.username}
            </p>
          </div>

          <Card />
          <Transfers />
        </div>
      </>
    );
  }

  return (
    <div
      className="flex justify-center items-center flex-col gap-24"
      style={{ minHeight: "87vh" }}
    >
      <p className="font-bold text-4xl">Bienvenido, {user?.username}</p>
      <img className="w-1/3" src={PrincipalImage} alt="" />
    </div>
  );
};

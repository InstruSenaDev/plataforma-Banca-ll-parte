import React from "react";
import PrincipalImage from "../../../assets/Img/UsoVario/Analytics.svg";
import { useAuth } from "../../../context/AuthContext";
import Transfers from "../../Transfers/Transfers";
import Card from "./CajeroPrincipal/Card";

export const PrincipalPage = () => {
  const { user } = useAuth();

  console.log(user);

  if (user?.id_rol === 4) {
    return (
      <>
        <p className="font-semibold text-2xl px-5">Bienvenido, {user?.username}</p>

        <Card />
        <Transfers />
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

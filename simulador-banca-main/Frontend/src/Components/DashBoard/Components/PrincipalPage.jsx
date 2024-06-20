import React from "react";
import PrincipalImage from "../../../assets/Img/UsoVario/Analytics.svg";
import { useAuth } from "../../../context/AuthContext";
export const PrincipalPage = () => {
  const { user } = useAuth();
  return (
    <div
      className="flex justify-center items-center flex-col gap-24"
      style={{ minHeight: "75vh" }}
    >
      <p className="font-bold text-4xl">Bienvenido, {user?.username}</p>
      <img className="w-1/3" src={PrincipalImage} alt="" />
    </div>
  );
};

import React from "react";
import PrincipalImage from "../../../assets/Img/UsoVario/Analytics.svg";
import { useAuth } from "../../../context/AuthContext";
export const PrincipalPage = () => {
  const { user } = useAuth();
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div
          className="flex justify-center items-center flex-col gap-24"
          style={{ minHeight: "85vh" }}
        >
          <p className="font-bold text-5xl">Bienvenido, {user?.name_user}</p>
          <img className="w-1/3" src={PrincipalImage} alt="" />
        </div>
      </div>
    </div>
  );
};

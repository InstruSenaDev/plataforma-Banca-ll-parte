import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalAutorizaciones } from "../ModalAutorizaciones";
import Avatar from "../../../../assets/Img/UsoVario/Cristiano.png";

export const AutorizacionCuentas = () => {


  return (
    <>
      <section className="container p-4 mx-auto" style={{ minHeight: "87vh" }}>
        <div className="flex justify-between items-center gap-x-3">
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-row items-center gap-x-3">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                Historial de Cuentas
              </h2>
              <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                0 accounts
              </span>
            </div>
            <p className="text-sm text-gray-500 m-0 p-0">
              Cuentas autorizadas y denegadas
            </p>
          </div>
          <button
            class="flex gap-x-1 items-center px-3 py-1 font-normal text-white transition-colors duration-300 transform bg-green rounded-lg hover:bg-green"
          >
            <span class="mx-1">Listado de cuentas</span>
          </button>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-DarkSlate dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                      >
                        <div className="flex justify-center items-center gap-x-2">
                          <button>
                            <span>Cliente</span>
                          </button>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                      >
                        <div className="flex justify-center items-center gap-x-2">
                          <button>
                            <span>Cuenta</span>
                          </button>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                      >
                        <div className="flex justify-center items-center gap-x-2">
                          <button>
                            <span>N° Documento</span>
                          </button>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                      >
                        <div className="flex justify-center items-center gap-x-2">
                          <button>
                            <span>Estado</span>
                          </button>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                      >
                        <div className="flex justify-center items-center gap-x-2">
                          <button>
                            <span>Acción</span>
                          </button>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                      >
                        <div className="flex justify-center items-center gap-x-2">
                          <button>
                            <span>Fecha y Hora</span>
                          </button>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div className="w-full inline-flex justify-center items-center gap-x-3">
                          <span>Luna Bedoya</span>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="w-full inline-flex justify-center items-center gap-x-3">
                          <div class="flex items-center gap-x-2">
                            <div>
                              <h2 class="font-medium text-gray-800 dark:text-white ">
                                Cuentas de Ahorros
                              </h2>

                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex flex-col justify-center items-center gap-x-2">
                          <h2 class="font-medium text-gray-800 dark:text-white ">
                            0000000001
                          </h2>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div className="w-full inline-flex justify-center items-center gap-x-3">
                          <span>Pendiente</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="w-full inline-flex justify-center items-center">
                          <div className="flex justify-center items-center py-1 px-2 rounded-lg gap-y-2 bg-emerald-500 dark:bg-gray-800">
                            <button className="px-2 py-1 rounded bg-emerald-500 text-white">
                              <span className="text-sm font-normal">
                                Admitir
                              </span>
                            </button>
                          </div>
                        </div>
                      </td>


                      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div className="w-full inline-flex justify-center items-center gap-x-3">
                          <span>1/06/2024 8:44 a.m</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
import React from "react";
import Logo from "../../assets/Img/Logos/ClarBank LogoOnly.svg";
import Avatar from "../../assets/Img/UsoVario/PERSON.jpg";

const Transfers = () => {
  return (
    <section class="container px-4 mx-auto">
      <div class="sm:flex sm:items-center sm:justify-between">
        <h2 class="text-lg font-medium text-gray-800 dark:text-white">
          Cajeros
        </h2>
      </div>

      <div class="flex flex-col mt-6">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg max-w-3/6">
              <table class="w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-DarkSlate dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                    >
                      <div class="flex items-center gap-x-3">
                        <span>ID</span>
                        <box-icon
                          name="down-arrow-alt"
                          color="#ffffff"
                        ></box-icon>
                      </div>
                    </th>

                    <th
                      scope="col"
                      class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                    >
                      <div class="flex items-center gap-x-3">
                        <span>Nombre </span>
                        <box-icon
                          name="down-arrow-alt"
                          color="#ffffff"
                        ></box-icon>
                      </div>
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                    >
                      <div class="flex items-center gap-x-3">
                        <span> Monto Solicitado </span>
                        <box-icon
                          name="down-arrow-alt"
                          color="#ffffff"
                        ></box-icon>
                      </div>
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                    >
                      <div class="flex items-center gap-x-3">
                        <span> Acción</span>
                        <box-icon
                          name="down-arrow-alt"
                          color="#ffffff"
                        ></box-icon>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  <tr>
                    <td class="w-1/6 px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div class="inline-flex items-center gap-x-3">
                        <div class="flex items-center gap-x-2">
                          <div>
                            <h2 class="font-normal text-gray-800 dark:text-white ">
                              # 00001{" "}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="w-1/6 px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div class="inline-flex items-center gap-x-3">
                        <div class="flex items-center gap-x-2">
                          <div class="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800 overflow-hidden">
                            <img
                              src={Avatar}
                              alt="Avatar"
                              class="w-full h-full object-cover rounded-full"
                            />
                          </div>

                          <div>
                            <h2 class="font-normal text-gray-800 dark:text-white ">
                              Eduardo Dutra{" "}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="w-1/6 px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                      $ 100.000,00
                    </td>
                    <td class="w-1/6 px-4 py-4 text-sm text-DarkSlate dark:text-gray-300 whitespace-nowrap">
                      <div class="flex items-center">
                        <span class="mr-2">Transferir</span>
                        <div class="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                          <box-icon
                            name="right-arrow-alt"
                            size="sm"
                            color="#ffffff"
                            class="text-white"
                          ></box-icon>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-1/6 px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div class="inline-flex items-center gap-x-3">
                        <div class="flex items-center gap-x-2">
                          <div>
                            <h2 class="font-normal text-gray-800 dark:text-white ">
                              # 00001{" "}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="w-1/6 px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div class="inline-flex items-center gap-x-3">
                        <div class="flex items-center gap-x-2">
                          <div class="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800 overflow-hidden">
                            <img
                              src={Avatar}
                              alt="Avatar"
                              class="w-full h-full object-cover rounded-full"
                            />
                          </div>

                          <div>
                            <h2 class="font-normal text-gray-800 dark:text-white ">
                              Eduardo Dutra{" "}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="w-1/6 px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                      $ 100.000,00
                    </td>
                    <td class="w-1/6 px-4 py-4 text-sm text-DarkSlate dark:text-gray-300 whitespace-nowrap">
                      <div class="flex items-center">
                        <span class="mr-2">Depositar</span>
                        <div class="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                          <box-icon
                            name="right-arrow-alt"
                            size="sm"
                            color="#ffffff"
                            class="text-white"
                          ></box-icon>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-1/6 px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div class="inline-flex items-center gap-x-3">
                        <div class="flex items-center gap-x-2">
                          <div>
                            <h2 class="font-normal text-gray-800 dark:text-white ">
                              # 00001{" "}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="w-1/6 px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div class="inline-flex items-center gap-x-3">
                        <div class="flex items-center gap-x-2">
                          <div class="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800 overflow-hidden">
                            <img
                              src={Avatar}
                              alt="Avatar"
                              class="w-full h-full object-cover rounded-full"
                            />
                          </div>

                          <div>
                            <h2 class="font-normal text-gray-800 dark:text-white ">
                              Eduardo Dutra{" "}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="w-1/6 px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                      $ 100.000,00
                    </td>
                    <td class="w-1/6 px-4 py-4 text-sm text-DarkSlate dark:text-gray-300 whitespace-nowrap">
                      <div class="flex items-center">
                        <span class="mr-2">Transferir</span>
                        <div class="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                          <box-icon
                            name="right-arrow-alt"
                            size="sm"
                            color="#ffffff"
                            class="text-white"
                          ></box-icon>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-1/6 px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div class="inline-flex items-center gap-x-3">
                        <div class="flex items-center gap-x-2">
                          <div>
                            <h2 class="font-normal text-gray-800 dark:text-white ">
                              # 00001{" "}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="w-1/6 px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div class="inline-flex items-center gap-x-3">
                        <div class="flex items-center gap-x-2">
                          <div class="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800 overflow-hidden">
                            <img
                              src={Avatar}
                              alt="Avatar"
                              class="w-full h-full object-cover rounded-full"
                            />
                          </div>

                          <div>
                            <h2 class="font-normal text-gray-800 dark:text-white ">
                              Eduardo Dutra{" "}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="w-1/6 px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                      $ 100.000,00
                    </td>
                    <td class="w-1/6 px-4 py-4 text-sm text-DarkSlate dark:text-gray-300 whitespace-nowrap">
                      <div class="flex items-center">
                        <span class="mr-2">Depositar</span>
                        <div class="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                          <box-icon
                            name="right-arrow-alt"
                            size="sm"
                            color="#ffffff"
                            class="text-white"
                          ></box-icon>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-1/6 px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div class="inline-flex items-center gap-x-3">
                        <div class="flex items-center gap-x-2">
                          <div>
                            <h2 class="font-normal text-gray-800 dark:text-white ">
                              # 00001{" "}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="w-1/6 px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div class="inline-flex items-center gap-x-3">
                        <div class="flex items-center gap-x-2">
                          <div class="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800 overflow-hidden">
                            <img
                              src={Avatar}
                              alt="Avatar"
                              class="w-full h-full object-cover rounded-full"
                            />
                          </div>

                          <div>
                            <h2 class="font-normal text-gray-800 dark:text-white ">
                              Eduardo Dutra{" "}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="w-1/6 px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                      $ 100.000,00
                    </td>
                    <td class="w-1/6 px-4 py-4 text-sm text-DarkSlate dark:text-gray-300 whitespace-nowrap">
                      <div class="flex items-center">
                        <span class="mr-2">Transferir</span>
                        <div class="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                          <box-icon
                            name="right-arrow-alt"
                            size="sm"
                            color="#ffffff"
                            class="text-white"
                          ></box-icon>
                        </div>
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
  );
};

export default Transfers;

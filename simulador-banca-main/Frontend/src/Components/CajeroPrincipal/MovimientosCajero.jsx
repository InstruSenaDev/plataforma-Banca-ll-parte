import React from "react";

const MovimientosCajero = () => {
  return (
    <section class="container px-4 mx-auto">
      <div class="sm:flex sm:items-center sm:justify-between">
        <h6 className="mb-2 text-2xl font-bold text-gray">
          Informe individual de movimientos por cajero
        </h6>
        <div className="flex-co flex flex-row text-xs ">
          <span className="bg-green-500 mr-3 overflow-x-auto rounded-lg px-3 py-2 text-left text-white ">
            31/05/2023 2:27Pm
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg max-w-3/6">
              <table className="w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-3xl  ">
                <thead class="text-sm font-normal text-white bg-DarkSlate ">
                  <tr>
                    <th scope="col" class="px-6 py-3 rounded-s-lg">
                    ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                    Nombre
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Acción
                    </th><th scope="col" class="px-6 py-3">
                      Saldo
                    </th><th scope="col" class="px-6 py-3">
                      N° Cuenta
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Cliente
                    </th>
                    <th scope="col" class="px-6 py-3 rounded-e-lg">
                      Fecha Y Hora
                    </th>
                    
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovimientosCajero;

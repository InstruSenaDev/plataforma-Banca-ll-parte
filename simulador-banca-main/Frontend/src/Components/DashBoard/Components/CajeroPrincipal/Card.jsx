import React, { useState } from "react";

const Card = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Función para manejar el clic del ícono del ojo
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="w-full px-6 py-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        {/* row 1 */}
        {/* card1 */}
        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/3">
          <div className=" flex flex-col min-w-0 break-words bg-DarkSlate shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3 items-center">
                <div className="flex-none w-full px-3">
                  <div>
                    <div className="mb-2 w-12 h-12  bg-beige  rounded-md py-3 px-3 text-center  text-green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                        />
                      </svg>
                    </div>
                    <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-white dark:opacity-60">
                      Saldo Total
                    </p>
                    <h5 className="mb-0 text-2xl font-semibold text-white">
                      100,000.00
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card2 */}
        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/3">
          <div className="flex flex-col min-w-0 break-words bg-darkGray shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3 items-center">
                <div className="flex-none w-full px-3">
                  <div>
                    <div className="mb-2 w-12 h-12  bg-beige  rounded-md py-3 px-3 text-center  text-darkGreen">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                        />
                      </svg>
                    </div>
                    <p className="mb-0 font-sans text-sm font-normal leading-normal uppercase text-white dark:opacity-60">
                      Saldo T. en Bóveda
                    </p>
                    <div className="flex items-center justify-between">
                      <h5 className="mb-0 text-2xl font-semibold text-white">
                        {isVisible ? "99.900.00" : "****"}
                      </h5>
                      <div className="text-white sm:flex sm:items-center sm:justify-between">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                          onClick={toggleVisibility}
                          style={{ cursor: "pointer" }}
                        >
                          {isVisible ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          )}
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card3 */}
        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/3">
          <div className="flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border h-full">
            {" "}
            {/* Añadí la clase h-full aquí */}
            <div className="flex-auto p-4 flex flex-col justify-center items-center">
              <div className="flex flex-row -mx-3 items-center">
                <div className="flex-none w-full px-3">
                  {/* Aquí están los botones */}
                  <div className="flex flex-col">
                    <button className="mb-2 gap-3 bg-red hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg w-full flex items-center justify-center">
                      <box-icon name="wallet" color="#ffffff"></box-icon>{" "}
                      Retirar de Bóveda
                    </button>
                    <button className="mb-2 gap-2 bg-DarkSlate hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg w-full flex items-center justify-center">
                      <box-icon name="wallet" color="#ffffff"></box-icon>{" "}
                      Consignar a Bóveda
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

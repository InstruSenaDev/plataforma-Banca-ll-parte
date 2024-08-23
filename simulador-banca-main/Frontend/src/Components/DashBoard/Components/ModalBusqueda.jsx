import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export const ModalBusqueda = ({ showModal, setShowModal, data }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Actualizar el estado local cuando cambia la propiedad data
    setFormData(data);
  }, [data]);

  const onSubmit = (formData) => {
    console.log(formData);
    // Lógica para enviar el formulario
  };

  // Función para manejar cambios en los datos del formulario
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Actualizar los valores de los campos del formulario cuando cambia formData
    if (formData) {
      Object.entries(formData).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [formData, setValue]);

  function mostrarFechaEnFormato(fecha) {
    // Crear un objeto Date con la fecha recibida
    const fechaObjeto = new Date(fecha);

    // Extraer el año, mes y día de la fecha
    const year = fechaObjeto.getFullYear();
    const month = fechaObjeto.getMonth() + 1; // Los meses van de 0 a 11, por lo que sumamos 1
    const day = fechaObjeto.getDate();

    // Formatear el mes y el día como cadenas de dos dígitos
    const monthString = month < 10 ? "0" + month : month.toString();
    const dayString = day < 10 ? "0" + day : day.toString();

    // Construir la cadena de fecha en el formato deseado: "yyyy-mm-dd"
    const fechaFormateada = `${dayString}-${monthString}-${year}`;

    return fechaFormateada;
  }

  // Ejemplo de uso
  const fechaOriginal = "2024-03-14T05:00:00.000Z";
  const fechaFormateada = mostrarFechaEnFormato(fechaOriginal);

  const closeModal = () => {
    setShowModal(false);
  };

  console.log(data);
  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          key={data.id_cliente}
        >
          <div className="relative p-4 w-4/5 h-auto">
            <div className="bg-white rounded-lg">
              <div className="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600">
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm w-4 h-4 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-3 items-center justify-center flex-col bg-white">
                  <h1 className="  w-2/4 text-black text-2xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen">
                    Información del Cliente
                  </h1>
                  <div
                    className="w-12/12 flex justify-center items-center "
                    style={{ minHeight: "55vh" }}
                  >
                    <div className="grid justify-center gap-x-10 gap-y-5 p-5 lg:grid-cols-4">
                      <div>
                        <label className="block text-sm text-gray-500">
                          Nombre Completo:
                        </label>
                        <input
                          type="text"
                          {...register("Nombre", {
                            pattern: {
                              value: /^[A-Za-z ]+$/i,
                              message: "Digita solo letras",
                            },
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                            minLength: {
                              value: 3,
                              message: "Minimo 3 letras",
                            },
                            maxLength: {
                              value: 20,
                              message: "Maximo 20 letras",
                            },
                          })}
                          name="Nombre"
                          defaultValue={data.nombre} // Utiliza defaultValue para el valor inicial
                          value={formData?.nombre} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({ ...formData, nombre: e.target.value })
                          }
                          // className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.Nombre && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.Nombre.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Primer Apellido
                        </label>
                        <input
                          type="text"
                          {...register("Apellido1", {
                            pattern: {
                              value: /^[A-Za-z]+$/i,
                              message: "Digita solo letras",
                            },
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                            minLength: {
                              value: 3,
                              message: "Minimo 3 letras",
                            },
                            maxLength: {
                              value: 15,
                              message: "Maximo 15 letras",
                            },
                          })}
                          name="Apellido1"
                          defaultValue={data.primerapellido} // Utiliza defaultValue para el valor inicial
                          value={formData?.primerapellido} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              primerapellido: e.target.value,
                            })
                          }
                          id={data.nombre}
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.Apellido1 && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.Apellido1.message}
                            </span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm text-gray-500">
                          Segundo Apellido
                        </label>
                        <input
                          type="text"
                          {...register("Apellido2", {
                            pattern: {
                              value: /^[A-Za-z]+$/i,
                              message: "Digita solo letras",
                            },
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                            minLength: {
                              value: 3,
                              message: "Minimo 3 letras",
                            },
                            maxLength: {
                              value: 15,
                              message: "Maximo 15 letras",
                            },
                          })}
                          name="Apellido2"
                          defaultValue={data.segundoapellido} // Utiliza defaultValue para el valor inicial
                          value={formData?.segundoapellido} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              segundoapellido: e.target.value,
                            })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.Apellido2 && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.Apellido2.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="opciones"
                          className="block text-sm text-gray-500"
                        >
                          Tipo de documento:
                        </label>
                        <select
                          id="opciones"
                          {...register("opciones1", {
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                          })}
                          name="opciones1"
                          defaultValue={data.tipodocumento} // Utiliza defaultValue para el valor inicial
                          value={formData?.tipodocumento} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              tipodocumento: e.target.value,
                            })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        >
                          <option Value="">Seleccionar</option>
                          <option Value="CC">C.C.</option>
                          <option Value="TI">T.I.</option>
                          <option Value="RCivil">R. Civil</option>
                          <option Value="CE">Cédula extranjería</option>
                          <option Value="PP">Pasaporte</option>
                          <option Value="CD">Carné diplomático</option>
                        </select>
                        {errors.opciones1 && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.opciones1.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          N° de documento
                        </label>
                        <input
                          type="number"
                          {...register("NDocumento", {
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                            minLength: {
                              value: 6,
                              message: "Minimo 6 numeros",
                            },
                            maxLength: {
                              value: 10,
                              message: "Maximo 10 numeros",
                            },
                          })}
                          pattern="[0-9]*"
                          name="NDocumento"
                          defaultValue={data.ip_documento} // Utiliza defaultValue para el valor inicial
                          value={formData?.ip_documento} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              ip_documento: e.target.value,
                            })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.NDocumento && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.NDocumento.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Lugar de expedición
                        </label>
                        <input
                          type="text"
                          {...register("LugarE", {
                            pattern: {
                              value: /^[A-Za-z]+$/i,
                              message: "Digita solo letras",
                            },
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                            minLength: {
                              value: 3,
                              message: "Minimo 3 letras",
                            },
                            maxLength: {
                              value: 20,
                              message: "Maximo 15 letras",
                            },
                          })}
                          name="LugarE"
                          defaultValue={data.ciudadnacimiento} // Utiliza defaultValue para el valor inicial
                          value={formData?.ciudadnacimiento} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              ciudadnacimiento: e.target.value,
                            })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.LugarE && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.LugarE.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Fecha de expedición
                        </label>
                        <input
                          type="date"
                          {...register("FechaE", {
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                          })}
                          name="FechaE"
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.FechaE && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.FechaE.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Fecha de nacimiento
                        </label>
                        <input
                          type="date"
                          {...register("FechaN", {
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                          })}
                          name="FechaN"
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.FechaN && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.FechaN.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Ciudad de nacimiento
                        </label>
                        <input
                          type="text"
                          {...register("CiudadN", {
                            pattern: {
                              value: /^[A-Za-z]+$/i,
                              message: "Digita solo letras",
                            },
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                            minLength: {
                              value: 3,
                              message: "Minimo 3 letras",
                            },
                            maxLength: {
                              value: 20,
                              message: "Maximo 20 letras",
                            },
                          })}
                          name="CiudadN"
                          defaultValue={data.ciudadnacimiento} // Utiliza defaultValue para el valor inicial
                          value={formData?.ciudadnacimiento} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              ciudadnacimiento: e.target.value,
                            })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.CiudadN && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.CiudadN.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="opciones"
                          className="block text-sm text-gray-500"
                        >
                          Genero:
                        </label>
                        <select
                          id="opciones"
                          {...register("opciones2", {
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                          })}
                          name="opciones2"
                          defaultValue={data.gen} // Utiliza defaultValue para el valor inicial
                          value={formData?.gen} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({ ...formData, gen: e.target.value })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        >
                          <option Value="">Seleccionar</option>
                          <option Value="F">Femenino</option>
                          <option Value="M">Masculino</option>
                        </select>
                        {errors.opciones2 && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.opciones2.message}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="opciones"
                          className="block text-sm text-gray-500"
                        >
                          Estado Civil:
                        </label>
                        <select
                          id="opciones"
                          {...register("opciones3", {
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                          })}
                          name="opciones3"
                          defaultValue={data.estadocivil} // Utiliza defaultValue para el valor inicial
                          value={formData?.estadocivil} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              estadocivil: e.target.value,
                            })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        >
                          <option Value="">Seleccionar</option>
                          <option Value="Soltero">Soltero</option>
                          <option Value="Casado">Casado</option>
                          <option Value="UL">Unión libre</option>
                        </select>
                        {errors.opciones3 && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.opciones3.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Nacionalidad
                        </label>
                        <input
                          type="text"
                          {...register("Nacionalidad", {
                            pattern: {
                              value: /^[A-Za-z]+$/i,
                              message: "Digita solo letras",
                            },
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                            minLength: {
                              value: 3,
                              message: "Minimo 3 letras",
                            },
                            maxLength: {
                              value: 15,
                              message: "Maximo 15 letras",
                            },
                          })}
                          name="Nacionalidad"
                          defaultValue={data.nacionalidad} // Utiliza defaultValue para el valor inicial
                          value={formData?.nacionalidad} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              nacionalidad: e.target.value,
                            })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.Nacionalidad && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.Nacionalidad.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Dirección residencia
                        </label>
                        <input
                          type="text"
                          {...register("DireccionR", {
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                            minLength: {
                              value: 3,
                              message: "Minimo 3 digitos",
                            },
                            maxLength: {
                              value: 30,
                              message: "Maximo 30 digitos",
                            },
                          })}
                          name="DireccionR"
                          defaultValue={data.direccion} // Utiliza defaultValue para el valor inicial
                          value={formData?.direccion} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              direccion: e.target.value,
                            })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.DireccionR && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.DireccionR.message}
                            </span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm text-gray-500">
                          Barrio
                        </label>
                        <input
                          type="text"
                          {...register("Barrio", {
                            pattern: {
                              value: /^[A-Za-z ]+$/i,
                              message: "Digita solo letras",
                            },
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                            minLength: {
                              value: 3,
                              message: "Minimo 3 letras",
                            },
                            maxLength: {
                              value: 15,
                              message: "Maximo 15 letras",
                            },
                          })}
                          name="Barrio"
                          defaultValue={data.barrio} // Utiliza defaultValue para el valor inicial
                          value={formData?.barrio} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({ ...formData, barrio: e.target.value })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.Barrio && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.Barrio.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Ciudad/Municipio
                        </label>
                        <input
                          type="text"
                          {...register("Municipio", {
                            pattern: {
                              value: /^[A-Za-z]+$/i,
                              message: "Digita solo letras",
                            },
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                            minLength: {
                              value: 3,
                              message: "Minimo 3 letras",
                            },
                            maxLength: {
                              value: 20,
                              message: "Maximo 20 letras",
                            },
                          })}
                          name="Municipio"
                          defaultValue={data.ciudad} // Utiliza defaultValue para el valor inicial
                          value={formData?.ciudad} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({ ...formData, ciudad: e.target.value })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.Municipio && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.Municipio.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Departamento
                        </label>
                        <input
                          type="text"
                          {...register("Departamento", {
                            pattern: {
                              value: /^[A-Za-z]+$/i,
                              message: "Digita solo letras",
                            },
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                            minLength: {
                              value: 3,
                              message: "Minimo 3 letras",
                            },
                            maxLength: {
                              value: 15,
                              message: "Maximo 15 letras",
                            },
                          })}
                          name="Departamento"
                          defaultValue={data.depa} // Utiliza defaultValue para el valor inicial
                          value={formData?.depa} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({ ...formData, depa: e.target.value })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.Departamento && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.Departamento.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          País
                        </label>
                        <input
                          type="text"
                          {...register("Pais", {
                            pattern: {
                              value: /^[A-Za-z]+$/i,
                              message: "Digita solo letras",
                            },
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                            minLength: {
                              value: 3,
                              message: "Minimo 3 letras",
                            },
                            maxLength: {
                              value: 20,
                              message: "Maximo 20 letras",
                            },
                          })}
                          name="Pais"
                          defaultValue={data.pais} // Utiliza defaultValue para el valor inicial
                          value={formData?.pais} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({ ...formData, pais: e.target.value })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.Pais && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.Pais.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Teléfono
                        </label>
                        <input
                          type="number"
                          {...register("Telefono", {
                            minLength: {
                              value: 10,
                              message: "Minimo 10 Numeros",
                            },
                            maxLength: {
                              value: 13,
                              message: "Maximo 13 Numeros",
                            },
                          })}
                          pattern="[0-9]*"
                          name="Telefono"
                          defaultValue={data.telefono} // Utiliza defaultValue para el valor inicial
                          value={formData?.telefono} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              telefono: e.target.value,
                            })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.Telefono && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.Telefono.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Celular
                        </label>
                        <input
                          type="number"
                          {...register("Celular", {
                            required: {
                              value: true,
                            },
                            minLength: {
                              value: 10,
                              message: "Minimo 10 Numeros",
                            },
                            maxLength: {
                              value: 13,
                              message: "Maximo 13 Numeros",
                            },
                          })}
                          pattern="[0-9]*"
                          name="Celular"
                          defaultValue={data.celular} // Utiliza defaultValue para el valor inicial
                          value={formData?.celular} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              celular: e.target.value,
                            })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.Celular && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.Celular.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Correo electrónico
                        </label>
                        <input
                          type="email"
                          required
                          {...register("CorreoE")}
                          name="CorreoE"
                          defaultValue={data.correo} // Utiliza defaultValue para el valor inicial
                          value={formData?.correo} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({ ...formData, correo: e.target.value })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Profesión
                        </label>
                        <input
                          type="text"
                          {...register("Profesion", {
                            pattern: {
                              value: /^[A-Za-z]+$/i,
                              message: "Digita solo letras",
                            },
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                            minLength: {
                              value: 3,
                              message: "Minimo 3 letras",
                            },
                            maxLength: {
                              value: 15,
                              message: "Maximo 15 letras",
                            },
                          })}
                          name="Profesion"
                          defaultValue={data.profesion} // Utiliza defaultValue para el valor inicial
                          value={formData?.profesion} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              profesion: e.target.value,
                            })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.Profesion && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.Profesion.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="opciones"
                          className="block text-sm text-gray-500"
                        >
                          Ocupación/Oficio:
                        </label>
                        <select
                          id="opciones"
                          {...register("opciones4", {
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                          })}
                          defaultValue={data.ocupacion} // Utiliza defaultValue para el valor inicial
                          value={formData?.ocupacion} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              ocupacion: e.target.value,
                            })
                          }
                          name="opciones4"
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        >
                          <option Value="">Seleccionar</option>
                          <option Value="Empleado">Empleado</option>
                          <option Value="Pensionado">Pensionado</option>
                          <option Value="Ama de casa">Ama de casa</option>
                          <option Value="Estudiante">Estudiante</option>
                          <option Value="Ganadero">Ganadero</option>
                          <option Value="Comerciante">Comerciante</option>
                          <option Value="Agricultor">Agricultor</option>
                          <option Value="RC">Rentista de capital</option>
                          <option Value="Independiente">Independiente</option>
                          <option Value="DSI">Desempleado sin ingresos</option>
                          <option Value="DCI">Desempleado con ingresos</option>
                          <option Value="PI">Profesional independiente</option>
                          <option Value="SOE">Socio o Empleado-socio</option>
                        </select>
                        {errors.opciones4 && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.opciones4.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Actividad económica principal
                        </label>
                        <input
                          type="text"
                          {...register("ActiEcoP", {
                            pattern: {
                              value: /^[A-Za-z]+$/i,
                              message: "Digita solo letras",
                            },
                            minLength: {
                              value: 3,
                              message: "Minimo 3 letras",
                            },
                            maxLength: {
                              value: 15,
                              message: "Maximo 15 letras",
                            },
                          })}
                          name="ActiEcoP"
                          defaultValue={data.actividad} // Utiliza defaultValue para el valor inicial
                          value={formData?.actividad} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              actividad: e.target.value,
                            })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.ActiEcoP && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.ActiEcoP.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Ingresos mensuales
                        </label>
                        <input
                          type="number"
                          {...register("IngresosM", {
                            minLength: {
                              value: 1,
                              message: "Minimo 1 numeros",
                            },
                            maxLength: {
                              value: 8,
                              message: "Maximo 8 numeros",
                            },
                          })}
                          pattern="[0-9]*"
                          name="IngresosM"
                          defaultValue={data.ingresosmensuales} // Utiliza defaultValue para el valor inicial
                          value={formData?.ingresosmensuales} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              ingresosmensuales: e.target.value,
                            })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.IngresosM && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.IngresosM.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500">
                          Otros ingresos mensuales
                        </label>
                        <input
                          type="number"
                          {...register("OIngresosM", {
                            minLength: {
                              value: 1,
                              message: "Minimo 1 numeros",
                            },
                            maxLength: {
                              value: 8,
                              message: "Maximo 8 numeros",
                            },
                          })}
                          pattern="[0-9]*"
                          name="OIngresosM"
                          defaultValue={data.otrosingresos} // Utiliza defaultValue para el valor inicial
                          value={formData?.otrosingresos} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              otrosingresos: e.target.value,
                            })
                          }
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        />
                        {errors.OIngresosM && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.OIngresosM.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="opciones"
                          className="block text-sm text-gray-500"
                        >
                          ¿Es declarante de renta?:
                        </label>
                        <select
                          id="opciones"
                          {...register("opciones5", {
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                          })}
                          defaultValue={data.renta} // Utiliza defaultValue para el valor inicial
                          value={formData?.renta} // Utiliza value para el valor actual del campo controlado
                          onChange={(e) =>
                            setFormData({ ...formData, renta: e.target.value })
                          }
                          name="opciones5"
                          className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-40  dark:focus:border-emerald-300"
                        >
                          <option Value="">Seleccionar</option>
                          <option Value="Si">Si</option>
                          <option Value="No">No</option>
                        </select>
                        {errors.opciones5 && (
                          <div className="flex justify-start items-center text-red-500 gap-2 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>

                            <span className="text-sm">
                              {errors.opciones5.message}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end items-center gap-4 p-4">
                  <button className="bg-red-500 text-white text-sm py-1.5 px-4 rounded">
                    Cancelar
                  </button>
                  <button className="bg-emerald-600 text-white text-sm py-1.5 px-4 rounded">
                    Actualizar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

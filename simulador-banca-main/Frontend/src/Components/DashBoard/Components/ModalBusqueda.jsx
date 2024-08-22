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
          class="fixed inset-0 flex items-center justify-center z-50"
          key={data.id_cliente}
        >
          <div class="relative p-4 w-auto h-auto">
            <div class="bg-white rounded-lg">
              <div class="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600">
                <button
                  type="button"
                  onClick={closeModal}
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-4 h-4 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    class="w-3 h-3"
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
                  <span class="sr-only">Close modal</span>
                </button>
              </div>

              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-3 items-center justify-center flex-col bg-white    ">
                  <h1 className="  w-2/4 text-black text-2xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen">
                    Información del Cliente
                  </h1>
                  <div
                    className="w-12/12   flex justify-center items-center "
                    style={{ minHeight: "55vh" }}
                  >
                    <div className="grid  justify-center gap-6 p-5 lg:grid-cols-4">
                      <div>
                        <p>Nombre Completo:</p>
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
                          class="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.Nombre && (
                          <span className="text-red-600 flex items-end">
                            {errors.Nombre.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>Primer Apellido</p>
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
                          class="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.Apellido1 && (
                          <span className="text-red-600 flex items-end">
                            {errors.Apellido1.message}
                          </span>
                        )}
                      </div>

                      <div>
                        <p>Segundo Apellido</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.Apellido2 && (
                          <span className="text-red-600 flex items-end">
                            {errors.Apellido2.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="opciones"
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2"
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
                          <span className="text-red-600 flex items-end">
                            {errors.opciones1.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>N° de documento</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.NDocumento && (
                          <span className="text-red-600 flex items-end">
                            {errors.NDocumento.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>Lugar de expedición</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.LugarE && (
                          <span className="text-red-600 flex items-end">
                            {errors.LugarE.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>Fecha de expedición</p>
                        <input
                          type="date"
                          {...register("FechaE", {
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                          })}
                          name="FechaE"
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52"
                        />
                        {errors.FechaE && (
                          <span className="text-red-600 flex items-end">
                            {errors.FechaE.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>Fecha de nacimiento</p>
                        <input
                          type="date"
                          {...register("FechaN", {
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                          })}
                          name="FechaN"
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52"
                        />
                        {errors.FechaN && (
                          <span className="text-red-600 flex items-end">
                            {errors.FechaN.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>Ciudad de nacimiento</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.CiudadN && (
                          <span className="text-red-600 flex items-end">
                            {errors.CiudadN.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="opciones" className="mr-2">
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
                          className="p-2 rounded border-gray-300 focus:ring-green focus:border-green w-52"
                        >
                          <option Value="">Seleccionar</option>
                          <option Value="F">Femenino</option>
                          <option Value="M">Masculino</option>
                        </select>
                        {errors.opciones2 && (
                          <span className="text-red-600 flex items-end">
                            {errors.opciones2.message}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="opciones" className="mr-2">
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
                          className="p-2 rounded border-gray-300 focus:ring-green focus:border-green w-52"
                        >
                          <option Value="">Seleccionar</option>
                          <option Value="Soltero">Soltero</option>
                          <option Value="Casado">Casado</option>
                          <option Value="UL">Unión libre</option>
                        </select>
                        {errors.opciones3 && (
                          <span className="text-red-600 flex items-end">
                            {errors.opciones3.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>Nacionalidad</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.Nacionalidad && (
                          <span className="text-red-600 flex items-end">
                            {errors.Nacionalidad.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>Dirección residencia</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.DireccionR && (
                          <span className="text-red-600 flex items-end">
                            {errors.DireccionR.message}
                          </span>
                        )}
                      </div>

                      <div>
                        <p>Barrio</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.Barrio && (
                          <span className="text-red-600 flex items-end">
                            {errors.Barrio.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>Ciudad/Municipio</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.Municipio && (
                          <span className="text-red-600 flex items-end">
                            {errors.Municipio.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>Departamento</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.Departamento && (
                          <span className="text-red-600 flex items-end">
                            {errors.Departamento.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>País</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.Pais && (
                          <span className="text-red-600 flex items-end">
                            {errors.Pais.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>Teléfono</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.Telefono && (
                          <span className="text-red-600 flex items-end">
                            {errors.Telefono.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>Celular</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.Celular && (
                          <span className="text-red-600 flex items-end">
                            {errors.Celular.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>Correo electrónico</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green w-auto lg:w-72"
                        />
                      </div>
                      <div className="flex flex-col w-52 justify-end">
                        <p>Profesión</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.Profesion && (
                          <span className="text-red-600 flex items-end">
                            {errors.Profesion.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col w-52 justify-end">
                        <label htmlFor="opciones">Ocupación/Oficio:</label>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
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
                          <span className="text-red-600 flex items-end">
                            {errors.opciones4.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col justify-end">
                        <p>Actividad económica principal</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.ActiEcoP && (
                          <span className="text-red-600 flex items-end">
                            {errors.ActiEcoP.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>Ingresos mensuales</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.IngresosM && (
                          <span className="text-red-600 flex items-end">
                            {errors.IngresosM.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <p>Otros ingresos mensuales</p>
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green"
                        />
                        {errors.OIngresosM && (
                          <span className="text-red-600 flex items-end">
                            {errors.OIngresosM.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="opciones" className="mr-2">
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
                          className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2"
                        >
                          <option Value="">Seleccionar</option>
                          <option Value="Si">Si</option>
                          <option Value="No">No</option>
                        </select>
                        {errors.opciones5 && (
                          <span className="text-red-600 flex items-end">
                            {errors.opciones5.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

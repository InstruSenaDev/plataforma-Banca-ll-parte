import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalAutorizaciones } from "../ModalAutorizaciones";
import Avatar from "../../../../assets/Img/UsoVario/Cristiano.png";

export const AutorizacionCuentas = () => {
  const [dataUser, setDataUser] = useState([]);
  const [modalData, setModalData] = useState(null); // Para almacenar los datos del modal
  const [showModal, setShowModal] = useState(false);
  const estado = dataUser.map((user) => user.estado_cliente == "Pendiente");

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await fetch("http://localhost:3000/waiting");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDataUser(data.result.rows);
        console.log(data.result.rows[0]);
      } catch (error) {
        console.error("error al encontrar informacion");
      }
    };
    fecthData();
  }, []);

  const autorizar = (id) => {
    console.log(id);
    try {
      // Realiza una solicitud al servidor para cambiar el estado del cliente con el ID proporcionado
      fetch(`http://localhost:3000/client_status/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nuevoEstado: "Autorizado",
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.message);
          toast.success("Autorizado");
          setTimeout(() => {
            // Actualiza localmente el estado del cliente según sea necesario
            // Puedes utilizar la función setdataUser para actualizar el estado local
            // Ejemplo: setdataUser(prevData => [...prevData, data.updatedClient]);
            // alert('Autorización exitosa')
            // Redirige a la página '/DashBoardMenu' después de procesar la respuesta
            window.location = "/DashBoardMenu";
          }, 1500); // 2000 milisegundos = 2 segundos
        })
        .catch((error) => {
          console.error("Error al cambiar el estado del cliente:", error);
        });
    } catch (error) {
      console.error("Error general:", error);
    }
  };

  const denegar = (id) => {
    try {
      // Realiza una solicitud al servidor para cambiar el estado del cliente con el ID proporcionado
      fetch(`http://localhost:3000/client_status/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nuevoEstado: "Denegado",
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.message);
          toast.error("denegado");
          setTimeout(() => {
            // Actualiza localmente el estado del cliente según sea necesario
            // Puedes utilizar la función setdataUser para actualizar el estado local
            // Ejemplo: setdataUser(prevData => [...prevData, data.updatedClient]);
            // alert('Autorización exitosa')
            // Redirige a la página '/DashBoardMenu' después de procesar la respuesta
            window.location = "/DashBoardMenu";
          }, 1500); // 2000 milisegundos = 2 segundos
        })
        .catch((error) => {
          console.error("Error al cambiar el estado del cliente:", error);
        });
    } catch (error) {
      console.error("Error general:", error);
    }
  };

  const countAccount = () => {
    return dataUser.length;
  };

  const openModal = (dataUser) => {
    setModalData(dataUser);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalData(null); // Limpiar modalData
    setShowModal(false);
  };
  const Movimientos = [
    {
      id: "#00001",
      nombre: "Eduardo Dutra",
      accion: "Consignación",
      saldo: "$100.000",
      NCuenta: "10000000001",
      cliente:"Luna",
      fecha: "1/06/2024",
      documento: "110911639",
    },
    {
      id: "#00002",
      nombre: "Eduardo Dutra",
      accion: "Consignación",
      saldo: "$100.000",
      NCuenta: "10000000001",
      cliente:"Luna",
      fecha: "1/06/2024",
      documento: "110911639",

    },
    
  ];

  return (
    <section class="container px-4 mx-auto">
    <div class="sm:flex sm:items-center sm:justify-between">
      <h6 className="mb-2 text-2xl font-bold text-black">
      Historial de cuentas
            </h6>
      <div className="flex-co flex flex-row text-xs ">
        <span className="bg-green-500 mr-3 overflow-x-auto rounded-lg px-3 py-2 text-left text-white ">
        Listado de Cuentas
                </span>
      </div>
    </div>
    <div className="flex flex-col mt-6">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-3 lg:px-5">
          <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg max-w-3/6">
            <table className="w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-3xl border-separate border-spacing-y-1">
            <thead className="text-sm font-normal text-white bg-DarkSlate">
  <tr>
    <th scope="col" className="px-6 py-3 rounded-s-lg">
      <div className="flex items-center gap-x-3">
        <span>Nº Documento</span>
        <box-icon name="down-arrow-alt" color="#ffffff"></box-icon>
      </div>
    </th>
    <th scope="col" className="px-6 py-3">
      <div className="flex items-center gap-x-3">
        <span>Cliente</span>
        <box-icon name="down-arrow-alt" color="#ffffff"></box-icon>
      </div>
    </th>
    <th scope="col" className="px-6 py-3">
      <div className="flex items-center gap-x-3">
        <span>Fecha</span>
        <box-icon name="down-arrow-alt" color="#ffffff"></box-icon>
      </div>
    </th>
    <th scope="col" className="px-6 py-3">
      <div className="flex items-center gap-x-3">
        <span>Producto Bancario</span>
        <box-icon name="down-arrow-alt" color="#ffffff"></box-icon>
      </div>
    </th>
    <th scope="col" className="px-6 py-3">
      <div className="flex items-center gap-x-3">
        <span>N° Cuenta</span>
        <box-icon name="down-arrow-alt" color="#ffffff"></box-icon>
      </div>
    </th>
    <th scope="col" className="px-6 py-3">
      <div className="flex items-center gap-x-4">
        <span>Estado</span>
        <box-icon name="down-arrow-alt" color="#ffffff"></box-icon>
      </div>
    </th>
  </tr>
</thead>

<tbody className="bg-lightgreen">
  {Movimientos.map((cajero) => (
    <tr
      key={cajero.id}
      className="shadow hover:shadow-md transition duration-200 py-3 bg-clip-border mb-1"
    >
      <td className="w-1/6 px-5 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <div>
              <h2 className="font-normal text-gray-800">{cajero.documento}</h2>
            </div>
          </div>
        </div>
      </td>
      <td className="w-1/6 px-3 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <div className="flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full dark:bg-gray-800 overflow-hidden">
              <img
                src={Avatar}
                alt="Avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div>
              <h2 className="font-normal text-gray-800 dark:text-white">{cajero.nombre}</h2>
            </div>
          </div>
        </div>
      </td>
      <td className="w-1/6 px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2 bg-green-500 mr-2 overflow-x-auto rounded-3xl px-1 py-1">
            <div>
              <button className="font-light text-white">{cajero.accion}</button>
            </div>
          </div>
        </div>
      </td>
      <td className="w-1/6 px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <div>
              <h2 className="font-normal text-gray-800">{cajero.saldo}</h2>
            </div>
          </div>
        </div>
      </td>
      <td className="w-1/6 px-5 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <div>
              <h2 className="font-normal text-gray-800">{cajero.NCuenta}</h2>
            </div>
          </div>
        </div>
      </td>
      <td className="w-1/6 px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <div>
              <h2 className="font-normal text-gray-800">{cajero.cliente}</h2>
            </div>
          </div>
        </div>
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};
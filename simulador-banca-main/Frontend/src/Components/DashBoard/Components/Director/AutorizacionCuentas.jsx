import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalAutorizaciones } from '../ModalAutorizaciones';

export const AutorizacionCuentas = () => {




    const [datauser, setdatauser] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await fetch('https://simulador-banca.onrender.com/getclienteP');
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json();
                setdatauser(data.result.rows)
                console.log(data.result.rows[0])

            } catch (error) {
                console.error('error al encontrar informacion')
            }
        };
        fecthData(); 
    }, []);

    const estado = datauser.map(user => user.estadocliente == 'Pendiente')

 
    
 


    const autorizar = (id) => {
        console.log(id);
        try {
            // Realiza una solicitud al servidor para cambiar el estado del cliente con el ID proporcionado
            fetch(`https://simulador-banca.onrender.com/Estado/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nuevoEstado: 'Autorizado',
                })
            })

                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data.message);
                    toast.success("Autorizado")
                    setTimeout(() => {
                        // Actualiza localmente el estado del cliente según sea necesario
                        // Puedes utilizar la función setDatauser para actualizar el estado local
                        // Ejemplo: setDatauser(prevData => [...prevData, data.updatedClient]);
                        // alert('Autorización exitosa')
                        // Redirige a la página '/DashBoardMenu' después de procesar la respuesta
                        window.location = "/DashBoardMenu";
                    }, 1500); // 2000 milisegundos = 2 segundos

                })
                .catch(error => {
                    console.error('Error al cambiar el estado del cliente:', error);
                });

        } catch (error) {
            console.error('Error general:', error);
        }
    };


    
    const [modalData, setModalData] = useState(null); // Para almacenar los datos del modal
    const [showModal, setShowModal] = useState(false);

    const denegar = (id) => {
        
        try {
            // Realiza una solicitud al servidor para cambiar el estado del cliente con el ID proporcionado
            fetch(`https://simulador-banca.onrender.com/Estado/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nuevoEstado: 'Denegado',
                })
            })

                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data.message);
                    toast.error("denegado")
                    setTimeout(() => {
                        // Actualiza localmente el estado del cliente según sea necesario
                        // Puedes utilizar la función setDatauser para actualizar el estado local
                        // Ejemplo: setDatauser(prevData => [...prevData, data.updatedClient]);
                        // alert('Autorización exitosa')
                        // Redirige a la página '/DashBoardMenu' después de procesar la respuesta
                        window.location = "/DashBoardMenu";
                    }, 1500); // 2000 milisegundos = 2 segundos

                })
                .catch(error => {
                    console.error('Error al cambiar el estado del cliente:', error);
                });

        } catch (error) {
            console.error('Error general:', error);
        }} 

    const openModal = (datauser) => {
        setModalData(datauser);
        setShowModal(true);
    };

    const closeModal = () => {
        setModalData(null); // Limpiar modalData
        setShowModal(false);
    };

    return (
        <>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div className='flex justify-center items-center flex-col gap-10' style={{ minHeight: '85vh' }}>
                        <div className='w-3/4 text-black text-4xl flex items-center justify-center font-semibold text-center'>
                            <p>Autorización de Cuentas</p>
                        </div>
                        <div className="w-8/12 relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">


                                <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Nombre de Cliente
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Producto bancario
                                        </th>

                                        <th scope="col" className="px-6 py-3">
                                            N° Cuenta
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Estado

                                        </th>
                                        <th scope="col" className="w-48 px-6 py-3">
                                            Acción
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {datauser?.map((data) => (


                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={data.id_cliente}>

                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {data.nombre}
                                            </th>

                                            <td className="px-6 py-4">
                                                {data.producto}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.n_cuenta}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.estadocliente}

                                            </td>
                                            <td class="px-6 py-4 flex gap-5 justify-center">
                                                
                                                <button onClick={()=> openModal(data)} href="#" class='hover:bg-gray-200 p-1 rounded-sm'>
                                                    <svg class="w-6 h-6 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6m0 12L6 6" />
                                                    </svg>
                                                </button>

                                                <button onClick={() => autorizar(data.id_cliente)} href="#" class='hover:bg-gray-200 p-1 rounded-sm'>
                                                    <svg class="w-6 h-6 text-neutralGreen dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4.7 4.5 9.3-9" />
                                                    </svg>
                                                </button>

                                            </td>
                                        </tr>



                                    )
                                    )}
                                </tbody>
                            </table>
                        </div>
<ModalAutorizaciones   data={modalData} closeModal={closeModal} showModal={showModal}  />

                    </div>
                </div>
            </div>
        </>
    )
}

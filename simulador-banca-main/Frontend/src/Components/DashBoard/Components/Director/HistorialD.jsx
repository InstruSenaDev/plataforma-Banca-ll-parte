import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HistorialD = () => {
    const [datauser, setdatauser] = useState([]);



    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await fetch('https://simulador-banca.onrender.com/getclienteD');
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

    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
   

   
  

    const handleFechaInicioChange = (event) => {
        const inputDate = event.target.value;
        if (inputDate) {
            const [year, month, day] = inputDate.split('-');
            const fechaSeleccionada = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
            setFechaInicio(fechaSeleccionada);
            
        } else {
            setFechaInicio('');
        }
    };

    const handleFechaFinChange = (event) => {
        const inputDate = event.target.value;
        if (inputDate) {
            const [year, month, day] = inputDate.split('-');
            const fechaSeleccionada = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
            setFechaFin(fechaSeleccionada);
        } else {
            setFechaFin('');
        }
    };
    
    const dataFiltrados = datauser.filter((data) => {
        const fechaData = new Date(data.fecha).getTime();
        const fechaInicioTime = fechaInicio ? new Date(fechaInicio).getTime() : 0;
        const fechaFinTime = fechaFin ? new Date(fechaFin).getTime() : Number.MAX_SAFE_INTEGER;
        
        const fechaMatch = fechaData >= fechaInicioTime && fechaData <= fechaFinTime;
        return  fechaMatch;
    });



    console.log(dataFiltrados)

    function mostrarFechaEnFormato(fecha) {
        // Crear un objeto Date con la fecha recibida
        const fechaObjeto = new Date(fecha);
      
        // Extraer el año, mes y día de la fecha
        const year = fechaObjeto.getFullYear();
        const month = fechaObjeto.getMonth() + 1; // Los meses van de 0 a 11, por lo que sumamos 1
        const day = fechaObjeto.getDate();
      
        // Formatear el mes y el día como cadenas de dos dígitos
        const monthString = month < 10 ? '0' + month : month.toString();
        const dayString = day < 10 ? '0' + day : day.toString();
      
        // Construir la cadena de fecha en el formato deseado: "yyyy-mm-dd"
        const fechaFormateada = `${dayString}-${monthString}-${year}`;
      
        return fechaFormateada;
      }
      
      // Ejemplo de uso
      const fechaOriginal = "2024-03-14T05:00:00.000Z";
      const fechaFormateada = mostrarFechaEnFormato(fechaOriginal);




    return (

        <>

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div className=' flex justify-center items-center flex-col gap-10' style={{ minHeight: '85vh' }}>





                        <div className='w-3/4 text-black text-4xl flex items-center justify-center font-semibold text-center'>
                            <p>Historial de Denegados</p>
                        </div>
                            <div className='flex flex-row justify-evenly items-center max-[500px]:flex-col max-[500px]:justify-center max-[500px]:items-center '>

                                <input type="date" className='rounded-md border-gray-300 focus:ring-green focus:border-green w-52' defaultValue={fechaInicio} onChange={handleFechaInicioChange} />
                                <input type="date" className='rounded-md border-gray-300 focus:ring-green focus:border-green w-52' defaultValue={fechaFin} onChange={handleFechaFinChange} />
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

                                    </tr>
                                </thead>
                                <tbody>
                                    {dataFiltrados?.map((data) => (


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

                                        </tr>



                                    )
                                    )}
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

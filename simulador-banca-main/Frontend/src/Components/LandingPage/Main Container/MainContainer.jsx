import React from "react";
import FrontImage from "../../../assets/Img/Main_Image.svg";
import nomina from "../../../assets/Img/Carousel/nomina.png";
import ahorro from "../../../assets/Img/Carousel/cuenta-ahorros.png";
import credito from "../../../assets/Img/Carousel/credito.png";

export const MainContainer = () => {
  return (
    <>
      <div className="Products-card flex flex-wrap items-center justify-center md:justify-between p-5 bg-white mx-4 md:mx-12 lg:mx-20 xl:mx-32 my-5 rounded shadow-md">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
          <div className="p-5 h-auto md:h-96 w-full md:w-60">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cuentas Nómina
              </h5>
            </a>
            <img
              src={nomina}
              alt="Cuentas Nómina"
              className="w-20 mx-auto md:mx-0"
            />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center md:text-left">
              ¡Descubre el poder de una cuenta de nómina diseñada para
              simplificar tu vida financiera! En un mundo lleno de opciones,
              ¿por qué conformarse con lo común cuando puedes experimentar la
              excelencia con nuestros servicios de cuenta de nómina?
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
          <div className="p-5 h-auto md:h-96 w-full md:w-64">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Créditos
              </h5>
            </a>
            <img
              src={credito}
              alt="Créditos"
              className="w-20 mx-auto md:mx-0"
            />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center md:text-left">
              ¡Desata tu potencial financiero con nuestros servicios de créditos
              a medida! En la travesía hacia tus metas, no dejes que las
              barreras financieras te detengan. Con nuestro exclusivo servicio
              de créditos, te ofrecemos una llave hacia oportunidades
              ilimitadas.
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
          <div className="p-5 h-auto md:h-96 w-full md:w-64">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cuentas de Ahorros
              </h5>
            </a>
            <img
              src={ahorro}
              alt="Cuentas de Ahorros"
              className="w-20 mx-auto md:mx-0"
            />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center md:text-left">
              Entra en un mundo de estabilidad financiera y crecimiento con
              nuestra cuenta de ahorros. ¿Te has preguntado alguna vez cómo
              sería tener un respaldo financiero sólido para tus proyectos
              futuros? Con nuestra cuenta de ahorros, estás a un paso de
              lograrlo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";

export const Pagination = ({
  movementsPage,
  movementsTotal,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(movementsTotal / movementsPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecifyPage = (numberPage) => {
    setCurrentPage(numberPage);
  };

  return (
    <div className="w-full mt-6">
      <div className="flex justify-center items-center">
        <button
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-1 capitalize bg-white rounded-md dark:bg-gray-800 dark:text-gray-600 ${
            currentPage === 1
              ? "cursor-not-allowed text-gray-500"
              : "text-gray-700 hover:text-white hover:bg-blue-500"
          }`}
          onClick={onPreviousPage}
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>

            <span className="mx-1">Regresar</span>
          </div>
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onSpecifyPage(page)}
            className={`hidden px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200
                ${
                  page === currentPage
                    ? "bg-DarkSlate text-white"
                    : "bg-white text-gray-700"
                }`}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentPage >= pageNumbers.length}
          className={`px-4 py-2 mx-1 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-blue-500 dark:hover:text-gray-200 ${
            currentPage >= pageNumbers.length
              ? "cursor-not-allowed text-gray-500"
              : "text-gray-700 hover:text-white hover:bg-blue-500"
          }`}
          onClick={onNextPage}
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Siguiente</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

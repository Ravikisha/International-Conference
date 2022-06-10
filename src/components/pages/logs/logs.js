import React from "react";

const Logs = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="container">
          <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Version<span className="text-indigo-600">1.0.0</span>
              </h2>
              <h3 className="text-2xl md:text-3xl mt-10">
                <span className="text-gray-300 text-l">Developed By - </span>
                <span className="text-gray-900 text-4xl font-bold">Ravi Kishan</span>
              </h3>
              <p className="text-md md:text-xl mt-10">
                Date: <span className="text-gray-900 text-2xl">2020-06-10</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logs;

import React from "react";

const Schedule = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="container">
          <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Conference<span className="text-indigo-600">Schedule</span>
              </h2>
              <h3 className="text-xl md:text-3xl mt-10">Updates Soon</h3>
              <p className="text-md md:text-xl mt-10">
                <a className="hover:underline" href="https://www.quicktoolz.com">
                  PIMGICON
                </a>{" "}
                is a one of the biggest international Conference across the
                India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;

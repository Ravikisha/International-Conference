import React from "react";

const themeCard = (props) => {
  return (
    <>
      <div className="w-full h-auto md:w-1/3 px-2 mb-4">
        <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
          <p className="text-gray-500 text-xl my-auto font-bold md:text-xl md:my-2 px-6">
            {props.title}{" "}
          </p>
          <p className="text-gray-800 text-base px-6 mb-5">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};
export default themeCard;

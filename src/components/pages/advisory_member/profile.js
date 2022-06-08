import React from "react";

const Profile = (props) => {
  return (
    <>
      <article className="overflow-hidden rounded-lg shadow-lg bg-slate-800">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src={props.image}
          />

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <div className="no-underline hover:underline text-white text-2xl font-bold">
                {props.title}
            </div>
          </h1>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <div
            className="flex items-center no-underline hover:underline text-black"
          >
            <p className="text-sky-500 text-sm font-bold">{props.position}</p>
          </div>
        </footer>
      </article>
    </>
  );
};

export default Profile;

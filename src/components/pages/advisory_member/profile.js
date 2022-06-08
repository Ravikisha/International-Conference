import React from "react";

const Profile = (props) => {
  return (
    <>
      {/* <section className="m-2 font-sans bg-slate-800 leading-normal flex">
        <div className="max-w-lg shadow-lg rounded overflow-hidden m-4 sm:flex">
          <div
            className="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: `url(${props.image})` }}
          ></div>

          <div className="px-6 py-4">
            <h2 className="mb-2 text-lg text-white font-bold text-3xl">{props.title}</h2>
            <p className="mb-4 text-sky-500 text-sm">
              {props.position}
            </p>
          </div>
        </div>
      </section> */}
      <article class="overflow-hidden rounded-lg shadow-lg bg-slate-800">
          <img
            alt="Placeholder"
            class="block h-auto w-full"
            src={props.image}
          />

        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 class="text-lg">
            <div class="no-underline hover:underline text-white text-2xl font-bold">
                {props.title}
            </div>
          </h1>
        </header>

        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
          <div
            class="flex items-center no-underline hover:underline text-black"
          >
            <p class="text-sky-500 text-sm font-bold">{props.position}</p>
          </div>
        </footer>
      </article>
    </>
  );
};

export default Profile;

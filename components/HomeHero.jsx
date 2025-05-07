import React from "react";

const HomeHero = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-red-950">
      <div className="text-center lg:w-2/3 w-full">
        <div className="flex gap-5 w-[200px] items-center mb-10 justify-center mx-auto">
          <img
            className="object-cover object-center w-[200px] h-[150px]"
            alt="hero"
            src="/assets/img/chivas-regal-logo.png"
          />
        </div>
        <h1 className="font-serif sm:text-4xl text-3xl mb-10 font-bold text-[#f9f9f9]">
          Welcome to the live match prediction contest
        </h1>
        <div className="flex justify-center gap-5">
          <button className="font-serif font-mediun inline-flex text-white bg-gray-950 border-0 py-4 px-6 focus:outline-none hover:bg-red-800 rounded-lg text-md transition duration-500">
            <a href="/games">
              VIEW ALL GAMES
            </a>
          </button>
          <button className="ml-4 font-serif font-mediun inline-flex text-white bg-red-800 border-0 py-4 px-6 focus:outline-none hover:bg-gray-950 rounded-lg text-md transition duration-500">
            <a href="/auth">START PLAYING</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

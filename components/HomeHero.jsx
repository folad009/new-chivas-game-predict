import React from "react";

const HomeHero = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-red-950 px-4 py-10">
      <div className="text-center lg:w-2/3 w-full">
        <div className="flex gap-5 w-40 sm:w-[200px] items-center mb-8 sm:mb-10 justify-center mx-auto">
          <img
            className="object-cover object-center w-full"
            alt="hero"
            src="/assets/img/chivas-regal-logo-white.png"
          />
        </div>
        <h1 className="font-serif text-2xl sm:text-4xl mb-8 sm:mb-10 font-bold text-[#f9f9f9] leading-tight">
          Welcome to the live match prediction contest
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5">
          <button className="w-full sm:w-auto font-serif font-medium inline-flex text-white bg-gray-950 border-0 py-2.5 sm:py-3 px-5 focus:outline-none hover:bg-red-800 rounded-lg text-sm sm:text-base transition duration-500 justify-center">
            <a href="/games">
              VIEW ALL GAMES
            </a>
          </button>
          <button className="w-full sm:w-auto sm:ml-0 font-serif font-medium inline-flex text-white bg-red-800 border-0 py-2.5 sm:py-3 px-5 focus:outline-none hover:bg-gray-950 rounded-lg text-sm sm:text-base transition duration-500 justify-center">
            <a href="/auth">START PLAYING</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

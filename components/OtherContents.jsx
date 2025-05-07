import React from "react";

const OtherContents = () => {
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/img/chivas-regal-12-brands.webp')",
      }}
    >
      <div className="text-center px-4 sm:hidden">
        <h1 className="text-white text-3xl font-bold mb-4">
          Discover the Legacy
        </h1>
        <p className="text-white text-base max-w-2xl mx-auto">
          Experience the timeless taste of Chivas Regal, crafted to perfection
          for over a century. Join us in celebrating excellence.
        </p>
      </div>
    
    </section>
  );
};

export default OtherContents;

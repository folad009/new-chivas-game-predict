"use client";

import HomeHero from "@/components/HomeHero";
// import Footer from "@/components/Footer";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = ({ userName, onSignOut }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-900 shadow-sm p-5 border-b-1 border-b-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/img/chivas-regal-logo-white.png" alt="betway logo" className="w-[200px]" />
          
          </div>
          

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden bg-gray-100 p-2 rounded text-gray-600 transition hover:text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>         

          {/* User Info & Sign Out */}
          <div className="hidden md:flex items-center gap-4 text-white">
            <p className="text-sm font-medium">Welcome, <span className="font-black">{userName}</span></p>
            <button
              onClick={onSignOut}
              className="bg-red-900 text-white px-4 py-2 rounded-md shadow hover:bg-gray-900 transition text-sm cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white shadow-md rounded-md p-4 mt-2">
            
            <div className="mt-4 text-center">
              <p className="text-sm font-medium mb-2">Welcome, {userName}</p>
              <button
                onClick={onSignOut}
                className="w-full bg-red-900 text-white py-2 rounded-md shadow hover:bg-gray-900 transition text-sm"
              >
                Sign Out
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const Card = ({ title, link, linkText, bgColor, backgroundImage }) => (
  <div className="h-40 rounded  sm:gap-5">
    <div className="group relative block" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="relative p-4 sm:p-6 lg:p-8 text-center">

        <p className="text-lg font-bold text-white sm:text-xl">{title}</p>
        <div 
          className="mt-10"
        >
          <div>
            <a href={link} className={`px-4 py-2 rounded-md shadow-md text-white font-black transition  ${bgColor} hover:bg-gray-900 cursor-pointer`}>
              {linkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Section = () => (
  <section className="px-4 sm:px-6 lg:px-8 py-22 min-h-screen bg-red-900">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl mb-8 text-center">
        Exciting Games and Leaderboards!
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mx-auto">
        <Card 
          title="Upcoming Games" 
          link="/games" 
          linkText="View Games" 
          bgColor="bg-red-900 hover:bg-black" 
          backgroundImage="/assets/img/chivas-gunmetal-bg.jpg"
        />
        <div className="lg:hidden"></div>
        <Card 
          title="Top Players" 
          link="/leaderboard" 
          linkText="Leaderboard" 
          bgColor="bg-red-900 hover:bg-black"
          backgroundImage="/assets/img/chivas-gunmetal-bg.jpg" 
        />
      </div>
    </div>
    <div className="h-[300px] md:h-full w-full mt-8 md:mt-0">
      <Image src="/assets/img/chivas-gunmetal-bg.jpg" alt="Chivas Regal 12" width={500} height={500} />
    </div>
  </div>
</section>
);

export default function Home() {
  const { data: session } = useSession();
  const [prize, setPrize] = useState(null);

  useEffect(() => {
    if (session) {
      fetch("/api/prizes")
        .then((res) => res.json())
        .then((data) => setPrize(data.prize));
    }
  }, [session]);

  if (!session) {
    return (
      <>
        <HomeHero />
        {/*<OtherContents />
        <Footer />*/}
      </>
    );
  }

  return (
    <>
      <Header userName={session.user.name} onSignOut={signOut} />
      <Section />
      {prize && (
        <p className="text-green-500 text-lg font-semibold text-center mt-4">
          🏆 You won: {prize}!
        </p>
      )}
    </>
  );
}

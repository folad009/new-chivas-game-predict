"use client";
import { useState } from "react";
import Predict from "@/components/Predict";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { signOut, useSession } from "next-auth/react";

export default function Games() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const onSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  const {
    data: games,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const res = await fetch("/api/admin/games");
      if (!res.ok) throw new Error("Failed to fetch games");
      const result = await res.json();
      return result.games;
    },
  });

  return (
    <>
      <header className="bg-red-950 shadow-sm p-3 sm:p-4 border-b border-b-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center justify-between">
              <img
                src="/assets/img/chivas-regal-logo-white.png"
                alt="betway logo"
                className="w-36 sm:w-[180px]"
              />
            </div>

            <button
              className="md:hidden bg-gray-100 p-2 rounded text-gray-600 hover:text-gray-800 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <nav
              className={`absolute md:static top-16 left-0 z-20 w-full md:w-auto md:bg-transparent bg-red-950 
        ${
          isMenuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row items-start md:items-center gap-4 p-4 md:p-0 text-white`}
            >
              {session ? (
                <>
                  <p className="text-sm font-medium mb-4 md:mb-0">
                    Welcome,{" "}
                    <span className="font-black">{session.user.name}</span>
                  </p>
                  {session.user.role === "admin" && (
                    <>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4">
                        <a
                          href="/admin/award-points"
                        className="w-full sm:w-auto bg-green-900 text-white px-4 py-2 rounded-md shadow hover:bg-black hover:text-white transition text-sm"
                        >
                          Award Points
                        </a>
                        <a
                          href="/admin/add-games"
                          className="w-full sm:w-auto bg-green-900 text-white px-4 py-2 rounded-md shadow hover:bg-black hover:text-white transition text-sm"
                        >
                          Add Game
                        </a>
                        <a
                          href="/admin/archive"
                          className="w-full sm:w-auto bg-green-900 text-white px-4 py-2 rounded-md shadow hover:bg-black hover:text-white transition text-sm"
                        >
                          Archive Games
                        </a>
                      </div>
                    </>
                  )}
                  <button
                    onClick={onSignOut}
                    className="w-full sm:w-auto bg-red-900 px-4 py-2 rounded-md shadow hover:bg-gray-900 transition text-sm"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
                  <a
                    href="/leaderboard"
                    className="w-full sm:w-auto bg-green-900 text-white px-4 py-2 rounded-md shadow hover:bg-black transition text-sm text-center"
                  >
                    Leaderboard
                  </a>
                  <a
                    href="/auth"
                    className="w-full sm:w-auto bg-black text-white px-4 py-2 rounded-md shadow hover:bg-green-950 transition text-sm text-center"
                  >
                    Sign in
                  </a>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 py-6 text-center bg-red-950 gap-6">
        <div className="w-full max-w-lg bg-red-900 p-4 sm:p-6 rounded-lg shadow-lg text-center h-auto py-5 mx-0 my-4">
          <h2 className="text-xl sm:text-2xl text-white font-bold mb-6">
            ⚽ Upcoming Games
          </h2>

          {isLoading && <p className="text-white">Loading games...</p>}
          {error && <p className="text-white">{error.message}</p>}

          {!isLoading && !selectedGame && (
            <>
              <ul className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
                {games?.length > 0 ? (
                  games
                    .sort((a, b) => new Date(a.date) - new Date(b.date))
                    .map((game) => (
                      <li
                        key={game.id}
                        onClick={() => setSelectedGame(game)}
                        className="mb-4 cursor-pointer text-black hover:underline p-2 border-b font-black"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <img
                            src={game.team1Logo}
                            alt={game.team1}
                            className="w-14 h-14 sm:w-20 sm:h-20"
                          />
                          <span className="text-xs sm:text-base">
                            {game.team1} vs {game.team2}
                          </span>
                          <img
                            src={game.team2Logo}
                            alt={game.team2}
                            className="w-14 h-14 sm:w-20 sm:h-20"
                          />
                        </div>
                        <p className="text-black text-xs sm:text-sm">
                          {game.gameType} -{" "}
                          {new Date(game.date).toLocaleDateString()}
                        </p>
                      </li>
                    ))
                ) : (
                  <p className="text-gray-500">No games available.</p>
                )}
              </ul>

              <button
                onClick={() => router.push("/")}
                className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition"
              >
                Back to Home
              </button>
            </>
          )}

          {selectedGame && (
            <div className="w-full bg-white shadow-lg rounded-lg p-4">
              <button
                onClick={() => setSelectedGame(null)}
                className="w-full bg-white shadow-lg rounded-lg p-4"
              >
                Back to Games
              </button>
              <Predict game={selectedGame} />
            </div>
          )}
        </div>
        <div className="w-full max-w-xs sm:max-w-sm lg:w-[500px] flex justify-center">
          <img
            
            src="/assets/img/betway-img-banner-1.png"
            alt="Chivas Logo"
          />
        </div>
      </main>
    </>
  );
}

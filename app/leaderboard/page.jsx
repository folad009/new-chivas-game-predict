"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

// Menu button for mobile view
const MenuButton = ({ onClick }) => (
  <button
    className="block md:hidden bg-gray-100 p-2 rounded text-gray-600 transition hover:text-gray-800"
    onClick={onClick}
    aria-label="Toggle menu"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
);

// Mobile menu for smaller screens
const MobileMenu = ({ session }) => (
  <nav className="md:hidden bg-white shadow-md rounded-md p-4 mt-2">
    <div className="mt-4 text-center">
      {session ? (
        <>
          <p className="text-sm font-medium mb-2">Welcome, {session.user.name}</p>
          <button
            onClick={() => signOut()}
            className="w-full bg-red-900 text-white py-2 rounded-md shadow hover:bg-red-950 transition text-sm"
          >
            Sign Out
          </button>
        </>
      ) : (
        <p className="text-sm font-medium mb-2">Not signed in</p>
      )}
    </div>
  </nav>
);

// Header component that handles both desktop and mobile views
const Header = ({ session, isMenuOpen, toggleMenu }) => (
  <header className="bg-red-900 shadow-sm p-5 border-b-1 border-b-white">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-5">
              <img
              src="/assets/img/chivas-regal-logo-white.png"
              alt="betway logo"
              className="w-[180px]"
            />
            </div>
        <MenuButton onClick={toggleMenu} />
        <div className="hidden md:flex items-center gap-4 text-white">
          {session ? (
            <>
              <p className="text-sm font-medium">
                Welcome, <span className="font-black">{session.user.name}</span>
              </p>
              {session.user.role === "admin" && (
                <a
                  href="/admin/award-points"
                  className="bg-green-950 text-black px-4 py-2 rounded-md shadow hover:bg-black hover:text-white transition text-sm"
                >
                  Award Points
                </a>
              )}
              <button
                onClick={() => signOut()}
                className="bg-red-800 text-white px-4 py-2 rounded-md shadow hover:bg-red-950 transition text-sm"
              >
                Sign Out
              </button>
            </>
          ) : (
            <a href="/auth" className="bg-green-900 text-white px-4 py-2 rounded-md shadow hover:bg-green-950 transition text-sm">
              Sign In
            </a>
          )}
        </div>
      </div>
      {isMenuOpen && <MobileMenu session={session} />}
    </div>
  </header>
);

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [filteredLeaderboard, setFilteredLeaderboard] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState("half-time"); // Default to half-time
  const [searchQuery, setSearchQuery] = useState("");
  const { data: session } = useSession();
  const router = useRouter();

  // Fetch leaderboard data based on selected view (half-time or full-time)
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch(`/api/leaderboard?view=${view}`);
        if (!res.ok) throw new Error("Failed to fetch leaderboard data");
        const data = await res.json();
        setLeaderboard(data.leaderboard || []);
        setFilteredLeaderboard(data.leaderboard || []);
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
      }
    };
    fetchLeaderboard();
  }, [view]); // Refetch when view changes

  // Filter leaderboard based on search query
  useEffect(() => {
    setFilteredLeaderboard(
      leaderboard.filter((player) =>
        player.userName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, leaderboard]);

  // Toggle menu visibility for mobile
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <Header session={session} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main
        className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-red-900"
      >
        <h2 className="text-4xl font-bold mb-6 text-white">🏆 Leaderboard</h2>

        {/* Toggle between Half-Time and Full-Time */}
        <div className="mb-6">
          <button
            onClick={() => setView("half-time")}
            className={`px-4 py-2 rounded-md cursor-pointer ${
              view === "half-time" ? "bg-gray-900 text-white" : "bg-gray-200 text-red-900"
            }`}
          >
            Half-Time Leaderboard
          </button>
          <button
            onClick={() => setView("full-time")}
            className={`ml-4 px-4 py-2 rounded-md cursor-pointer ${
              view === "full-time" ? "bg-red-950 text-white" : "bg-gray-200 text-red-900"
            }`}
          >
            Full-Time Leaderboard
          </button>
        </div>

        {/* Search bar */}
        <div className="mb-6 w-full max-w-md">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-white text-white rounded-md shadow focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-green-900"
          />
        </div>

        {/* Leaderboard table */}
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
          {filteredLeaderboard.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">#</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Points</th>
                  <th className="p-2 border">Prediction Time</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeaderboard.map((player, index) => (
                  <tr key={player.userId || index} className="hover:bg-gray-100">
                    <td className="p-2 border">{index + 1}</td>
                    <td className="p-2 border">{player.userName}</td>
                    <td className="p-2 border">
                      {view === "half-time"
                        ? `${player.halfTimePoints} points`
                        : `${player.fullTimePoints} points`}
                    </td>
                    <td className="p-2 border text-gray-500">{player.predictionTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No leaderboard data available.</p>
          )}
        </div>

        <button
          onClick={() => router.push("/")}
          className="mt-6 bg-gray-900 text-white px-4 py-2 rounded hover:bg-green-950 transition duration-300 cursor-pointer"
        >
          Back to Home
        </button>
      </main>
    </>
  );
}

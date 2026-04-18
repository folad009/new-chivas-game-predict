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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
);

// Mobile menu for smaller screens
const MobileMenu = ({ session }) => (
  <nav className="md:hidden bg-white shadow-md rounded-md p-4 mt-2 text-gray-900">
    <div className="mt-4 text-center">
      {session ? (
        <>
          <p className="text-sm font-medium mb-2 text-gray-900">
            Welcome, {session.user.name}
          </p>
          <button
            onClick={() =>
              signOut({ redirect: false }).then(() => {
                window.location.href = "/";
              })
            }
            className="w-full bg-red-900 text-white py-2.5 rounded-md shadow hover:bg-red-950 transition text-sm font-medium"
          >
            Sign Out
          </button>
        </>
      ) : (
        <p className="text-sm font-medium mb-2 text-gray-900">Not signed in</p>
      )}
    </div>
  </nav>
);

// Header component that handles both desktop and mobile views
const Header = ({ session, isMenuOpen, toggleMenu, isAdmin }) => (
  <header className="bg-red-900 shadow-sm p-4 sm:p-5 border-b border-b-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-5">
          <img
            src="/assets/img/chivas-regal-logo-white.png"
            alt="betway logo"
            className="w-36 sm:w-[180px]"
          />
        </div>
        <MenuButton onClick={toggleMenu} />
        <div className="hidden md:flex items-center gap-4 text-white">
          {session ? (
            <>
              <p className="text-sm font-medium">
                Welcome, <span className="font-black">{session.user.name}</span>
              </p>
              {isAdmin && (
                <a
                  href="/admin/award-points"
                  className="bg-red-800 text-white px-4 py-2.5 rounded-md shadow hover:bg-red-950 hover:text-white transition text-sm font-medium"
                >
                  Award Points
                </a>
              )}
              <button
                onClick={() =>
                  signOut({ redirect: false }).then(() => {
                    window.location.href = "/";
                  })
                }
                className="bg-red-800 text-white px-4 py-2.5 rounded-md shadow hover:bg-red-950 transition text-sm font-medium"
              >
                Sign Out
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <a
                href="/leaderboard"
                className="bg-red-800 text-white px-4 py-2.5 rounded-md shadow hover:bg-red-950 transition text-sm font-medium"
              >
                Leaderboard
              </a>
              <a
                href="/auth"
                className="bg-green-900 text-white px-4 py-2.5 rounded-md shadow hover:bg-green-950 transition text-sm font-medium"
              >
                Sign In
              </a>
            </div>
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
  const [view, setView] = useState("half-time");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Show 10 rows per page
  const { data: session } = useSession();
  const router = useRouter();
  const isAdmin = session?.user?.role?.toLowerCase() === "admin";

  // Fetch leaderboard data
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch(`/api/leaderboard?view=${view}`);
        if (!res.ok) throw new Error("Failed to fetch leaderboard data");
        const data = await res.json();

        // Sort leaderboard by points based on view
        const sortedData = [...(data.leaderboard || [])].sort((a, b) => {
          const pointsA =
            view === "half-time" ? a.halfTimePoints : a.fullTimePoints;
          const pointsB =
            view === "half-time" ? b.halfTimePoints : b.fullTimePoints;
          return pointsB - pointsA; // Descending order
        });

        setLeaderboard(sortedData);
        setFilteredLeaderboard(sortedData);
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
      }
    };
    fetchLeaderboard();
  }, [view]);

  // Filter leaderboard based on search query
  useEffect(() => {
    const filtered = leaderboard.filter((player) =>
      player.userName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredLeaderboard(filtered);
    setCurrentPage(1); // Reset to first page on search
  }, [searchQuery, leaderboard]);

  // Pagination logic
  const totalPages = Math.ceil(filteredLeaderboard.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredLeaderboard.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const clearPredictions = async () => {
    try {
      const res = await fetch("/api/clear-leaderboard", {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to clear predictions");
      setLeaderboard([]);
      setFilteredLeaderboard([]);
      setCurrentPage(1);
      alert("Predictions cleared for new game!");
    } catch (err) {
      console.error(err);
      alert("Error clearing predictions");
    }
  };

  return (
    <>
      <Header
        session={session}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isAdmin={isAdmin}
      />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:py-10 text-center bg-red-900 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">🏆 Leaderboard</h2>

        {/* Toggle between Half-Time and Full-Time */}
        <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md sm:max-w-none justify-center">
          <button
            onClick={() => setView("half-time")}
            className={`px-4 py-2.5 rounded-md cursor-pointer w-full sm:w-auto text-sm font-medium ${
              view === "half-time"
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-red-900"
            }`}
          >
            Half-Time Leaderboard
          </button>
          <button
            onClick={() => setView("full-time")}
            className={`px-4 py-2.5 rounded-md cursor-pointer w-full sm:w-auto text-sm font-medium ${
              view === "full-time"
                ? "bg-red-950 text-white"
                : "bg-gray-200 text-red-900"
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
            className="w-full px-4 py-2.5 text-sm bg-white text-gray-900 placeholder:text-gray-500 border border-gray-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-green-900"
          />
        </div>

        {/* Leaderboard table — explicit text color so body dark-mode foreground does not inherit onto white */}
        <div className="w-full max-w-4xl bg-white text-gray-900 shadow-lg rounded-lg p-3 sm:p-6 overflow-x-auto">
          {currentData.length > 0 ? (
            <>
              <table className="w-full min-w-[640px] text-left border-collapse text-sm text-gray-900">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2 border border-gray-300 font-semibold text-gray-900">#</th>
                    <th className="p-2 border border-gray-300 font-semibold text-gray-900">Name</th>
                    <th className="p-2 border border-gray-300 font-semibold text-gray-900">Points</th>
                    <th className="p-2 border border-gray-300 font-semibold text-gray-900">Prediction Time</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((player, index) => (
                    <tr
                      key={`${player.userId ?? "player"}-${startIndex + index}`}
                      className="hover:bg-gray-100"
                    >
                      <td className="p-2 border border-gray-300 text-gray-900">{startIndex + index + 1}</td>
                      <td className="p-2 border border-gray-300 text-gray-900">{player.userName}</td>
                      <td className="p-2 border border-gray-300 text-gray-900">
                        {view === "half-time"
                          ? `${player.halfTimePoints} points`
                          : `${player.fullTimePoints} points`}
                      </td>
                      <td className="p-2 border border-gray-300 text-gray-900">
                        {player.predictionTime}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination controls */}
              <div className="flex justify-center mt-4 flex-wrap gap-2 text-gray-900">
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 bg-gray-200 text-gray-900 rounded font-medium hover:bg-gray-300 disabled:opacity-50 disabled:hover:bg-gray-200"
                >
                  Prev
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-3 py-1.5 rounded font-medium ${
                      currentPage === i + 1
                        ? "bg-gray-900 text-white"
                        : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 bg-gray-200 text-gray-900 rounded font-medium hover:bg-gray-300 disabled:opacity-50 disabled:hover:bg-gray-200"
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-600">No leaderboard data available.</p>
          )}
        </div>

        {/* Clear Leaderboard Button */}
        {isAdmin && (
          <button
            onClick={() => {
              const confirmClear = window.confirm(
                "Are you sure you want to clear the leaderboard? This action cannot be undone."
              );
              if (confirmClear) {
                clearPredictions();
                alert("Leaderboard has been cleared successfully!");
              }
            }}
            className="mt-4 w-full sm:w-auto bg-red-700 text-white text-sm font-medium px-4 py-2.5 rounded hover:bg-red-800 transition duration-300"
          >
            Clear Predictions for New Game
          </button>
        )}

        <button
          onClick={() => router.push("/")}
          className="mt-6 w-full sm:w-auto bg-gray-900 text-white text-sm font-medium px-4 py-2.5 rounded hover:bg-green-950 transition duration-300 cursor-pointer"
        >
          Back to Home
        </button>
      </main>
    </>
  );
}

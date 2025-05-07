"use client";
import { useEffect, useState } from "react";

const ArchivePage = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc");
  const [filterType, setFilterType] = useState("All");
  const [dateFilter, setDateFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    fetch("/api/admin/archive/view")
      .then((res) => res.json())
      .then((data) => {
        setGames(data.archivedGames || []);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = [...games];

    if (filterType !== "All") {
      filtered = filtered.filter((game) => game.gameType === filterType);
    }

    if (dateFilter) {
      const selected = new Date(dateFilter);
      filtered = filtered.filter(
        (game) =>
          new Date(game.date).toDateString() === selected.toDateString()
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter((game) =>
        game.predictions.some((p) =>
          [p.user.name, p.predictedTeam, game.team1, game.team2]
            .some((field) => field?.toLowerCase().includes(q))
        )
      );
    }

    filtered.sort((a, b) =>
      sortOrder === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );

    setFilteredGames(filtered);
    setCurrentPage(1);
  }, [games, sortOrder, filterType, dateFilter, searchQuery]);

  const handleExport = () => {
    const rows = [
      ["Date", "Team 1", "Team 2", "Game Type", "User", "Prediction", "FT Points", "HT Points"],
      ...filteredGames.flatMap((game) =>
        game.predictions.map((p) => [
          new Date(game.date).toLocaleString(),
          game.team1,
          game.team2,
          game.gameType,
          p.user.name,
          p.predictedTeam || "N/A",
          p.fullTimePoints ?? 0,
          p.halfTimePoints ?? 0,
        ])
      ),
    ];

    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "archived_games.csv";
    a.click();
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedGames = filteredGames.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const uniqueTypes = [...new Set(games.map((g) => g.gameType))];

  if (loading) return <p>Loading archived games...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Archived Games</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="All">All Types</option>
          {uniqueTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>

        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border px-3 py-2 rounded"
        />

        <input
          type="text"
          placeholder="Search by user or team..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-3 py-2 rounded"
        />

        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Sort: {sortOrder === "asc" ? "Oldest First" : "Newest First"}
        </button>

        <button
          onClick={handleExport}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Export to CSV
        </button>
      </div>

      {filteredGames.length === 0 && <p>No results found.</p>}

      {filteredGames.length > 0 && (
        <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
          <table className="min-w-full bg-white text-sm">
            <thead className="bg-gray-100 sticky top-0">
              <tr>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Team 1</th>
                <th className="px-4 py-2 border">Team 2</th>
                <th className="px-4 py-2 border">Game Type</th>
                <th className="px-4 py-2 border">User</th>
                <th className="px-4 py-2 border">Prediction</th>
                <th className="px-4 py-2 border">FT Points</th>
                <th className="px-4 py-2 border">HT Points</th>
              </tr>
            </thead>
            <tbody>
              {paginatedGames.flatMap((game) =>
                game.predictions.map((p, index) => (
                  <tr
                    key={`${game.id}-${p.id}`}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="border px-4 py-2">{new Date(game.date).toLocaleString()}</td>
                    <td className="border px-4 py-2">{game.team1}</td>
                    <td className="border px-4 py-2">{game.team2}</td>
                    <td className="border px-4 py-2">{game.gameType}</td>
                    <td className="border px-4 py-2">{p.user ? p.user.name : "Unknown User"}</td>
                    <td className="border px-4 py-2">{p.predictedTeam || "N/A"}</td>
                    <td className="border px-4 py-2">{p.fullTimePoints ?? 0}</td>
                    <td className="border px-4 py-2">{p.halfTimePoints ?? 0}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <p>
          Page {currentPage} of{" "}
          {Math.ceil(filteredGames.length / itemsPerPage)}
        </p>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              prev < Math.ceil(filteredGames.length / itemsPerPage)
                ? prev + 1
                : prev
            )
          }
          disabled={
            currentPage === Math.ceil(filteredGames.length / itemsPerPage)
          }
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ArchivePage;

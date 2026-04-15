"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminAwardPoints() {
  const [predictions, setPredictions] = useState([]);
  const [gameResults, setGameResults] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isAwarding, setIsAwarding] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [phase, setPhase] = useState("half-time");

  const router = useRouter();

  useEffect(() => {
    fetchSession();
  }, []);

  useEffect(() => {
    if (isAdmin) fetchPredictions();
  }, [isAdmin]);

  const fetchSession = async () => {
    try {
      const res = await fetch("/api/auth/session");
      const data = await res.json();

      if (data?.user?.role !== "admin") {
        router.push("/");
      } else {
        setIsAdmin(true);
      }
    } catch (error) {
      console.error("Session fetch error:", error);
      router.push("/");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPredictions = async () => {
    try {
      const res = await fetch("/api/admin/predictions");
      const data = await res.json();
      setPredictions(data.predictions || []);
    } catch (error) {
      console.error("Predictions fetch error:", error);
    }
  };

  const handleResultChange = (gameId, field, value) => {
    setGameResults((prev) => ({
      ...prev,
      [gameId]: {
        ...prev[gameId],
        [field]: value,
      },
    }));
  };

  const awardPoints = async (gameId) => {
    const result = gameResults[gameId];
    if (
      !Number.isInteger(result?.actualTeam1Score) ||
      !Number.isInteger(result?.actualTeam2Score) ||
      result.actualTeam1Score < 0 ||
      result.actualTeam2Score < 0
    ) {
      alert("Please enter both team scores.");
      return;
    }

    try {
      setIsAwarding(true);

      const res = await fetch("/api/admin/award-points", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameId,
          actualTeam1Score: result.actualTeam1Score,
          actualTeam2Score: result.actualTeam2Score,
          period: phase,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Points awarded successfully!");
        fetchPredictions();
      } else {
        alert(data.error || "Error awarding points.");
      }
    } catch (error) {
      console.error("Awarding error:", error);
      alert("Server error.");
    } finally {
      setIsAwarding(false);
    }
  };

  const awardAllGames = async () => {
    const uniqueGameIds = [...new Set(predictions.map((p) => p.gameId))];

    for (const gameId of uniqueGameIds) {
      const result = gameResults[gameId];
      if (
        !Number.isInteger(result?.actualTeam1Score) ||
        !Number.isInteger(result?.actualTeam2Score) ||
        result.actualTeam1Score < 0 ||
        result.actualTeam2Score < 0
      ) {
        alert(`Missing results for game ID: ${gameId}`);
        return;
      }
    }

    try {
      setIsAwarding(true);

      await Promise.all(
        uniqueGameIds.map((gameId) =>
          fetch("/api/admin/award-points", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              gameId,
              actualTeam1Score: gameResults[gameId].actualTeam1Score,
              actualTeam2Score: gameResults[gameId].actualTeam2Score,
              period: phase,
            }),
          })
        )
      );

      alert("Successfully awarded points for all games!");
      fetchPredictions();
    } catch (error) {
      console.error("Award all games error:", error);
      alert("Error awarding points.");
    } finally {
      setIsAwarding(false);
    }
  };

  if (isLoading) return <p className="p-4 text-sm">Loading...</p>;
  if (!isAdmin) return null;

  return (
    <div className="p-3 sm:p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">Award Points</h2>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <button
          onClick={awardAllGames}
          disabled={isAwarding}
          className="w-full sm:w-auto bg-red-900 hover:bg-red-950 text-white text-sm font-medium px-6 py-2.5 rounded"
        >
          {isAwarding ? "Awarding..." : "Award Points for All Games"}
        </button>

        <div>
          <label className="mr-2 text-sm font-semibold">Awarding Phase:</label>
          <select
            value={phase}
            onChange={(e) => setPhase(e.target.value)}
            className="border rounded p-2.5 text-sm"
          >
            <option value="half-time">Half-Time</option>
            <option value="full-time">Full-Time</option>
          </select>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
      <table className="min-w-[900px] w-full table-auto border text-sm">
        <thead className="bg-gray-100">
          <tr>
            {[
              "User",
              "Game",
              "Predicted Team",
              "Predicted Score",
              "Actual Score",
              "Half-Time Points",
              "Full-Time Points",
              "Actions",
            ].map((header) => (
              <th key={header} className="px-4 py-2 border">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {predictions.map((prediction) => {
            const {
              id,
              user,
              game,
              predictedTeam,
              predictedTeam1Score,
              predictedTeam2Score,
              halfTimePoints,
              fullTimePoints,
              gameId,
            } = prediction;
            const actualResult = gameResults[gameId] || {};

            return (
              <tr key={id} className="text-center">
                <td className="border px-2 py-1">{user?.name || "Unknown"}</td>
                <td className="border px-2 py-1">{`${game?.team1} vs ${game?.team2}`}</td>
                <td className="border px-2 py-1">{predictedTeam || "Draw"}</td>
                <td className="border px-2 py-1">{`${predictedTeam1Score} - ${predictedTeam2Score}`}</td>

                <td className="border px-2 py-1">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="0"
                      value={actualResult.actualTeam1Score ?? ""}
                      onChange={(e) =>
                        handleResultChange(
                          gameId,
                          "actualTeam1Score",
                          e.target.value === ""
                            ? undefined
                            : parseInt(e.target.value, 10)
                        )
                      }
                      placeholder={game?.team1}
                      className="border rounded p-1 w-full"
                    />
                    <input
                      type="number"
                      min="0"
                      value={actualResult.actualTeam2Score ?? ""}
                      onChange={(e) =>
                        handleResultChange(
                          gameId,
                          "actualTeam2Score",
                          e.target.value === ""
                            ? undefined
                            : parseInt(e.target.value, 10)
                        )
                      }
                      placeholder={game?.team2}
                      className="border rounded p-1 w-full"
                    />
                  </div>
                </td>

                {/* Display Half-Time and Full-Time Points */}
                <td className="border px-2 py-1">{halfTimePoints || 0}</td>
                <td className="border px-2 py-1">{fullTimePoints || 0}</td>

                <td className="border px-2 py-1">
                  <button
                    onClick={() => awardPoints(gameId)}
                    disabled={isAwarding}
                    className="bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded"
                  >
                    Award
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

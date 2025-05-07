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
    if (!result?.actualWinningTeam || result.actualGoalDifference === undefined) {
      alert("Please fill in both winning team and goal difference.");
      return;
    }

    try {
      setIsAwarding(true);

      const res = await fetch("/api/admin/award-points", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameId,
          actualWinningTeam: result.actualWinningTeam,
          actualGoalDifference: result.actualGoalDifference,
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
      if (!result?.actualWinningTeam || result.actualGoalDifference === undefined) {
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
              actualWinningTeam: gameResults[gameId].actualWinningTeam,
              actualGoalDifference: gameResults[gameId].actualGoalDifference,
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

  if (isLoading) return <p>Loading...</p>;
  if (!isAdmin) return null;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Award Points</h2>

      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={awardAllGames}
          disabled={isAwarding}
          className="bg-red-900 hover:bg-red-950 text-white px-6 py-2 rounded"
        >
          {isAwarding ? "Awarding..." : "Award Points for All Games"}
        </button>

        <div>
          <label className="mr-2 font-semibold">Awarding Phase:</label>
          <select
            value={phase}
            onChange={(e) => setPhase(e.target.value)}
            className="border rounded p-2"
          >
            <option value="half-time">Half-Time</option>
            <option value="full-time">Full-Time</option>
          </select>
        </div>
      </div>

      <table className="min-w-full table-auto border">
        <thead className="bg-gray-100">
          <tr>
            {[
              "User",
              "Game",
              "Predicted Team",
              "Predicted Score",
              "Actual Winning Team",
              "Actual Goal Diff",
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
            const { id, user, game, predictedTeam, goalDifference, points, halfTimePoints, fullTimePoints, gameId } = prediction;
            const actualResult = gameResults[gameId] || {};

            return (
              <tr key={id} className="text-center">
                <td className="border px-2 py-1">{user?.name || "Unknown"}</td>
                <td className="border px-2 py-1">{`${game?.team1} vs ${game?.team2}`}</td>
                <td className="border px-2 py-1">{predictedTeam || "Draw"}</td>
                <td className="border px-2 py-1">{goalDifference}</td>

                <td className="border px-2 py-1">
                  <select
                    value={actualResult.actualWinningTeam || ""}
                    onChange={(e) => handleResultChange(gameId, "actualWinningTeam", e.target.value)}
                    className="border rounded p-1 w-full"
                  >
                    <option value="">Select Result</option>
                    <option value={game?.team1}>{game?.team1}</option>
                    <option value={game?.team2}>{game?.team2}</option>
                    <option value="Draw">Draw</option>
                  </select>
                </td>

                <td className="border px-2 py-1">
                  <input
                    type="number"
                    value={actualResult.actualGoalDifference ?? ""}
                    onChange={(e) =>
                      handleResultChange(gameId, "actualGoalDifference", parseInt(e.target.value, 10))
                    }
                    className="border rounded p-1 w-full"
                  />
                </td>

                {/* Display Half-Time and Full-Time Points */}
                <td className="border px-2 py-1">{halfTimePoints || 0}</td>
                <td className="border px-2 py-1">{fullTimePoints || 0}</td>

                <td className="border px-2 py-1">
                  <button
                    onClick={() => awardPoints(gameId)}
                    disabled={isAwarding}
                    className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded"
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
  );
}

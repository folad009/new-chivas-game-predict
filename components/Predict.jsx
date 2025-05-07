"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Predict() {
  const { data: session } = useSession();
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [winningTeam, setWinningTeam] = useState("");
  const [losingTeam, setLosingTeam] = useState("");
  const [goalDifference, setGoalDifference] = useState("");
  const [isDraw, setIsDraw] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/api/games");
        const data = await response.json();
        setGames(data.games || []);
      } catch (err) {
        console.error("Error fetching games:", err);
        setGames([]);
      }
    };
    fetchGames();
  }, []);

  const submitPrediction = async () => {
    // If draw, goalDifference should be set to zero automatically
    if (
      !selectedGame ||
      (isDraw && goalDifference !== "0") ||
      (!isDraw && (!winningTeam || !losingTeam || goalDifference === ""))
    ) {
      setError("Please fill in all fields correctly before submitting.");
      return;
    }

    if (!session?.user?.id) {
      setError("You must be logged in to submit a prediction.");
      return;
    }

    setError(""); // Clear any previous errors

    const predictionType = isDraw ? "draw" : "win"; // Default to "win" if not a draw

    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gameId: selectedGame.id,
        winningTeam,
        losingTeam,
        goalDifference: isDraw ? 0 : parseInt(goalDifference, 10), // Automatically set goal difference to 0 for draws
        predictionType,
        userId: session.user.id,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Prediction saved successfully!");
      resetForm();
    } else {
      setError(
        data.error || "An error occurred while submitting the prediction."
      );
    }
  };

  const resetForm = () => {
    setSelectedGame(null);
    setWinningTeam("");
    setLosingTeam("");
    setGoalDifference("");
    setIsDraw(false); // Reset draw state
    setError("");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-green-900">
        Submit Your Prediction
      </h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* List of available games */}
      <div className="mb-4">
        {games.length > 0 ? (
          games
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((game) => (
              <div
                key={game.id}
                className={`cursor-pointer p-2 mb-2 border rounded shadow-md text-red-900 dark:text-white dark:border-red-900  ${
                  selectedGame?.id === game.id
                    ? "bg-white"
                    : "hover:bg-red-900 hover:text-white"
                }`}
                onClick={() => setSelectedGame(game)}
              >
                {game.team1} vs {game.team2} (
                {new Date(game.date).toLocaleDateString()})
              </div>
            ))
        ) : (
          <p className="text-gray-500">No games available at the moment.</p>
        )}
      </div>

      {/* Prediction form */}
      {selectedGame && (
        <div className="mt-4 p-4 border rounded shadow-md bg-white">
          <h3 className="text-lg font-semibold mb-3 text-red-950">
            Predict the outcome for <br />
            {selectedGame.team1} vs {selectedGame.team2}
          </h3>

          {/* Draw option */}
          <div className="mb-3 flex items-center">
            <input
              type="checkbox"
              id="draw"
              checked={isDraw}
              onChange={(e) => {
                setIsDraw(e.target.checked);
                setWinningTeam(""); // Clear winning team if it's a draw
                setLosingTeam(""); // Clear losing team if it's a draw
                setGoalDifference("0"); // Set goal difference to 0 for draw
              }}
              className="mr-2"
            />
            <label htmlFor="draw" className="text-red-900">
              Draw
            </label>
          </div>

          {/* Winning Team and Losing Team Selection */}
          {!isDraw && (
            <>
              <label className="block mb-2 text-red-900">Winning Team</label>
              <select
                value={winningTeam}
                onChange={(e) => {
                  const selectedWinningTeam = e.target.value;
                  setWinningTeam(selectedWinningTeam);

                  // Automatically set the losing team to the other team
                  if (selectedWinningTeam === selectedGame.team1) {
                    setLosingTeam(selectedGame.team2);
                  } else if (selectedWinningTeam === selectedGame.team2) {
                    setLosingTeam(selectedGame.team1);
                  } else {
                    setLosingTeam(""); // Reset if no valid selection
                  }
                }}
                className="border p-2 w-full mb-3 text-red-900"
              >
                <option value="">Select Team</option>
                <option value={selectedGame.team1}>{selectedGame.team1}</option>
                <option value={selectedGame.team2}>{selectedGame.team2}</option>
              </select>

              {winningTeam && (
                <>
                  <label className="block mb-2 text-red-900">
                    Losing Team
                  </label>
                  <select
                    value={losingTeam}
                    onChange={(e) => setLosingTeam(e.target.value)}
                    className="border p-2 w-full mb-3 text-green-900"
                    disabled // Disable manual selection of losing team
                  >
                    <option value="">Select Team</option>
                    <option value={selectedGame.team1}>
                      {selectedGame.team1}
                    </option>
                    <option value={selectedGame.team2}>
                      {selectedGame.team2}
                    </option>
                  </select>
                </>
              )}
            </>
          )}

          {/* Goal Difference */}
          <label className="block mb-2 text-red-900">Goal Difference</label>
          <input
            type="number"
            value={goalDifference}
            onChange={(e) => setGoalDifference(e.target.value)}
            className="border p-2 w-full mb-3 text-red-900"
            min="0"
            disabled={isDraw} // Disable input if it's a draw
          />

          <button
            onClick={submitPrediction}
            className="bg-red-900 text-white px-4 py-2 rounded uppercase hover:bg-red-950 w-full cursor-pointer"
          >
            Submit Prediction
          </button>
        </div>
      )}
    </div>
  );
}

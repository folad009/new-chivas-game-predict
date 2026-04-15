"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Predict() {
  const { data: session } = useSession();
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [winningTeam, setWinningTeam] = useState("");
  const [losingTeam, setLosingTeam] = useState("");
  const [isDraw, setIsDraw] = useState(false);
  const [team1Score, setTeam1Score] = useState("");
  const [team2Score, setTeam2Score] = useState("");
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
    if (!selectedGame || team1Score === "" || team2Score === "") {
      setError("Please fill in all fields correctly before submitting.");
      return;
    }

    const parsedTeam1Score = parseInt(team1Score, 10);
    const parsedTeam2Score = parseInt(team2Score, 10);

    if (
      Number.isNaN(parsedTeam1Score) ||
      Number.isNaN(parsedTeam2Score) ||
      parsedTeam1Score < 0 ||
      parsedTeam2Score < 0
    ) {
      setError("Scores must be valid numbers greater than or equal to 0.");
      return;
    }

    if (isDraw && parsedTeam1Score !== parsedTeam2Score) {
      setError("Draw prediction requires equal scores for both teams.");
      return;
    }

    if (!isDraw && parsedTeam1Score === parsedTeam2Score) {
      setError("Winning team prediction cannot have equal scores.");
      return;
    }

    if (!isDraw && !winningTeam) {
      setError("Please select the winning team.");
      return;
    }

    if (!session?.user?.id) {
      setError("You must be logged in to submit a prediction.");
      return;
    }

    setError(""); // Clear any previous errors

    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gameId: selectedGame.id,
        predictionType: isDraw ? "draw" : "win",
        winningTeam,
        losingTeam,
        predictedTeam1Score: parsedTeam1Score,
        predictedTeam2Score: parsedTeam2Score,
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
    setIsDraw(false);
    setTeam1Score("");
    setTeam2Score("");
    setError("");
  };

  return (
    <div className="p-3 sm:p-4">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-green-900">
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
                className={`cursor-pointer p-2.5 mb-2 border rounded shadow-md text-sm sm:text-base text-red-900 dark:text-white dark:border-red-900  ${
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
        <div className="mt-4 p-3 sm:p-4 border rounded shadow-md bg-white">
          <h3 className="text-base sm:text-lg font-semibold mb-3 text-red-950">
            Predict the outcome for <br />
            {selectedGame.team1} vs {selectedGame.team2}
          </h3>

          <div className="mb-3 flex items-center">
            <input
              type="checkbox"
              id="draw"
              checked={isDraw}
              onChange={(e) => {
                const drawChecked = e.target.checked;
                setIsDraw(drawChecked);
                setWinningTeam("");
                setLosingTeam("");
              }}
              className="mr-2"
            />
            <label htmlFor="draw" className="text-red-900">
              Draw
            </label>
          </div>

          {!isDraw && (
            <>
              <label className="block mb-2 text-red-900">Winning Team</label>
              <select
                value={winningTeam}
                onChange={(e) => {
                  const selectedWinningTeam = e.target.value;
                  setWinningTeam(selectedWinningTeam);
                  if (selectedWinningTeam === selectedGame.team1) {
                    setLosingTeam(selectedGame.team2);
                  } else if (selectedWinningTeam === selectedGame.team2) {
                    setLosingTeam(selectedGame.team1);
                  } else {
                    setLosingTeam("");
                  }
                }}
                className="border p-2.5 text-sm w-full mb-3 text-red-900"
              >
                <option value="">Select Team</option>
                <option value={selectedGame.team1}>{selectedGame.team1}</option>
                <option value={selectedGame.team2}>{selectedGame.team2}</option>
              </select>

              {winningTeam && (
                <>
                  <label className="block mb-2 text-red-900">Losing Team</label>
                  <select
                    value={losingTeam}
                    onChange={(e) => setLosingTeam(e.target.value)}
                    className="border p-2.5 text-sm w-full mb-3 text-red-900"
                    disabled
                  >
                    <option value="">Select Team</option>
                    <option value={selectedGame.team1}>{selectedGame.team1}</option>
                    <option value={selectedGame.team2}>{selectedGame.team2}</option>
                  </select>
                </>
              )}
            </>
          )}

          <label className="block mb-2 text-red-900">{selectedGame.team1} Score</label>
          <input
            type="number"
            min="0"
            value={team1Score}
            onChange={(e) => setTeam1Score(e.target.value)}
            className="border p-2.5 text-sm w-full mb-3 text-red-900"
          />

          <label className="block mb-2 text-red-900">{selectedGame.team2} Score</label>
          <input
            type="number"
            min="0"
            value={team2Score}
            onChange={(e) => setTeam2Score(e.target.value)}
            className="border p-2.5 text-sm w-full mb-3 text-red-900"
          />
          <button
            onClick={submitPrediction}
            className="bg-red-900 text-white text-sm font-semibold px-4 py-2.5 rounded uppercase hover:bg-red-950 w-full cursor-pointer"
          >
            Submit Prediction
          </button>
        </div>
      )}
    </div>
  );
}

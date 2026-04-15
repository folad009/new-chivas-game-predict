"use client";

import { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function RemoveGames() {
  const queryClient = useQueryClient();

  const { data: games = [], isLoading, isError } = useQuery({
    queryKey: ["admin-games"],
    queryFn: async () => {
      const response = await fetch("/api/admin/games");
      if (!response.ok) {
        throw new Error("Failed to load games");
      }
      const result = await response.json();
      return result.games || [];
    },
  });

  const removeGameMutation = useMutation({
    mutationFn: async (gameId) => {
      const response = await fetch(`/api/admin/games?id=${gameId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to remove game");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-games"] });
      queryClient.invalidateQueries({ queryKey: ["games"] });
    },
  });

  const sortedGames = useMemo(
    () => [...games].sort((a, b) => new Date(a.date) - new Date(b.date)),
    [games]
  );

  return (
    <div className="bg-white shadow-md rounded px-4 sm:px-8 pt-5 sm:pt-6 pb-6 sm:pb-8 mb-4 w-full max-w-md">
      <h3 className="text-lg font-bold mb-4">Remove a Game</h3>

      {isLoading && <p className="text-sm text-gray-600">Loading games...</p>}
      {isError && (
        <p className="text-sm text-red-600">Unable to load games right now.</p>
      )}

      {!isLoading && !isError && sortedGames.length === 0 && (
        <p className="text-sm text-gray-600">No active games found.</p>
      )}

      <ul className="space-y-3">
        {sortedGames.map((game) => (
          <li
            key={game.id}
            className="border rounded p-3 flex items-center justify-between gap-3"
          >
            <div>
              <p className="text-sm font-semibold">
                {game.team1} vs {game.team2}
              </p>
              <p className="text-xs text-gray-600">
                {game.gameType} - {new Date(game.date).toLocaleDateString()}
              </p>
            </div>

            <button
              type="button"
              onClick={() => removeGameMutation.mutate(game.id)}
              disabled={removeGameMutation.isPending}
              className="bg-red-700 hover:bg-red-800 text-white text-xs sm:text-sm font-medium px-3 py-2 rounded disabled:opacity-60"
            >
              {removeGameMutation.isPending ? "Removing..." : "Remove"}
            </button>
          </li>
        ))}
      </ul>

      {removeGameMutation.isError && (
        <p className="mt-3 text-sm text-red-600">
          {removeGameMutation.error.message}
        </p>
      )}
    </div>
  );
}

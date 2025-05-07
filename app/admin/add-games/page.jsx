"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AdminGameInput = () => {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [team1Logo, setTeam1Logo] = useState("");
  const [team2Logo, setTeam2Logo] = useState("");
  const [gameType, setGameType] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const router = useRouter();
  const queryClient = useQueryClient();

  // ✅ Check if user is an admin
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch("/api/auth/session");
        const data = await response.json();
        console.log("Client-side session:", data);

        if (!data || !data.user || data.user.role !== "admin") {
          router.push("/"); // Redirect if not admin
        } else {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
        router.push("/"); // Redirect on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchSession();
  }, [router]);

  const addGameMutation = useMutation({
    mutationFn: async (newGame) => {
      const response = await fetch("/api/admin/games", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGame),
      });

      if (!response.ok) throw new Error("Failed to add game");

      return response.json();
    },
    onSuccess: () => {
      setMessage("Game added successfully!");
      setTeam1("");
      setTeam2("");
      setTeam1Logo("");
      setTeam2Logo("");
      setGameType("");
      setDate("");
      queryClient.invalidateQueries(["games"]); // Refresh game list
    },
    onError: () => {
      
      setMessage("Failed to add the game. Please try again.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addGameMutation.mutate({ team1, team2, team1Logo, team2Logo, gameType, date });
  };

  if (isLoading) return <p>Loading...</p>;
  if (!isAdmin) return null; // Prevents rendering if not admin

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Add a New Game</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Team 1</label>
          <input
            type="text"
            value={team1}
            onChange={(e) => setTeam1(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Team 2</label>
          <input
            type="text"
            value={team2}
            onChange={(e) => setTeam2(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Team 1 Logo URL</label>
          <input
            type="text"
            value={team1Logo}
            onChange={(e) => setTeam1Logo(e.target.value)}
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Team 2 Logo URL</label>
          <input
            type="text"
            value={team2Logo}
            onChange={(e) => setTeam2Logo(e.target.value)}
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Game Type</label>
          <input
            type="text"
            value={gameType}
            onChange={(e) => setGameType(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={addGameMutation.isLoading}
        >
          {addGameMutation.isLoading ? "Adding..." : "Add Game"}
        </button>
      </form>
      {message && <p className="text-green-500">{message}</p>}
    </div>
  );
};

export default AdminGameInput;

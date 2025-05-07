"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import withAuth from "@/lib/withAuth";

const PrizeHistory = () => {
  const { data: session } = useSession();
  const [history, setHistory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (session) {
      fetch("/api/prize-history")
        .then((res) => res.json())
        .then((data) => setHistory(data.history));
    }
  }, [session]);

  async function claimPrize(id) {
    const res = await fetch("/api/claim-prize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      alert("🎉 Prize claimed successfully!");
      setHistory(history.map((h) => (h.id === id ? { ...h, claimed: true } : h)));
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h2 className="text-2xl font-bold mb-6">🏆 Prize History</h2>

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {history.length > 0 ? (
          <ul className="space-y-3">
            {history.map((entry, index) => (
              <li key={index} className="p-3 border-b flex justify-between items-center">
                <div>
                  <span className="font-semibold">{entry.prize}</span> <br />
                  <span className="text-gray-500 text-sm">{entry.date}</span>
                </div>
                {entry.claimed ? (
                  <span className="text-green-600 font-semibold">✅ Claimed</span>
                ) : (
                  <button
                    onClick={() => claimPrize(entry.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Claim
                  </button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No prizes won yet.</p>
        )}
      </div>

      {/* Back to Home Button */}
      <button
        onClick={() => router.push("/")}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
       Back to Live
      </button>
    </div>
  );
}

export default withAuth(PrizeHistory)

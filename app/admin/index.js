"use client"
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      router.push("/"); // Redirect non-admins
    }
  }, [session, status, router]);

  if (status === "loading") return <p>Loading...</p>;

  return <h1>Welcome, Admin</h1>;
}

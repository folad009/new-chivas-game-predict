"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "unauthenticated") {
        router.push("/auth");
      }
    }, [status, router]);

    if (status === "loading") {
      return <div>loading...</div>;
    }

    if (status === "authenticated") {
      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default withAuth;

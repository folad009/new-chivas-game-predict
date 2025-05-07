"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Auth() {
  const { data: session } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  const handleSignOut = () => {
    signOut();
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // clear old errors
  
    if (isAdminLogin) {
      if (!email || !password) {
        setErrorMessage("Email and password are required for admin login!");
        return;
      }
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,  
      });
  
      if (res?.error) {
        setErrorMessage(res.error); 
      }
    } else {
      if (!name || !email) {
        setErrorMessage("Name and email are required!");
        return;
      }
      const res = await signIn("credentials", {
        email,
        name,
        redirect: false,   
      });
  
      if (res?.error) {
        setErrorMessage(res.error); 
      }
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-red-950">
      <div className="w-full max-w-lg bg-red-800 p-6 rounded-lg shadow-lg text-center h-[550px] py-5 mx-5">
        <div className="flex items-center mb-10 mx-auto justify-center gap-5 mt-10">
        <img
          className="w-70"
          src="/assets/img/chivas-regal-logo-white.png"
          alt="Chivas Regal Logo"
        />
        </div>
        
        <h1 className="text-[15px] font-bold mb-6 text-white font-serif">
          {isAdminLogin ? "Admin Login" : "Login"} to Game Predict
        </h1>

        {session ? (
          <div>
            <p className="text-gray-700 mb-4">
              Signed in as {session.user.email}
            </p>
            <button
              onClick={handleSignOut}
              className="w-full bg-green-800 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
            {!isAdminLogin && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 rounded-md text-white border border-white"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-md text-white border border-white"
            />

            {isAdminLogin && (
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded-md text-white border border-white"
              />
            )}

            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-red-950 hover:bg-black cursor-pointer text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
              {isAdminLogin ? "Admin Login" : "Login"}
            </button>

            <p className="mt-4 text-white">
              {isAdminLogin ? "Are you a user?" : "Are you an admin?"}{" "}
              <span
                onClick={() => {
                  setIsAdminLogin(!isAdminLogin);
                  setErrorMessage("");
                  setEmail("");
                  setPassword("");
                  setName("");
                }}
                className="text-white underline font-bold cursor-pointer"
              >
                {isAdminLogin ? "Login as User" : "Login as Admin"}
              </span>
            </p>

            <button className="w-full bg-red-950 hover:bg-black cursor-pointer text-white font-semibold py-2 px-4 rounded transition duration-300 mt-4">
              <a href="/">Go Back Home</a>
            </button>
          </form>
        )}
      </div>
      <div>
        <img
          className="w-[500px] mx-auto"
          src="/assets/img/betway-img-banner-1.png"
          alt="Chivas Logo"
        />
      </div>
    </div>
  );
}

"use client";
import { useAuthStore } from "../AuthStore"; 

export default function Home() {
  const { setIsLoggedIn } = useAuthStore(); // Assuming you have a method to manage login state

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Optionally, redirect the user to the login page or home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="text-center p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">You are logged in.</h1>
        <button
          onClick={handleLogout}
          className="mt-4 px-6 py-2 text-white bg-red-600 rounded-full hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

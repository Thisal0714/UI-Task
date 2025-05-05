"use client";
import Image from "next/image";
import logo from "./logo.png";
import image from "./Image.png";
import { useAuthStore } from "../app/AuthStore"; 
import { useRouter } from 'next/navigation';
import Dashboard from "../app/Dashboard/Dashboard";

export default function Home() {
  const router = useRouter();
  
  const {
    email,
    password,
    error,
    setEmail,
    setPassword,
    setError,
    reset,
  } = useAuthStore();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email !== "test@visionexdigital.com.au" || password !== "password123") {
      setError("Invalid email or password");
    } else {
      setError("");  
      alert("Login successful 🎉");
      reset();
      
    
      router.push('/app/Dashboard/Dashboard');
    }
  };

  return (
    <div className="w-full min-h-screen rounded-xl bg-black p-4 m-1">
      <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-4 flex flex-col items-start mt-5">
          <Image src={logo} alt="logo" className="w-32 h-32 object-contain" />
          <h1 className="text-white mt-6 font-sans text-3xl">Welcome back to Room.me!</h1>
          <p className="text-white mt-4">
            Room.me is an innovative video conference product that revolutionizes virtual meetings.
          </p>

          <div className="mt-6 w-full">
            <form className="w-full" onSubmit={handleLogin}>
              <label htmlFor="email" className="text-white font-semibold">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={`w-full p-3 mt-2 mb-3 rounded-md border-2 focus:outline-none bg-gray-900 ${
                  error ? "border-red-500 text-red-400" : "border-gray-800 text-white"
                }`}
              />

              <label htmlFor="password" className="text-white font-semibold">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={`w-full p-3 mt-2 rounded-md border-2 focus:outline-none bg-gray-900 ${
                  error ? "border-red-500 text-red-400" : "border-gray-800 text-white"
                }`}
              />

              {error && <p className="text-red-500 mt-2 mb-1">{error}</p>}

              <button
                type="submit"
                className="w-full p-3 mt-4 font-semibold text-white rounded-md border-2 border-gray-800 focus:outline-none focus:border-blue-500 hover:opacity-90 cursor-pointer"
                style={{
                  background: "linear-gradient(to right, #8B80FF, #5C53BC)",
                }}
              >
                Sign In
              </button>

              <button
                type="button"
                className="w-full font-semibold p-3 mt-4 text-black rounded-md border-2 border-gray-800 focus:outline-none focus:border-blue-500 hover:opacity-90 cursor-pointer"
                style={{
                  background: "white",
                }}
              >
                Continue with Google
              </button>

              <div className="flex justify-between items-center">
                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label className="text-white font-light">Remember me for 30 days</label>
                </div>

                <div className="flex justify-end mt-2">
                  <button className="text-sm text-purple-400 underline">
                    Forgot password
                  </button>
                </div>
              </div>

              <div className="w-full flex justify-center mt-6">
                <p className="text-white text-center">
                  Doesn’t have an account?{" "}
                  <span className="font-bold underline cursor-pointer">Sign Up</span>
                </p>
              </div>
            </form>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 mt-5 md:mt-0 relative">
          <Image
            src={image}
            alt="Image"
            className="opacity-60 rounded-2xl w-full h-full object-cover"
            style={{
              background: "linear-gradient(to right, #6B61D2, #5C53BC)",
            }}
          />
          <div className="absolute bottom-10 left-0 w-full px-4 flex justify-center">
            <div className="h-auto sm:h-64 backdrop-blur bg-white/10 border border-white/30 rounded-lg p-6 max-w-lg text-white">
              <p className="mb-4 text-lg">
                “We love the screen sharing and whiteboarding features, which have improved our presentations. Room.me has become an essential tool for our team, allowing us to collaborate effectively. Highly recommended!”
              </p>
              <p className="font-semibold text-sm text-white">Sarah Markivoc - Project Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

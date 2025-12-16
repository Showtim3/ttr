"use client";

import { useRouter } from "next/navigation";


export default function LoginPage() {
  const router = useRouter();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/upload')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-white/40">
        
        <h2 className="text-3xl font-semibold text-sky-700 text-center mb-6">
          Welcome Back
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sky-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-sky-50 border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-300 outline-none transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sky-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-sky-50 border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-300 outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium shadow-md transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sky-700 mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-sky-800 font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

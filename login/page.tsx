"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculateStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 6) strength += 1;
    if (password.length >= 10) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[!@#$%^&*]/.test(password)) strength += 1;
    return strength;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(calculateStrength(newPassword));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Welcome to <span className="text-blue-500">4GOOD.AI</span>
        </h1>
        <form className="mt-6 space-y-6">
          {/* Username Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={handlePasswordChange}
            />
            {/* Password Strength Indicator */}
            <div className="h-2 mt-2 bg-gray-300 rounded">
              <div
                className={`h-full rounded transition-all duration-300 ${
                  passwordStrength === 1
                    ? "bg-red-500 w-1/4"
                    : passwordStrength === 2
                    ? "bg-yellow-500 w-2/4"
                    : passwordStrength === 3
                    ? "bg-green-500 w-3/4"
                    : passwordStrength === 4
                    ? "bg-blue-500 w-full"
                    : "bg-gray-300"
                }`}
              ></div>
            </div>
          </div>

          {/* Sign-In Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Sign In
          </button>

          {/* Additional Links */}
          <div className="flex justify-between mt-4 text-sm">
            <Link
              href="/forgot-password"
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Forgot password?
            </Link>
            <Link
              href="/create-account"
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

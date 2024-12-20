"use client";

import React from "react";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Forgot Password
        </h1>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Enter your email address to reset your password.
        </p>
        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

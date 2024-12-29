import React from "react";
import { useNavigate } from "react-router-dom";

const SessionExpired = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/signin"); // Redirect to the signin page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-red-600">Session Expired</h1>
      <p className="text-gray-700 mt-2">Please log in again to continue.</p>
      <button
        onClick={handleLogin}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Sign In
      </button>
    </div>
  );
};

export default SessionExpired;

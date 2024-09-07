import React from 'react';
import { FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
        <FaUser className="text-4xl text-blue-500 mb-4 mx-auto" />
        <h2 className="text-2xl font-bold mb-2">Welcome to the App</h2>
        <p className="text-gray-700 mb-4">Please sign in or sign up to continue.</p>
        <div className="flex flex-col space-y-4">
          <button className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            <FaSignInAlt className="mr-2" /> Sign In
          </button>
          <button className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">
            <FaUserPlus className="mr-2" /> Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

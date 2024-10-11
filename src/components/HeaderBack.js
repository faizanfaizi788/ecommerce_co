import React from 'react';
import logo from '../assets/icons/logo.png'; 
import { useNavigate } from 'react-router-dom';

const HeaderBack = ({ title }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <header className="bg-white shadow-md p-4 flex items-center justify-between relative">
            <button
                onClick={handleBackClick}
                className="rounded-md p-2 text-gray-700 hover:bg-gray-300"
                aria-label="Back"
            >
                {/* Back Icon */}
                <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 6l-6 6 6 6"
                    />
                </svg>
            </button>

            {/* Title - Centered */}
            <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold text-gray-800">
                {title}
            </h1>

            <img
                className="h-14 w-auto ml-4" // Add margin-left for spacing
                src={logo} // Use the imported logo
                alt="Your Company Logo"
            />
        </header>
    );
};

export default HeaderBack;

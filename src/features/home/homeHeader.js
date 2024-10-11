import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/icons/logo.png'; // Import the logo from the assets folder
import { authenticationStatus } from '../authentication/authenticationSlice';
import { USER_NOT_AUTHENTICATED } from '../../constant/userAuthenticationStatus';
import { useDispatch } from 'react-redux';
import { userAdd } from '../user/userSlice';
import { CATEGORY } from '../../navigation/router/routerName';

const HomeHeader = () => {
    const navigate = useNavigate();
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false); // State for profile menu
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        sessionStorage.removeItem('token'); // Remove token from sessionStorage (if used)
        dispatch(authenticationStatus(USER_NOT_AUTHENTICATED));
        dispatch(userAdd({}));
        setProfileMenuOpen(false); // Close the profile menu on logout
    };

    const handleProfileClick = () => {
        console.log("Profile clicked"); // Replace with actual profile functionality
        setProfileMenuOpen(false); // Close the profile menu on profile click
    };

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen); // Toggle profile menu visibility
    };

    const handleSellClick = () => {
        // Implement your logic for selling a product here
        console.log("Sell button clicked");
        navigate(CATEGORY);
    };

    return (
        <div className="min-h-full flex flex-col">
            {/* Header with logo, sell button, and profile button */}
            <header className="bg-white shadow-md p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        className="h-14 w-auto" // Adjust size as needed
                        src={logo} // Use the imported logo
                        alt="Your Company"
                    />
                    <button
                        onClick={handleSellClick}
                        className="flex items-center ml-20 rounded-md px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                        {/* Sell Icon */}
                        <svg className="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Sell
                    </button>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={toggleProfileMenu}
                        className="rounded-md p-2 text-gray-700 hover:bg-gray-300"
                    >
                        {/* Profile Icon */}
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0c-5.33 0-8 2.67-8 8v1h16v-1c0-5.33-2.67-8-8-8z" />
                        </svg>
                    </button>
                    {isProfileMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                            <div className="py-1">
                                <button
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                    onClick={handleProfileClick}
                                >
                                    Profile
                                </button>
                                <button
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>
            {/* Main area can be used for other content if needed */}
            <main className="flex-grow"></main>
        </div>
    );
};

export default HomeHeader;

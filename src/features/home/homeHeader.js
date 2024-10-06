import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCardItemCollection from '../product/ProductCardItemCollection';
import logo from '../../assets/icons/logo.png'; // Import the logo from the assets folder
import AddProductForm from '../product/AddProductForm';

const HomeHeader = () => {
    const navigate = useNavigate();
    const [view, setView] = useState('dashboard'); // State to manage current view
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false); // State for profile menu

    const handleDashboardClick = () => {
        setView('dashboard'); // Set the view to dashboard
    };

    const handleProductsClick = () => {
        setView('products'); // Set the view to products
    };

    const handleLogout = () => {
        // Logic for logging out (e.g., clearing user session, redirecting)
        console.log("Logout clicked"); // Replace with actual logout functionality
        setProfileMenuOpen(false); // Close the profile menu on logout
    };

    const handleProfileClick = () => {
        console.log("Profile clicked"); // Replace with actual profile functionality
        setProfileMenuOpen(false); // Close the profile menu on profile click
    };

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen); // Toggle profile menu visibility
    };

    return (
        <div className="min-h-full">
            <nav className="bg-white shadow-md"> {/* Changed navbar color to white */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-16 w-16" // Adjust size as needed
                                    src={logo} // Use the imported logo
                                    alt="Your Company"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <button
                                        onClick={handleDashboardClick}
                                        className={`rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 ${
                                            view === 'dashboard' ? 'bg-gray-300' : ''
                                        }`}
                                    >
                                        Dashboard
                                    </button>
                                    <button
                                        onClick={handleProductsClick}
                                        className={`rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 ${
                                            view === 'products' ? 'bg-gray-300' : ''
                                        }`}
                                    >
                                        Products
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center relative">
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
                    </div>
                </div>
            </nav>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {view === 'dashboard' ? (
                        <div>
                            <ProductCardItemCollection />
                        </div>
                    ) : (
                        <div>
                            <AddProductForm />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default HomeHeader;

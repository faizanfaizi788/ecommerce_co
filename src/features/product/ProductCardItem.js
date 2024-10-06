import React from 'react';
import { useSelector } from 'react-redux';
import { selectProductById } from './productsSlice';
import { FaPhone, FaInfoCircle } from 'react-icons/fa'; // Import FontAwesome icons

const ProductCardItem = ({ productId }) => {
    // Use the selector to get the product by ID from the Redux store
    const product = useSelector((state) => selectProductById(state, productId));

    // Render the product details if available
    if (!product) {
        return <div className="text-center text-red-500">Product not found</div>;
    }

    // Function to handle Call button click
    const handleCallClick = () => {
        const userMobileNumber = "1234567890"; // Replace with the actual user mobile number or get it from props/state
        window.location.href = `tel:${userMobileNumber}`;
    };

    return (
        <div className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-300 transform hover:scale-105">
            <img
                className="w-full h-48 object-cover"
                src={product.images}
                alt={product.name}
            />
            <div className="px-4 py-4 flex flex-col items-center"> {/* Center align items */}
                <h3 className="font-bold text-lg sm:text-xl text-center">{product.name}</h3> {/* Centered title */}
                <p className="text-green-500 font-semibold text-center mt-2">${product.price}</p> {/* Centered price */}
            </div>
            <div className="px-4 py-4 flex flex-col space-y-4">
                {/* Call button with icon */}
                <button 
                    onClick={handleCallClick} 
                    className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full flex justify-center items-center"
                >
                    <FaPhone className="mr-2" /> Call
                </button>
                {/* Details button with info icon */}
                <button 
                    className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full flex justify-center items-center"
                >
                    <FaInfoCircle className="mr-2" /> Details
                </button>
            </div>
        </div>
    );
};

export default ProductCardItem;

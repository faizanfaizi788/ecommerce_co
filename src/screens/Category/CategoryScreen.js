import React from 'react';
import HeaderBack from '../../components/HeaderBack';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories } from '../../features/categories/categoriesSlice';
import { categoriesIcons } from '../../utils/categoriesIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { SUB_CATEGORY_SCREEN } from '../../navigation/router/routerName';
import { productsAddCategory } from '../../features/product/productsSlice';
import { getRandomGradient } from '../../utils/utilities';
import { ADD_POST } from '../../constant/variables';

function CategoryScreen() {
    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize navigate for navigation


    // Function to handle category selection
    const handleCategorySelect = (category) => {
        // Dispatch the action to add the selected product category ID
        dispatch(productsAddCategory(category));

        // Navigate to the subcategory screen
        navigate(SUB_CATEGORY_SCREEN); // Replace with your actual subcategory route
    };

    return (
        <div>
            <HeaderBack title={ADD_POST}/>
            <div className="flex flex-wrap justify-center p-4">
                {categories.map(category => (
                    <div
                        key={category._id}
                        className="flex flex-col items-center m-4 p-4 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
                        onClick={() => handleCategorySelect(category)} // Add click handler
                    >
                        <div
                            className="flex items-center justify-center rounded-full p-4 transition-all duration-300 transform hover:scale-110"
                            style={{ background: getRandomGradient(), width: '75px', height: '75px' }} // Fixed size for the icon container
                        >
                            <FontAwesomeIcon
                                icon={categoriesIcons[category.iconName]}
                                size="2x"
                                className="text-white transition-transform duration-300 transform hover:rotate-12"
                            />
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-center text-gray-800 transition-colors duration-300 hover:text-blue-500">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryScreen;

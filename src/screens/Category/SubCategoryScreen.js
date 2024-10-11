import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderBack from '../../components/HeaderBack';
import { selectCategoryById } from '../../features/categories/categoriesSlice';
import { get } from 'lodash';
import { getRandomGradient } from '../../utils/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categoriesIcons } from '../../utils/categoriesIcons';
import { productsAddSubCategory } from '../../features/product/productsSlice';
import { PRODUCT } from '../../navigation/router/routerName';
import { useNavigate } from 'react-router-dom';
import { ADD_POST } from '../../constant/variables';

const SubCategoryScreen = () => {
    const products = useSelector((state) => state.products);
    const { productCategory } = products;
    const categoryId = get(productCategory, '_id', '');
    const category = useSelector((state) => selectCategoryById(state, categoryId));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("SubCategoryScreen : category", category);

    // Function to handle subcategory click
    const handleSubcategoryClick = (subcategory) => {
        console.log("Clicked subcategory:", subcategory);
        dispatch(productsAddSubCategory(subcategory));

        // Navigate to the subcategory screen
        navigate(PRODUCT); // Replace with your actual subcategory route
    };

    return (
        <div>
            <HeaderBack title={ADD_POST}/>
            <div className="container mx-auto p-4">
                <div className="flex items-center justify-center mb-6">
                    <FontAwesomeIcon
                        icon={categoriesIcons[category.iconName]}
                        size="2x"
                        className="text-blue-500 transition-transform duration-300 transform hover:scale-110 hover:rotate-12"
                    />
                    <h2 className="text-3xl font-bold text-center ml-2">{category?.name}</h2>
                </div>

                {/* Subcategories List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category?.subcategories?.map((subcategory) => (
                        <div
                            key={subcategory._id}
                            className="p-4 rounded-lg border border-gray-200 bg-white text-black text-center transition-colors duration-300 
                                hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white"
                            onClick={() => handleSubcategoryClick(subcategory)} // Add click handler
                        >
                            <h3 className="text-lg font-semibold">{subcategory.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubCategoryScreen;

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../apis/services/product/productService';
import { addProducts, productsAddCollection } from '../features/product/productsSlice';
import { getCategories } from '../apis/services/categories/categoriesService';
import { categoriesAddMany } from '../features/categories/categoriesSlice';

const useBootstrap = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const userData = useSelector((state) => state.user); // Adjust this path according to your Redux store structure
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  useEffect(() => {
    // Check if userData exists and contains necessary authentication info
    if (userData?.data?._id) {
      console.log("useBootstrap : userData",userData)
      // Fetch products when authenticated
      const getReadyFlow = async () => {
        try {
          const products = await getProducts(); // Call the API to fetch products
          console.log("getReadyFlow : products",products)
          dispatch(productsAddCollection(products)); // Dispatch the products to the Redux store
          const categories = await getCategories();
          dispatch(categoriesAddMany(categories));
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Failed to fetch products:', error.message);
        }
      };

      getReadyFlow(); // Call the function to fetch products
    } else {
      setIsAuthenticated(false);
    }
  
  }, [userData, dispatch]); // Re-run effect when userData or dispatch changes

  return {
    isAuthenticated,
  };
};

export default useBootstrap;

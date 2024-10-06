import client from "../../client/client";

// Get all products
export const getProducts = async () => {
  try {
    const response = await client.get('products'); // Replace with your endpoint for fetching products
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch products');
  }
};

// Add a new product
export const addProduct = async (productData) => {
  try {
    const response = await client.post('products', productData); // Replace with your add product endpoint
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to add product');
  }
};

// Delete a product by ID
export const deleteProduct = async (productId) => {
  try {
    const response = await client.delete(`products/${productId}`); // Replace with your delete endpoint
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete product');
  }
};

// Update a product by ID
export const updateProduct = async (productId, updatedProductData) => {
  try {
    const response = await client.put(`products/${productId}`, updatedProductData); // Replace with your update product endpoint
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update product');
  }
};

// Get product details by ID
export const getProductDetail = async (productId) => {
  try {
    const response = await client.get(`products/${productId}`); // Replace with your product detail endpoint
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch product details');
  }
};

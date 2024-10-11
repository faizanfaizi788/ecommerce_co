import client from "../../client/client";


// Get all categories
export const getCategories = async () => {
    try {
        const response = await client.get('categories');
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch categories');
    }
};

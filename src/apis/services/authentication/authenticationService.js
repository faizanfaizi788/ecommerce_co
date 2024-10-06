import client from "../../client/client";


export const signUp = async (userData) => {
  try {
    const response = await client.post('auth/signup', userData); // Replace with your signup endpoint
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
};

export const signIn = async (credentials) => {
  try {
    const response = await client.post('auth/login', credentials); // Replace with your sign-in endpoint
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
};
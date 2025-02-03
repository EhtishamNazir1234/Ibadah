import axios from "axios";

// const API_BASE_URL = "http://localhost:5000/api/register";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/register",
      userData
    );
    return response.data; // Return the response from the server
  } catch (error) {
    throw error.response?.data?.message || error.message; // Handle errors
  }
};

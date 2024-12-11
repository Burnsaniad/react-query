import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Fetch data function
export const getApi = async () => {
  try {
    const response = await api.get('/posts?_start=&_limit=3'); // Corrected endpoint
    return response.status === 200 ? response.data : [];
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return []; // Return an empty array on error
  }
};
export default getApi;

export const fetchitemsapi = async (id) => {
    try {
      const res = await api.get(`/posts/${id}`); // Corrected endpoint
      return res.status === 200 ? res.data : [];
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return []; // Return an empty array on error
    }
  };
 
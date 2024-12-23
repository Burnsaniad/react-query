import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Fetch data function
export const getApi = async (postNumber) => {
  try {
    const res = await api.get(`/posts?_start=${postNumber}&_limit=3`); // Corrected endpoint
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return []; // Return an empty array on error
  }
};
export default getApi;

  // get post for specefic id
export const fetchitemsapi = async (id) => {
    try {
      const res = await api.get(`/posts/${id}`); // Corrected endpoint
      return res.status === 200 ? res.data : [];
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return []; 
    }
  };

  // Delete Post
  export const deletePost = async (id) => {
      return await api.delete(`/posts/${id}`); 
    }
 
  // Update Post
  export const updatePost = async (id) => {
    return await api.patch(`/posts/${id}`, {title:"I have done"}); 
  }

  //Infinite Scroll
  export const fetchUsers = async ({ pageParam }) => {
    try {
      const res = await axios.get(
        `https://api.github.com/users?per_page=10&page=${pageParam}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
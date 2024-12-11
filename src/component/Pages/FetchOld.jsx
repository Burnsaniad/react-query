import React, { useEffect, useState } from 'react';
import getApi from '../Api/api';


export default function FetchOld() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getApi();
        console.log(res);
        setPosts(res);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError(true);
        setLoading(false); // Ensure loading is false on error
      }
    };

    fetchData();
  }, [posts]);

  if (isLoading) return <p className="text-center text-lg mt-10">Loading posts...</p>;

  if (isError) return <p className="text-center text-red-600 text-lg mt-10">Something went wrong. Please try again later.</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <ul className="grid grid-cols-3 gap-6">
        {posts?.map((post) => {
          const { id, title, body } = post;
          return (
            <li key={id} className="bg-slate-200 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <p className="text-xl font-semibold mb-2">{title}</p>
              <p className="text-sm text-gray-700">{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

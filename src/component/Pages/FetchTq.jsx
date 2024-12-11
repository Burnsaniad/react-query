import React from 'react';
import getApi from '../Api/api';
import { useQuery } from '@tanstack/react-query';



export default function FetchTq() {

    const {data, isLoading, isError, error} = useQuery(
        { queryKey: ['posts'],
          queryFn: getApi
        })

        if (isLoading) return <p className="text-center text-lg mt-10">Loading posts...</p>;
        if (isError) return <p className="text-center text-red-600 text-lg mt-10">Error: {error.message || "Something went wrong. Please try again later"}</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
    <ul className="grid grid-cols-3 gap-6">
      {data?.map((ele) => {
        const { id, title, body } = ele;
        return (
          <li key={id} className="bg-slate-200 p-5 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="text-xl font-semibold mb-2">{title}</p>
            <p className="text-sm text-gray-700">{body}</p>
          </li>
        );
      })}
    </ul>
  </div>
  )
}
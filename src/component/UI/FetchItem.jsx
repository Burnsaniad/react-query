import React from 'react';
import { fetchitemsapi } from '../Api/api';
import { NavLink, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function FetchItem() {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['post', id],
        queryFn: () => fetchitemsapi(id),
    });

    if (isLoading) return <p className="text-center text-lg mt-10 animate-pulse">Loading post...</p>;
    if (isError) return <p className="text-center text-red-600 text-lg mt-10">Error: {error.message || "Something went wrong. Please try again later"}</p>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-slate-50 hover:shadow-md hover:shadow-cyan-800 hover:scale-[1.01] transition-all duration-200 border border-gray-200 rounded-lg shadow-sm p-6">
                <p className="text-sm text-gray-500 mb-2">Post ID: <span className="font-medium text-gray-700">{data.id}</span></p>
                <h1 className="text-2xl font-bold text-gray-800 mb-4">{data.title}</h1>
                <p className="text-gray-700 text-base leading-relaxed">{data.body}</p>
                <NavLink to="/fetchtq">
                <button class="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition">
                Go back
                </button>
                </NavLink>

            </div>
        </div>
    );
}

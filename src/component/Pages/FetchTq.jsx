import React from 'react';
import {getApi} from '../Api/api';
import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';

export default function FetchTq() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['posts'],
        queryFn: getApi,
    });

    if (isLoading) return <p className="text-center text-lg mt-10 animate-pulse">Loading posts...</p>;
    if (isError) return <p className="text-center text-red-600 text-lg mt-10">Error: {error.message || "Something went wrong. Please try again later"}</p>;

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Posts</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.map((ele) => {
                    const { id, title, body } = ele;
                    return (
                        
                            <li className="bg-slate-100 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-200 p-5">
                                <p className="text-gray-500 text-sm mb-1">Post ID: {id}</p>
                                <h2 className="text-xl font-semibold mb-2 text-gray-800 truncate">{title}</h2>
                                <p className="text-sm text-gray-600 line-clamp-3">{body}</p>
                                <NavLink to={`/fetchtq/${id}`} key={id}><span className="inline-block mt-4 text-blue-500 font-medium hover:underline">Read More</span></NavLink>
                            </li>
                        );        
                })}
            </ul>
        </div>
    );
}

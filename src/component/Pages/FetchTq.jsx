import React, { useState } from "react";
import { deletePost, getApi, updatePost } from "../Api/api";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

export default function FetchTq() {
  const [ postNumber, setpostNumber ] = useState(0);
  
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", postNumber],
    queryFn: () => getApi(postNumber),
    placeholderData: keepPreviousData,
  });

  const queryClient = useQueryClient();

  const dltMutation = useMutation({
    mutationFn: (id)=> deletePost(id),
    onSuccess: (data, id) =>{
      queryClient.setQueryData(["posts", postNumber],(currEle) =>{
        return currEle.filter((post) => post.id !== id)
      })
    }
  })

  const updateMutation = useMutation({
    mutationFn: (id)=> updatePost(id),
    onSuccess: (apidata, postid) =>{
      console.log(apidata)
      queryClient.setQueryData(["posts", postNumber],(postData) =>{
        return postData?.map((currpost) =>{
          return currpost.id === postid? {...currpost, title: apidata.data.title} : currpost
        })
      })
    }
  })

  if (isLoading)
    return (
      <p className="text-center text-lg mt-10 animate-pulse">
        Loading posts...
      </p>
    );
  if (isError)
    return (
      <p className="text-center text-red-600 text-lg mt-10">
        Error: {error.message || "Something went wrong. Please try again later"}
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Posts
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((ele) => {
          const { id, title, body } = ele;
          return (
            <li key={id} className="bg-slate-100 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-200 p-5">
              <p className="text-gray-500 text-sm mb-1">Post ID: {id}</p>
              <h2 className="text-xl font-semibold mb-2 text-gray-800 truncate">
                {title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3">{body}</p>
              <div className="flex justify-between"> 
              <NavLink to={`/fetchtq/${id}`} key={id}>
                <span className="inline-block mt-4 text-blue-500 font-medium hover:underline">
                  Read More
                </span>
              </NavLink>
              <button onClick={()=> dltMutation.mutate(id)} className="mt-3 text-red-600 hover:underline">Delete</button>
              <button onClick={()=> updateMutation.mutate(id)} className="mt-3 text-green-600 hover:underline">Update</button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-center space-x-4 p-4 rounded-lg shadow-md">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        onClick={()=> setpostNumber((prev) => prev - 3)}
        disabled={postNumber === 0? true:false}>
          Prev
        </button>
        <h2 className="text-xl font-semibold text-gray-700">{(postNumber/3)+1}</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        onClick={()=> setpostNumber((prev) => prev + 3)}>
          Next
        </button>
      </div>
    </div>
  );
}

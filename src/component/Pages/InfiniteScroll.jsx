import { useInfiniteQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { fetchUsers } from '../Api/api'

export default function InfiniteScroll() {

    const {data, hasNextPage, fetchNextPage, status, isFetchingNextPage} = useInfiniteQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
        getNextPageParam: (lastPage, allPages) => {
            console.log("lastPage", lastPage, allPages);
            return lastPage.length === 10 ? allPages.length + 1 : undefined;
          },
    })

    const handleScroll = () => {
            const bottom =
              window.innerHeight + window.scrollY >=
              document.documentElement.scrollHeight - 1;
      
            if (bottom && hasNextPage) {
              fetchNextPage();
            }
          };
          useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
            },[hasNextPage]);
  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold text-center mb-6">
      Infinite Scroll with React Query v5
    </h1>
  
    {data?.pages?.map((page, index) => (
      <ul key={index} className="space-y-4">
        {page.map((user) => (
          <li
            key={user.id}
            className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-12 h-12 rounded-full mr-4"
            />
            <p className="text-lg font-medium">{user.login}</p>
          </li>
        ))}
      </ul>
    ))}
    <div className="py-6 text-center text-sm text-gray-600">
      {isFetchingNextPage ? (
        "Loading more..."
      ) : hasNextPage ? (
        <span className="cursor-pointer hover:underline">Scroll down to load more</span>
      ) : (
        "No more users"
      )}
    </div>
  </div>  
  )
}

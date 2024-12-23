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
    <div>
    <h1>Infinite Scroll with React Query v5</h1>

    {data?.pages?.map((page, index) => (
      <ul key={index}>
        {page.map((user) => (
          <li
            key={user.id}
            style={{ padding: "10px", border: "1px solid #ccc" }}
          >
            <p>{user.login}</p>
            <img
              src={user.avatar_url}
              alt={user.login}
              width={50}
              height={50}
            />
          </li>
        ))}
      </ul>
    ))}
    <div style={{ padding: "20px", textAlign: "center" }}>
      {isFetchingNextPage
        ? "Loading more..."
        : hasNextPage
        ? "Scroll down to load more"
        : "No more users"}
    </div>
  </div>
   
  )
}

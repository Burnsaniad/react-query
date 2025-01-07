import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {AppLayout, FetchItem, FetchOld, FetchTq, Home } from "./component/index"
import  {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import InfiniteScroll from "./component/Pages/InfiniteScroll";
function App() {

  const queryClient = new QueryClient()
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/fetchold" element={<FetchOld />} />
              <Route path="/fetchtq" element={<FetchTq />} />
              <Route path="/fetchtq/:id" element={<FetchItem />} />
              <Route path="/infinite" element={<InfiniteScroll />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import DynamicQueries from './components/DynamicQueries.page';
import Home from './components/Home.page';
import { InfiniteQueriesPage } from "./components/InfiniteQueries.page";
import MutationPostReq from './components/MutationPostReq';
import ParallelQueriesPage from './components/ParallelQueries.page';
import RQSuperHeroDetail from "./components/RQSuperHeroDetail.page";
import RQSuperHeroes from './components/RQSuperHeroes.page';
import SuperHeroes from './components/SuperHeroes.page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-mutation-post-req">MutationPostReq</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
          <Route
            path="/rq-super-hero/:heroId"
            element={<RQSuperHeroDetail />}
          />
          <Route
            path="/rq-parallel-queries"
            element={<ParallelQueriesPage />}
          />
          <Route
            path="/rq-dynamic-queries"
            element={<DynamicQueries heroIds={[1, 2]} />}
          />
          <Route
            path="/rq-infinite-queries"
            element={<InfiniteQueriesPage />}
          />
          <Route path="/rq-mutation-post-req" element={<MutationPostReq />} />
          <Route path="*" element={<h2> Page Not Found</h2>} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;

import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const fetchSuperHeroes = () => {
        return axios.get("http://localhost:4000/superheroes");
    }

const RQSuperHeroes = () => {

  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching');
  }

  const onError = (error) => {
    console.log('Perform side effect after enountering error');
  }

  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      /**
       * cacheTime - default cacheTime is 5 minutes afterward it's deleted and garbage collected.
       * cacheTime: 3000, // It will preserve data for 3 seconds, afterward it would be deleted and garbage  collected
       *
       * refetchInterval - Refetch the data in background based on time . It also known as polling.
       * refetchInterval: 2000,
       *
       * staleTime - It will preserve the data in cach. it won't be fetched until the time is finished. by default it's 0 second
       * staleTime: 30000 // it will not fetched for 30 seconds
       *
       *
       * refetchOnMount - By default, react query fetch data in every mount , we can control using this property
       * refetchOnMount:false // Now , it won't re fetch on mounting
       *
       * refetchOnWindowFocus - In traditional way when we update data in database it won't update in window until hard reset. But in this property the fetching data will be update automatically based on focus.
       * refetchOnWindowFocus: true,
       *
       *
       * enabled - To disable a query from automatically running, also we can use it using refetch by onClick
       * enabled: false,
       *
       *
       * onSuccess, onError - To handle sideEffect. We can handle login or any types of sideEffect   over using it.
       * onSuccess: onSuccess,
       * onError: onError
       *
       */

      onSuccess: onSuccess,
      onError: onError,
    }
  );


  // FetchData using query custom hooks
  // const jsonUsers = useSuperHeroesData(onSuccess, onError);
  // console.log(jsonUsers.data);
    
    if (isLoading) {
        return <h2> Loading....</h2>
    }
     if (isError) {
       return <h2 style={{ color: "red" }}> {error.message} </h2>;
  }
  if (isFetching){
    return <h2> Refreshing....</h2>
  }
    return (
      <>
        <h2>RQSuperHeroes page</h2>

        {/* <button onClick={refetch}> Refatch</button> */}
        {data?.data.map((hero) => {
          return (
            <div key={hero.id}>
              <Link to={`/rq-super-hero/${hero.id}`}>{hero.name}</Link>
            </div>
          );
        })}
      </>
    );
}

export default RQSuperHeroes
import axios from "axios";
import React from 'react';
import { useQuery } from 'react-query';


const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
}
const fetchFriends = () => {
    return axios.get("http://localhost:4000/friends");
}

const ParallelQueriesPage = () => {
    const {data:superHeroes} = useQuery('super-heroes',fetchSuperHeroes)
    const { data: friends } = useQuery('friends', fetchFriends)
    
    console.log(superHeroes,friends);
  return (
    <div>ParallelQueriesPage</div>
  )
}

export default ParallelQueriesPage
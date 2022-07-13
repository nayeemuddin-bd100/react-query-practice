import axios from "axios";
import { useMutation, useQuery } from "react-query";

const fetchUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes/");
};

const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes/",hero);
}


 export const useUsersData = (onSuccess, onError) => {
  return useQuery("jsonplaceholder-users", fetchUsers, {
    onSuccess,
    onError,
  });
};


 export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("superHeroes", fetchSuperHeroes, {
    onSuccess,
    onError,
  });
};


export const useAddSuperHeroData = () => {
  return useMutation(addSuperHero);
}



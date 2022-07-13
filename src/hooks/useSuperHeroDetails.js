import axios from "axios";
import { useQuery } from 'react-query';


const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
    
}

const useSuperHeroDetails = (heroId) => {
  return useQuery(["super-hero-details", heroId],() => fetchSuperHero(heroId));
};

export default useSuperHeroDetails
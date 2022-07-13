import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicQueries = ({heroIds}) => {
    
    const dynamicData = useQueries(
        heroIds.map((id) => {
            return {
              queryKey: ["super-hero", id],
              queryFn: () => fetchSuperHero(id),
            };
        })
    )

    console.log(dynamicData);

  return <div>DynamicQueries</div>;
};

export default DynamicQueries;

import React from "react";
import { useParams } from "react-router-dom";
import useSuperHeroDetails from "./../hooks/useSuperHeroDetails";

const RQSuperHeroDetail = () => {
  const { heroId } = useParams();
  const { data, isLoading, isError, error } = useSuperHeroDetails(heroId);
  
  
  
 
    
    

  return (
    <>
      <div>RQSuperHeroDetail of {heroId}</div>
      {isLoading && <h2>Loading....</h2>}
      {isError && <h2> {error.message} </h2>}
      {data?.data?.name && <p>Name: {data?.data?.name}</p>}
      {data?.data?.alterEgo && <p>AlterEgo: {data?.data?.alterEgo}</p>}
    </>
  );
};

export default RQSuperHeroDetail;

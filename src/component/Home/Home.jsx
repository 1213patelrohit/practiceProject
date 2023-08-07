import React from "react";
import UseFetch from "../UseFetch";

const Home = () => {
  const { data, loading, error } = UseFetch("https://v2.jokeapi.dev/joke/Any");

  if (loading) return <h1> LOADING.....</h1>;
  if (error) console.log(error);

  return <>
  <h1> {data?.setup}: {data?.delivery}</h1>
  
  </>
}
export default Home;

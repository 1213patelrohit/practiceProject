import { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setsetloading] = useState(false);
  const [error, seterror] = useState(null);
  useEffect(() => {
    setsetloading(true)
    axios
      .get("//v2.jokeapi.dev/joke/Any")
      .then((response) => {
        setdata(response.data);
      })
      .catch((err) => {
        seterror(err);
      })
      .finally(() => {
        setsetloading(false);
      });
  }, [url]);



  return { data, loading, error };
};

export default UseFetch;

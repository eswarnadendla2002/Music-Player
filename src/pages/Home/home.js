import React, { useContext, useState, useEffect } from "react";
import Navbar from "./navbar";
import { MyToken } from "../ContextAPI/context";

const Home = () => {
  const token = useContext(MyToken);
  const [data, setData] = useState("");
  console.log(token);
  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  useEffect(() => {
    if (token) {
      fetch(
        `https://api.spotify.com/v1/artists?ids=4zCH9qm4R2DADamUHMCa6O%2C2FgHPfRprDaylrSRVf1UlN%2C5sSzCxHtgL82pYDvx2QyEU%2C1mYsTxnqsietFxj1OgoGbG%2C12l1SqSNsg2mI2IcXpPWjR%2C2q1LRGJHpFxovU8Tz6OgRn`,
        parameters
      )
        .then((res) => res.json())
        .then((data) => setData(data.artists))
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [token]); // Run the effect whenever token changes

  console.log(data);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;

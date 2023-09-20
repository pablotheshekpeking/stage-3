import React, { useEffect, useState } from "react";
import Card from "./card";
import tmdbApi from "../api"; // Import the tmdbApi instance

const MovieGrid = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await tmdbApi.get("/movie/top_rated", {
          params: {
            page: 1, // Page 1
            language: "en-US", // Language
          },
        });

        const top10Movies = response.data.results.slice(0, 10);

        setCardsData(top10Movies);
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
      }}
    >
      {cardsData.map((movieData) => (
        <Card key={movieData.id} movie={movieData} />
      ))}
    </div>
  );
};

export default MovieGrid;

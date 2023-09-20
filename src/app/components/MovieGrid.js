import React, { useEffect, useState, useRef } from "react";
import Card from "./card";
import tmdbApi from "../api"; // Import the tmdbApi instance

const MovieGrid = () => {
  const [cardsData, setCardsData] = useState([]);
  const [page, setPage] = useState(1); // Track the current page
  const [loading, setLoading] = useState(false); // Track loading state
  const containerRef = useRef(null);

  const fetchMovies = async () => {
    try {
      setLoading(true);

      const response = await tmdbApi.get("/movie/top_rated", {
        params: {
          page,
          language: "en-US",
        },
      });

      const newMovies = response.data.results;

      // Append new movies to the existing data
      setCardsData((prevData) => [...prevData, ...newMovies]);

      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  // Load more movies when scrolling to the bottom of the container
  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 20
      ) {
        fetchMovies();
      }
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchMovies();

    // Attach scroll event listener
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the scroll event listener when unmounting
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        minHeight: "100vh", // Ensure container takes up at least the full viewport height
        overflowY: "auto", // Enable vertical scrolling
      }}
    >
      {cardsData.map((movieData) => (
        <Card key={movieData.id} movie={movieData} />
      ))}

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default MovieGrid;

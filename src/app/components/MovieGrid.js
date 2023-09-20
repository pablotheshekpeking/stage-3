import React, { useEffect, useState, useRef } from "react";
import Card from "./card";
import tmdbApi from "../api";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ItemTypes } from "./ItemTypes"; // Import your item types

const MovieGrid = ({ initialMovies }) => {
  const [cardsData, setCardsData] = useState(initialMovies);
  useEffect(() => {
    setCardsData(initialMovies);
  }, [initialMovies]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
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

      setCardsData((prevData) => [...prevData, ...newMovies]);

      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const moveCard = (fromIndex, toIndex) => {
    const updatedCardsData = [...cardsData];
    const [movedCard] = updatedCardsData.splice(fromIndex, 1);
    updatedCardsData.splice(toIndex, 0, movedCard);
    setCardsData(updatedCardsData);
  };

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
    fetchMovies();

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        ref={containerRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          minHeight: "100vh",
          overflowY: "auto",
          padding: '20px',
        }}
      >
        {cardsData.map((movieData, index) => (
          <Card
            key={movieData.id}
            movie={movieData}
            index={index}
            moveCard={moveCard}
          />
        ))}

        {loading && <p>Loading...</p>}
      </div>
    </DndProvider>
  );
};

export default MovieGrid;

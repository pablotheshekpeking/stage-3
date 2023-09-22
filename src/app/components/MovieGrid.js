import React, { useEffect, useState, useRef } from "react";
import Card from "./card";
import pexelsApi from "../api"; // Import your Pexels API instance
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

      const response = await pexelsApi.get("", {
        params: {
          page,
          per_page: 30, // Adjust the number of images per page as needed
        },
      });

      const newImages = response.data.photos;

      setCardsData((prevData) => [...prevData, ...newImages]);

      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching images:", error);
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
        {cardsData.map((imageData, index) => (
          <Card
            key={imageData.id}
            photo={imageData}
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

'use client'

import React from "react";
import { Box, Img } from '@chakra-ui/react';
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes"; // Define your drag-and-drop item types

const Card = ({ movie, index, moveCard }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  const [, ref] = useDrag({
    type: ItemTypes.CARD,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))}>
      <Box w={'full'} h={['200px', '200px', '400px', '400px']}>
        <Img src={imageUrl} alt={movie.title} mb={'20px'} />
      </Box>
    </div>
  );
};

export default Card;



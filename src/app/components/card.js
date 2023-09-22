'use client'

import React from "react";
import { Box, Img } from "@chakra-ui/react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes"; // Define your drag-and-drop item types

const Card = ({ photo, index, moveCard }) => {
   // Assuming 'photo' object contains the image source URL

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
      <Box w={"full"} h={["200px", "200px", "400px", "400px"]}>
        <Img src={'https://api.pexels.com/v1/curated?per_page=1'} alt={photo.photographer} mb={"20px"} />
      </Box>
    </div>
  );
};

export default Card;




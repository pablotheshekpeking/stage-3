'use client'

import { Text, Heading, Stack, Box, Img, Show } from "@chakra-ui/react";
import React, { useState } from "react";

const Card = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
      <Box mb={'20px'} w={'full'} h={['200px', '200px', '400px', '400px']}>
        <Img src={imageUrl} alt={movie.title} />
      </Box>
  );
}

export default Card;


'use client'

import { Text, Heading, Stack, Box, Img, Show } from "@chakra-ui/react";
import React, { useState } from "react";

const Card = ({ movie }) => {


  return (
      <Stack direction={'column'} data-testid="movie-card">
        <Box
          mb={'20px'}
          w={'full'}
          h={['200px', '200px', '400px', '400px']}
        >
          <Img src="`url(https://image.tmdb.org/t/p/original${movie.poster_path})`" />
        </Box>
      </Stack>
  );
}

export default Card;

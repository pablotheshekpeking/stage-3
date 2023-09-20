'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Stack, Box } from '@chakra-ui/react';
import Navbar from '../components/navbar';
import No1 from '../components/img1';
import No2 from '../components/img2';
import No3 from '../components/img3';
import No4 from '../components/img4';
import SearchBar from '../components/searchbar';
import MovieGrid from '../components/MovieGrid';

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Navbar />
        <SearchBar />
        {/**<Stack direction={'row'} p={'20px'}>
          <Box w={'25%'}><No1 /></Box>
          <Box w={'25%'}><No2 /></Box>
          <Box w={'25%'}><No3 /></Box>
          <Box w={'25%'}><No4 /></Box>
          </Stack>*/}
          <MovieGrid />
      </ChakraProvider>
    </CacheProvider>
  );
}

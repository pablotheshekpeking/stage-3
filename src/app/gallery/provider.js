'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Stack, Box } from '@chakra-ui/react';
import Navbar from '../components/navbar';
import No1 from '../components/img1';
import No2 from '../components/img2';

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Navbar />
        <Stack direction={'row'}>
          <Box><No1 /></Box>
          <Box><No2 />  </Box>
        </Stack>
      </ChakraProvider>
    </CacheProvider>
  );
}

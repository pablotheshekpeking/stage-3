'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/navbar';

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
    </CacheProvider>
  );
}

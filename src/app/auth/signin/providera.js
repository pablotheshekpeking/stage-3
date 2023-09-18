'use client';

import Form from '@/app/components/form';
import { Stack, Box } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export function ProvidersA({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
      <Stack direction={['column', 'column', 'row', 'row']} className="body" w={'100%'}>
                <Box className="form" w={['100%', '100%', '50%', '50%']} m={'auto'} pr={[]}>
                    <Form />
                </Box>
                <Box className="css" display={['none', 'none', 'block', 'block']} w={['0px', '0px', '50%', '50%']}></Box>
            </Stack>
      </ChakraProvider>
    </CacheProvider>
  );
}

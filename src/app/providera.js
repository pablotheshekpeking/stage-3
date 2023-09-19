'use client';

import Form from '@/app/components/form';
import styles from '../app/page.module.css';
import { Stack, Box, Text } from '@chakra-ui/react';
import Link from "next/link";
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export function ProvidersA({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>

        {/** header */}
        <Stack bg={'blue.400'} p={'20px'} w={'100%'}>
          <Link href={'../'}><Text textAlign={'center'} color={'white'}>Drag & Drop Image Gallery</Text></Link>
        </Stack>

        {/** form */}
        <Stack direction={['column', 'column', 'row', 'row']} className="body" w={'100%'}>
          <Box className="form" w={['100%', '100%', '50%', '50%']} m={'auto'}>
            <Form />
          </Box>
          <Box className={styles.css} display={['none', 'none', 'block', 'block']} w={['0px', '0px', '50%', '50%']} minH={'100vh'}></Box>
        </Stack>
      </ChakraProvider>
    </CacheProvider>
  );
}

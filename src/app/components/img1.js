'use client'

import { Stack, Box, Img } from '@chakra-ui/react';
import React from 'react';

const No1 = () => {
    return ( 
        <Stack w={'100%'} p={'20px'}>
            <Box w={'50%'}></Box>
            <Box w={'50%'} float={'right'}>
                <Img src='/assets/img1.png' w={'100%'} h={'auto'} />
            </Box>
        </Stack>
     );
}
 
export default No1;
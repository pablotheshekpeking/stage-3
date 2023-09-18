'use client'

import React from "react";
import {
    Stack,
    Box,
    Text,
    Button
} from '@chakra-ui/react'
import Link from "next/link";
const Navbar = () => {
    return ( 
        <Stack direction={'row'} bg={'blue.400'} p={'20px'}>
            <Box className="Heading" w={'75%'}>
            <Link href={'../'}><Text textAlign={'center'} color={'white'}>Drag & Drop Image Gallery</Text></Link>
            </Box>
            <Box w={'25%'}>
                <Link href={'../signin'}><Button>Sign In</Button></Link>
            </Box>
        </Stack>
     );
}
 
export default Navbar;
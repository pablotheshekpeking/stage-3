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
        <Stack direction={'row'}>
            <Box className="Heading" w={'50%'}>
            <Link href={'../'}><Text>Drag & Drop Image Gallery</Text></Link>
            </Box>
            <Box w={'50%'}>
                <Link href={'../signin'}><Button>Sign In</Button></Link>
            </Box>
        </Stack>
     );
}
 
export default Navbar;
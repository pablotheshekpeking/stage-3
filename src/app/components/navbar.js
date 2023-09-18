'use client'

import React from "react";
import {
    Stack,
    Box,
    Text
} from '@chakra-ui/react'
import Link from "next/link";
const Navbar = () => {
    return ( 
        <Stack direction={'row'}>
            <Box className="Heading">
                <Text>Drag & Drop Image Gallery</Text>
            </Box>
            <Box>
                <Text>Sign In</Text>
                <Link href={'../signin'}></Link><Text>Sign Up</Text>
            </Box>
        </Stack>
     );
}
 
export default Navbar;
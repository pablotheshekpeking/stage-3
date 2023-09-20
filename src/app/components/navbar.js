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
            <Text textAlign={'center'} color={'white'} m={'auto'}><Link href={'../gallery'}>Drag & Drop Image Gallery</Link></Text>
            </Box>
            <Box w={'25%'}>
                <Link href={'../'}><Button>Logout</Button></Link>
            </Box>
        </Stack>
     );
}
 
export default Navbar;
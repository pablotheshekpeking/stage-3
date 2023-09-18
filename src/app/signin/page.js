'use client'

import { Stack, Box, Text, Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import Form from "../components/form";
import Link from "next/link";
import React from 'react';


const Signin = () => {
    return (
        <>
            <Stack bg={'blue.400'} p={'20px'} w={'100%'}>
                <Link href={'../'}><Text textAlign={'center'} color={'white'}>Drag & Drop Images</Text></Link>
            </Stack>

            <Stack direction={'row'} className="body" w={'100%'}>
                <Box className="form" w={['100%', '100%', '50%', '50%']} m={'auto'}>
                    <Form />
                </Box>
                <Box className="css" w={['0%', '0%', '50%', '50%']} display={['none', 'none', 'inline', 'inline']}></Box>
            </Stack>
        </>

    );
}

export default Signin;
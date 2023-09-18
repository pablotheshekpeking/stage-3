'use client'

import { Stack, Box, Text, Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import React from 'react';
import Navbar from "../components/navbar";
import Form from "../components/form";


const Signin = () => {
    return (
        <>
            <Navbar />
            <Stack direction={'row'} className="body" w={'100%'}>
                <Box className="form" w={'50%'} m={'auto'}>
                    <Form />
                </Box>
                <Box className="css" w={'50%'} display={['none', 'none', 'inline', 'inline']}></Box>
            </Stack>
        </>

    );
}

export default Signin;
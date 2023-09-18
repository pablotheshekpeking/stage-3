'use client'

import { Stack, Box, Text, Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import Form from "../../components/form";
import Link from "next/link";
import React from 'react';
import { ProvidersA } from "./providera";


const Signin = () => {
    return (
        <div>
            <Stack bg={'blue.400'} p={'20px'} w={'100%'}>
                <Link href={'../'}><Text textAlign={'center'} color={'black'}>Drag & Drop Images</Text></Link>
            </Stack>

            <ProvidersA />
        </div>

    );
}

export default Signin;
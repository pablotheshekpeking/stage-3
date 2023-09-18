'use client'

import { Stack, Box, Text, Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import Navbar from "../components/navbar";

function PasswordInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
const Signin = () => {
    return (
        <>
            <Navbar />
            <Stack direction={'row'} className="body" w={'100%'}>
                <Box className="form" w={'50%'} m={'auto'}>
                    <InputGroup>
                        <Text>Username: </Text>
                        <Input placeholder='Enter Username' />
                    </InputGroup>

                    <InputGroup>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <Button colorScheme='blue' w={'100%'}>Button</Button>
                </Box>
                <Box className="css" w={'50%'}></Box>
            </Stack>
        </>

    );
}
}

export default Signin;
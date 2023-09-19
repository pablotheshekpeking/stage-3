// SearchBar.js
'use client'
import React, { useState } from 'react';
import { Input, Button, Stack, Box } from '@chakra-ui/react';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div>
            <Stack direction={'row'} m={'auto'}>
                <Box w={'80%'}>
                    <Input
                        type="text"
                        placeholder="Search by ID"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Box>
                <Box w={'20%'}>
                    <Button onClick={handleSearch}>Search</Button>
                </Box>
            </Stack>
        </div>
    );
};

export default SearchBar;

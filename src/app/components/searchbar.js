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
            <Stack direction={'row'} m={'auto'} p={'20px'}>
                <Box w={['80%', '80%', '90%', '90%']}>
                    <Input
                        type="text"
                        placeholder="Search by ID"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Box>
                <Box w={['20%', '20%', '10%', '10%']}>
                    <Button onClick={handleSearch}>Search</Button>
                </Box>
            </Stack>
        </div>
    );
};

export default SearchBar;

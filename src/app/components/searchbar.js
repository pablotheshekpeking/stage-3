// SearchBar.js
'use client'

// components/Search.js
import React, { useState } from 'react';
import { Stack, Box, Input, Button } from '@chakra-ui/react';
import axios from 'axios';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie`,
                {
                    params: {
                        api_key: '259375f90a3851d4993f308d06743823',
                        query,
                    },
                }
            );

            const movies = response.data.results;
            onSearch(movies);
        } catch (error) {
            console.error('Error searching for images:', error);
        }
    };

    return (
        <div>
            <Stack direction={'row'} m={'auto'} p={'20px'}>
                <Box w={['80%', '80%', '90%', '90%']}>
                    <Input
                        type="text"
                        placeholder="Search for images with title..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </Box>
                <Box w={['20%', '20%', '10%', '10%']}>
                    <Button onClick={handleSearch}>Search</Button>
                </Box>
            </Stack>
        </div>
    );
};

export default Search;


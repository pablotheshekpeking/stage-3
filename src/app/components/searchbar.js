// SearchBar.js
'use client'
import React, { useState } from 'react';
import { Input, Button } from '@chakra-ui/react';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div>
            <Input
                type="text"
                placeholder="Search by ID"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
        </div>
    );
};

export default SearchBar;

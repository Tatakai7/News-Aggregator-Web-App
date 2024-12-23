import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="flex justify-center my-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for news..."
                className="border rounded-l px-4 py-2 w-1/2"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-4 py-2 rounded-r"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;

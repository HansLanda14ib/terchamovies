import React from 'react';
import {useAppContext} from '../stateManagment/context';
import Search from "antd/es/input/Search"; // Ensure the correct path

const SearchBox = () => {
    const {searchType, isLoading, getMoviesDetails, getTvShowDetails, searchInput, handleChange} = useAppContext();

    const handleSearch = () => {
        if (searchType === 'shows') return getTvShowDetails(searchInput);
        else getMoviesDetails(searchInput);

    };

    return (

        <Search
            value={searchInput}
            placeholder="Search movie of tvshow title..."
            onChange={(e) => handleChange(e.target.value)}
            onSearch={handleSearch}
            enterButton="Search"
            size="large"
            loading={isLoading}
        />

    );
};

export default SearchBox;

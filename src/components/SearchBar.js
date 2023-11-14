// components/SearchBar.js
import {useState} from 'react';
import Search from "antd/es/input/Search";

const SearchBar = ({searchMovie,loading}) => {
    const [movieTitle, setMovieTitle] = useState('');

    const handleSearch = () => {
        // Call the function to search for the movie using OMDB API
        searchMovie(movieTitle);
    };

    return (
        <Search
            value={movieTitle}
            placeholder="Search movie title..."
            onChange={(e) => setMovieTitle(e.target.value)}
            onSearch={handleSearch}
            enterButton="Search"
            size="large"
            loading={loading}
        />
    );
};

export default SearchBar;

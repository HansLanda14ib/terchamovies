// pages/index.js
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieBox from '../components/MovieBox';
import axios from 'axios';

const Home = () => {
    const [vidsrcLink, setVidSrcLink] = useState('');

    const searchMovie = async (movieTitle) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=[yourkey]&s=${movieTitle}`);

            // Assuming the first search result is the desired movie
            const movieID = response.data.Search[0].imdbID;

            // Construct the vidsrc link using the movie ID
            const vidsrcURL = `https://vidsrc.to/embed/movie/${movieID}`;

            // Set the vidsrc link to the state to display the video
            setVidSrcLink(vidsrcURL);
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    };

    return (
        <div>
            <SearchBar searchMovie={searchMovie} />
            {vidsrcLink && <MovieBox vidsrcLink={vidsrcLink} />}
        </div>
    );
};

export default Home;

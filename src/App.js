import React, {useState} from 'react';
import {Layout, theme} from 'antd';
import axios from "axios";
import MovieBox from "./components/MovieBox";
import SearchBar from "./components/SearchBar";
import MovieDetail from "./components/MoviesDetail";

const {Header, Content, Footer} = Layout;
const apiKey = process.env.REACT_APP_OMDB_API_KEY;
const App = () => {
    const [vidsrcLink, setVidSrcLink] = useState('');
    const [loading, setLoading] = useState(false);
    const [movieDetails, setMovieDetails] = useState(null);
    const searchMovie = async (movieTitle) => {
        setLoading(true); // Start loading
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`);
            const movieData = response.data.Search[0];
            const {Title, Poster, Year} = movieData;

            // Set movie details for MovieDetail component
            setMovieDetails({title: Title, poster: Poster, year: Year});

            // Assuming the first search result is the desired movie
            const movieID = response.data.Search[0].imdbID;
            setTimeout(() => {
                // Construct the vidsrc link using the movie ID
                const vidsrcURL = `https://vidsrc.to/embed/movie/${movieID}`;
                // Set the vidsrc link to the state to display the video
                setVidSrcLink(vidsrcURL);
                setLoading(false); // Start loading
            }, 300);


        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    };

    const {
        token: {colorBgContainer},
    } = theme.useToken();
    return (
        <Layout>

            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <SearchBar searchMovie={searchMovie} loading={loading}/>
            </Header>
            <Content className="site-layout">
                <div
                    style={{
                        minHeight: 700,
                        background: colorBgContainer,
                    }}
                >
                    {vidsrcLink && movieDetails && <MovieDetail {...movieDetails} />}
                    {vidsrcLink && <MovieBox vidsrcLink={vidsrcLink}/>}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    position: 'sticky',
                }}
            >
                Tercha Streaming ©2023 Created by Hans Landa 14
            </Footer>
        </Layout>
    );
};
export default App;
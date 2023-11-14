import React, {useState} from 'react';
import {Layout, theme} from 'antd';
import axios from "axios";
import MovieBox from "./components/MovieBox";
import MyLayout from './components/Layout';
import {HomeTwoTone} from "@ant-design/icons";

const {Header, Content, Footer} = Layout;

const App = () => {
    const [vidsrcLink, setVidSrcLink] = useState('');
    const [loading, setLoading] = useState(false);

    const searchMovie = async (movieTitle) => {
        setLoading(true); // Start loading
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=8d60962f&s=${movieTitle}`);

            // Assuming the first search result is the desired movie
            const movieID = response.data.Search[0].imdbID;
            setTimeout(() => {
                // Construct the vidsrc link using the movie ID
                const vidsrcURL = `https://vidsrc.to/embed/movie/${movieID}`;
                // Set the vidsrc link to the state to display the video
                setVidSrcLink(vidsrcURL);
                setLoading(false); // Start loading
            }, 2000);


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
                <div className="demo-logo">
                    <HomeTwoTone/>
                </div>

            </Header>
            <Content
                className="site-layout"
                style={{
                    padding: '0 50px',
                }}
            >
                <div
                    style={{
                        padding: 24,
                        minHeight: 580,
                        background: colorBgContainer,
                    }}
                >
                    <MyLayout searchMovie={searchMovie} loading={loading}>
                        <div>
                            {vidsrcLink && <MovieBox vidsrcLink={vidsrcLink}/>}
                        </div>
                    </MyLayout>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Tercha Streaming ©2023 Created by Hans Landa 14
            </Footer>
        </Layout>
    );
};
export default App;
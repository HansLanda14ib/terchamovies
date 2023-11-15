import React, {useState} from 'react';
import {Layout, Menu} from 'antd';
import Movies from './components/Movies';
import TVShows from './components/TVShows';
import {useAppContext} from "./stateManagment/context";
import SearchBar from "./components/SearchBar";
import MovieDetail from "./components/MoviesDetail";
import {Content} from "antd/es/layout/layout";

const {Header, Footer} = Layout;

const items = [
    {
        label: 'Movies',
        key: 'movies',
    },
    {
        label: 'TV Shows',
        key: 'shows',
    },
    {
        label: (
            <a href="https://github.com/hanslanda14ib" target="_blank" rel="noopener noreferrer">
                Contact me
            </a>
        ),
        key: 'alipay',
    },
];

const App = () => {
    const {title, clearValues, toMovie, toTvShow} = useAppContext();
    const [current, setCurrent] = useState('movies');
    const onClick = (e) => {
        if (current !== e.key) {
            if (e.key === 'shows') toTvShow();
            if (e.key === 'movies') toMovie();
            setCurrent(e.key);
            clearValues(); // Call clearValues when toggling between sections
        }
    };

    const renderContent = () => {
        switch (current) {
            case 'movies':
                return <Movies/>;
            case 'shows':
                return <TVShows/>;
            default:
                return null;
        }
    };


    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{flex: 1}}>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal"
                          style={{color:'white', background: 'none', border: 'none'}}
                    >
                        {items.map((item) => (
                            <Menu.Item key={item.key}>{item.label}</Menu.Item>
                        ))}
                    </Menu>
                </div>
                <div style={{ flex: 3, display: 'flex', justifyContent: 'center' }}>
                    <SearchBar style={{ margin: '0 auto' }}/>
                </div>
            </Header>

            <Content style={{padding: '0 50px'}}>
                <div
                    style={{
                        padding: 24,
                        minHeight: 580,
                        background: '#fff',
                    }}
                >
                    {title && <MovieDetail/>}
                    {renderContent()}
                </div>
            </Content>

            <Footer style={{textAlign: 'center', position: 'sticky', bottom: 0}}>
                Tercha Streaming ©2023 Created by Hans Landa 14
            </Footer>
        </Layout>
    );
};

export default App;
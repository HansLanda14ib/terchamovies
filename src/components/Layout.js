// components/Layout.js
import React from 'react';
import SearchBar from './SearchBar';

const MyLayout = ({children, searchMovie, loading}) => {
    return (
        <div>
            <header>
                <SearchBar searchMovie={searchMovie} loading={loading}/>
            </header>
            <main>{children}</main>
            <footer>{/* Footer content */}</footer>
        </div>
    );
};

export default MyLayout;

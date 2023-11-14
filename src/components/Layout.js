// components/Layout.js
import React from 'react';
import SearchBar from './SearchBar';

const MyLayout = ({children, searchMovie, loading}) => {
    return (
        <div>
            <SearchBar searchMovie={searchMovie} loading={loading}/>
            <main>{children}</main>

        </div>
    );
};

export default MyLayout;

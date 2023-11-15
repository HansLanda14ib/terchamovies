import React, {useReducer, useContext} from 'react';
import streamingReducer from './reducer';
import {
    CLEAR_VALUES,
    GET_STREAMS_BEGIN,
    GET_STREAMS_ERROR,
    GET_STREAMS_SUCCESS,
    GET_TVSHOW_BEGIN, GET_TVSHOW_ERROR, GET_TVSHOW_SUCCESS,
    HANDLE_CHANGE, TOGGLE_TO_MOVIE, TOGGLE_TO_TVSHOW
} from "./actions";
import axios from "axios";

const apiKey = process.env.REACT_APP_OMDB_API_KEY;
const initialState = {
    isLoading: false,
    searchInput: '',
    searchType: 'movies',
    title: '',
    year: 2020,
    type: "",
    poster: "",
    url: '',
    error: null,
}

const StreamingContext = React.createContext(undefined);
export const StreamingProvider = ({children}) => {
    const [state, dispatch] = useReducer(streamingReducer, initialState)

    const getMoviesDetails = async (title) => {
        dispatch({type: GET_STREAMS_BEGIN})
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${title}&type=movie`);
            const movieDetails = response.data.Search[0];
            console.log(movieDetails)
            const {Title, Year, imdbID, Type, Poster} = movieDetails;
            const url = `https://vidsrc.to/embed/movie/${movieDetails.imdbID}`
            dispatch({type: GET_STREAMS_SUCCESS, payload: {Title, Year, imdbID, Type, Poster, url}})
        } catch
            (error) {
            dispatch({type: GET_STREAMS_ERROR, payload: error})
        }
    }
    const getTvShowDetails = async (title) => {
        dispatch({type: GET_TVSHOW_BEGIN})
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${title}&type=series`);
            const tvshowDetails = response.data.Search[0];
            console.log(tvshowDetails)
            const {Title, Year, imdbID, Type, Poster} = tvshowDetails;
            const url = `https://vidsrc.to/embed/tv/${tvshowDetails.imdbID}`
            console.log('SHOW SHOW SHOW SHOW THINGS')
            dispatch({type: GET_TVSHOW_SUCCESS, payload: {Title, Year, imdbID, Type, Poster, url}})
        } catch
            (error) {
            dispatch({type: GET_TVSHOW_ERROR, payload: error})
        }
    }
    const handleChange = (value) => {
        dispatch({type: HANDLE_CHANGE, payload: value});
    };
    const clearValues = () => {
        dispatch({type: CLEAR_VALUES});
    };
    const toMovie = () => {
        dispatch({type: TOGGLE_TO_MOVIE});
    }
    const toTvShow = () => {
        dispatch({type: TOGGLE_TO_TVSHOW});
    }
    return (
        <StreamingContext.Provider value={{
            ...state,
            getMoviesDetails,
            handleChange,
            clearValues,
            getTvShowDetails,
            toMovie,
            toTvShow
        }}>
            {children}
        </StreamingContext.Provider>
    )
}
// make sure use
export const useAppContext = () => {
    return useContext(StreamingContext);
};

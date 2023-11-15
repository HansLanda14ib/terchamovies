import {
    CLEAR_VALUES,
    GET_STREAMS_BEGIN,
    GET_STREAMS_ERROR,
    GET_STREAMS_SUCCESS, GET_TVSHOW_BEGIN, GET_TVSHOW_ERROR,
    GET_TVSHOW_SUCCESS,
    HANDLE_CHANGE, TOGGLE_TO_MOVIE, TOGGLE_TO_TVSHOW
} from "./actions";


const streamingReducer = (state, action) => {
    switch (action.type) {
        case GET_STREAMS_BEGIN:
            return {
                ...state,
                isLoading: true,
            };
        case GET_STREAMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                title: action.payload.Title,
                year: action.payload.Year,
                type: action.payload.Type,
                poster: action.payload.Poster,
                url: action.payload.url

            };
        case GET_STREAMS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        case GET_TVSHOW_BEGIN:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TVSHOW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                title: action.payload.Title,
                year: action.payload.Year,
                type: action.payload.Type,
                poster: action.payload.Poster,
                url: action.payload.url,

            };
        case GET_TVSHOW_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        case HANDLE_CHANGE:
            return {
                ...state,
                searchInput: action.payload,
            };
        case CLEAR_VALUES:
            return {
                ...state,
                searchInput: '',
                title: '',
                year: 0,
                type: "",
                poster: "",
                url: '',
            };
        case TOGGLE_TO_MOVIE:
            return {
                ...state,
                searchType: "movies"
            };
        case TOGGLE_TO_TVSHOW:
            return {
                ...state,
                searchType: "shows"
            };
        default:
            return state;
    }
};

export default streamingReducer;

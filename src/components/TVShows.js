// TVShows.js
import React from 'react';
import {useAppContext} from "../stateManagment/context";

const playerStyle = {
    width: '100%',
    height: '0',
    paddingBottom: '56.25%', // 16:9 aspect ratio (9 divided by 16 = 0.5625 or 56.25%)
    position: 'relative',
    overflow: 'hidden',
};

const iframeStyle = {
    border: 'none',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
};

const TVShows = () => {
    const {url} = useAppContext();
    return (
        <div style={playerStyle}>
            {url && <iframe
                allowFullScreen={true}
                src={url}
                style={iframeStyle}
            ></iframe>}

        </div>
    );
};

export default TVShows;

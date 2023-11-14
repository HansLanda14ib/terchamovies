// components/MovieBox.js
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

const MovieBox = ({vidsrcLink}) => {
    return (
        <div style={playerStyle}>
            <iframe
                allowFullScreen={true}
                src={vidsrcLink}
                style={iframeStyle}
            ></iframe>
        </div>
    );
};

export default MovieBox;

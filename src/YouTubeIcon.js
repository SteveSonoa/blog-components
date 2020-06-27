import React from 'react';
import PropTypes from 'prop-types';
import './YouTubeIcon.css';

export const YouTubeIcon = ({className}) => (
    <img
        className={`youtube-icon ${className}`}
        src='/yt_icon_rgb.png'
        alt='YouTube Video'
    />
);

YouTubeIcon.propTypes = {
    className: PropTypes.string,
};

YouTubeIcon.defaultProps = {
    className: '',
};

export default YouTubeIcon;

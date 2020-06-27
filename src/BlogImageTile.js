import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import YouTubeIcon from './YouTubeIcon';
import './BlogImageTile.css';

const NoImage = () => (
    <div
        style={{
            height: '100%',
            width: '100%',
            background: '#595959',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: '900',
        }}
    />
);

const whenText = {
    before: 'Before You Go',
    during: "While You're Here",
    after: 'Magic That Lasts',
    ssr: 'Sixty Second Recollection',
};

export const BlogImageTile = (props) => {
    const handleShare = (e) => {
        e.preventDefault();
    };

    return (
        <Link to={props.to} className={`blog-image-tile ${props.when}`}>
            {props.isHeaderVisible && (
                <div className='when-text'>{whenText[props.when]}</div>
            )}
            {props.isShareable && (
                <button className='share' onClick={handleShare}>
                    <i className='fas fa-share' />
                    Share
                </button>
            )}
            {props.title && (
                <div className='text-overlay'>
                    {props.cats.length > 0 && (
                        <div className='categories'>
                            {props.cats.map((cat) => (
                                <span className='category' key={cat}>
                                    {cat}
                                </span>
                            ))}
                        </div>
                    )}
                    <div className='title'>{props.title}</div>
                </div>
            )}
            {props.isYouTube && <YouTubeIcon className='blog-list-yt-icon' />}
            {props.src ? (
                <img src={props.src} alt={props.title} />
            ) : (
                <NoImage />
            )}
        </Link>
    );
};

BlogImageTile.propTypes = {
    cats: PropTypes.arrayOf(PropTypes.string),
    isHeaderVisible: PropTypes.bool,
    isShareable: PropTypes.bool,
    isYouTube: PropTypes.bool,
    src: PropTypes.string,
    title: PropTypes.string,
    to: PropTypes.string,
    when: PropTypes.oneOf(['before', 'during', 'after']),
};

BlogImageTile.defaultProps = {
    cats: [],
    isHeaderVisible: false,
    isYouTube: false,
    src: null,
    title: 'RideTheTeacups.com Article',
    to: '#',
    when: '',
};

export default BlogImageTile;

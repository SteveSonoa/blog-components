import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './BlogImageTile.css';

const NoImage = () => (
    <div
        style={{
            height: '300px',
            width: '400px',
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
};

export const BlogImageTile = (props) => (
    <div className={`blog-image-tile ${props.when}`}>
        {props.when && <div className='when-text'>{whenText[props.when]}</div>}
        {props.to && <button className='share'>Share</button>}
        {props.title && (
            <Link className='text-overlay' to={props.to}>
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
            </Link>
        )}
        {props.src ? <img src={props.src} alt={props.title} /> : <NoImage />}
    </div>
);

BlogImageTile.propTypes = {
    cats: PropTypes.arrayOf(PropTypes.string),
    src: PropTypes.string,
    title: PropTypes.string,
    to: PropTypes.string,
    when: PropTypes.oneOf(['before', 'during', 'after']),
};

BlogImageTile.defaultProps = {
    cats: [],
    src: null,
    title: 'RideTheTeacups.com Article',
    to: '#',
    when: '',
};

export default BlogImageTile;

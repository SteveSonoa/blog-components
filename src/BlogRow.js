import React, {useEffect, useState} from 'react';
import BlogImageTile from './BlogImageTile';

export const BlogRow = ({title}) => {
    const [page, setPage] = useState(1);
    const [style, setStyle] = useState({
        transform: 'translateX(0)',
    });

    useEffect(() => {
        setStyle({
            transform: `translateX(calc(((368px + 15px) * -4) * ${page - 1}))`,
        });
    }, [page]);

    return (
        <div className='scrolling-row-with-title'>
            <h2>{title}</h2>
            <div className='row-container'>
                {page > 1 && (
                    <button
                        onClick={() => setPage(page - 1)}
                        className='row-nav prev'
                    >
                        Back
                    </button>
                )}
                <div className='entries' style={style}>
                    <BlogImageTile
                        isShareable
                        isHeaderVisible
                        to='#'
                        cats={['one', 'two']}
                        when='after'
                        title="This Is An Amazing Title! You Won't Believe Your Eyes!!!"
                    />
                    <BlogImageTile
                        isShareable
                        isHeaderVisible
                        isYouTube
                        to='#'
                        cats={['one', 'two']}
                        when='before'
                    />
                    <BlogImageTile
                        isShareable
                        // isHeaderVisible
                        to='#'
                        when='ssr'
                        title='Kacy Wins Big!'
                    />
                    <BlogImageTile
                        isShareable
                        isHeaderVisible
                        to='#'
                        cats={['one', 'two']}
                        when='during'
                    />
                    <BlogImageTile
                        isShareable
                        isHeaderVisible
                        isYouTube
                        to='#'
                        cats={['one', 'two']}
                        when='after'
                    />
                    <BlogImageTile
                        isShareable
                        isHeaderVisible
                        to='#'
                        cats={['one', 'two']}
                        when='during'
                    />
                </div>
                <button
                    onClick={() => (page < 2 ? setPage(page + 1) : null)}
                    className='row-nav next'
                >
                    {page < 2 ? 'Next' : 'See All'}
                </button>
            </div>
        </div>
    );
};

export default BlogRow;

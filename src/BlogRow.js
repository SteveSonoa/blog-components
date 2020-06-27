import React, {useState} from 'react';
import BlogImageTile from './BlogImageTile';

export const BlogRow = ({title}) => {
    const [page, setPage] = useState(1);

    return (
        <>
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
                <div className={`entries page${page}`}>
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
        </>
    );
};

export default BlogRow;

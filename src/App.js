import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
// import './App.css';
import BlogImageTile from './BlogImageTile';

function App() {
    return (
        <div className='App'>
            <Router>
                <BlogImageTile to='#' cats={['one', 'two']} when='before' />
                <BlogImageTile to='#' cats={['one', 'two']} when='during' />
                <BlogImageTile to='#' cats={['one', 'two']} when='after' />
            </Router>
        </div>
    );
}

export default App;

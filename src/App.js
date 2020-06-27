import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BlogRow from './BlogRow';

function App() {
    return (
        <div className='App'>
            <Router>
                <BlogRow title='Our Newest Content' />
                <BlogRow title='Build Disneyland At Home' />
                <BlogRow title='Content For Kids' />
            </Router>
        </div>
    );
}

export default App;

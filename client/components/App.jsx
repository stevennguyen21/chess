import React from 'react';
import Playergrid from './Playergrid.jsx';
import Computergrid from './Computergrid.jsx';
import Display from './Display.jsx';
import './App.scss';

const App = () => {
    return (
        <div className="container">
            <Playergrid />
            <Computergrid />
            <Display />
        </div>
    )
}

export default App;
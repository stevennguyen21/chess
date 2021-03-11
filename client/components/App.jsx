import React from 'react';
import Playergrid from './Playergrid.jsx';
import Computergrid from './Computergrid.jsx';
import './App.scss';

const App = () => {
    return (
        <div className="container">
            <Playergrid />
            <Computergrid />
        </div>
    )
}

export default App;
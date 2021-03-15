import React, { useState } from 'react';
import Playergrid from './Playergrid.jsx';
import Computergrid from './Computergrid.jsx';
import Display from './Display.jsx';
import './App.scss';

const createBoard = (squares) => {
    for (let i = 0; i < 100; i++) {
        squares.push(i);
    }
    return squares;
}

const App = () => {
    const [width, setWidth] = useState(10);

    return (
        <div className="container">
            <Playergrid createBoard={createBoard} width={width}/>
            <Computergrid createBoard={createBoard} width={width}/>
            <Display />
        </div>
    )
}

export default App;
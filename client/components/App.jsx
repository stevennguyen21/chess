import React, { useState } from 'react';
import Chessboard from './Chessboard.jsx';
import './App.scss';

const socket = io();

window.onclick = (e) => {
    socket.emit('message', 'hello world');
}

const App = () => {


    return (
        <div className="container">
            <Chessboard />
        </div>
    )
}

export default App;
import React, { useState } from 'react';
import './Playergrid.scss';

const createBoard = (squares) => {
    for (let i = 0; i < 100; i++) {
        squares.push(i);
    }
    return squares;
}

const Playergrid = () => {
    const [squares, setSquares] = useState(createBoard([]));

    return (
        <div className="grid grid-user">
            {
                squares.map((square, i) => (
                    <div id={i} key={i}></div>
                ))
            }
        </div>
    )
}

export default Playergrid;
import React, { useState } from 'react';
import './Playergrid.scss';

const Playergrid = (props) => {
    const [squares, setSquares] = useState(props.createBoard([]));

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
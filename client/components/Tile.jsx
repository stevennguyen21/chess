import React from 'react';
import './Tile.scss';

export default function Tile(props) {
    if (props.number % 2 === 0) {
        return (
            <div className="tile white-tile"></div>
        )
    } else {
        return (
            <div className="tile black-tile"></div>
        )
    }
};
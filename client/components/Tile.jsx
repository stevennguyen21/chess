import React from 'react';
import './Tile.scss';

export default function Tile(props) {
    if (props.number % 2 === 0) {
        return (
            <div className="tile white-tile">
                {/* if image is null, no need to render is logic behind this statement */}
                {props.image && <div className={`chess-piece ${props.type} ${props.color}`} style={{backgroundImage: `url(${props.image})`}} />}
            </div>
        )
    } else {
        return (
            <div className="tile black-tile">
                {props.image && <div className={`chess-piece ${props.type} ${props.color}`} style={{backgroundImage: `url(${props.image})`}} />}
            </div>
        )
    }
};
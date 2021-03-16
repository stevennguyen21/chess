import React from 'react';
import './Tile.scss';

export default function Tile(props) {
    if (props.number % 2 === 0) {
        return (
            <div className="tile white-tile"><img src={props.image} /></div>
        )
    } else {
        return (
            <div className="tile black-tile"><img src={props.image} /></div>
        )
    }
};
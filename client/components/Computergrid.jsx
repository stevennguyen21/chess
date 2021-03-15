import React, { useState } from 'react';
import './Computergrid.scss';


const Computergrid = (props) => {
    const [computerSqrs, setComputerSqrs] = useState(props.createBoard([]))
    const [shipArray, setShipArray] = useState([
        {
            name: "destroyer",
            directions: [
                [0, 1],
                [0, props.width]
            ]
        },
        {
            name: "submarine",
            directions: [
                [0, 1, 2],
                [0, props.width, props.width * 2]
            ]
        },
        {
            name: "cruiser",
            directions: [
                [0, 1, 2],
                [0, props.width, props.width * 2]
            ]
        },
        {
            name: "battleship",
            directions: [
                [0, 1, 2, 3],
                [0, props.width, props.width * 2, props.width * 3]
            ]
        },
        {
            name: "submarine",
            directions: [
                [0, 1, 2, 3, 4],
                [0, props.width, props.width * 2, props.width *  3, props.width * 4]
            ]
        }
    ])


    return (
        <div className="grid grid-computer">
            {
                computerSqrs.map((squares, i) => (
                    <div id={i} key={i}></div>
                ))
            }
        </div>
    )
}

export default Computergrid;
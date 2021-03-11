import React from 'react';
import './Display.scss';

const Display = () => {
    return (
        <div className="grid-display">
            <div className="ship destroyer-container" draggable="true">
                <div className="destroyer-0"></div>
                <div className="destroyer-1"></div>
            </div>
            <div className="ship submarine-container" draggable="true">
                <div className="submarine-0"></div>
                <div className="submarine-1"></div>
                <div className="submarine-2"></div>
            </div>
            <div className="ship cruiser-container" draggable="true">
                <div className="cruiser-0"></div>
                <div className="cruiser-1"></div>
                <div className="cruiser-2"></div>
            </div>
            <div className="ship battleship-container" draggable="true">
                <div className="battleship-0"></div>
                <div className="battleship-1"></div>
                <div className="battleship-2"></div>
                <div className="battleship-3"></div>
            </div>
            <div className="ship carrier-container" draggable="true">
                <div className="carrier-0"></div>
                <div className="carrier-1"></div>
                <div className="carrier-2"></div>
                <div className="carrier-3"></div>
                <div className="carrier-4"></div>
            </div>
        </div>
    )
}

export default Display;
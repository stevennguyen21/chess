import React, { useRef, useState, useEffect } from 'react';
import './Chessboard.scss';
import Tile from './Tile.jsx';
import LegalMoves from './legalMoves.js';

export default function Chessboard() {
    const chessboardRef = useRef(null);
    const [activePiece, setActivePiece] = useState(null);
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);
    const [pieces, setPieces] = useState([]);
    const legalMoves = new LegalMoves();
    
    
    useEffect(() => {
        const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const pieces = [];

        for (let i = 0; i < 8; i++) {
            pieces.push({
                image: 'assets/pawn_b.png',
                x: i,
                y: 6,
                type: 'pawn',
                color: 'black'
            })
        }
        
        for (let i = 0; i < 8; i++) {
            pieces.push({
                image: 'assets/pawn_w.png',
                x: i,
                y: 1,
                type: 'pawn',
                color: 'white'
            })
        }
        
        for (let p = 0; p < 2; p++) {
            const type = p === 0 ? 'b' : 'w';
            const y = p === 0 ? 7 : 0;
            const color = p === 0 ? 'black' : 'white';
        
            pieces.push({ image: `assets/rook_${type}.png`, x: 0, y: y, type: 'rook', color: color});
            pieces.push({ image: `assets/rook_${type}.png`, x: 7, y: y, type: 'rook', color: color});
            pieces.push({ image: `assets/knight_${type}.png`, x: 1, y: y, type: 'knight', color: color});
            pieces.push({ image: `assets/knight_${type}.png`, x: 6, y: y, type: 'knight', color: color});
            pieces.push({ image: `assets/bishop_${type}.png`, x: 2, y: y, type: 'bishop', color: color});
            pieces.push({ image: `assets/bishop_${type}.png`, x: 5, y: y, type: 'bishop', color: color});
            pieces.push({ image: `assets/king_${type}.png`, x: 4, y: y, type: 'king', color: color});
            pieces.push({ image: `assets/queen_${type}.png`, x: 3, y: y, type: 'queen', color: color});
            
        }
        setPieces(pieces);
        
    }, [])
    
    const grabPiece = (e) => {
        const chessboard = chessboardRef.current;
        const classes = e.target.className.split(' ')
        if (classes[0] === 'chess-piece' && chessboard) {
            setXPos(Math.floor((e.clientX - chessboard.offsetLeft) / 100));
            setYPos(Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100)));
            setActivePiece(e.target);
            const x = e.clientX - 50;
            const y = e.clientY - 50;
            e.target.style.position = "absolute";
            e.target.style.left = `${x}px`;
            e.target.style.top = `${y}px`;
        }
    }
    
    const movePiece = (e) => {
        const chessboard = chessboardRef.current;
        if (activePiece && chessboard) {
            const minX = chessboard.offsetLeft - 25;
            const minY = chessboard.offsetTop - 25;
            const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75;
            const maxY = chessboard.offsetTop + chessboard.clientHeight - 75;
            const x = e.clientX - 50;
            const y = e.clientY - 50;
            activePiece.style.position = "absolute";
            // activePiece.style.left = `${x}px`;
            // activePiece.style.top = `${y}px`;

            // if the cursor is trying to move the piece out of the x axis bounds
            if (x < minX) {
                activePiece.style.left = `${minX}px`;
            } else if (x > maxX) {
                activePiece.style.left = `${maxX}px`;
            } else {
                activePiece.style.left = `${x}px`;
            }

            // if the cursor is trying to move the piece of of the y axis bounds
            if (y < minY) {
                activePiece.style.top = `${minY}px`;
            } else if (y > maxY) {
                activePiece.style.top = `${maxY}px`;
            } else {
                activePiece.style.top = `${y}px`;
            }
        }
    }
    
    const dropPiece = (e) => {
        let chessboard = chessboardRef.current;
        let type = e.target.className.split(' ')[1];
        let color = e.target.className.split(' ')[2];

        if (activePiece && chessboard) {
            // these const make mapping the grid to start at 0, 0 and increment in 1's
            const x = Math.floor((e.clientX - chessboard.offsetLeft) / 100);
            // const y needs extra math to take in the fact that the board is rendered from bottom left to top right so
            // 0 is bottom while 8 is top, so subtracting the board length and then reversing the negative will get the number
            const y = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100));

            
            setPieces((value) => {
                const pieces = value.map((p) => {
                    
                    if (p.x === xPos && p.y === yPos) {
                        if (legalMoves.isValidMove(xPos, yPos, x, y, type, color)) {
                            p.x = x;
                            p.y = y;
                        } else {
                            activePiece.style.position = 'relative';
                            activePiece.style.removeProperty('top');
                            activePiece.style.removeProperty('left');
                        }
                    } 
                    return p;
                });
                return pieces;
            })

            setActivePiece(null);
        }
    }
    
    let board = [];

    for (let i = 7; i >= 0; i--) {
        for (let j = 0; j < 8; j++) {
            const number = j + i + 2;
            let image = undefined;
            let type = undefined;
            let color = undefined;
            pieces.forEach((p) => {
                if (p.x === j && p.y === i) {
                    image = p.image
                    type = p.type
                    color = p.color
                }
            })
            board.push(<Tile key={`${i},${j}`} number={number} image={image} type={type} color={color}/>)
        }
    }
    return (
        <div 
            onMouseDown={e => grabPiece(e)} 
            onMouseMove={e => movePiece(e)} 
            onMouseUp={e => dropPiece(e)}
            className="chessboard"
            ref={chessboardRef}
        >
            {board}
        </div>
    )
};
import React, { useRef, useState, useEffect } from 'react';
import './Chessboard.scss';
import Tile from './Tile.jsx';


export default function Chessboard() {
    const chessboardRef = useRef(null);
    const [pieces, setPieces] = useState([]);
    
    let activePiece = null;
    
    useEffect(() => {
        const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const pieces = [];
        
        for (let i = 0; i < 8; i++) {
            pieces.push({
                image: 'assets/pawn_b.png',
                x: i,
                y: 6
            })
        }
        
        for (let i = 0; i < 8; i++) {
            pieces.push({
                image: 'assets/pawn_w.png',
                x: i,
                y: 1
            })
        }
        
        for (let p = 0; p < 2; p++) {
            const type = p === 0 ? 'b' : 'w';
            const y = p === 0 ? 7 : 0;
        
            pieces.push({ image: `assets/rook_${type}.png`, x: 0, y: y});
            pieces.push({ image: `assets/rook_${type}.png`, x: 7, y: y});
            pieces.push({ image: `assets/knight_${type}.png`, x: 1, y: y});
            pieces.push({ image: `assets/knight_${type}.png`, x: 6, y: y});
            pieces.push({ image: `assets/bishop_${type}.png`, x: 2, y: y});
            pieces.push({ image: `assets/bishop_${type}.png`, x: 5, y: y});
            pieces.push({ image: `assets/king_${type}.png`, x: 4, y: y});
            pieces.push({ image: `assets/queen_${type}.png`, x: 3, y: y});
            
        }
        setPieces(pieces);
        
    }, [])
    
    const grabPiece = (e) => {
        if (e.target.className === 'chess-piece') {
            activePiece = e.target;
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
        if (activePiece && chessboard) {
            // these const make mapping the grid to start at 0, 0 and increment in 1's
            const x = Math.floor((e.clientX - chessboard.offsetLeft) / 100);
            const y = Math.floor((e.clientY - chessboard.offsetTop) / 100);
            console.log(x, y);
            setPieces((value) => {
                const pieces = value.map((p) => {
                    if (p.x == 0 && p.y == 0) {
                        p.x == 5;
                    }
                    return p;
                });
                return pieces;
            })

            activePiece = null;
        }
    }
    
    let board = [];

    for (let i = 7; i >= 0; i--) {
        for (let j = 0; j < 8; j++) {
            const number = j + i + 2;
            let image = undefined;
            pieces.forEach((p) => {
                if (p.x === j && p.y === i) {
                    image = p.image
                }
            })
            board.push(<Tile key={`${i},${j}`} number={number} image={image}/>)
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
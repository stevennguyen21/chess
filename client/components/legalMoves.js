export default class LegalMoves {

    isTileOccupied(x, y, stateOfBoard) {
        const board = stateOfBoard.find(p => p.x === x && p.y === y);
        if (board) {
            return true;
        } else {
            return false;
        }
    }

    isValidMove(previousX, previousY, x, y, type, color, stateOfBoard) {
        console.log("checking move of ", previousY);

        // pawn
        if (type === 'pawn') {
            const startRow = (color === 'white') ? 1 : 6;
            const pawnDirection = (color === 'white') ? 1 : -1;

            if (previousY === startRow) {
                if (previousX === x && y - previousY === 1 * pawnDirection) {
                    if (!this.isTileOccupied(x, y, stateOfBoard)) {
                        return true;
                    } 
                } else if (previousX === x && y - previousY === 2 * pawnDirection) {
                    if (!this.isTileOccupied(x, y, stateOfBoard)) {
                        return true;
                    }
                }
            } else {
                if (previousX === x && y - previousY === 1 * pawnDirection) {
                    if (!this.isTileOccupied(x, y, stateOfBoard)) {
                        return true;
                    }
                }
            }


            // if (color === 'white') {
            //     if (previousY === 1) {
            //         if (previousX === x && (y - previousY === 1)) {
            //             if (!this.isTileOccupied(x, y, stateOfBoard)) {
            //                 return true;
            //             }
            //         } else if (previousX === x && (y - previousY === 2)) {
            //             if (!this.isTileOccupied(x, y, stateOfBoard) && !this.isTileOccupied(x, y - 1, stateOfBoard)) {
            //                 return true;
            //             }
            //         }
            //     } else {
            //         if (previousX === x && y - previousY === 1) {
            //             if (!this.isTileOccupied(x, y, stateOfBoard)) {
            //                 return true;
            //             }
            //         }
            //     }
            // } else {
            //     if (previousY === 6) {
            //         if (previousX ===x && ((previousY - y === 1))) {
            //             if (!this.isTileOccupied(x, y, stateOfBoard)) {
            //                 return true;
            //             }
            //         } else if (previousX === x && ((previousY - y === 2))) {
            //             if (!this.isTileOccupied(x, y, stateOfBoard) && !this.isTileOccupied(x, y + 1, stateOfBoard)) {
            //                 return true;
            //             }
            //         }
            //     } else {
            //         if (previousX === x && ((previousY - y === 1))) {
            //             if (!this.isTileOccupied(x, y, stateOfBoard)) {
            //                 return true;
            //             }
            //         }
            //     }
            // }
        }
        return false;
    }

}
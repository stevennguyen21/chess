export default class LegalMoves {

    isTileOccupied(x, y, stateOfBoard) {
        const board = stateOfBoard.find(p => p.x === x && p.y === y);
        if (board) {
            return true;
        } else {
            return false;
        }
    }

    isTileOccupiedByOpponent(x, y, stateOfBoard, color) {
        const piece = stateOfBoard.find((p) => p.x === x && p.y === y && p.color !== color);
        
        if (piece) {
            console.log('opponent ', piece);
            return true;
        } else {
            return false;
        }
    }

    isValidMove(previousX, previousY, x, y, type, color, stateOfBoard) {

        // pawn
        if (type === 'pawn') {
            const startRow = (color === 'white') ? 1 : 6;
            const pawnDirection = (color === 'white') ? 1 : -1;

            if (previousX === x && previousY === startRow && y - previousY === 2 * pawnDirection) {
                if (!this.isTileOccupied(x, y, stateOfBoard) && !this.isTileOccupied(x, y - pawnDirection, stateOfBoard)) {
                    return true;
                }
            } else if (previousX === x && y - previousY === pawnDirection) {
                if (!this.isTileOccupied(x, y, stateOfBoard)) {
                    return true;
                }
            } else if (Math.abs(x - previousX) === 1 && y - previousY === pawnDirection) { // this is the attacking logic
                if (this.isTileOccupiedByOpponent(x, y, stateOfBoard, color)) {
                    return true;
                }
            }
        }
        return false;
    }

}
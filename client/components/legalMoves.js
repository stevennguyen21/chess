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

            if (previousX === x && previousY === startRow && y - previousY === 2 * pawnDirection) {
                if (!this.isTileOccupied(x, y, stateOfBoard) && !this.isTileOccupied(x, y - pawnDirection, stateOfBoard)) {
                    return true;
                }
            } else if (previousX === x && y - previousY === pawnDirection) {
                if (!this.isTileOccupied(x, y, stateOfBoard)) {
                    return true;
                }
            }
        }
        return false;
    }

}
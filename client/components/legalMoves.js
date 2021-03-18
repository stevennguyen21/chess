export default class LegalMoves {
    isValidMove(previousX, previousY, x, y, type, color) {
        console.log("checking move of ", previousY);

        // pawn
        if (type === 'pawn') {
            if (color === 'white') {
                if (previousY === 1) {
                    if (previousX === x && (y - previousY === 1 || y - previousY === 2)) {
                        console.log('valid')
                        return true;
                    } 
                } else {
                    if (previousX === x && y - previousY === 1) {
                        console.log('valid');
                        return true;
                    }
                }
            } else {
                if (previousY === 6) {
                    if (previousX ===x && ((previousY - y === 1) || Math.abs(previousY - y === 2))) {
                        console.log('valid');
                        return true;
                    }
                } else {
                    if (previousX === x && ((previousY - y === 1))) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
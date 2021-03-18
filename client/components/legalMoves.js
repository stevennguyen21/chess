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
                    } else {
                        console.log('not valid')
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
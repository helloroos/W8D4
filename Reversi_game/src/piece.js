/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
    this.color = color;
   
}

// let darkPiece = new Piece("black");
// let lightPiece = new Piece("white");

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
    if (this.color === "white") {
        return "black";
    } else {
        return "white";
    }
};

// console.log(darkPiece.oppColor());

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
    if (this.color == "white") {
        this.color = "black";
    } else {
        this.color = "white";
    }
};
// console.log(darkPiece.flip());

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
    if (this.color === "black") {
        return "B";
    } else {
        return "W";
    }
};

// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
    module.exports = Piece;
}
// DON'T TOUCH THIS CODE
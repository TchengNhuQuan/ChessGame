
function Queen(isWhite, isKilled = false) {
  const queenImgUrl = isWhite ? './images/pieces/white/queen.png' :
    './images/pieces/black/queen.png'

  Piece.call(this, isWhite, isKilled, PieceName.QUEEN, queenImgUrl)
  function canMove(board, cellStart, cellEnd) {
    
  }
  this.checkQueenMove = function checkQueenMove (x, y) {
    return [
      this.moveUp(x, y),
      this.moveDown(x, y),
      this.moveRight(x, y),
      this.moveLeft(x, y),
      this.moveUpRight(x, y),
      this.moveUpLeft(x, y),
      this.moveDownLeft(x, y),
      this.moveDownRight(x, y)
    ]
  }
}

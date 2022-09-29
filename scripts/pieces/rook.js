
function Rook(isWhite, isKilled = false) {
  const rookImgUrl = isWhite ? './images/pieces/white/rook.png' : './images/pieces/black/rook.png' 

  Piece.call(this, isWhite, isKilled, PieceName.ROOK, rookImgUrl)
  function canMove(board, cellStart, cellEnd) {
    
  }
  this.checkRookMove = function(x, y) {
    return [
      this.moveUp(x, y),
      this.moveDown(x, y),
      this.moveLeft(x, y),
      this.moveRight(x, y),
      this.moveRight(x,y)
    ]
  }
}
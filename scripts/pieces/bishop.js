function Bishop(isWhite, isKilled = false) {
  const bigshopImgUrl = isWhite ? './images/pieces/white/bishop.png' : './images/pieces/black/bishop.png'

  Piece.call(this, isWhite, isKilled, PieceName.BISHOP, bigshopImgUrl)
  function canMove(board, cellStart, cellEnd) {
    
  }

  this.checkBishopMove = function checkBishopMove (x, y) {
    return [
      this.moveUpRight(x, y),
      this.moveUpLeft(x, y),
      this.moveDownLeft(x, y),
      this.moveDownRight(x, y),
      this.moveDownRight(x, y) // add vo
      
    ]
  }
}
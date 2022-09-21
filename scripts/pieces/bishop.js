function Bishop(isWhite, isKilled = false) {
  const bigshopImgUrl = isWhite ? './images/pieces/white/bishop.png' : './images/pieces/black/bishop.png'

  Piece.call(this, isWhite, isKilled, PieceName.BISHOP, bigshopImgUrl)
  function canMove(board, cellStart, cellEnd) {
    
  }
}
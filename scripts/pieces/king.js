function King(isWhite, isKilled = false) {
  const kingImgUrl = isWhite ? './images/pieces/white/king.png' : './images/pieces/black/king.png'

  Piece.call(this, isWhite, isKilled, PieceName.KING, kingImgUrl)
  function canMove(board, cellStart, cellEnd) {
    
  }
}
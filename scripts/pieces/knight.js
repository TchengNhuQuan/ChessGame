function Knight(isWhite, isKilled = false) {
  const knightImgUrl = isWhite ? './images/pieces/white/knight.png' : './images/pieces/black/knight.png'

  Piece.call(this, isWhite, isKilled, PieceName.KNIGHT, knightImgUrl)
  function canMove(board, cellStart, cellEnd) {
    
  }
}
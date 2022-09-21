
function Queen(isWhite, isKilled = false) {
  const queenImgUrl = isWhite ? './images/pieces/white/queen.png' :
    './images/pieces/black/queen.png'

  Piece.call(this, isWhite, isKilled, PieceName.QUEEN, queenImgUrl)
  function canMove(board, cellStart, cellEnd) {
    
  }
}

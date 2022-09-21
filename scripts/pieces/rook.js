
function Rook(isWhite, isKilled = false) {
  const rookImgUrl = isWhite ? './images/pieces/white/rook.png' : './images/pieces/black/rook.png' 

  Piece.call(this, isWhite, isKilled, PieceName.ROOK, rookImgUrl)
  function canMove(board, cellStart, cellEnd) {
    
  }
}
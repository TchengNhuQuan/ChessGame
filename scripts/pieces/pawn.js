
function Pawn(isWhite, isKilled = false) {
  const pawnImgUrl = isWhite ? './images/pieces/white/pawn.png' : './images/pieces/black/pawn.png'
  Piece.call(this, isWhite, isKilled, PieceName.PAWN, pawnImgUrl)
  function canMove(board, cellStart, cellEnd) {
    
  }
}
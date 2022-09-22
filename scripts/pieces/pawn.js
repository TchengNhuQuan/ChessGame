
function Pawn(isWhite, isKilled = false) {
  const pawnImgUrl = isWhite ? './images/pieces/white/pawn.png' : './images/pieces/black/pawn.png'
  Piece.call(this, isWhite, isKilled, PieceName.PAWN, pawnImgUrl)
  function canMove(board, cellStart, cellEnd) {
    
  }

  this.checkPawnMove=function(x, y, event){
      if(board.rows[x] == 1){
        board.rows[x].cells[y].isSelected = "true";
        board.rows[x].cells[y + 1].color="yellow"
        board.rows[x].cells[y + 2].color="yellow"
      }

      board.render();
      // console.log(board[x-1].cells[y])

  }
}
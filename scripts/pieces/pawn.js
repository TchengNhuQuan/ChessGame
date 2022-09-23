
function Pawn(isWhite, isKilled = false) {
  const pawnImgUrl = isWhite ? './images/pieces/white/pawn.png' : './images/pieces/black/pawn.png'
  Piece.call(this, isWhite, isKilled, PieceName.PAWN, pawnImgUrl)
  function canMove(board, cellStart, cellEnd) {
    
  }

  this.checkPawnMove = function(x, y, checkIsWhite, event){
    if(checkIsWhite == false){
      board.rows[x].cells[y].isSelected = true;
      board.rows[x].cells[y].color="#BACA2B";

      board.rows[x + 1].cells[y].isHintMove = true;
      board.rows[x + 2].cells[y].isHintMove = true;

      board.rows[x + 1].cells[y].color="#BACA2B";
      board.rows[x + 2].cells[y].color="#BACA2B";
      
    } else if (checkIsWhite  == true) {
      board.rows[x].cells[y].isSelected = true;
      board.rows[x].cells[y].color="#BACA2B";

      board.rows[x - 1].cells[y].isHintMove = true;
      board.rows[x - 2].cells[y].isHintMove = true;

      board.rows[x - 1].cells[y].color="#BACA2B";
      board.rows[x - 2].cells[y].color="#BACA2B";
    }

    board.render();

  }
}
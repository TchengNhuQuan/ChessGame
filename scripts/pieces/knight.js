function Knight(isWhite, isKilled = false) {
  const knightImgUrl = isWhite ? './images/pieces/white/knight.png' : './images/pieces/black/knight.png'

  Piece.call(this, isWhite, isKilled, PieceName.KNIGHT, knightImgUrl)
  function canMove(board, cellStart, cellEnd) {
    
  }


  this.moveKnightUpThenLeft = function (x,y){
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";

    for (i=2; i < 3; i++) {
      if (x-i < 0) break;
    for (j = 1 ; j < 2; j++) {
      if (y-j < 0) break;
    
    board.rows[x - i].cells[y-j].isHintMove = true;
    board.rows[x - i].cells[y-j].color="#BACA2B";
    board.render();
    }
    }
  }

  this.moveKnightUpThenRight = function (x,y){
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";

    for (i=2; i < 3; i++) {
      if (x-i < 0) break;
    for (j = 1 ; j < 2; j++) {
      if (y+j > 7) break;
    
    board.rows[x - i].cells[y+j].isHintMove = true;
    board.rows[x - i].cells[y+j].color="#BACA2B";
    board.render();
    }
    }
  }

  this.moveKnightLeftThenUp = function m(x,y){
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";

    for (i=1; i < 2; i++) {
      if (x-i < 0) break;
    for (j = 2 ; j < 3; j++) {
      if (y-j < 0) break;
    
    board.rows[x - i].cells[y-j].isHintMove = true;
    board.rows[x - i].cells[y-j].color="#BACA2B";
    board.render();
    }
    }
  }

  this.moveKnightLeftThenDown = function moveKingUp(x,y){
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";

    for (i=1; i < 2; i++) {
      if (x+i > 7) break;
    for (j = 2 ; j < 3; j++) {
      if (y-j < 0) break;
    
    board.rows[x + i].cells[y-j].isHintMove = true;
    board.rows[x + i].cells[y-j].color="#BACA2B";
    board.render();
    }
    }
  }

  this.moveKnightRightThenUp = function (x,y){
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";

    for (i=1; i < 2; i++) {
      if (x - i < 0) break;
    for (j = 2 ; j < 3; j++) {
      if (y + j > 7) break;
    
    board.rows[x - i].cells[y+j].isHintMove = true;
    board.rows[x - i].cells[y+j].color="#BACA2B";
    board.render();
    }
    }
  }

  this.moveKnightRightThenDown = function (x,y){
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";

    for (i=1; i < 2; i++) {
      if (x+i > 7) break;
    for (j = 2 ; j < 3; j++) {
      if (y+j > 7) break;
    
    board.rows[x + i].cells[y+j].isHintMove = true;
    board.rows[x + i].cells[y+j].color="#BACA2B";
    board.render();
    }
    }
  }

  this.moveKnightDownThenLeft = function (x,y){
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";

    for (i=2; i < 3; i++) {
      if (x+i > 7) break;
    for (j = 1 ; j < 2; j++) {
      if (y-j < 0) break;
    
    board.rows[x + i].cells[y-j].isHintMove = true;
    board.rows[x + i].cells[y-j].color="#BACA2B";
    board.render();
    }
    }
  }

  this.moveKnightDownThenRight = function (x,y){
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";

    for (i=2; i < 3; i++) {
      if (x+i > 7) break;
    for (j = 1 ; j < 2; j++) {
      if (y+j > 7) break;
    
    board.rows[x + i].cells[y+j].isHintMove = true;
    board.rows[x + i].cells[y+j].color="#BACA2B";
    board.render();
    }
    }
  }

this.checkKnightMove = function(x,y){
  return [this.moveKnightUpThenLeft(x,y),
          this.moveKnightUpThenRight(x,y),
          this.moveKnightLeftThenUp(x,y),
          this.moveKnightLeftThenDown(x,y),
          this.moveKnightRightThenUp(x,y),
          this.moveKnightRightThenDown(x,y),
          this.moveKnightDownThenLeft(x,y),
          this.moveKnightDownThenRight(x,y)
  ]
}


}
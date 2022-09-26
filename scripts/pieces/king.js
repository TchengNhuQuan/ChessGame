function King(isWhite, isKilled = false) {
  const kingImgUrl = isWhite ? './images/pieces/white/king.png' : './images/pieces/black/king.png'

  Piece.call(this, isWhite, isKilled, PieceName.KING, kingImgUrl)
  function canMove(board, cellStart, cellEnd) {
    
  }

this.moveKingUp = function moveKingUp(x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  for (i = 0 ; i <2 ; i++) {
    if(x-i < 0) break;
  
  board.rows[x - i].cells[y].isHintMove = true;
  board.rows[x - i].cells[y].color="#BACA2B";
  board.render();
}

}
this.moveKingDown = function(x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  for (i = 0 ; i <2 ; i++) {
    if(x + i > 7) break;
  
  board.rows[x + i].cells[y].isHintMove = true;
  board.rows[x + i].cells[y].color="#BACA2B";
  board.render();
}
  
}

this.moveKingLeft = function(x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  for (i = 0 ; i <2 ; i++) {
    if(y-i < 0) break;
  
  board.rows[x].cells[y-i].isHintMove = true;
  board.rows[x].cells[y-i].color="#BACA2B";
  board.render();
}
  
}

this.moveKingRight = function(x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  for (i = 0 ; i <2 ; i++) {
    if(y+i > 7) break;
  
  board.rows[x].cells[y+i].isHintMove = true;
  board.rows[x].cells[y+i].color="#BACA2B";
  board.render();
}
  
}

this.moveKingUpLeft = function moveKingUpLeft(x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  for (i = 0 ; i <2 ; i++) {
    if(x-i < 0 || y-i < 0) break;
  
  board.rows[x - i].cells[y-i].isHintMove = true;
  board.rows[x - i].cells[y-i].color="#BACA2B";
  board.render();
}
  
}

this.moveKingUpRight = function(x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  for (i = 0 ; i <2 ; i++) {
    if(x-i < 0 || y+i >7) break;
  
  board.rows[x - i].cells[y+i].isHintMove = true;
  board.rows[x - i].cells[y+i].color="#BACA2B";
  board.render();
}

}

this.moveKingDownLeft = function(x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  for (i = 0 ; i <2 ; i++) {
    if(x+i > 7 || y-i < 0) break;
  
  board.rows[x + i].cells[y-i].isHintMove = true;
  board.rows[x + i].cells[y-i].color="#BACA2B";
  board.render();
}
}

this.moveKingDownRight = function(x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  for (i = 0 ; i <2 ; i++) {
    if(x+i > 7 || y+i >7) break;
  
  board.rows[x + i].cells[y+i].isHintMove = true;
  board.rows[x + i].cells[y+i].color="#BACA2B";
  board.render();
}
}



  this.checkKingMove = function checkKingMove(x, y, checkIsWhite){

    if(checkIsWhite == false){
      return [
        this.moveKingRight(x,y),
        this.moveKingUpRight(x,y),
        this.moveKingUp(x,y),
        this.moveKingDown(x,y),
         this.moveKingDownLeft(x,y),
         this.moveKingDownRight(x,y),
         this.moveKingLeft(x,y),
        //  this.moveKingRight(x,y),
         this.moveKingUpLeft(x,y)
        //  this.moveKingUpRight(x,y)
      ]
    } if (checkIsWhite  == true ) {
      return [
        this.moveKingUpRight(x,y),
        this.moveKingRight(x,y),
         this.moveKingUp(x,y),
         this.moveKingDown(x,y),
         this.moveKingDownLeft(x,y),
         this.moveKingDownRight(x,y),
         this.moveKingLeft(x,y),
          // this.moveKingRight(x,y),
          this.moveKingUpLeft(x,y)
          // this.moveKingUpRight(x,y)
       ]
    }













  //   for (i = 0; i<=1  ; i++){
      
  //   if(checkIsWhite == false){
  //     if ( x + i > 7 && x-i < 0 && y +i >8 && y -1 < 0 ) {break};
  //     board.rows[x].cells[y].isSelected = true;
  //     board.rows[x].cells[y].color="#BACA2B";

  //     board.rows[x + 1].cells[y-1].isHintMove = true;
  //     board.rows[x + 1].cells[y].isHintMove = true;
  //     board.rows[x + 1].cells[y+1].isHintMove = true;
  //     board.rows[x].cells[y-1].isHintMove = true;
  //     board.rows[x].cells[y+1].isHintMove = true;
  //     board.rows[x-i].cells[y-1].isHintMove = true;
  //     board.rows[x-i].cells[y].isHintMove = true;
  //     board.rows[x-i].cells[y+1].isHintMove = true;


  //     board.rows[x + 1].cells[y-1].color="#BACA2B";
  //     board.rows[x + 1].cells[y].color="#BACA2B";
  //     board.rows[x + 1].cells[y+1].color="#BACA2B";
  //     board.rows[x].cells[y-1].color="#BACA2B";
  //     board.rows[x].cells[y+1].color="#BACA2B";
  //     board.rows[x - i].cells[y-1].color="#BACA2B";
  //     board.rows[x - i].cells[y].color="#BACA2B";
  //     board.rows[x - i].cells[y+1].color="#BACA2B";
      
      
  //   } else if (checkIsWhite  == true ) {
  //     board.rows[x].cells[y].isSelected = true;
  //     board.rows[x].cells[y].color="#BACA2B";

  //     board.rows[x + i].cells[y-1].isHintMove = true;
  //     board.rows[x + i].cells[y].isHintMove = true;
  //     board.rows[x + i].cells[y+1].isHintMove = true;
  //     board.rows[x].cells[y-1].isHintMove = true;
  //     board.rows[x].cells[y+1].isHintMove = true;
  //     board.rows[x-i].cells[y-1].isHintMove = true;
  //     board.rows[x-i].cells[y].isHintMove = true;
  //     board.rows[x-i].cells[y+1].isHintMove = true;


  //     board.rows[x + i].cells[y-1].color="#BACA2B";
  //     board.rows[x + i].cells[y].color="#BACA2B";
  //     board.rows[x + i].cells[y+1].color="#BACA2B";
  //     board.rows[x].cells[y-1].color="#BACA2B";
  //     board.rows[x].cells[y+1].color="#BACA2B";
  //     board.rows[x - i].cells[y-1].color="#BACA2B";
  //     board.rows[x - i].cells[y].color="#BACA2B";
  //     board.rows[x - i].cells[y+1].color="#BACA2B";
  //   }
    
  //   board.render();

  // }
   }
    


  }



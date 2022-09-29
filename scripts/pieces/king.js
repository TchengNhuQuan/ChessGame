function King(isWhite, isKilled = false) {
  const kingImgUrl = isWhite ? './images/pieces/white/king.png' : './images/pieces/black/king.png'

  Piece.call(this, isWhite, isKilled, PieceName.KING, kingImgUrl)
  function canMove(board, cellStart, cellEnd) {
    
  }

this.moveKingUp = function moveKingUp(x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  board.rows[x].cells[y].isActive = true;
  for (i = 0 ; i <2 ; i++) {
    if(x-i < 0) break;

    board.rows[x - i].cells[y].isHintMove = true;
   if (board.rows[x-i].cells[y].piece == null){
      board.rows[x - i].cells[y].color="#BACA2B"
   } else if(this.isWhite ==true  && board.rows[x - i].cells[y].piece.isWhite == false ) {
       board.rows[x - i].cells[y].color="red";
    } else if(this.isWhite ==false &&  board.rows[x - i].cells[y].piece.isWhite == true){
     board.rows[x - i].cells[y].color="red";
    }else if (this.isWhite ==false &&  board.rows[x - i].cells[y].piece.isWhite == false) {
      board.rows[x - i].cells[y].color = this.color;
    }else if (this.isWhite == true &&  board.rows[x - i].cells[y].piece.isWhite == true) {
        board.rows[x - i].cells[y].color = this.color;
      } else { 
  board.rows[x - i].cells[y].color="#BACA2B";
  board.render();
   }
  // console.log(board.rows[x-i].cells[y].piece == null)
   }
  }
   
   

  

this.moveKingDown = function(x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  for (i = 0 ; i <2 ; i++) {
    if(x + i > 7) break;
    board.rows[x + i].cells[y].isHintMove = true;
    if (board.rows[x + i].cells[y].piece == null){
      board.rows[x + i].cells[y].color="#BACA2B"
   } else if(this.isWhite ==true && board.rows[x + i].cells[y].isHintMove == true && board.rows[x + i].cells[y].piece.isWhite == false ) {
       board.rows[x + i].cells[y].color="red";
    } else if(this.isWhite ==false && board.rows[x + i].cells[y].isHintMove == true && board.rows[x + i].cells[y].piece.isWhite == true){
     board.rows[x + i].cells[y].color="red";
    }else if (this.isWhite ==false && board.rows[x + i].cells[y].isHintMove == true && board.rows[x + i].cells[y].piece.isWhite == false) {
      board.rows[x + i].cells[y].color = this.color;
    }else if (this.isWhite == true && board.rows[x + i].cells[y].isHintMove == true && board.rows[x + i].cells[y].piece.isWhite == true) {
        board.rows[x + i].cells[y].color = this.color;
      } else { 
  board.rows[x + i].cells[y].color="#BACA2B";
  board.render();
}
  }
}

// code cái left này khác 1 chút với xem dòng 229 thêm vào mới hết bug
this.moveKingLeft = function(x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  for (i = 0 ; i <2 ; i++) {
    if(y-i < 0) break;

  // board.rows[x].cells[y-i].isHintMove = false;

  if (board.rows[x].cells[y-i].piece == null){
    board.rows[x].cells[y-i].color="#BACA2B"
 } else if( this.isWhite ==true && board.rows[x].cells[y].isHintMove == true && board.rows[x].cells[y-i].piece.isWhite == false ) {
     board.rows[x].cells[y-i].color="red"; 
  } else if(this.isWhite ==false && board.rows[x].cells[y].isHintMove == true && board.rows[x].cells[y-i].piece.isWhite == true){
   board.rows[x].cells[y-i].color="red"; 
    }else if (this.isWhite ==false && board.rows[x].cells[y-i].isHintMove == false && board.rows[x].cells[y-i].piece.isWhite == false) {
      board.rows[x].cells[y-i].color = this.color; 
   }else if (this.isWhite == true && board.rows[x].cells[y-i].isHintMove == false && board.rows[x].cells[y-i].piece.isWhite == true) {
       board.rows[x].cells[y-i].color = this.color;
    } else { 

  board.rows[x].cells[y-i].color="#BACA2B";
  board.render();
   }
  }
}

this.moveKingRight = function(x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  for (i = 0 ; i <2 ; i++) {
    if(y+i > 7) break;
    board.rows[x].cells[y+i].isHintMove = true;
    if (board.rows[x].cells[y+i].piece == null){
      board.rows[x].cells[y+i].color="#BACA2B"
   } else if(this.isWhite ==true && board.rows[x].cells[y+i].isHintMove == true && board.rows[x].cells[y+i].piece.isWhite == false ) {
       board.rows[x].cells[y+i].color="red";
    } else if(this.isWhite ==false && board.rows[x].cells[y+i].isHintMove == true && board.rows[x].cells[y+i].piece.isWhite == true){
     board.rows[x].cells[y+i].color="red";
    }else if (this.isWhite ==false && board.rows[x].cells[y+i].isHintMove == true && board.rows[x].cells[y+i].piece.isWhite == false) {
      board.rows[x].cells[y+i].color = this.color;
    }else if (this.isWhite == true && board.rows[x].cells[y+i].isHintMove == true && board.rows[x].cells[y+i].piece.isWhite == true) {
        board.rows[x].cells[y+i].color = this.color;
      } else { 
  
  
  board.rows[x].cells[y+i].color="#BACA2B";
  board.render();
}

} 
}

this.moveKingUpLeft = function (x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  for (i = 0  ; i <2;i++) {
    if(x-i < 0 || y-i < 0) break;
   board.rows[x - i].cells[y - i].isHintMove = true;

    if (board.rows[x-i].cells[y-i].piece == null){
     board.rows[x-i].cells[y-i].color="#BACA2B"
    }else if(this.isWhite ==true  && board.rows[x-i].cells[y-i].isHintMove == true && board.rows[x-i].cells[y-i].piece.isWhite == false ) {
      board.rows[x-i].cells[y-i].color="red";
   } else if(this.isWhite ==false && board.rows[x-i].cells[y-i].isHintMove == true && board.rows[x-i].cells[y-i].piece.isWhite == true){
    board.rows[x-i].cells[y-i].color="red";
      }else if (this.isWhite ==false  && board.rows[x-i].cells[y-i].isHintMove == true && board.rows[x-i].cells[y-i].piece.isWhite == false) {
        board.rows[x-i].cells[y-i].color = this.color;
      }else if (this.isWhite == true && board.rows[x-i].cells[y-i].isHintMove == true && board.rows[x-i].cells[y-i].piece.isWhite == true) {
          board.rows[x-i].cells[y-i].color = this.color;
      } else { 

  board.rows[x - i].cells[y-i].color="#BACA2B";
  board.render();
}
}
}

this.moveKingUpRight = function(x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  for (i = 0 ; i <2 ; i++) {
    if(x-i < 0 || y+i >7) break;
  board.rows[x - i].cells[y+i].isHintMove = true;

  if (board.rows[x-i].cells[y+i].piece == null){
    board.rows[x-i].cells[y+i].color="#BACA2B"
 } else if(this.isWhite ==true && board.rows[x-i].cells[y+i].isHintMove == true && board.rows[x-i].cells[y+i].piece.isWhite == false ) {
     board.rows[x-i].cells[y+i].color="red";
  } else if(this.isWhite ==false && board.rows[x-i].cells[y+i].isHintMove == true && board.rows[x-i].cells[y+i].piece.isWhite == true){
   board.rows[x-i].cells[y+i].color="red";
  }else if (this.isWhite ==false && board.rows[x-i].cells[y+i].isHintMove == true && board.rows[x-i].cells[y+i].piece.isWhite == false) {
    board.rows[x-i].cells[y+i].color = this.color;
  }else if (this.isWhite == true && board.rows[x-i].cells[y+i].isHintMove == true && board.rows[x-i].cells[y+i].piece.isWhite == true) {
      board.rows[x-i].cells[y+i].color = this.color;
    } else { 

  board.rows[x - i].cells[y+i].color="#BACA2B";
  board.render();
}
  }
}

this.moveKingDownLeft = function(x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  for (i = 0 ; i <2 ; i++) {
    if(x+i > 7 || y-i < 0) break;
  board.rows[x + i].cells[y-i].isHintMove = true;

  if (board.rows[x+i].cells[y-i].piece == null){
    board.rows[x+i].cells[y-i].color="#BACA2B"
 } else if(this.isWhite ==true && board.rows[x+i].cells[y-i].isHintMove == true && board.rows[x+i].cells[y-i].piece.isWhite == false ) {
     board.rows[x+i].cells[y-i].color="red";
  } else if(this.isWhite ==false && board.rows[x+i].cells[y-i].isHintMove == true && board.rows[x+i].cells[y-i].piece.isWhite == true){
   board.rows[x+i].cells[y-i].color="red";
  }else if (this.isWhite ==false && board.rows[x+i].cells[y-i].isHintMove == true && board.rows[x+i].cells[y-i].piece.isWhite == false) {
    board.rows[x+i].cells[y-i].color = this.color;
  }else if (this.isWhite == true && board.rows[x+i].cells[y-i].isHintMove == true && board.rows[x+i].cells[y-i].piece.isWhite == true) {
      board.rows[x+i].cells[y-i].color = this.color;
    } else { 

  board.rows[x + i].cells[y-i].color="#BACA2B";
  board.render();
}
  }
}

this.moveKingDownRight = function(x,y){
  board.rows[x].cells[y].isSelected = true;
  board.rows[x].cells[y].color="#BACA2B";
  for (i = 0 ; i <2 ; i++) {
    if(x+i > 7 || y+i >7) break;
  board.rows[x + i].cells[y+i].isHintMove = true;

  if (board.rows[x+i].cells[y+i].piece == null){
    board.rows[x+i].cells[y+i].color="#BACA2B"
 } else if(this.isWhite ==true && board.rows[x+i].cells[y+i].isHintMove == true && board.rows[x+i].cells[y+i].piece.isWhite == false ) {
     board.rows[x+i].cells[y+i].color="red";
  } else if(this.isWhite ==false && board.rows[x+i].cells[y+i].isHintMove == true && board.rows[x+i].cells[y+i].piece.isWhite == true){
   board.rows[x+i].cells[y+i].color="red";
  }else if (this.isWhite ==false && board.rows[x+i].cells[y+i].isHintMove == true && board.rows[x+i].cells[y+i].piece.isWhite == false) {
    board.rows[x+i].cells[y+i].color = this.color;
  }else if (this.isWhite == true && board.rows[x+i].cells[y+i].isHintMove == true && board.rows[x+i].cells[y+i].piece.isWhite == true) {
      board.rows[x+i].cells[y+i].color = this.color;
    } else { 

  board.rows[x + i].cells[y+i].color="#BACA2B";
  board.render();
}
  }
}

this.moveOut = function(){
  return ""
}

  this.checkKingMove = function (x, y){

      return [
        this.moveKingUpLeft(x,y),
        this.moveKingRight(x,y),
        this.moveKingUpRight(x,y),
        this.moveKingUp(x,y),
        this.moveKingDown(x,y),
         this.moveKingDownLeft(x,y),
         this.moveKingDownRight(x,y),
         this.moveKingLeft(x,y),
         this.moveKingLeft(x,y) // cái thêm vào
    

      ]
    // } if (checkIsWhite  == true ) {
    //   return [
    //     this.moveKingUpRight(x,y),
    //     this.moveKingRight(x,y),
    //      this.moveKingUp(x,y),
    //      this.moveKingDown(x,y),
    //      this.moveKingDownLeft(x,y),
    //      this.moveKingDownRight(x,y),
    //      this.moveKingLeft(x,y),
    //       // this.moveKingRight(x,y),
    //       this.moveKingUpLeft(x,y)
    //       // this.moveKingUpRight(x,y)
    //    ]
    // }
    
   }
    



  
  }


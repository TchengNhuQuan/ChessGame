function Piece(isWhite, isKilled = false, pieceName, imageUrl) {
  this.pieceName = pieceName
  this.imageUrl = imageUrl
  this.isWhite = isWhite
  this.isKilled = isKilled
  this.block = initElement(imageUrl)
  this.getName = function() {
    return this.pieceName;
  }

  function canMove(board, cellStart, cellEnd) {

  }

  function initElement(imgUrl) {
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", imgUrl)
    imgElement.className = "piece-image"
    imgElement.style.position = "absolute";
    imgElement.style.top = "50%";
    imgElement.style.left = "50%";
    imgElement.style.height = "70px";
    imgElement.style.width = "70px";
    imgElement.style.transform = "translate(-50%, -50%)";
    return imgElement;
  }

  this.moveUp = function moveUp(x, y) {
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";
    for (let i = 0; i < 8; i++) {
      if (x + i > 7) break;
      board.rows[x + i].cells[y].isHintMove = true;
      board.rows[x + i].cells[y].color="#BACA2B";
      board.render();
    }
    
  }

  this.moveDown = function moveDown(x, y) {
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";
    for (let i = 0 ; i < 8; i++) {
      if (x - i < 0) break;
      board.rows[x - i].cells[y].isHintMove = true;
      board.rows[x - i].cells[y].color="#BACA2B";
      board.render();
    }
    
  }

  this.moveRight = function moveRight(x, y) {
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";
    for (let i = 0; i < 8; i++) {
      if (y + i > 7) break;
      board.rows[x].cells[y + i].isHintMove = true;
      board.rows[x].cells[y + i].color="#BACA2B";
      board.render();
    }
  }

  this.moveLeft = function moveLeft(x, y) {
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";
    for (let i = 0; i < 8; i++) {
      if (y - i < 0) break;
      board.rows[x].cells[y - i].isHintMove = true;
      board.rows[x].cells[y - i].color="#BACA2B";
      board.render();
    }
  }

  this.moveUpRight = function moveUpRight(x, y) {
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";
    for (let i = 0; i < 8; i++) {
      if (x + i > 7 || y + i > 7) break;
      board.rows[x + i].cells[y + i].isHintMove = true;
      board.rows[x + i].cells[y + i].color="#BACA2B";
      board.render();
    }
  }

  this.moveUpLeft = function moveUpLeft(x, y) {
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";
    for (let i = 0; i < 8; i++) {
      if (x + i > 7 || y - i < 0) break;
      board.rows[x + i].cells[y - i].isHintMove = true;
      board.rows[x + i].cells[y - i].color="#BACA2B";
      board.render();
    }
  }

  this.moveDownLeft = function moveDownLeft(x, y) {
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";
    for (let i = 0; i < 8; i++) {
      if (x - i < 0 || y - i < 0) break;
      board.rows[x - i].cells[y - i].isHintMove = true;
      board.rows[x - i].cells[y - i].color="#BACA2B";
      board.render();
    }
  }

  this.moveDownRight = function moveDownRight(x, y) {
    board.rows[x].cells[y].isSelected = true;
    board.rows[x].cells[y].color="#BACA2B";
    for (let i = 0; i < 8; i++) {
      if (x - i < 0 || y + i > 7) break;
      board.rows[x - i].cells[y + i].isHintMove = true;
      board.rows[x - i].cells[y + i].color="#BACA2B";
      board.render();
    }
  }
}
  
  }
}


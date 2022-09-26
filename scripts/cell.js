function Cell(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.piece = null;
  this.isActive = false;
  this.isSelected = false;
  this.isHintMove = false;
  this.block = initElement(this.color);

  this.setPiece = function (currentPiece) {
    this.piece = currentPiece;
  };

  this.getPositionX = function () {
    return this.x;
  }
  this.getPositionY = function () {
    return this.y;
  }
  function initElement() {
    // init cell
    const cellElement = document.createElement("div");
    cellElement.style.width = "80px";
    cellElement.style.height = "80px";
    cellElement.style.position = "relative";
    cellElement.style.backgroundColor = this.color;
    cellElement.style.display = "inline-block";
    cellElement.style.border = "0.025px solid #312E2B";
    cellElement.style.boxSizing = "border-box";
    return cellElement;
  }

  this.render = function() {
    if (this.piece) {
      this.block.appendChild(this.piece.block);
    }
    if (this.isSelected == true) {
      this.block.style.backgroundColor = this.color;
    } 
    if (this.isHintMove == true) {
      this.block.style.backgroundColor = this.color;
    } 
    this.block.style.backgroundColor = this.color;
  }

  function renderInitialColor(cell) {
    if (cell.getPositionX() % 2 ==0) {
      cell.color = cell.getPositionY() % 2 == 0 ? "#EEEED2" : "#4B7399";
    } else {
      cell.color = cell.getPositionY() % 2 == 0 ? "#4B7399" : "#EEEED2";
    }
  }

  function handleSelectChess(event, cell) {
    switch(cell.piece.getName()) {
      case "pawn": 
        cell.piece.checkPawnMove(cell.getPositionX(), cell.getPositionY(), cell.piece.isWhite, event);
      case "queen": 
        cell.piece.checkQueenMove(cell.getPositionX(), cell.getPositionY(), event);
      case "bishop": 
        cell.piece.checkBishopMove(cell.getPositionX(), cell.getPositionY(), event);
      case "king":
        cell.piece.checkKingMove(cell.getPositionX(), cell.getPositionY(),cell.piece.isWhite)
    }
  }

  function unSelectHintMove() {
    for (let rowNumber = 0; rowNumber < 8; rowNumber++) {
      for (let columnNumber = 0; columnNumber < 8; columnNumber++) {
        let cell = board.rows[rowNumber].cells[columnNumber];
        if (cell.isHintMove == true) {
          cell.isHintMove = false;
        }
        renderInitialColor(cell);
      }
    }
  }

  function handleUnselectChess(cell) {
    cell.isSelected = false;
    // lấy lại màu ban đầu
    renderInitialColor(cell);
    // check hint move
    unSelectHintMove();
    board.render();
  }

  this.block.addEventListener("click", (event) => this.validateMove(event));
  this.validateMove = function(event) {
    if (this.isSelected == true) {
      handleUnselectChess(this);
      board.render();
    } else {
      handleSelectChess(event, this);
    }
  }
}

  
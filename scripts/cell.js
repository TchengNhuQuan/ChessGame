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
  }

  this.block.addEventListener("click", (event) => this.validateMove(event));
  this.validateMove = function(event) {
    // console.log(this.piece.getName());
    switch(this.piece.getName()) {
      case "pawn": 
        this.piece.checkPawnMove(this.getPositionX(), this.getPositionY(), this.piece.isWhite, event);
        // console.log(this.getPositionX());
        // console.log(this.getPositionY());

      case "queen": 
        this.piece.checkQueenMove(this.getPositionX(), this.getPositionY(), event);
      
        case "bishop": 
        this.piece.checkBishopMove(this.getPositionX(), this.getPositionY(), event);
    }
  }



}

  
function Cell(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.piece = null;
  this.isActive = false;
  this.isSelected = false;
  this.block = initElement(color);

  this.setPiece = function (currentPiece) {
    this.piece = currentPiece;
  };

  this.getPositionX = function () {
    return this.x;
  }
  this.getPositionY = function () {
    return this.y;
  }
  function initElement(currentColor) {
    // init cell
    const cellElement = document.createElement("div");
    cellElement.style.width = "80px";
    cellElement.style.height = "80px";
    cellElement.style.position = "relative";
    cellElement.style.backgroundColor = currentColor;
    cellElement.style.display = "inline-block";
    return cellElement;
  }

  this.render = function() {
    if (this.piece) {
      this.block.appendChild(this.piece.block);
    }
  }

  this.block.addEventListener("click", (event) => this.validateMove(event));
  this.validateMove = function(event) {
    console.log(this.piece.getName());
    switch(this.piece.getName()) {
      case "pawn": 
        this.piece.checkPawnMove(this.getPositionX(), this.getPositionY(), event);
    }
  }



}

  
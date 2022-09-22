function Cell(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.piece = null;
  this.isActive = false;
  this.block = initElement(color);

  this.setPiece = function (currentPiece) {
    this.piece = currentPiece;
  };

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
}

  

function Row(line) {
  this.line = line;
  this.cells = []; // 8 cells
  this.block = initElement();

  this.render = function () {
    for (const cell of this.cells) {
      cell.render();
      this.block.appendChild(cell.block);
    }
  }

  function initElement() {
    const rowElement = document.createElement("div");
    rowElement.style.width = "640px";
    rowElement.style.height = "80px";

    return rowElement;
  }
}


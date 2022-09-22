function Board() {
  this.rowNumbers = 8;
  this.columnNumbers = 8;
  this.rows = []; // 8 rows
  this.block = initElement();

  this.putChess = function (x, y, currentPiece) {
    const currentRow = this.rows.find((row) => row.line === x);
    const currentCell = currentRow.cells[y];
    currentCell.setPiece(currentPiece);
  };

  this.initRows = function () {
    let currentRows = [];
    for (let rowNumber = 0; rowNumber < this.rowNumbers; rowNumber++) {
      const row = new Row(rowNumber);
      const currentCells = [];
      for (let columnNumber = 0; columnNumber < this.columnNumbers; columnNumber++) {
        if (rowNumber % 2 == 0) {
          color = columnNumber % 2 == 0 ? "#EEEED2" : "#4B7399";
        } else {
          color = columnNumber % 2 == 0 ? "#4B7399" : "#EEEED2";
        }
        const cell = new Cell(columnNumber, rowNumber, color);
        currentCells.push(cell);
      }
      row.cells = currentCells;
      currentRows.push(row);
    }
    this.rows = currentRows;
    
  };

  // private method
  this.initChess = function() { 
    // đặt quân cờ bằng private method
    const whiteKing = new King(true);
    this.putChess(7, 4, whiteKing);
    for (let rowNumber = 0; rowNumber < this.rowNumbers; rowNumber++) {
      if (rowNumber == 0) {
        for (let columnNumber = 0; columnNumber < this.columnNumbers; columnNumber++) {
          if (columnNumber == 4) {
            this.putChess(rowNumber, columnNumber, new King(false))
          }
        }
      }
    }
    // const blackKing = new King(false);
    // this.putChess(0, 4, blackKing);

    const whiteQueen = new Queen(true);
    this.putChess(7, 3, whiteQueen);

    const blackQueen = new Queen(false);
    this.putChess(0, 3, blackQueen );

    const whiteBishop1 = new Bishop(true);
    this.putChess(7, 2, whiteBishop1);

    const whiteBishop2 = new Bishop(true);
    this.putChess(7, 5, whiteBishop2);

    const blackBishop1 = new Bishop(false);
    this.putChess(0, 2, blackBishop1);

    const blackBishop2 = new Bishop(false);
    this.putChess(0, 5, blackBishop2);
    
    const whiteKnight1 = new Knight(true);
    this.putChess(7, 1, whiteKnight1);

    const whiteKnight2 = new Knight(true);
    this.putChess(7, 6, whiteKnight2);

    const blackKnight1 = new Knight(false);
    this.putChess(0, 1, blackKnight1);

    const blackKnight2 = new Knight(false);
    this.putChess(0, 6, blackKnight2);

    const whiteRook1 = new Rook(true);
    this.putChess(7, 0, whiteRook1);

    const whiteRook2 = new Rook(true);
    this.putChess(7, 7, whiteRook2);

    const blackRook1 = new Rook(false);
    this.putChess(0, 0, blackRook1);

    const blackRook2 = new Rook(false);
    this.putChess(0, 7, blackRook2);
    
    for (let rowNumber = 0; rowNumber <= this.rowNumbers; rowNumber++) {
      if (rowNumber == 6) {
        let y = 0;
        for (let y = 0; y <= 7; y++) {
          this.putChess(rowNumber, y, new Pawn(true));
        }
      }

      if (rowNumber == 1) {
        let y = 0;
        for (let y = 0; y <= 7; y++) {
          this.putChess(rowNumber, y, new Pawn(false));
        }
      }
    }
  };

  // public method
  this.render = function() {
    for (const row of this.rows) {
      row.render(); // y la cai render tu dong row
      this.block.appendChild(row.block);
    }
  };

  this.init = function () {
    // init data
    this.initRows();
    this.initChess();
  // xu ly DOM
    this.render();
  };

  function initElement() {
    const boardElement = document.getElementById("chess-board");
    boardElement.style.display = "flex";
    boardElement.style.width = "640px";
    boardElement.style.height = "640px";
    boardElement.style.border = "2px solid black";
    boardElement.style.flexWrap = "wrap";

    return boardElement;
  }
}


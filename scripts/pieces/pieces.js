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
    // imgElement.addEventListener("click", function(){
    //   imgElement.style.width = "50px";
    //   imgElement.style.bottom = "50px";

    // } )


    return imgElement;
  }


}


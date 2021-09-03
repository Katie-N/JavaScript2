/* Katie Nordberg
8-30-21 */
let cells = Array.from(document.getElementsByTagName("td"));
let container = document.getElementById("cellContainer");
document.getElementById("closeCellContainer").addEventListener("click", closeCell);

cells.forEach(function addClickEvent (cell) {
  cell.addEventListener("click", enlargeCell);
});

function enlargeCell(event) {
  if (window.innerWidth < 768) {
    container.parentElement.style.height = "100vh";
    createNewCell(event.target.outerHTML);
  }
}

function createNewCell (text) {
  let newCell = document.createElement("p");
  newCell.classList.add("paragraph");
  newCell.innerHTML = text;
  container.appendChild(newCell);
}

function removeOldCell () {
  container.firstChild.remove();
}

function closeCell () {
  container.parentElement.style.height = "0";
  removeOldCell();
}

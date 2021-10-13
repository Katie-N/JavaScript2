function byId() {
  document.getElementById("computers").style.color = "#00f";
}

function byQuery() {
  document.querySelector(".favorite").style.color = "#f00";
}

function byClass() {
  for (element of document.getElementsByClassName("favorite")) {
    element.style.color = "#0f0";
  };
}

function byTag() {
  for (element of document.getElementsByTagName("h2")) {
    element.style.backgroundColor = "#0f0";
  }
}

function byQueryAll() {
  for (element of document.querySelectorAll(".favorite")) {
    element.style.color = "#0ff";
  }
}

function byParent() {
  document.getElementById("networking").parentNode.textContent = "Show me the money!";
}

function byPreviousSibling() {
  document.getElementById("web").previousElementSibling.innerHTML = "&#9733; &#9733; &#9733; Information Technology &#9733; &#9733; &#9733;";
}

function byNextSibling() {
  document.getElementById("web").nextElementSibling.textContent = "Data Science";
}

function byClassName() {
  document.getElementById("data").classList.add("favorite");
}

document.getElementById("byIdButton").addEventListener("click", byId);
document.getElementById("byQueryButton").addEventListener("click", byQuery);
document.getElementById("byClassButton").addEventListener("click", byClass);
document.getElementById("byTagButton").addEventListener("click", byTag);
document.getElementById("byQueryAllButton").addEventListener("click", byQueryAll);
document.getElementById("byParentButton").addEventListener("click", byParent);
document.getElementById("byPreviousSiblingButton").addEventListener("click", byPreviousSibling);
document.getElementById("byNextSiblingButton").addEventListener("click", byNextSibling);
document.getElementById("byClassNameButton").addEventListener("click", byClassName);

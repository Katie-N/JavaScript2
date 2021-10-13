// Katie Nordberg 10/13/2021

// Moved script contents to separate file
const addItems = document.querySelector('.addItems');
const itemsList = document.querySelector('.tasks');
const items = JSON.parse(localStorage.getItem("items")) || [];

// Changed naming to be more descriptive while leaving it vague enough to be reused on other lists.
function addItem (e) {
  e.preventDefault();
  const itemText = (document.querySelector("[name=item]")).value;
  const item = {
    itemText: scrubUserText(itemText),
    done: false,
  };
  // Moved checkboxes variable to be with other variable declarations
  const checkboxes = document.querySelectorAll("input");

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList (itemsForList = [], itemsList) {
  itemsList.innerHTML = itemsForList.map((item, i) => {
    return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? "checked" : ''} />
      <label for="item${i}">${item.itemText}</label>
      <input id="deleteItem${i}" class="deleteTask" data-index=${i} type="button" value="🗑️">
    </li>
    `
  }).join('');
}

// When working with innerHTML you have to be wary. And this is HTML that's going to be directly input from the user. So I want to scrub it before plugging it into the site in order to avoid simple XML attacks
function scrubUserText (dirtyString) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
    "\\": "&#92;",
    "`": "&#96;",
  };
  const reg = /[&<>"'/]/ig;
  return dirtyString.replace(reg, (match)=>(map[match]));
}

function handleListClick (e) {
  // Made check handled by a separate function.
  // Rewrote to make more sense by executing if something is true rather than skipping if something is false.
  // And changed check from input to the more specific [type=checkbox]
  if (e.target.matches("[type=checkbox]")) {
    toggleDone(e);
  } else if (e.target.matches(".deleteTask")) {
    deleteTask(e);
  }
}

function toggleDone (clickEvent) {
  const element = clickEvent.target;
  const index = element.dataset.index;
  // Toggle the current value
  items[index].done = !items[index].done;
  // Store item
  localStorage.setItem('items', JSON.stringify(items));
  // Update displayed list
  populateList(items, itemsList);
}

// Added function to delete a task
function deleteTask (clickEvent) {
  items.splice(clickEvent.target.dataset.index, 1);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", handleListClick);

populateList(items, itemsList);

let form = document.getElementById("addForm");
let itemList = document.getElementById("list-group");
let filter = document.getElementById("filter");
let textArea = document.getElementById("item-add-text-area");
form.addEventListener("submit", addItems);
itemList.addEventListener("click", removeItem);
// filter.addEventListener('keyup', filterItems);

function addItems(e){
  e.preventDefault();
  let newItem = document.getElementById("item-add-text-area").value;
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
  textArea.value = null;
}

function removeItem(e) {
  if (e.target.classList.contains("delete-btn")) {
    if (confirm("Are You Sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
//Adds text to todo list - if not empty
document.getElementById("new").addEventListener("click", function () {
    let task = document.getElementById("text").value;
    if (task) {
      addNewTask(task);
      document.getElementById("text").value = "";
    }
  });
  
  function removeItem() {
    let item = this.parentNode.parentNode; //targeting li
    let parent = item.parentNode; //targeting ul
  
    parent.removeChild(item);
  }
  
  function completeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let parentId = parent.id;
  
    //to be able to change between completed and uncomplete items both ways
    let target =
      parentId === "todo"
        ? document.getElementById("ready")
        : document.getElementById("todo");
  
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
  }
  
  //Adds new item to todo list
  function addNewTask(item) {
    let list = document.getElementById("todo");
  
    let newItem = document.createElement("li");
    newItem.innerText = item;
  
    let buttons = document.createElement("div");
    buttons.classList.add("buttons");
  
    //creates remove and complete buttons + add classes
    let remove = document.createElement("button");
    remove.classList.add("remove");
    remove.addEventListener("click", removeItem);
  
    let complete = document.createElement("button");
    complete.classList.add("complete");
    complete.addEventListener("click", completeItem);
  
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    newItem.appendChild(buttons);
  
    //insert new todo before the first element
    list.insertBefore(newItem, list.childNodes[0]);
  }
  
  //add event listener to pre-made list items
  
  let deleteIt = document.getElementsByClassName("remove");
  for (let i = 0; i < deleteIt.length; i++) {
    deleteIt[i].addEventListener("click", removeItem);
  }
  
  let changeIt = document.getElementsByClassName("complete");
  for (let i = 0; i < changeIt.length; i++) {
    changeIt[i].addEventListener("click", completeItem);
  }
  
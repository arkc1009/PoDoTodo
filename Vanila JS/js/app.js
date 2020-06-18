const inputTodo = document.getElementById('AddTodo');
const todolistDOM = document.getElementById('todolist');
const idolistDOM = document.getElementById('idolist');

let todotext;
let todoidx=0;

inputTodo.addEventListener("keydown", (e) => {
  if(e.key==='Enter')  {
    todotext = inputTodo.value.trim();
    if(todotext !== "" && todotext.trim() !== "") {
      addTodo(todolistDOM);

    } 
    inputReset();
  }
});

function check(idx) {
  let item = document.getElementById(`chk_${idx}`);
  if(item.className!=="checked") {
    item.className="checked";
    addIdo(idx);
  }
  else {
    item.className="";
    returnTodo(idx);
  }
}

function addTodo(list) {
  let item = document.createElement('li');
  item.id=`li_${todoidx}`;
  item.innerHTML = 
  `<input type="checkbox" class="" id="chk_${todoidx}" onclick="check(${todoidx});">` + `<span>${todotext}</span>` + `<button onclick="delTodo(${todoidx})">Del</button>`;
  todoidx++;
  list.appendChild(item);
}

function addIdo(idx) {
  let todoItem = document.getElementById(`li_${idx}`);
  let item = todoItem;
  todolistDOM.removeChild(todoItem);
  idolistDOM.appendChild(item);
}

function returnTodo(idx) {
  let idoitem = document.getElementById(`li_${idx}`);
  let item = idoitem;
  idolistDOM.removeChild(idoitem);
  todolistDOM.appendChild(item);
}

function delTodo(idx) {
  let item = document.getElementById(`li_${idx}`);
  let parentList = item.parentElement;
  parentList.removeChild(item);
}

function inputReset() {
  inputTodo.value="";
}

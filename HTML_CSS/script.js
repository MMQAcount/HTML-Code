const input = document.getElementById("new-todo");
const todos = document.getElementById("todos");
let items = [];

const renderItems = () => {
    todos.innerHTML = "";
    items.forEach((item, index) => {
        todos.insertAdjacentHTML('beforeend', `
        <li id>
            <input type="checkbox">
            <p>${index+1}. ${item} </p>
            <div>
                <button onclick="deleteToDo(${index})">❌</button>
                <button>✏</button>
            </div>
        </li>
      `);
    })  
}

const newToDo = () => {
    let value = input.value + " ";
    if(value.length  > 0){
       items.push(value); 
       input.value = "";
       renderItems();
    }
}

const deleteToDo = (index) => {
    console.log(index);
    items.splice(index, 1);
    renderItems();
}


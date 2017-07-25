var tareas = [
  {userId: 1, id: 1, title: "Delectus aut autem", completed: false},
  {userId: 1, id: 2, title: "Quis ut nam facilis et officia qui", completed: false},
  {userId: 1, id: 3, title: "Fugiat veniam minus", completed: false},
  {userId: 1, id: 4, title: "Et porro tempora", completed: true},
  {userId: 1, id: 5, title: "Laboriosam mollitia et enim quasi adipisci quia provident illum", completed: false},
  {userId: 1, id: 6, title: "Qui ullam ratione quibusdam voluptatem quia omnis", completed: false},
  {userId: 1, id: 7, title: "Illo expedita consequatur quia in", completed: false},
  {userId: 1, id: 8, title: "Quo adipisci enim quam ut ab", completed: true},
  {userId: 1, id: 9, title: "Molestiae perspiciatis ipsa", completed: false},
  {userId: 1, id: 10,title: "Illo est ratione doloremque quia maiores aut", completed: true}
];

// Añair elementos desde el array de objetos
function addInputJs(){
  var lista = document.getElementById("addList")
  for(var i = 0; i <tareas.length; i++){;
  var li = document.createElement("li");
  li.innerText=tareas[i].title
  lista.appendChild(li);
  }
}
addInputJs();

// Añair un elemento
function addInput() {
  var li = document.createElement("li");
  var toDo = document.getElementById("newInput").value;
  var ntext = document.createTextNode(toDo);
  li.appendChild(ntext);
  if (toDo === "") {
    alert("No has escrito nada!");
  } else {
    document.getElementById("addList").appendChild(li);
  }
  document.getElementById("newInput").value = "";
}
// tachar un elemento de la lista
var listaTareas = document.querySelector("ul");
listaTareas.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
}, false);

var tasks = [
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
console.log(tasks);
// Añadir elementos desde el array de objetos
function addInputJs(){
  var lista = document.getElementById("addList")
  for(var i = 0; i <tasks.length; i++){;
  var li = document.createElement("li");
  li.innerText=tasks[i].title
  lista.appendChild(li);
  }
}
addInputJs();


// Añadir un elemento desde el input
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

  var span = document.createElement("SPAN");
  var x = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(x);
  li.appendChild(span);

  for (i = 0; i < borrar.length; i++) {
    borrar[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  tasks.push(toDo);
}


// tachar un elemento de la lista
var listaTareas = document.querySelector("ul");
listaTareas.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
}, false);

// añadir una X a cada elemento de la lista
var myTasks = document.getElementsByTagName("LI");
for (var i = 0; i < myTasks.length; i++) {
  var span = document.createElement("SPAN");
  var x = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(x);
  myTasks[i].appendChild(span);
}

// Borrar un elemento de la lista
var borrar = document.getElementsByClassName("close");
for (var i = 0; i < borrar.length; i++) {
  borrar[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

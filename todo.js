var tareas = [
  {userId: 1, id: 1, title: "delectus aut autem", completed: false},
  {userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false},
  {userId: 1, id: 3, title: "fugiat veniam minus", completed: false},
  {userId: 1, id: 4, title: "et porro tempora", completed: true},
  {userId: 1, id: 5, title: "laboriosam mollitia et enim quasi adipisci quia provident illum", completed: false},
  {userId: 1, id: 6, title: "qui ullam ratione quibusdam voluptatem quia omnis", completed: false},
  {userId: 1, id: 7, title: "illo expedita consequatur quia in", completed: false},
  {userId: 1, id: 8, title: "quo adipisci enim quam ut ab", completed: true},
  {userId: 1, id: 9, title: "molestiae perspiciatis ipsa", completed: false},
  {userId: 1, id: 10,title: "illo est ratione doloremque quia maiores aut", completed: true}
];

function addInputJs(){
  var lista = document.getElementById("addList")
  for(var i = 0; i <tareas.length; i++){;
  var li = document.createElement("li");
  li.innerText="UserId: "+tareas[i].userId+" Id: "+tareas[i].id+" Title: "+tareas[i].title
  lista.appendChild(li);
  }
}

addInputJs();

  /*
  var toDo = document.getElementById("newInput").value;
  var text = document.createTextNode(toDo);
  li.appendChild(text);
  if(tareas === " "){
    alert("No has escrito nada!");
  } else {
    document.getElementById("addList").appendChild(li);
  }
  document.getElementById("newInput".value="");
  */
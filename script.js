// A Very Simple TodoList Made By Farouk!
var arrtodo = [];

// Create A TASK!
function Create() {
  var task = document.getElementById("addtask").value;
  if (task === "") {
    alert("Please type something!");
  } else {
    arrtodo.push(task);
    Display();
  }
}
// Displaying our Tasks :D!
function Display() {
  var MyTasks = "";
  for (var i = 0; i < arrtodo.length; i++) {
    MyTasks += "<tr>";
    MyTasks += "<td>" + i + ") " + arrtodo[i] + "</td>";
    MyTasks += "<td> |</td>";
    MyTasks += "<td><button onclick=Update(" + i + ")>Edit</button></td>";
    MyTasks += "<td>|</td>";
    MyTasks += "<td><button onclick=Delete(" + i + ")>Remove</button></td>";
    MyTasks += "</tr>";
  }

  document.getElementById("displaytodo").innerHTML = MyTasks;
}
Display();
// Here we update our Task!
function Update(Task) {
  document.getElementById("updatetask").value = arrtodo[Task];
  document.getElementById("UpdateForm").onsubmit = function () {
    var task = document.getElementById("updatetask").value;
    arrtodo.splice(Task, 1, task.trim());

    Display();
  };
}
// Deleting A TASK!
function Delete(Task) {
  arrtodo.splice(Task, 1);
  Display();
}

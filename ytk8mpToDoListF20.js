//Yandoh//
//ytk8mpToDoListF20//
//ytk8mp//

document.getElementById("addForm").onsubmit = function(e) {
  e.preventDefault();
  handleSubmit();
};

function handleSubmit() {
  if (validateForm()) {
    title = document.getElementById("title");
    type = document.getElementById("type");
    range = document.getElementById("range");
    date = document.getElementById("date");
    
    var tableObject = document.getElementById("todoListBody");

    var row = tableObject.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = title.value;
    cell2.innerHTML = type.value;
    cell3.innerHTML = range.value;
    cell4.innerHTML = date.value;  
    cell5.innerHTML = '<i class="fas fa-check-circle"></i>';


 
    cell1.ondblclick = function() {
      var newTitle = window.prompt("Enter a new title:", cell1.innerHTML);

      if (newTitle == null || newTitle == "") {
        window.alert("The title was not changed.");
      } else {
        cell1.innerHTML = newTitle;
      }
    };

    cell5.onclick = function() {
      document.getElementById("todoList").deleteRow(this.parentNode.rowIndex);
    };

    sortTable();
    clearForm();
  }
}
var slider = document.getElementById("range");
var output = document.getElementById("value");
    output.innerHTML = slider.value;
        slider.oninput = function(){
            output.innerHTML = this.value;
}
    
    var Text = document.getElementById("todolisttitle");
    Text.ondblclick = function(){
    var newTitle = window.prompt("Enter a new title:", Text.innerHTML);

      if (newTitle == null || newTitle == "") {
        window.alert("The title was not changed.");
      } else {
        Text.innerHTML = newTitle;
      }
    }


function validateForm() {
  formObject = document.getElementById("addForm");

  for (var i = 0; i < formObject.elements.length; i++) {
    if (
      formObject.elements[i].value === "" &&
      formObject.elements[i].hasAttribute("required")
    ) {
      document.getElementById("errorMessage").style.visibility = "visible";
      return false;
    }
  }

  return true;
}

function clearForm() {
  document.getElementById("addForm").reset();
  document.getElementById("errorMessage").style.visibility = "hidden";
}

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("todoList");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function handleTheme() {
  document.body.classList.toggle("dark-mode");

  if (this.innerHTML == "Light") {
    this.innerHTML = "Dark";
  } else {
    this.innerHTML = "Light";
  }
}
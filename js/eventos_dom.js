// Exercise 1 (Chat GPT3.5)
const mousePosition = document.getElementById("mousePosition");
document.addEventListener("mousemove", function (e) {
  mousePosition.innerHTML =
    "Posición del mouse: " + e.clientX + ", " + e.clientY;
});

// Exercise 2 (Chat GPT3.5)
const form = document.getElementById("form1");
const firstName = document.getElementById("form-fname");
const lastName = document.getElementById("form-lname");
const formButton = document.getElementById("form1-submit");

formButton.addEventListener("click", function (e) {
  e.preventDefault();
  const fullName = document.createElement("p");
  fullName.textContent = firstName.value + " " + lastName.value;
  form.appendChild(fullName);
});

// Exercise 3 (Chat GPT3.5)
const table = document.getElementById("sampleTable");
const insertRowButton = document.getElementById("btn-insert-r");
const insertColButton = document.getElementById("btn-insert-c");

insertRowButton.addEventListener("click", function () {
  const newRow = table.insertRow(-1);
  for (let i = 0; i < NUMERO_DE_CELDAS; i++) {
    const cell = newRow.insertCell(i);
    cell.innerHTML = "Nuevo elemento";
  }
});

insertColButton.addEventListener("click", function () {
  for (let i = 0; i < table.rows.length; i++) {
    const newCell = table.rows[i].insertCell(-1);
    newCell.innerHTML = "Nuevo elemento";
  }
});

// Exercise 4 (Chat GPT3.5)
const myTable = document.getElementById("myTable");
const rowIndex = document.getElementById("rowIndex");
const colIndex = document.getElementById("colIndex");
const newValue = document.getElementById("newValue");
const changeButton = document.getElementById("btn-change");

changeButton.addEventListener("click", function () {
  const row = parseInt(rowIndex.value);
  const col = parseInt(colIndex.value);
  if (
    row >= 1 &&
    row <= myTable.rows.length &&
    col >= 1 &&
    col <= myTable.rows[0].cells.length
  ) {
    myTable.rows[row - 1].cells[col - 1].innerHTML = newValue.value;
  }
});

// Exercise 5 (Chat GPT3.5)
const colorSelect = document.getElementById("colorSelect");
const addColorButton = document.getElementById("btn-add-color");
const removeColorButton = document.getElementById("btn-rmv-color");

addColorButton.addEventListener("click", function () {
  const colorOptions = ["Blue", "Yellow", "Orange", "Purple"];
  const randomColor =
    colorOptions[Math.floor(Math.random() * colorOptions.length)];
  const newOption = document.createElement("option");
  newOption.textContent = randomColor;
  colorSelect.appendChild(newOption);
});

removeColorButton.addEventListener("click", function () {
  if (colorSelect.options.length > 0) {
    colorSelect.remove(colorSelect.selectedIndex);
  }
});

// Exercise 6 (Chat GPT3.5)
const gatoImagen = document.getElementById("imagenGato");
gatoImagen.addEventListener("mouseenter", function () {
  const newWidth = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  const newHeight = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  gatoImagen.src = "http://placekitten.com/" + newWidth + "/" + newHeight;
});

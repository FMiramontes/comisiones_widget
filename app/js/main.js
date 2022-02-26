const tabs = document.querySelectorAll("[data-tab-target]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

//CREATE TABLE

let comisiones = new Array(1);
comisiones[0] = {
  cell1: "2022/02/25",
  cell2: "vendedor prueba",
  cell3: "coordinador prueba 2",
  cell4: "prueba prueba",
  cell5: "villla prueba m3-l3",
  cell6: "enganche",
  cell7: "credito",
  cell8: "$0,00",
  cell9: "$160,000",
  cell10: "input %",
  cell11: "$0",
  cell12: "$220",
  cell13: "input checkbox",
  cell14: "input text",
  cell15: "input text",
  cell16: "button add",
};

let tabla = document.getElementById("table-data");
let table_body = document.getElementById("table-body");

function addRow() {
  console.log("add row");

  let row = document.createElement("tr");

  let data = document.createElement("td");
  data.innerText = comisiones[0].cell1;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerText = comisiones[0].cell2;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerText = comisiones[0].cell3;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerText = comisiones[0].cell4;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerText = comisiones[0].cell5;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerText = comisiones[0].cell6;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerText = comisiones[0].cell7;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerText = comisiones[0].cell8;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerText = comisiones[0].cell9;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerHTML = `<input type="text" class="form-field porcent" placeholder="%" />`;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerText = comisiones[0].cell11;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerText = comisiones[0].cell12;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerHTML = `<input type="checkbox" name="comision-pagada" id="comision-pagada"/>`;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerHTML = `<td><button type="button"class="add" onclick="addRemanente(this)" data-cont=3> + </button></td>`;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerHTML = `<input type="text" class="form-field" />`;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerHTML = `<input type="text" class="form-field" />`;
  row.appendChild(data);

  table_body.appendChild(row);
}

var parentRow;

let cont1 = 3;

let contCol;

function addRemanente(remanente) {
  console.log("add remanente");
  //let table_body = document.getElementById("table-body");
  parentRow = $(remanente).parent().parent();
  //console.log(parentRow);
  //console.log(contCol);

  if (cont1 <= 50) {
    cont1+=1;

    remanente.dataset.cont = cont1;

    let column_remanente = document.getElementById("cols");
    contCol = remanente.dataset.cont;
    console.log(contCol);

    //console.log(column_remanente);
    column_remanente.setAttribute("colspan", cont1.toString());

    td = document.createElement("td");
    td.innerHTML = `<input type="text" class="form-field" />`;
    parentRow.append(td);

  }else{
    console.log("limite de remanentes")
  }
}

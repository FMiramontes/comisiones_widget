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
  cell3: "prueba prueba",
  cell4: "villla prueba m3-l3",
  cell5: "enganche",
  cell6: "credito",
  cell7: "$0,00",
  cell8: "$160,000",
  cell9: "input %",
  cell10: "$0",
  cell11: "$220",
  cell12: "input checkbox",
  cell13: "input text",
  cell14: "input text",
  cell15: "button add",
};

let tabla = document.getElementById("table-data");
let table_body = document.querySelector(".table-body");


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
  data.innerHTML = `<input type="text" class="form-field porcent" placeholder="%" />`;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerText = comisiones[0].cell10;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerText = comisiones[0].cell11;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerHTML = `<input type="checkbox" name="comision-pagada" id="comision-pagada"/>`;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerHTML = `<input type="text" class="form-field" />`;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerHTML = `<input type="text" class="form-field" />`;
  row.appendChild(data);

  data = document.createElement("td");
  data.innerHTML = `<td><button type="button"class="add" onclick="addRemanente(this)" data-cont=3> + </button></td>`;
  row.appendChild(data);

  table_body.appendChild(row);

}

let parentRow;
let row1 = document.getElementById('row1')

// let cont1 = 3;

// let contCol;

function addRemanente(remanente) {
  console.log("add remanente");
  // let table_body = document.getElementById("table-body");
  parentRow = remanente.parentNode.parentNode;
  // parentRow = $(remanente).parent().parent();
  // console.log(parentRow);
  // console.log(contCol);

  // if (cont1 <= 50) {
  //   cont1+=1;

  //   remanente.dataset.cont = cont1;

  //   let column_remanente = document.getElementById("cols");
  //   contCol = remanente.dataset.cont;
  //   console.log(contCol);

    //console.log(column_remanente);
    // column_remanente.setAttribute("colspan", cont1.toString());

    th = document.createElement('th')
    th.setAttribute('colspan', '2')
    td1 = document.createElement("td");
    td1.innerHTML = `<input type="text" class="form-field" />`;
    td2 = document.createElement("td");
    td2.innerHTML = `<input type="text" class="form-field" />`;
    parentRow.append(td1);
    parentRow.append(td2);
    row1.append(th)
//   }else{
//     console.log("limite de remanentes")
//   }
}

// Carga la información a la tabla Coordinadores
fetch("./js/coordinadores.json")
         .then(resp => resp.json())
         .then(data => mostrarCoordinador(data))
         .catch(error => console.log(error))
        
         const mostrarCoordinador = (data) =>{
           console.log(data);
           let html = '';
           for (let i = 0; i<data.length; i++){
             html +=
            `
            <tr>
             <td>${data[i].FechaCierre}</td>
             <td>${data[i].Coordinador}</td>
             <td>${data[i].Cliente}</td>
             <td>${data[i].Lote}</td>
             <td>${data[i].TipoPolitica}</td>
             <td>${data[i].FormaPago}</td>
             <td>${data[i].Apartado}</td>
             <td>${data[i].ValorColocado}</td>
             <td><input type="text" class="form-field porcent" placeholder="%" /></td>
             <td>${data[i].APagar}</td>
             <td>${data[i].SaldoAdeudado}</td>
             <td><input type="checkbox" name="comision-pagada" id="comision-pagada"/></td>
             <td><input type="text" class="form-field"/></td>
             <td><input type="text" class="form-field"/></td>
             <td><button type="button"class="add" onclick="addRemanente(this)" data-cont=3> + </button></td>
             </tr>`
           }
           document.getElementById('coordinador').innerHTML = html;
        }
// Carga la información a la tabla Vendedores
fetch("./js/vendedores.json")
         .then(resp => resp.json())
         .then(data => mostrarVendedores(data))
         .catch(error => console.log(error))
        
         const mostrarVendedores = (data) =>{
           console.log(data);
           let html = '';
           for (let i = 0; i<data.length; i++){
             html +=
            `
            <div class="separador"></div>
            <tr>
             <td>${data[i].FechaCierre}</td>
             <td>${data[i].Vendedor}</td>
             <td>${data[i].Cliente}</td>
             <td>${data[i].Lote}</td>
             <td>${data[i].TipoPolitica}</td>
             <td>${data[i].FormaPago}</td>
             <td>${data[i].Apartado}</td>
             <td>${data[i].ValorColocado}</td>
             <td><input type="text" class="form-field porcent" placeholder="%" /></td>
             <td>${data[i].APagar}</td>
             <td>${data[i].SaldoAdeudado}</td>
             <td><input type="checkbox" name="comision-pagada" id="comision-pagada"/></td>
             <td><input type="text" class="form-field"/></td>
             <td><input type="text" class="form-field"/></td>
             <td><button type="button"class="add" onclick="addRemanente(this)" data-cont=3> + </button></td>
             </tr>`
           }
           document.getElementById('vendedor').innerHTML = html;
        }
  // Carga la información a la tabla Coordinadores
fetch("./js/callcenter.json")
.then(resp => resp.json())
.then(data => mostrarCallCenter(data))
.catch(error => console.log(error))

const mostrarCallCenter = (data) =>{
  console.log(data);
  let html = '';
  for (let i = 0; i<data.length; i++){
    html +=
   `<tr>
    <td>${data[i].FechaCierre}</td>
    <td>${data[i].Coordinador}</td>
    <td>${data[i].Cliente}</td>
    <td>${data[i].Lote}</td>
    <td>${data[i].TipoPolitica}</td>
    <td>${data[i].FormaPago}</td>
    <td>${data[i].Apartado}</td>
    <td>${data[i].ValorColocado}</td>
    <td><input type="text" class="form-field porcent" placeholder="%" /></td>
    <td>${data[i].APagar}</td>
    <td>${data[i].SaldoAdeudado}</td>
    <td><input type="checkbox" name="comision-pagada" id="comision-pagada"/></td>
    <td><input type="text" class="form-field"/></td>
    <td><input type="text" class="form-field"/></td>
    <td><button type="button"class="add" onclick="addRemanente(this)" data-cont=3> + </button></td>
    </tr>`
  }
  document.getElementById('call-center').innerHTML = html;
}

// let tabCoordinadores = document.querySelector('.tab-cordinadores'),
//     tabVendedores    = document.querySelector('.tab-vendedores'),
//     tabCallCenter    = document.querySelector('.tab-call-center'),
//     divCoordinadores = document.getElementById('coordinadores'),
//     divVendedores    = document.getElementById('vendedores');

// function Coordinador () {
//   // c.style.left = '140px'
//  divCoordinadores.classList = 'cont-coordinador'
// }
// function Vendedor(){
//   // c.style.left = '0px'
//   divVendedores.classList = 'cont-vendedor'
// }

// tabCoordinadores.addEventListener('click', () => {
//   Coordinador()
// })
// tabVendedores.addEventListener('click', () => {
//   Vendedor()
// })
function showContent(type) {
  let i, tabcontent;
  tabcontent = document.getElementsByClassName("wrapper");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(type).style.display = "block";
}

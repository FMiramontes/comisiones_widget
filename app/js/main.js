const tabs = document.querySelectorAll("[data-tab-target]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    let type = tab.dataset.tabTarget
    // console.log('Tipo: ', type)
    fillContent(type)
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

function addRemanente(e) {
  let parentRow;
  let row1 = document.getElementById('row1')
  let th = document.createElement('th');
  console.log(th)
  th.innerText = 'Remanente'
  parentRow = e.target.parentNode.parentNode;
  parentRow.dataset.row = true;
  let tdBoton = e.target.parentNode;
  // let tdHermano = tdBoton.previousElementSibling;
  console.log(tdBoton)
  let td = document.createElement('td')
  // td.dataset.index = 0;
  let Index = td.dataset.index = 0;
  let newIndex = Number(Index) +1;
 
  console.log('newInd',newIndex)
  td.innerHTML = `<input type="date" class="form-field"/> <input type="number" class="form-field" placeholder="$"/>`
  parentRow.insertBefore(td, tdBoton)
  let thead = document.querySelector('.thead')
  
  row1.deleteCell(thead.rows[0].childElementCount-1)
  row1.append(th)
  let thBoton = document.createElement('th')
  row1.appendChild(thBoton)

  // let tdActual = remanente.parentNode;
  // console.log('td', tdActual)
  // console.log(parentRow);
  // console.log('tdBoton: ', tdActual)
  // let tbody = document.querySelector('.table-body');
  // let th = document.createElement('th');
  // th.innerText = 'Remanente'
  // th.setAttribute("colspan","2");
  // let tr = document.getElementById('row1');
  // let thead = document.querySelector('.thead')
  // tr.deleteCell(thead.rows[0].childElementCount-1)
  // tr.appendChild(th);
  // let thBoton = document.createElement('th')
  // tr.appendChild(thBoton)
  // let rowCount = tbody.rows.length;
  // // td1 = document.createElement("td");
  // // td1.innerHTML = `<input type="text" class="form-field" />`;
  // // td2 = document.createElement("td");
  // // td2.innerHTML = `<input type="text" class="form-field" />`;
  // // parentRow.insertBefore(td1, tdActual);
  // // parentRow.insertBefore(td2, tdActual);
  // // row1.append(th)

  // for(let i=0; i<rowCount; i++){
  //   var row = tbody.rows[i];
  //   let cellCount = tbody.rows[i].cells.length-1; 
  //   // (row.matches('[data-row]') && parentRow.dataset.row == "true")
  //   console.log('row: ', tbody.rows)
  //   if(row.matches('[data-row]') && parentRow.dataset.row == "true")
  //   {
  //     row.insertCell(cellCount).innerHTML = `<input type="text" class="form-field"/>`
  //     row.insertCell(cellCount).innerHTML = `<input type="text" class="form-field"/>`
  //     // parentRow.dataset.row = false
  //   }
  //   else
  //   {
  //     row.insertCell(cellCount)
  //     row.insertCell(cellCount)
  //   }

    // row.insertCell(cellCount).innerHTML = `<input type="text" class="form-field"/>`
    // row.insertCell(cellCount).innerHTML = `<input type="text" class="form-field"/>`
  // }
}
//Agregar Columna Completa de Remitente 
function agregarColumna(){
  let tbody = document.querySelector('.table-body');
  let th = document.createElement('th');
  th.innerText = 'Remanente'
  let tr = document.getElementById('row1');
  let thead = document.querySelector('.thead')
  tr.deleteCell(thead.rows[0].childElementCount-1)
  tr.appendChild(th);
  let thBoton = document.createElement('th')
  tr.appendChild(thBoton)
  let rowCount = tbody.rows.length;
  for(let i=0; i<rowCount; i++){
    var row = tbody.rows[i];
    // console.log('tdBoton: ', tdActual)
    let cellCount = tbody.rows[i].cells.length-1; 
    // console.log('cellCount: ', cellCount)
    row.insertCell(cellCount).innerHTML = `<input type="date" class="form-field"/> <input type="text" class="form-field" placeholder="$"/>`;
    // row.insertCell(cellCount).innerHTML = `<input type="text" class="form-field" placeholder="$"/>`;

      //  let cellCount = tbody.rows[i].cells.length;  

      //  console.log('cell-count: ', cellCount);
      //  if(cellCount > cellMayor ){
      //     cellMayor = cellCount;
      //     console.log('cell+', cellMayor)
          
       }
  }

  function fillContent(type){
    console.log(type)
    fetch(`./js/${type}.json`)
         .then(resp => resp.json())
         .then(data => mostrar(data))
         .catch(error => console.log(error))
        
         const mostrar = (data) =>{
          // console.log(data);
           let html = '';
           for (let i = 0; i<data.length; i++){
             html +=
            `
            <tr>
             <td>${data[i].FechaCierre}</td>
             <td>${data[i].Nombre}</td>
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
             <td class="color-user"><input type="date" class="form-field"/><input type="number" class="form-field" placeholder="$"/></td>
             <td><button type="button"class="add" onclick="addRemanente(event)" data-cont=3> + </button></td>
             </tr>`
           }
           document.getElementById(`${type}`).innerHTML = html;
          colorUsuario(data)
        }
        
  }

function showContent(type) {
  let i, tabcontent;
  tabcontent = document.getElementsByClassName("wrapper");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(type).style.display = "block";
}

function colorUsuario(data){
  let tdColor = document.querySelectorAll('.color-user')
  // console.log('tds:' , tdColor)
  // console.log('data:' , data)
  for(i =0; i<tdColor.length; i++) {
    // console.log(element);
    if(data[i].tipo == 'a'){
      tdColor[i].style.borderLeft = '3px solid red'
      let tr = tdColor[i].parentElement
      tr.style.borderLeft ='8px solid red'
      
    }
    else if(data[i].tipo == 'b'){
      tdColor[i].style.borderLeft = '3px solid blue'
      let tr = tdColor[i].parentElement
      tr.style.borderLeft ='8px solid blue'
    }else{
      tdColor[i].style.borderLeft = '3px solid green'
      let tr = tdColor[i].parentElement
      tr.style.borderLeft ='8px solid green'
  }
  }
}

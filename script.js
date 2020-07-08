


//1 задача Создать HTML-страницу для отображения/редактирования текста.

document.body.addEventListener("keydown", (event) => {
  const textDo = document.createElement("div");
  if ((event.code === "KeyE" || event.code === "Comma") && event.ctrlKey) {
    event.returnValue = false;
    let elem = document.querySelector(".content__textarea");
    if (event.code === "KeyE" && elem.nodeName === "DIV") {
      let elemNew = document.createElement("textarea");
      elemNew.setAttribute("cols", 40);
      elemNew.setAttribute("rows", 20);
      elemNew.className = "content__textarea";
      elemNew.textContent = elem.textContent;
      elem.replaceWith(elemNew);
    } else if (event.code === "Comma" && elem.nodeName === "TEXTAREA") {
      let elemNew = document.createElement("div");
      elemNew.className = "content__textarea";
      elemNew.textContent = elem.value;
      textDo.className = "size";

      const changSize  = e => {
        e.preventDefault;
        window.addEventListener("mousemove", beginSize);
        window.addEventListener("mouseup", endSize);
      };

      const beginSize = e => {
        elemNew.style.width = (e.clientX - elemNew.offsetLeft) + "px";
      };
      const endSize = e => {
        window.removeEventListener('mousemove', beginSize);
        window.removeEventListener('mouseup', endSize);
      };

      resizer.addEventListener("mousedown", changSize);
      elemNew.append(textDo);
      elem.replaceWith(elemNew);
    }
  }

});


//3 задача Создать HTML-страницу с блоком текста в рамочке. 

const textDiv = document.getElementById("content__textarea");
const size = document.querySelector("div.size");

const changSize = e => {
  e.preventDefault;
  window.addEventListener("mousemove", beginSize);
  window.addEventListener("mouseup", endSize);
};

const beginSize = e => {
 textDiv.style.width = (e.clientX - size.offsetLeft) + "px";
};
const endSize = e => {
  window.removeEventListener('mousemove', beginSize);
  window.removeEventListener('mouseup', endSize);
};

size.addEventListener("mousedown", changSize);



// 2 задача Создать HTML-страницу с большой таблицей. 

const mainDiv = document.getElementById("content");
const tableDiv = document.createElement("div");
tableDiv.setAttribute("id", "content__tableDiv");
tableDiv.className = "content__tableDiv";

const tableTag = document.createElement("table");
tableTag.setAttribute("id", "content__table");
tableTag.className = "content__table";

tableDiv.append(tableTag);
mainDiv.append(tableDiv);

class Car {
  constructor(name, marka, year, cost) {
    this.name = name;
    this.marka = marka;
    this.year = year;
    this.cost= cost;
  }
}
const arrCar = [
  new Car("Reno", "Laguna", 2019, 15000),
  new Car("BMW", "A", 2017, 13000),
  new Car("Jeep", "Pickup", 2015, 10000),
  new Car("Audi", "Sto", 2009, 5000),
  new Car("Shcoda", "red", 2014, 8000),
  new Car("Cherry", "Logan", 2011, 3000),
  new Car("Hunday", "Four Kolesa", 2008, 1000),
  ];
class CarTable {
  constructor(arr) {
    this.arr = arr;
  }
  getHtml() {
    const table = document.getElementById("content__table");
    const tbody = document.createElement("tbody");
    tbody.setAttribute("id", "content__tbody");
    table.append(tbody);
    const array = this.arr;
    const head = document.createElement("tr");
    head.setAttribute("style", "font-size: 18px;");
    const th1 = document.createElement("th");
    th1.textContent = "Name";
    th1.setAttribute("id", "content__th1");
    th1.style.cursor = "pointer";
    const th2 = document.createElement("th");
    th2.textContent = "Marka";
    th2.setAttribute("id", "content__th2");
    th2.style.cursor = "pointer";
    const th3 = document.createElement("th");
    th3.textContent = "Year";
    th3.setAttribute("id", "content__th3");
    th3.style.cursor = "pointer";
    const th4 = document.createElement("th");
    th4.textContent = "Cost, dollors";
    th4.setAttribute("id", "content__th4");
    th4.style.cursor = "pointer";

    head.append(th1);
    head.append(th2);
    head.append(th3);
    head.append(th4);
    tbody.append(head);
    for (let i in array) {
      let tr = document.createElement("tr");
      tbody.append(tr);
      for (let j in array[i]) {
        let td = document.createElement("td");
        td.textContent = array[i][j];
        tr.append(td);
        td.setAttribute("style", "padding: 5px 10px; font-size: 16px;");
      }
    }
    table.setAttribute("border", "2");
    table.setAttribute("bordercolor", "green");
    table.setAttribute("width", "50%");
    table.setAttribute("style", "margin: auto");
  }
}
const tableObj = new CarTable(arrCar);
tableObj.getHtml();

const getCellValue = (tr, i) => tr.children[i].innerText || tr.children[i].textContent;

const comparer = (i, asc) => (a, b) => ((v1, v2) =>
  v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
)(getCellValue(asc ? a : b, i), getCellValue(asc ? b : a, i));

document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
  const table = th.closest('table');
  Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
    .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
    .forEach(tr => table.appendChild(tr));
})));


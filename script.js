// 1 Масив список покупок.

let products = [
  { name: "bread", quantity: 1, buy: true},
  { name: "chees", quantity: 1, buy: true},
  { name: "milk", quantity: 2, buy: false},
  { name: "potaito", quantity: 5, buy: false},
]
console.log(products);

let resul = products.slice();
let compare = (a, b) => {
  if (a.buy == false && b.buy == true) return -1;
  if (a.buy == true && b.buy == false) return 1;
  return 0;
};
console.log(resul.sort(compare));

let shopinglist = (name, quantity) => {
  let b = {};
  b.name = name;
  b.quantity = quantity;
  b.buy = false;
for (let i in resul) {
  newname = resul[i].name;
  if (newname == name) {
    resul[i].quantity += quantity;
    resul[i].buy = false;
    break;
  } else if (newname != name) {
    resul.push(b);
    break;
  }
}
  return resul;
};
 shopinglist('apple', 5);

let newBuy = name => {
 let b = {};
 b.name = name;
 b.quantity = 1;
 b.buy = true;
 for (let i in resul) {
   let newname = resul[i].name;
   if (newname == name) {
     resul[i].buy = true;
     break;
  } else if (newname != name) {
    resul.push(b);
    break;
  }
   }
 };
 newBuy('bananas');
 resul.sort(compare);
 
//  3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).

let cssStyle = [
  {name: "color", value: "green"},
  {name: "font-size", value: "20px"},
  {name: "text-arling", value: "center"},
  {name: "text-transform", value: "uppercase"},
  {name: "line-height", value: "1.80"},
];
const text = `Gnggjhkhj,jkkm hgfhfcg ghkjhkjhvjnhcgfh
dfgfghb hjjv jhbjnvgg bvfdhgkjhkjhgjhgfdghjghhgfh bnh
gfbjnjuyk jhgfvbnmk;lkjjhgffhjjkjlkmhghjhkjkjkjkjkkk`;

let textStyle = (cssStyle, text) => {
  document.write('<p style ="');
  for (let i in cssStyle) {
    document.write(cssStyle[i].name + ':' + cssStyle[i].value + ';');
}
document.write(">" + text +"</p>");
};
textStyle(cssStyle, text);
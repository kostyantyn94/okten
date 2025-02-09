// #y7crMeFwHcS

for (let i = 1; i <= 10; i++) {
  document.write("Hello");
}

// #TYj7ncx

for (let i = 1; i <= 10; i++) {
  document.write(`Loop number ${i}`);
}

// #uzkt71dp

let x = 0;

while (x < 20) {
  document.write("<h1>While</h1>");
  x++;
}

// #OeT7t3uUMFi

let y = 0;

while (y < 20) {
  document.write(`<h1>While number ${y}</h1>`);
  y++;
}

// #vLSZKMlO

let listOfItems = [
  "html",
  "css",
  "javascript",
  "mysql",
  "mongodb",
  "react",
  "angular",
  "node.js",
];

let str = "<ul>";

for (let elem of listOfItems) {
  str += `<li>${elem}</li>`;
}

document.write(`${str}</ul>`);

// #Hdjws7E

let products = [
  {
    title: "milk",
    price: 22,
    image:
      "https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg",
  },
  {
    title: "juice",
    price: 27,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg",
  },
  {
    title: "tomato",
    price: 47,
    image:
      "https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74",
  },
  {
    title: "tea",
    price: 15,
    image:
      "https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png",
  },
];

let str2 = `<div>`;

for (let elem of products) {
  str2 += ` <div class="product-card">
        <h3 class="product-title">${elem.title[0].toUpperCase() + elem.title.substring(1)} Price - ${elem.price}</h3>
        <img src="${elem.image}" alt="" class="product-image">
</div>`;
}

str2 += `</div>`;
document.write(str2);

// #4WrHwFTEop0

let users = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 30, status: true },
  { name: "kolya", age: 29, status: true },
  { name: "olya", age: 28, status: false },
  { name: "max", age: 30, status: true },
  { name: "anya", age: 31, status: false },
  { name: "oleg", age: 28, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 30, status: true },
  { name: "olya", age: 31, status: false },
  { name: "max", age: 31, status: true },
];

for (let elem of users) {
  if (elem.status) {
    console.log(elem);
  }
}

console.log("____________________________");

for (let elem of users) {
  if (!elem.status) {
    console.log(elem);
  }
}

console.log("____________________________");

for (let elem of users) {
  if (elem.age > 30) {
    console.log(elem);
  }
}

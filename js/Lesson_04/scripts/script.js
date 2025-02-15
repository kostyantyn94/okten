// #I2XsG6f
function rectangleArea(a, b) {
  return a * b;
}

// #ETGAxbEn8l
function circleArea(r) {
  return Math.PI * r * r;
}

// #Mbiz5K4yFe7
function cylinderArea(r, h) {
  return 2 * Math.PI * r * (r + h);
}

// #SIdMd0hQ
function printArrayElements(arr) {
  arr.forEach((element) => console.log(element));
}

// #59g0IsA
function createParagraph(text) {
  document.write(`<p>${text}</p>`);
}

// #hOL6126
function createUlWithThreeLi(text) {
  document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`);
}

// #0Kxco1edSN
function createUlWithNItems(text, count) {
  document.write("<ul>");
  for (let i = 0; i < count; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write("</ul>");
}

// #gEFoxMMO
function createListFromArray(arr) {
  document.write("<ul>");
  arr.forEach((item) => document.write(`<li>${item}</li>`));
  document.write("</ul>");
}

// #bovDJDTIjt
function displayObjects(arr) {
  arr.forEach((obj) => {
    document.write(
      `<div>ID: ${obj.id}, Name: ${obj.name}, Age: ${obj.age}</div>`,
    );
  });
}

// #pghbnSB
function findSmallestNumber(arr) {
  return Math.min(...arr);
}

// #EKRNVPM
function sum(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

// #kpsbSQCt2Lf
function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
}

// #mkGDenYnNjn
function exchange(sumUAH, currencyValues, exchangeCurrency) {
  const rate = currencyValues.find(
    (item) => item.currency === exchangeCurrency,
  )?.value;
  return rate ? sumUAH / rate : null;
}
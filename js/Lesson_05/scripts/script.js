// #I2XsG6f
const rectangleArea = (a, b) => a * b;

// #ETGAxbEn8l
const circleArea = (r) => Math.PI * r * r;

// #Mbiz5K4yFe7
const cylinderArea = (r, h) => 2 * Math.PI * r * (r + h);

// #SIdMd0hQ
const printArrayElements = (arr) =>
  arr.forEach((element) => console.log(element));

// #59g0IsA
const createParagraph = (text) => document.write(`<p>${text}</p>`);

// #hOL6126
const createUlWithThreeLi = (text) => {
  document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`);
};

// #0Kxco1edSN
const createUlWithNItems = (text, count) => {
  document.write("<ul>");
  for (let i = 0; i < count; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write("</ul>");
};

// #gEFoxMMO
const createListFromArray = (arr) => {
  document.write("<ul>");
  arr.forEach((item) => document.write(`<li>${item}</li>`));
  document.write("</ul>");
};

// #bovDJDTIjt
const displayObjects = (arr) => {
  arr.forEach((obj) => {
    document.write(
      `<div>ID: ${obj.id}, Name: ${obj.name}, Age: ${obj.age}</div>`,
    );
  });
};

// #pghbnSB
const findSmallestNumber = (arr) => Math.min(...arr);

// #EKRNVPM
const sum = (arr) => arr.reduce((acc, num) => acc + num, 0);

// #kpsbSQCt2Lf
const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
};

// #mkGDenYnNjn
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
  const rate = currencyValues.find(
    (item) => item.currency === exchangeCurrency,
  )?.value;
  return rate ? sumUAH / rate : null;
};

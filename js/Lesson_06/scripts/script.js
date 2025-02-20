// #dFeorS3m7u
console.log("hello world".length);
console.log("lorem ipsum".length);
console.log("javascript is cool".length);

// #8lld9HMxXWB
console.log("hello world".toUpperCase());
console.log("lorem ipsum".toUpperCase());
console.log("javascript is cool".toUpperCase());

// #ClDsAm7xba7
console.log("HELLO WORLD".toLowerCase());
console.log("LOREM IPSUM".toLowerCase());
console.log("JAVASCRIPT IS COOL".toLowerCase());

// #0b89BkYZwu
let str = " dirty string   ";
console.log(str.trim());

// #bfoJuse4ZzP
const stringToArray = (str) => str.split(" ");
let arr = stringToArray("Ревуть воли як ясла повні");
console.log(arr);

// #Rbr5kEQ
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringNumbers = numbers.map(String);
console.log(stringNumbers);

// #5hqyKTfmc
const sortNums = (array, direction) => {
  return direction === "ascending"
    ? array.sort((a, b) => a - b)
    : array.sort((a, b) => b - a);
};
let nums = [11, 21, 3];
console.log(sortNums(nums, "ascending"));
console.log(sortNums(nums, "descending"));

// #yo06d74c1C
let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];
let sortedCourses = coursesAndDurationArray.sort(
  (a, b) => b.monthDuration - a.monthDuration,
);
console.log(sortedCourses);
let filteredCourses = coursesAndDurationArray.filter(
  (course) => course.monthDuration > 5,
);
console.log(filteredCourses);
let mappedCourses = coursesAndDurationArray.map((course, index) => ({
  id: index + 1,
  ...course,
}));
console.log(mappedCourses);

// #bolvdlhP
let deck = [];
let suits = ["spade", "diamond", "heart", "clubs"];
let values = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
let colors = { spade: "black", clubs: "black", diamond: "red", heart: "red" };

suits.forEach((suit) => {
  values.forEach((value) => {
    deck.push({ cardSuit: suit, value, color: colors[suit] });
  });
});
console.log(deck);
console.log(
  deck.find((card) => card.cardSuit === "spade" && card.value === "ace"),
);
console.log(deck.filter((card) => card.value === "6"));
console.log(deck.filter((card) => card.color === "red"));
console.log(deck.filter((card) => card.cardSuit === "diamond"));
console.log(
  deck.filter(
    (card) => card.cardSuit === "clubs" && values.indexOf(card.value) >= 3,
  ),
);

// #EP5I1UUzAX
let groupedDeck = deck.reduce(
  (acc, card) => {
    acc[card.cardSuit + "s"].push(card);
    return acc;
  },
  { spades: [], diamonds: [], hearts: [], clubs: [] },
);
console.log(groupedDeck);

// #4LJn7zBx
let coursesArray = [
  {
    title: "JavaScript Complex",
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
    ],
  },
  {
    title: "Java Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "git",
      "java core",
      "java advanced",
    ],
  },
  {
    title: "Python Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "python core",
      "python advanced",
    ],
  },
  {
    title: "QA Complex",
    monthDuration: 4,
    hourDuration: 909,
    modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"],
  },
  {
    title: "FullStack",
    monthDuration: 7,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
      "python",
      "java",
    ],
  },
  {
    title: "Frontend",
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "sass",
    ],
  },
];

console.log(coursesArray.filter((course) => course.modules.includes("sass")));
console.log(coursesArray.filter((course) => course.modules.includes("docker")));

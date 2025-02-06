// Task 67kfznmiMl

let arr_01 = [1, 2, 3, 4, 5, true, 'Jack', 'Bob', 9, 10];

arr_01.forEach((elem) => {
  console.log(elem);
});

// Task LARqoUj5I

let obj_01 = {
  title: 'Harry Potter',
  pageCount: 455,
  genre: 'Fantasy',
};

let obj_02 = {
  title: 'The Lord of the Rings',
  pageCount: 1137,
  genre: 'Fantasy',
};

let obj_03 = {
  title: '1984',
  pageCount: 328,
  genre: 'Dystopian',
};

// Task sA3Gg1sCp

let book1 = {
  title: "Harry Potter and the Philosopher's Stone",
  pageCount: 223,
  genre: 'Fantasy',
  authors: [{ name: 'J.K. Rowling', age: 57 }],
};

let book2 = {
  title: 'The Hobbit',
  pageCount: 310,
  genre: 'Fantasy',
  authors: [{ name: 'J.R.R. Tolkien', age: 81 }],
};

let book3 = {
  title: 'To Kill a Mockingbird',
  pageCount: 281,
  genre: 'Fiction',
  authors: [{ name: 'Harper Lee', age: 89 }],
};

// Task jCHFnEbdmFd

let users = [
  { name: 'John Doe', username: 'johndoe', password: 'password123' },
  { name: 'Jane Smith', username: 'janesmith', password: 'qwerty456' },
  { name: 'Alice Johnson', username: 'alicej', password: 'alice789' },
  { name: 'Bob Brown', username: 'bobbrown', password: 'bobpassword' },
  { name: 'Charlie Davis', username: 'charlied', password: 'charlie321' },
  { name: 'Diana Evans', username: 'dianae', password: 'diana654' },
  { name: 'Ethan Green', username: 'ethang', password: 'greenpass' },
  { name: 'Fiona Harris', username: 'fionah', password: 'fiona1234' },
  { name: 'George Wilson', username: 'georgew', password: 'wilson987' },
  { name: 'Hannah Taylor', username: 'hannaht', password: 'taylor000' },
];

users.forEach((user) => {
  console.log(user.password);
});

// Task coYydZuaeEB

let weeklyTemperatures = [
  { day: 'Monday', morning: 10, afternoon: 18, evening: 12 },
  { day: 'Tuesday', morning: 12, afternoon: 20, evening: 14 },
  { day: 'Wednesday', morning: 8, afternoon: 17, evening: 11 },
  { day: 'Thursday', morning: 11, afternoon: 19, evening: 13 },
  { day: 'Friday', morning: 9, afternoon: 16, evening: 10 },
  { day: 'Saturday', morning: 7, afternoon: 15, evening: 9 },
  { day: 'Sunday', morning: 10, afternoon: 18, evening: 12 },
];

// Task bAUsaq6LI

let x = Math.floor(Math.random() * 21) - 10;

if (x !== 0) {
  console.log('Вірно');
} else {
  console.log('Невірно');
}

let testValues = [1, 0, -3];

testValues.forEach((value) => {
  if (value !== 0) {
    console.log(`x = ${value}: Вірно`);
  } else {
    console.log(`x = ${value}: Невірно`);
  }
});

// Task 3ckURgvs

let time = Math.floor(Math.random() * 60);

console.log(`Значення time: ${time}`);

if (time >= 0 && time <= 14) {
  console.log('Перша чверть години');
} else if (time >= 15 && time <= 29) {
  console.log('Друга чверть години');
} else if (time >= 30 && time <= 44) {
  console.log('Третя чверть години');
} else if (time >= 45 && time <= 59) {
  console.log('Четверта чверть години');
} else {
  console.log('Некоректне значення time');
}

// Task UMoNq4biWGe

let day = Math.floor(Math.random() * 31) + 1;
console.log(`Значення day: ${day}`);

if (day >= 1 && day <= 10) {
  console.log('Перша декада місяця');
} else if (day >= 11 && day <= 20) {
  console.log('Друга декада місяця');
} else if (day >= 21 && day <= 31) {
  console.log('Третя декада місяця');
} else {
  console.log('Некоректне значення day');
}

// Task KzrtqyQ

let dayNumber = parseInt(
  prompt('Введіть порядковий номер дня тижня (від 1 до 7):')
);

switch (dayNumber) {
  case 1:
    console.log('Monday: Gym workout and project planning');
    break;
  case 2:
    console.log('Tuesday: Grocery shopping and coding practice');
    break;
  case 3:
    console.log('Wednesday: Team meeting and yoga session');
    break;
  case 4:
    console.log('Thursday: Work on personal project and read a book');
    break;
  case 5:
    console.log('Friday: Finish work tasks and watch a movie');
    break;
  case 6:
    console.log('Saturday: Cleaning the house and hanging out with friends');
    break;
  case 7:
    console.log('Sunday: Rest, meal prep, and family time');
    break;
  default:
    console.log('Некоректний номер дня. Введіть число від 1 до 7.');
}

// Task uwsz1RnTQJ1

let num1 = parseFloat(prompt('Введіть перше число:'));
let num2 = parseFloat(prompt('Введіть друге число:'));

if (num1 > num2) {
  console.log(`Максимальне число: ${num1}`);
} else if (num2 > num1) {
  console.log(`Максимальне число: ${num2}`);
} else {
  console.log('Числа рівні.');
}

// Task iBvqtjEm

let new_x; // Змінна x може приймати будь-яке значення

new_x = new_x || 'default'; // Якщо x має falsy-значення, то йому присвоюється "default"

console.log(`Значення x: ${x}`);

// Task awLXL6TBzg

let coursesAndDurationArray = [
  { title: 'JavaScript Complex', monthDuration: 5 },
  { title: 'Java Complex', monthDuration: 6 },
  { title: 'Python Complex', monthDuration: 6 },
  { title: 'QA Complex', monthDuration: 4 },
  { title: 'FullStack', monthDuration: 7 },
  { title: 'Frontend', monthDuration: 4 },
];

coursesAndDurationArray.forEach((course) => {
  if (course.monthDuration > 5) {
    console.log('Супер');
  }
});

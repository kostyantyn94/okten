// Task dYQNrBV

let a1 = 'hello',
  b1 = 'owu',
  c1 = 'com',
  d = 'ua',
  e = 1,
  f = 10,
  g = -999,
  h = 123,
  i1 = 3.14,
  j = 2.7,
  k = 16,
  l = true,
  m = false;

// Task 6Qb97gsv

let firstName, middleName, lastName;

firstName = 'John';
middleName = 'Garrison';
lastName = 'Doe';

let person = `${firstName} ${middleName} ${lastName}`;

// Task 4N0y5tufA

let a = 100,
  b = '100',
  c = true;

console.log(
  `type of a is ${typeof a}, type of b is ${typeof b}, type of c is ${typeof c}`
);

// Task ruUtWDUI

let first_name_prompt = prompt('What is your name?');

if (first_name_prompt === '') {
  alert('Please enter your name');
  first_name_prompt = prompt('What is your name?');
}

let last_name_prompt = prompt('What is your surname?');

if (last_name_prompt === '') {
  alert('Please enter your surname');
  last_name_prompt = prompt('What is your surname?');
}

let age_prompt = prompt('How old are you?');

if (age_prompt < 0 || age_prompt > 120 || isNaN(parseInt(age_prompt))) {
  alert('Please enter a valid age');
  age_prompt = prompt('How old are you?');
}

console.log(
  `My name is ${first_name_prompt} ${last_name_prompt} and I am ${age_prompt} year${age_prompt === '1' ? '' : 's'} old!`
);

// #XjJuucOMR0
function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}

let users = [
  new User(1, "John", "Doe", "john@example.com", "123-456"),
  new User(2, "Jane", "Doe", "jane@example.com", "456-789"),
  new User(3, "Alice", "Smith", "alice@example.com", "789-012"),
  new User(4, "Bob", "Brown", "bob@example.com", "012-345"),
  new User(5, "Charlie", "Johnson", "charlie@example.com", "345-678"),
  new User(6, "Dave", "White", "dave@example.com", "678-901"),
  new User(7, "Eve", "Black", "eve@example.com", "901-234"),
  new User(8, "Frank", "Davis", "frank@example.com", "234-567"),
  new User(9, "Grace", "Miller", "grace@example.com", "567-890"),
  new User(10, "Hank", "Wilson", "hank@example.com", "890-123"),
];

// #2ikXsE2WiKZ
let evenIdUsers = users.filter((user) => user.id % 2 === 0);

// #pOeHKct
let sortedUsers = [...users].sort((a, b) => a.id - b.id);

// #nkMXISv
function Client(id, name, surname, email, phone, order) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
  this.order = order;
}

let clients = [
  new Client(1, "John", "Doe", "john@example.com", "123-456", [
    "item1",
    "item2",
  ]),
  new Client(2, "Jane", "Doe", "jane@example.com", "456-789", ["item1"]),
  new Client(3, "Alice", "Smith", "alice@example.com", "789-012", [
    "item1",
    "item2",
    "item3",
  ]),
  new Client(4, "Bob", "Brown", "bob@example.com", "012-345", [
    "item1",
    "item2",
    "item3",
    "item4",
  ]),
  new Client(5, "Charlie", "Johnson", "charlie@example.com", "345-678", [
    "item1",
  ]),
  new Client(6, "Dave", "White", "dave@example.com", "678-901", [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
  ]),
  new Client(7, "Eve", "Black", "eve@example.com", "901-234", [
    "item1",
    "item2",
  ]),
  new Client(8, "Frank", "Davis", "frank@example.com", "234-567", [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
  ]),
  new Client(9, "Grace", "Miller", "grace@example.com", "567-890", ["item1"]),
  new Client(10, "Hank", "Wilson", "hank@example.com", "890-123", [
    "item1",
    "item2",
    "item3",
  ]),
];

// #8abtVjRv
let sortedClients = [...clients].sort(
  (a, b) => a.order.length - b.order.length,
);

// #vV9a6584I5
function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.engineCapacity = engineCapacity;
  this.drive = function () {
    console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
  };
  this.info = function () {
    console.log(this);
  };
  this.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed += newSpeed;
  };
  this.changeYear = function (newValue) {
    this.year = newValue;
  };
  this.addDriver = function (driver) {
    this.driver = driver;
  };
}

// #5kla3yMpgp
class CarClass {
  constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
  }
  drive() {
    console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
  }
  info() {
    console.log(this);
  }
  increaseMaxSpeed(newSpeed) {
    this.maxSpeed += newSpeed;
  }
  changeYear(newValue) {
    this.year = newValue;
  }
  addDriver(driver) {
    this.driver = driver;
  }
}

// #gsKLAsNWM
function Cinderella(name, age, shoeSize) {
  this.name = name;
  this.age = age;
  this.shoeSize = shoeSize;
}

let cinderellas = [
  new Cinderella("Anna", 19, 35),
  new Cinderella("Maria", 21, 36),
  new Cinderella("Elena", 22, 37),
  new Cinderella("Sophia", 20, 38),
  new Cinderella("Daria", 23, 39),
];

class Prince {
  constructor(name, age, foundShoeSize) {
    this.name = name;
    this.age = age;
    this.foundShoeSize = foundShoeSize;
  }
}

let prince = new Prince("Arthur", 25, 37);
let matchingCinderella = cinderellas.find(
  (c) => c.shoeSize === prince.foundShoeSize,
);

// #gsKLAsNWM
Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.customFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

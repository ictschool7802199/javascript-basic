let car = {
  name: "Honda city",
  horsePower: 220,
  year: 1970,
  color: "red",
};

// console.log(car);
// console.log(car.name);
// console.log(car.horsePower);
// console.log(car.year);
// console.log(car.color);

let cars = [
  {
    name: "Honda city",
    horsePower: 220,
    year: 1970,
    color: "red",
    status: true,
  },
  {
    name: "Honda civic",
    horsePower: 300,
    year: 2022,
    color: "black",
    status: false,
  },
  {
    name: "Honda jazz",
    horsePower: 180,
    year: 2012,
    color: "silver",
    status: true,
  },
  {
    name: "Honda jazz",
    horsePower: 200,
    year: 2022,
    color: "pink",
    status: true,
  },
];

let showRoom = [];
for (index = 0; index < cars.length; index++) {
  if (cars[index].year > 2000) {
    showRoom.push(cars[index]);
  }
}

// console.log(cars[0]);
console.log(showRoom);

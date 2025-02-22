const animals = ['chicken', 'goat', 'pig', 'sheep', 'cow'];

const oddAnimals = animals.filter((animal, index) => {
  if(index % 2) return animal;
});

console.log(oddAnimals);


const instructors = ['Beryl', 'Hunter', 'Joe', 'Jurgen', 'Ben', 'David']
 const Newinstructors = instructors.map(instructor => {
    return `${instructor} is awesome;`
 })
 console.log(Newinstructors);



 const people = ['jerks', 'nice people', 'jerks', 'nice people', 'nice people'];
const jerkFree =people.filter(jF => jF !=="jerks");
console.log(jerkFree);


const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];
  
  const firstWhiteCarIdx = cars.findIndex((car) => {           
    return car.color === 'white';
  });
  // firstWhiteCarIdx equals 1
  
  const missingCarIdx = cars.findIndex((car) => {
    return car.color === 'black';
  });

  
  // missingCarIdx = -1
  

  const thingsInMyRoom = ['bed', 'lamp', 'table', 'random elephant', 'three tacos'];
const isARandomElephantInMyRoom = thingsInMyRoom.some(things =>
    (things==="random elephant" && true)
)
console.log(isARandomElephantInMyRoom);


const thingsInMyRooms = [
    'random elephant', 
    'random elephant', 
    'random elephant', 
    'random elephant'
  ];
  
  const isEverythingInMyRoomARandomElephant = thingsInMyRooms.every(
    randomEle => (randomEle !== 'random elephant' && false)
  )

  console.log(isEverythingInMyRoomARandomElephant);
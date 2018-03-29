const square = function(x){
   return x * x;
};

console.log(square(8));

// const squareArrow = (x) => {
//    return x * x;
// }

const squareArrow = (x) => x * x;

console.log(squareArrow(99));

// let fullname = 'justin sarrasin' 

// const getFirst = (fullName) => {
//    return fullName.split(' ')[0];
// };

// console.log(getFirst('justin sarrasin'));

const getFirst = (fullName) => fullName.split(' ')[0];

console.log(getFirst('bob sarrasin'));


const add = function(a,b){
   return a + b;
};

console.log(add(55,1));

const user = {
   name: "justin",
   cities: ["london", 'toronto'],
   printPlacesLived() {
      return this.cities.map((city) => this.name + ' has lived in ' + city);
      

      return cityMsg;

      // this.cities.forEach((city) => {
      //    console.log(this.name + ' has lived in ' + city);
      // });
   }
};

console.log(user.printPlacesLived());


// challenge 

const multiplier = {
   // numbers - array of numbers
   numbers: [1,2,3,4],
   // mulitply by - single number
   multiplyBy: 3,
   multiply() {
      return this.numbers.map((number) => number * this.multiplyBy);
   }
   // multiply  - return a new array where the number have been muliplied
};

console.log(multiplier.multiply());
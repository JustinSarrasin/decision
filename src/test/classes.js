class Person {
   constructor(name = 'anoymous', location, age = 0){
      // console.log('test')
      this.name = name;
      this.location = location;
      this.age = age;
   }
   getGreeting(){
      // return 'hi ' + this.name;
      return `hi ${this.name}`
   }
   getDescription(){
      return `${this.name} is ${this.age}`
   }
}

class Student extends Person{
    constructor(name, location, age, major){
       super(name, location, age);
       this.major = major;
    }  
    hasMajor(){
       return !!this.major;
    }
    getDescription(){
       let description = super.getDescription();

       if(this.hasMajor()){
          description += ` their major is ${this.major}`
       }
       return description;
    }
}

class Traveler extends Person{
   constructor(name, location, age, homeLocation){
      super(name, location, age);
      this.homeLocation = homeLocation;
   }
   getGreeting(){
      let greeting = super.getGreeting();
      if(this.homeLocation){
         greeting += `from ${this.homeLocation}`;
         
      }
      return greeting;
   }
}

const me = new Student('Justin Sarrasin', 'toronto', 28, 'london');
console.log(me.getGreeting());
console.log(me);

const other = new Person();
console.log(other)

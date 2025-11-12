                                    //PROTOTYPE
// function person(name,age){

//     this.name = name;
//     this.age = age;
// }

// person.prototype.greet = function () {    // every js function has a prototype property which allows objs to inherit properites from a prototype  

//     console.log(`Helo i'm ${this.name} and i'm ${this.age} years old`);
        
// }


// let person1 = new person('Alice',20);
// let person2 = new person('Bob',27);


// person2.greet()    // greet is not inside the obj but we can access it using prototype

// person1.greet()

// console.log(person1);
// console.log(person2);


                                //  CONSTRUCTOR

// let marks = {
//     math:20,
//     sc:23
// }


// class person {
//     constructor(name,age,marks,location) {
        
//         this.name = name
//         this.age = age
//         this.location = location
//         this.marks = marks
//     };


//     who() {

//         console.log(`Hey my name is ${this.name} and i'm ${this.age} years old  i live in ${this.location} my mark for math is ${this.marks.math}, science is ${this.marks.sc} `);
        
//     }

// }



//  person1.who()


// class Person {
//     #name // declaring private var
//     constructor(name,age,job) {
//         this.#name = name; // setting private
//         this.age = age;
//         this.job = job;
//     }

//     get name1(){  // to get the private value  can also be used to get normal vars

//         return this.#name.toUpperCase()
//     }

//     set name2(newname){ // to set value

//         this.#name = newname

//     }

// }

// class Emp extends Person{


//     constructor(name,age,job,salary){

//         super(name,age,job)
//         this.salary = salary

//     }

//     get name1(){

//         return super.name1.toUpperCase()
//     }


// }

// const person1 = new Person("Alice",20,'DBA');

// console.log(person1.name1)
// person1.name2 = "bob"

// console.log(person1.name1) 

// const emp1 = new Emp('dude',21,'DEVLOPER',30000)

// console.log(emp1)
// console.log(emp1.name1)



// class account{

//     #balance
//     constructor(owner,balance){

//         this.owner = owner;
//         this.#balance = balance;

//     }
//     get bal(){
//         return this.#balance;
//     }

//     deposit(money){      // a method to update the account balance with private var

//         this.#balance += money
//     }
// }


// let acc1 = new account("Spade",1100000);
// console.log(acc1.bal)

// acc1.deposit(900000)  //updating balance
// console.log(acc1.bal)

                                    // METHOD OVERRIDING 

// class Animal {
//     speaks(){
//         console.log("Animal Speaks");
        
//     }

// }

// class Dog extends Animal {
    
//     speaks(){
//         console.log("Dog Barks");
        
//     }
// }

// let a = new Animal;

// let d = new Dog;

// a.speaks()

// d.speaks()




                                    //Polymorphism


// class Animal {
//     speaks(){
//         console.log("Animal Speaks");
        
//     }

// }

// class Dog extends Animal {
    
//     speaks(){
//         console.log("Dog Barks");
        
//     }
// }

// class Cat extends Animal {

//     speaks(){
//         console.log("Cat meows");
//     }
// }


// const all = [new Animal,new Dog,new Cat];


// all.forEach((a)=> a.speaks());


// let marks = {
//     math:20,
//     sc:23
// }


// class person {
//     constructor(name,age,marks,location) {
        
//         this.name = name
//         this.age = age
//         this.location = location
//         this.marks = marks
//     };


//     who() {

//         console.log(`Hey my name is ${this.name} and i'm ${this.age} years old  i live in ${this.location} my mark for math is ${this.marks.math}, science is ${this.marks.sc} `);
        
//     }

// }



// class emp extends person{

//     constructor(name,age,marks,location,work,salary){

//         super(name,age,marks,location);
//         this.work = work;
//         this.salary =salary;
//     }

//     job(){
//         console.log(`I am Working as a ${this.work} now my salary is ${'$'+this.salary}`)
//     }

// }


// let person1 = new person("Nandhu",23,marks,"palluruthy")

// let em1 = new emp('Spade',10,marks,"palluruthy",'Developer',100000)

// em1.who()
// em1.job()

// person1.who()

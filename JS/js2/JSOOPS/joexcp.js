

// try {
//     let result = 10/0;  // no zero div error
//     new Map((fun)=>a)  // making errors
//     fun()
//     console.log(`Result: ${result}`) 
//     let x = y + 1 // also error
// } 

// catch (error) {

//     console.log('hmmm.. something went wrong... oh!! got it. its just that ',error.message);    
// }

// finally{

//     console.log("sorry but i will run anyway for");
//     fun()
// }

// function fun() {
    
//     console.log("FUN");
    

// }


                            // Throw predefined error


// function div(a,b) {
    
//     if(b === 0){
//         throw new Error(" Sorry but No You cant divide by 0...");
        
//     }
//     return a/b

// }

// try {
   
//       // making errors
//     div(10,0)
// } 

// catch (error) {


//     console.log('hmmm.. something went wrong... oh!! got it. ',error.message);    
// }

// finally{

//     console.log("sorry but i will run . - finally");
// }


                                // error name and stack trace


// try {
//     let result = 10/0;  // no zero div error
//     new Map((fun)=>a)  // making errors
//     fun()
//     console.log(`Result: ${result}`) 
//     let x = y + 1 // also error
// } 

// catch (error) {

//     console.log('here is the message.......',error.message);
//     console.log('here is the name.........',error.name);
//     console.log('here is the stack trace.......',error.stack);        
// }

// finally{

//     console.log("sorry but i will run anyway for");
//     fun()
// }

// function fun() {
    
//     console.log("FUN");
    

// }



                                    // Custom Error and Error Class
                                    
// class Person {
//     constructor(name,age) {
//         this.name = name
//         this.age = age
//     }
// }

// let man = new Person('Stark',17);

// class ValidationError extends Error{
//     constructor(message) {
//         super(message)
//         this.name = 'Validation error has ocuured '
//     }
// }


// try{

//     if (man.age < 18) {
        
//         throw new ValidationError('Voter needs to be above 18 years old.')
//     }
//     if (man.name.length < 5 ) {

//         throw new ValidationError('Voter`s name must be greater than 5 characters  ')
//     }

// }
// catch(error){

// console.log(`${error.name}:${error.message}`)
// }
// finally{


// }
// function fucn() {
    
// }

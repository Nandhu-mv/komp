// let age = prompt(`Enter the age `,0);

// try {
//     if(age < 0){
//         throw new Error(" Age cannot be Negative yo..");
//     }
//     if (age <= 12) {
//         console.log(" you are a Child");
        
//     } else if(age > 12 && age <= 19 ) {
//         console.log(" you are a Teenager");
//     }
//      else if(age > 19 && age <= 64 ) {
//         console.log(" you are an Adult ");
//     }
//      else if(age > 64  ) {
//         console.log(" you are a senior");
//     }

// } catch (error) {
//     console.log(error);
// }


// let num = prompt("Enter the number",0)

// if (num % 2 == 0) {
    
//     console.log('====================================');
//     console.log("EVEN");
//     console.log('====================================');
// }
// else{
//     console.log('====================================');
//     console.log("ODD");
//     console.log('====================================');
// }


// let pass = prompt("Enter password");


//     if (pass.length >= 8) {
//         console.log(" Stroong");
        
//     } else if(pass.length < 8 && pass.length >= 5) {
//         console.log(" Medium");
//     }
//      else {
//         console.log(" Weak ");
//     }

let prms = new Promise((resolve)=>{

    for (let index = 10; index >= 0; index--) {
    
    setTimeout(() => {
        console.log(index)   
    }, 2000);
    
    if (index == 0) resolve('done');
    }
});

prms.then((a)=>console.log(a))
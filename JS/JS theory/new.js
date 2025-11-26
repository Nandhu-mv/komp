// var x = 1
// console.log(x)  //               hoistable, redeclareable, reassignable

// let y = 2
// console.log(y) //                non hoistable,non redeclareable, reassinable

// const z = 3
// console.log(z) //                    non all

// let txt = 'hello there....'


// y = x + z

// console.log(y)

// let num = Infinity
// let negnum = -Infinity

// y = num + negnum * 0

// let a = NaN //not a number

// console.log(10==11)
// console.log(z)

// let t = 'hey hey hey'
// u = undefined


//                                              symbol type

//    |
//    V

// var id1 = Symbol('hello')
// var id2 = Symbol('hello')

// console.log(id1 == id2)
// console.log(id1)
// console.log(id2)


// console.log(typeof u)


// concatinate using `` or template literals

// console.log(`dude ${t}`)

// console.log(a)

// let new1 =  num + num


// console.log(num === num) //typecheck + equality check

// console.log(new1)

// console.log(negnum)

// console.log(typeof txt) // string don't change

// console.log(txt)


// let nol = null





// console.log('helloo')
// console.log( typeof nol)


//                                      big int only operated with other big int
// let n1 = 10001n
// let n2 = 1110n 
// console.log(n1+n2) 

// let ob = {
//     name:'Nandhu',
//     age:23,
//     skill:{
//         a:'html',
//         b:'css',
//         c:'javascript'
//     }
// }

// let arr= ['a','b','c']

// console.log(ob)

// console.log( arr +" "+ (typeof arr) )


// function hey(ob){

//     console.log(`hey ${ob.name}`)

//     console.log(`You are ${ob.age} years old right?`)

// }

// hey(ob)

// console.log('5' + 2)
// console.log('5' - 2)
// console.log('5' * '4')


//                                          EXPLICIT CONVERSION
//    |
//    V

// let new2 = Number('123') 
// console.log(new2)

// let num1 = parseInt('12.50')
// let num2 = parseFloat('11.11')

// let str2 = String(102)
// let str1 = (1232).toString()

// let bof = Boolean(0)
// let bot = Boolean(1)

// console.log(num1)
// console.log(num2)
// console.log(str2)
// console.log(str1)
// console.log(bof)
// console.log(bot)

// let n1 = 16
// let n2 = 16

// console.log(parseInt(n2/n1))

// console.log((n2%n1))

// let n3 = 12

// n3 += n1
// console.log(n3)

// n3 %= n2

// console.log(n3)

// n3 += 2

// n3 *= n2

// console.log(n3)

// n3 /= n2

// console.log(n3)

// console.log(n1===n2) // type check + Eqiuality Check
// console.log(n3 == n1)
// console.log(n3 != n2)
// console.log(n1 !== n2)


// logical ops 
//    |
//    V
// console.log(n1 === n2)
// console.log(n1 === n3)
// console.log(n1===16 && n3==12)
// console.log(n1 ==='16' || n3===12)

//                                                  ternary
//    |
//    V


// function voto( age){
// let vayas = age

// let vote = vayas>17 ? 'Vote Cheyam !!!': 'Vote cheyunath Asadhyam'

// console.log(vote)

// }

// voto(18)

//                                  nullish coalescing op  // only print right if null 
//    |
//    V

// let per = null
// console.log(per?? 'per illa')

// let naam = ''
// console.log(naam??'Hello')


//                                          template lits

// let data1='hellooo'
// let data2='worlld '


//                                          conditional statements 

// let a = 11

// let b = 10

// let c = 10  

// if(a>b){
    
//     if(a>c){
//         console.log("a is the greatest number")
//     }
//     else{
//         console.log("b is the greater number",b)
//     }
// }
// else if(b>c){
//     console.log("b is the great number",b)
// }

// else(
//     console.log("c is the gret num",c)
// )


// let day = 2


// switch(day){

//     case 1:
//         console.log("Sunday")
//         break;
//     case 2:
//         console.log("Monday")
//         break
//     case 3:
//         console.log("Tuesday")
//         break
//     case 4:
//         console.log("Wednesday")
//         break
//     case 5:
//         console.log("Thursday")
//         break
//     case 6:
//         console.log("Friday")
//         break
//     case 7:
//         console.log("Sunday")
//         break
// }

//                                                      looooops

// for(let i=0;i<  10;i++){

//         console.log(i+1)
// }

// console.log("--------------------------------------")

// let a = 1

// while (a > 0 && a < 10) {
//     console.log(a)
//     a+=1
// }

// console.log("--------------------------------------")

// do{
//     console.log(a)
//     a++
// }
// while(a<20)
// let i = 1
// for(let key in ob){

//     console.log(i,key,':',ob[key])
//     i++
// JS supports function hoisting (calling function above declaration (named function))  



// vote(ob)

// function vote(ob) {

    
//     if (ob.age>18) {

//         console.log(ob.name,'can vote')
        
//     }

// }


//                                          jumping statements

// for(i= 1; i < 10;i++){

//     if (i==5 || i==6)continue;
//     console.log(i)
// }

// caller()


// function caller(){

//     let a = 5
//     let b = 17
//     let sum = returner(a,b)
// console.log("sum = ",sum)


// }

// function returner(a,b) {

//     return a+b
    
// }


//                                          Arrow function  !!


// let ar=()=>{
//     console.log(
//         " This is an Arrow function"
//     )
// }

// ar()

// const ar2=(a , b)=>{
//     console.log(
//         " This is an Arrow function 2",
//         a+b
//     )
// }

// ar2(4,7)

// const ar3=(x)=>{
//     return x*x
// }

// let x =11

// console.log('sqaure of ',x,'is ',ar3(x))


//                                          DEFAULT PARAMETER v

// function def(name='Nandhu'){

//     return `Hello ${name}`
// }

// console.log(def('Spade'))
// console.log(def())


// rest function

//     function res(...resto) {             // when number of arg is unknown
//         console.log(resto);
//         console.log(resto.reduce((a,b)=>a+b,0));
        
//     }

//     res(1,2,3,4,5,6,7,8,9)


//                                         Scope

// let s = 10 // global

// function sco() {
//     let s = 8      // local scope
    
// }
// if (s === 10) {
    
//    let s = 7  // block scope
// }


//                                         IIFE

// (function (){
//     console.log('immediatly !! ');
// })();



//     callback fucntion

// function greet(name,callback){

//     console.log(`hello ${name} How are you ok`)
//     callback()
// }

// function bye(){ console.log('bieeeeee ')}

// greet('Nandhu',bye)

// function higher(task,count){

//     for (let index = 0; index < count; index++) {
//     task()
    
//     }

// }

// higher(()=>{console.log('hello')},7)


//                                          Strings

//     let str = 'hello'
//     let str1 = " hey "
//     let str3 = `haloooo ${str1}`

//     let str4 = new String('HEY')

//     console.log(str4, str, str3);
//     console.log(str.length);
//     console.log(str.toUpperCase());
//     console.log(str4.toLowerCase());

//                                         string search

//     console.log(str3.lastIndexOf('o'));
//     console.log(str3.indexOf('o'));
//     console.log(str3.includes('alo'));
//     console.log(str3.startsWith('ha'));
    
//                                         string extracting

//     console.log(str3.slice(0,5));       // (start,end)
//     console.log(str3.substring(-2,4));   // (start,end)  -value = 0
//     console.log(str3.substr(2,6));   // substr (start,length)
    
    
//     console.log(str1.trim());
//     console.log(str1.padStart(9,"hey1"));
//     console.log(str1.padEnd(9,"hey2"));
//     console.log(str1.repeat(4))
//                                             ARRAY
//     ar4 = []
//     ar3 = [1,2,3,4,5]
//     ar2 = Array('apple','orange',"mango")

//     // add
//     ar4[0] = 'a'
//     ar4[1] = 'b'
//     ar4[2] = 'c'

//         //change
//     ar3[1] = 'two'
    

//     console.log(ar4)
//     console.log(ar3)
//     console.log(ar3.length)

//         push pop shift unshift

//     ar=[5,4,3,2,1]

//     ar.pop() remove last
//     ar.push(0) add to last

//     console.log(ar);

//     ar.shift()  // remove from first pos
//     ar.unshift(0)  // add to first
    
    
//     console.log(ar);


//     console.log( ar3.reduce((a,b)=>a+b ));


//                                      !!!!!!!   Splice  !!!!!
 

//     ar.splice(1,0,23)  //   ---  Selected Position , no. of deleted elems from that position, added elems a that position

//     console.log(ar);
    
//     ar.splice(2,2,10,12) // position , no. of deleted elems, added elems

//     console.log(ar)

//       !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!     MAP FILTER REDUCE  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    

//     ar3 = [10,20,15,5]
    
//     console.log(ar3.map((n)=>n*n));    //  MAP a func on each element !!!!!!!!!!!!!!!!!!!!!!

//     console.log( ar3.reduce((a,b)=>a+b ));   // reduce all the array elements into a single element
 
        // arr.reduce((accumulator, current) => operation, initialValue  0 for addition and 1 for multiplication logic)
 
//      ar5 = [1,2,3,4,5,6,7,8,9,0]

//      arn = [5,4,3,2,1]

//      arn1 = [3,5,2,7,1]

    
//     filt = ar5.filter((n)=>n%2==0)  // only show even numbers by filtering

//     console.log(filt);

//     ar3.forEach(n => { console.log(n*n)});

//     console.log(ar5.find(n=>n>7))
    
//     console.log(ar5.findIndex(n=>n>4))
    
//     console.log(ar5.every(n=>n>-1))
    
//     console.log(ar5.some(n=>n>4))
    
//     console.log(ar5.every(n=>n>10))
    
//     console.log(ar5.includes(4))
    
//     console.log(ar5.concat(arn))

    // let  num0 = [1,2,3,['a','b','c']]
    // let  num01 = [1,2,3,4,5,6]
    
//     console.log(num0)
    
//     console.log(num0.flat())
    
//       console.log(num0.flatMap(n=>n+n, ))
//      fl1.forEach(n => { Number(n) });
//       console.log(num01.flat().map(n=>n*n));
      
                                        // SORTing
    
//     let nra = new Array

//     nra = arn1.sort((a,b)=>b-a)   //a-b for ascending b - a fo descending 

//     console.log(nra)

//     console.log(arn.sort((a,b)=>a-b))

//     console.log(nra.reverse())




//     console.log(data[1][1]);

    // let [a1,a2,a3] = data

    // console.log(a1[0])

    

//     let data0=[
//         [[1,2,3],['a','b','c']],
//         [4,5,6],
//         [7,8,9],
//     ]

//     console.log(data0[0][1][0]);

                                      //  OBJECT   //

    // ob1 = {
    //     name:'Spade',
    //     age:23,
    //     mark:[10,12,13,14],
    //     place:`Palluruthy`,
    //     ob3 : {
    //         book:5,
    //         pen:4,
    //         bag:1
    //     },
    //     func:()=>{console.log(`hello world`)},

    // }

    // ob1.func()

    // let key = 'name'
    // console.log(ob1[key]);

    // console.log(ob1.ob3.book)
    // console.log(ob1.ob3.book)

    // console.log(Object.keys(ob1)); //show keys
    // console.log(Object.values(ob1)); // show values
    // console.log(Object.entries(ob1)); // show all


    

    // ob2 = new Object

    // ob2.name = 'Nandhu'
    // ob2.age = '23'
    

    // console.log(ob2[`name`]);

    // delete ob2.age

    // console.log(ob2);


    // let ob4 = {...ob1,...ob2,data1:470}  // spread in objects
    
    // console.log(ob4);

    // let {name1,...alldata} = ob4    //rest in obj

    // console.log(name1);
    // console.log(alldata);
    
    // let{name:Student} = ob4  //destructuring

    // console.log(Student)


    // let ob5 = {
    //     name: 'function',


    //     f1: function (){
    //         console.log(`This is the ${this.name}`)
    //     },

    //     f2: function (a,b){
    //         return a + b
    //     },

    //     f3: (a,b)=>{ return a + b },

    //     f4: ()=>{console.log(`This is the ${ob5.name}`);
    //     }

    // }

    //  ob5.f1()

    //  ob.f4()

    // console.log(ob5.f3(2,3),ob5.f2(2,3));
    
    // let a = 9 

    // let b = (a<10 ? 'a is less than 10':'a is greater than or equal to 10' )

    // console.log(b);
    

    //  let a = null

    //  let b = (a ?? 'a is null') 

    //  console.log(b)


    // for (let i = 0; i <= 10; i++){

    //     if (i == 0) {
    //         console.log("zero")
    //     }

    //     if (i % 2 == 0 ) {
    //         console.log(i);
    //     }
           
    // }    

    // let i = 0

    // while (i < 10) {

    //     if (i == 0) {
    //         console.log("zero");
            
    //     }
    //     if (i % 2 == 0) {
        
    //         console.log(i);
    //     }
    //     i++
    // }

    // let i = 0

    // do {
    //     console.log(i)
    //     i++
    // } while (i<10);
                                    
    // function callback (){
    //     console.log("this is the called back function");
        
    // }

    // let a ="HEY "

    // function caller(a,callback) {

    //     console.log(a);
        

    //     callback()
        
    // }
    
    // caller(a,callback)


    // reduce

    // function res(...red) {
        
    //     b = red.reduce((a,b)=>a+b,0)

    //     red.forEach(e => console.log(e + 1) );

    //     console.log(b)
        
    // }

    // res(1,2,3,4,1,2,3,4)
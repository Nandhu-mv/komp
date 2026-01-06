// const obj = {

//     name:'Nandhu',
//     age:'23',
//     location:'Palluruthy',
//     status:'Fresher'

// }

// console.log(obj);
// const jsn = JSON.stringify(obj);
// console.log(jsn);
// console.log(typeof(jsn));


// const json = `{

//     "Name": "Spade",
//     "Age" : 23,
//     "location" : "Kochi"
// }`

// console.log(json);
// console.log(typeof json);
// const newobj = JSON.parse(json);
// console.log(newobj);
// console.log(typeof newobj);
 

                            //    For example use Try Catch instead 

    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
        
    // })
    // .catch(error =>{
    //     console.log("error occoured",error);
    // })

    
    let xml =new XMLHttpRequest();

    xml.open('GET',("https://jsonplaceholder.typicode.com/posts"),true)
    xml.onload = function () {
        if (xml.status === 200) {

            let data = JSON.parse(xml.responseText)
            console.log(data);

        }
    }
    xml.send()


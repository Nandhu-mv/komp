console.log('Hal0')

const texts = " PIKACHU GA KITA" 

//id

document.getElementById('Head1').innerHTML= "NANDHU M V"
document.getElementById('Head1').style.color= "orangered"

// or using variable

const head = document.getElementById('Head1')
head.style.fontSize= "50px"

// class

let head2 = document.getElementsByClassName("Head2")

head2[0].style.color= "red"
head2[1].textContent = texts
head2[0].textContent = texts

let newt = document.createElement('li')
let newt1 = document.createElement('li')

newt.textContent = 'new list'
newt1.textContent = '2nd one'

document.getElementById('List').appendChild(newt)
document.getElementById('List').appendChild(newt1)

let rem = document.getElementById('rem')

rem.remove()

para = document.getElementsByTagName('p')

    for (let i = 0; i < para.length - 3; i++) {
        para[i].textContent = `Text number ${i}`
        
    }

const q1 = document.querySelectorAll('p')  // cuz the query returns the first one so need all to get specific
const q2 = document.querySelector('.q1')
const q3 = document.querySelector('#q2')

q1[3].style.color = 'blue'
q2.style.color = 'aqua'
q3.style.color = 'lime'

let arr1 = [q1[3],q2,q3]

arr1.forEach((e=>e.textContent += ' NEW'))

const button = document.getElementById('btn');


function handleclick() {
    
    alert("ZA BUTTON HAZ BEEEN DA CLICKEDD")
}

button.addEventListener('click',handleclick); //click =  event, handleclick = function


const button2 = document.getElementById('btn2')

function function1(){

    alert("ZA ZECOND ONE WAZ CLIKED")

    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'

    bgblack = false
}


button2.addEventListener('dblclick',function1)

const button3 = document.getElementById('abtn')

let bgblack = false 

button3.addEventListener('click',()=>{

    alert('The background color is about to change...')

    if (bgblack) {

    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'

    bgblack = false
        
    }

    else{

    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'

    bgblack = true

    }
    
})


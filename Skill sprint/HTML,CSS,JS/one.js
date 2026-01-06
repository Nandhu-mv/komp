
function inc() {
  const countElement = document.getElementById("count");

  let currentValue = parseInt(countElement.textContent);
  
  currentValue++;

  countElement.textContent = currentValue;
}

function dec() {
  const countElement = document.getElementById("count");

  let currentValue = parseInt(countElement.textContent);

    if (currentValue > 0) {

        currentValue--;

    }
  
  countElement.textContent = currentValue;
}



 document.getElementById('btn1').addEventListener('click',inc);

 document.getElementById('btn2').addEventListener('click',dec);




const btnAddArray = Array.from(document.getElementsByClassName('bi bi-file-plus')); 
const btnSubstractArray = Array.from(document.getElementsByClassName('bi bi-file-minus'));
const btnCloseArray = Array.from(document.getElementsByClassName('bi bi-trash'));
const cardDivArray = document.getElementsByClassName('card');
const unitPrice = document.getElementsByClassName('price');
let result = 0;

// ****** btn add
for (let index in btnAddArray) {
  btnAddArray[index].addEventListener('click', function() {
    btnAddArray[index].nextElementSibling.innerHTML++;
    result += parseInt(unitPrice[index].textContent);
    document.getElementById('total-price').innerHTML = result;
  });
}

// **** btn Substract
for (let index in btnSubstractArray) {
  btnSubstractArray[index].addEventListener('click', function() {
    if (btnSubstractArray[index].previousElementSibling.textContent > 0) {
      btnSubstractArray[index].previousElementSibling.innerHTML--;
      result -= parseInt(unitPrice[index].textContent);
    }
    document.getElementById('total-price').innerHTML = result;
  });
}



const favFunction = b => {
  let heartColor = document.getElementById(b).getAttribute('fill');
  document.getElementById(b).setAttribute('fill', heartColor == 'currentColor' ? 'red' : 'currentColor');
};


for (let index in btnCloseArray) {
  btnCloseArray[index].addEventListener('click', function() {
    cardDivArray[index].parentNode.removeChild(cardDivArray[index]);
  });
}




const openTele2 = document.getElementById('open_tele2');
const openRost = document.getElementById('open_rost');
const openMega = document.getElementById('open_mega');
const openBeel = document.getElementById('open_beel');
const openMts = document.getElementById('open_mts');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
const otpravit = document.getElementById('otpravit');
const outcome1 = document.getElementById('outcome1');
const outcome2 = document.getElementById('outcome2');
const closeOutcome1 = document.getElementById('outcome_close1');
const closeOutcome2 = document.getElementById('outcome_close2');
const tele_oplata = document.getElementById('tele_oplata')
let summa = document.getElementById('summa')
let number = document.getElementById('nomber')

openTele2.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
    
})

openMega.addEventListener('click', function(e){
  e.preventDefault();
  popUp.classList.add('active');
})

openBeel.addEventListener('click', function(e){
  e.preventDefault();
  popUp.classList.add('active');
})

openMts.addEventListener('click', function(e){
  e.preventDefault();
  popUp.classList.add('active');
})

openRost.addEventListener('click', function(e){
  e.preventDefault();
  popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})


function random () {
    const randomNr = Math.random()*100;
    const elements = document.querySelectorAll('.outcome');
    
    elements.forEach((el) => el.style.display = 'none')
  
    if (randomNr > 50) {
      elements[0].style.display = 'block';
    } else if (randomNr < 50) {
        elements[1].style.display = 'block';
    }
  }


otpravit.addEventListener('click',() => {
    popUp.classList.remove('active')
})

const refreshPage = () => {
  location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  var phoneInputs = document.querySelectorAll('input[data-tel-input]');

  var getInputNumbersValue = function (input) {
     
      return input.value.replace(/\D/g, '');
  }

  var onPhoneInput = function (e) {
      var input = e.target,
          inputNumbersValue = getInputNumbersValue(input),
          selectionStart = input.selectionStart,
          formattedInputValue = "";

      if (!inputNumbersValue) {
          return input.value = "";
      }

      if (input.value.length != selectionStart) {
         
          if (e.data && /\D/g.test(e.data)) {
              
              input.value = inputNumbersValue;
          }
          return;
      }

      if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
          if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
          var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
          formattedInputValue = input.value = firstSymbols + " ";
          if (inputNumbersValue.length > 1) {
              formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
          }
          if (inputNumbersValue.length >= 5) {
              formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
          }
          if (inputNumbersValue.length >= 8) {
              formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
          }
          if (inputNumbersValue.length >= 10) {
              formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
          }
      } else {
          formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
      }
      input.value = formattedInputValue;
  }
  var onPhoneKeyDown = function (e) {
      // Clear input after remove last symbol
      var inputValue = e.target.value.replace(/\D/g, '');
      if (e.keyCode == 8 && inputValue.length == 1) {
          e.target.value = "";
      }
  }
  for (var phoneInput of phoneInputs) {
      phoneInput.addEventListener('keydown', onPhoneKeyDown);
      phoneInput.addEventListener('input', onPhoneInput, false);
      phoneInput.addEventListener('paste', onPhonePaste, false);
  }
})



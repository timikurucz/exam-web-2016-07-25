'use strict';

var domOperations = (function(){
  var resultContainer = document.querySelector('p');
  var textInputField = document.querySelector('.text-input');
  var shiftInputField = document.querySelector('.shift-input');
  var submitButton = document.querySelector('.submit-button');

  function showDecodedMessage(decodedText) {
    resultContainer.innerHTML = '';
    if (JSON.parse(decodedText).status === 'ok') {
      resultContainer.innerHTML = (JSON.parse(decodedText)).text;
    } else {
      alert('Shift is out of bound');
      resultContainer.innerHTML = (JSON.parse(decodedText)).error;
    }
  }
  function showLoading() {
    resultContainer.innerHTML = 'Loading.................';
  }
  return {
    showDecodedMessage:showDecodedMessage,
    submitButton:submitButton,
    shiftInputField:shiftInputField,
    textInputField:textInputField,
    showLoading:showLoading
  };
})();

'use strict';

  function newReqToDecode() {
    var dataToSend = {
      shift: domOperations.shiftInputField.value,
      text: domOperations.textInputField.value
    };
    xhrRequests.createRequest('POST', '/decode', JSON.stringify(dataToSend), domOperations.showDecodedMessage);
  }

domOperations.submitButton.addEventListener('click', function(){
  newReqToDecode();
});

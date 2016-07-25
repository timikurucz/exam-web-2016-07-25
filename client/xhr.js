'use strict';

var xhrRequests = (function() {
  var host = 'http://localhost:3000';
  function createRequest(requestType, endPoint, dataToSend, cb) {
    domOperations.showLoading();
    var xhr = new XMLHttpRequest();
    xhr.open(requestType, host + endPoint);
    xhr.setRequestHeader('content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
      if (cb !== undefined) {
        var response = xhr.response;
        cb(response);
      }
    };
    xhr.send(dataToSend);
  }
  return {
    createRequest:createRequest
  };
}());

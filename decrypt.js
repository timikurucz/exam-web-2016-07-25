'use strict';

var funcsToCeasarApp = (function () {
  function ceasarDecoder(message, shift) {
    var output = '';
    for (var i = 0; i < message.length; i ++) {
      var char = message[i];
      if (char.match(/[a-zA-Z]/)) {
        var code = message.charCodeAt(i);
        if ((code >= 65) && (code <= 90)) {
          var minCode = 65;
        }
        else if ((code >= 97) && (code <= 122)) {
          var minCode = 97;
        }
        char = String.fromCharCode(((code - minCode - shift % 26 ) + 26) % 26 + minCode );
      }
      output += char;
    }
    return output;
  }

  function textDecoder(message, shift, cb) {
    if (Math.abs(shift) > 25 || message === '' || shift === '') {
      cb({
        status: 'error',
        error: 'Shift is out of bound' }
      );
    } else {
      cb(null, ceasarDecoder(message, shift));
    }
  }

  return {
    textDecoder:textDecoder,
    ceasarDecoder:ceasarDecoder
  };
})();

module.exports = funcsToCeasarApp;

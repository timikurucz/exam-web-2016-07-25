'use strict';

var tape = require('tape');
var decrypt = require('./decrypt');

tape('test with the given task', function (t) {
  t.deepEqual(decrypt.ceasarDecoder('oruhp lsvxp groru vlw', 3), ('lorem ipsum dolor sit'));
  t.end();
});

tape('test with numbers in text',function (t) {
  t.deepEqual(decrypt.ceasarDecoder('3apple', 3), ('3xmmib'));
  t.end();
});

tape('test with special char', function (t) {
  t.deepEqual(decrypt.ceasarDecoder('?!', 5), ('?!'));
  t.end();
});


tape('test with negative shift', function (t) {
  t.deepEqual(decrypt.ceasarDecoder('aaa', -20), ('uuu'));
  t.end();
});

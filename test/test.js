var isHost = require('../')
const test = require('tape');

test('isHost ', function (t) {
  isHost('google.com','80', function (result) {
    t.equal(result, "up");
  });
  isHost('hostisdown.org','80', function (result) {
    t.equal(result, "down");
    t.end();
  });
});
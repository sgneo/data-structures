"use strict";

var _queue = _interopRequireDefault(require("./queue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Queue class can be initialised', () => {
  const queue = new _queue.default();
  expect(queue).toBeInstanceOf(_queue.default);
});
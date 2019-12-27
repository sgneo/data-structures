import Queue from "./queue";

test('Queue class can be initialised', () => {
  const queue = new Queue();
  expect(queue).toBeInstanceOf(Queue);
});
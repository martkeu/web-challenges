import { add, subtract, multiply, divide } from './index.js';

// add
test("adds the numbers 2 and 3 correctly", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("is negative if the greater argument is negative", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});

test("add(0.1, 0.2) is close to 0.3", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});


// subtract
test("subtracts the numbers 15 and 5 correctly", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("is negative if the second argument is greater than the first", () => {
  const result = subtract(2, 3);
  expect(result).toBeLessThan(0);
});


// multiply
test("returns 8 if called with multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("returns a negative value if only the first argument is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});

test("returns a negative value if only the second argument is negative", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});

test("returns a positive value if called with two negative arguments", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});


// divide
test("returns 3 if called with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("returns 'You should not do this!' if called with 0 as second argument", () => {
  const result = divide(9, 0);
  expect(result).toBe('You should not do this!');
});
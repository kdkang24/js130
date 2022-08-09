/* eslint-disable max-lines-per-function */
const Car = require("./car");

describe("The Car class", () => {
  // Set up car object here so it isn't repeated by other tests
  let car;
  beforeEach(() => {
    car = new Car();
  });

  // basic toBe matcher
  test("has four wheels", () => {
    expect(car.wheels).toBe(4);
  });

  // bad test, skipped using xtest alias instead of test.skip
  xtest("bad wheels", () => {
    expect(car.wheels).toBe(3);
  });

  // toEqual
  test('two new cars are equal objects', () => {
    let car2 = new Car();

    expect(car).toEqual(car2);
  });

  // toBeUndefined
  test('does not have doors', () => {
    expect(car.doors).toBeUndefined();
  });

  // toThrow
  test('raises an error when called drive on it', () => {
    expect(() => car.drive()).toThrow(TypeError);
  });

  // toBeNull
  test('a new car has no mileage info', () => {
    expect(car.mileageInfo).toBeNull();
  });

  // toBeTruthy
  test('wheels is truthy', () => {
    expect(car.wheels).toBeTruthy();
  });

  // toContain checks for existence in array
  test('array contains car', () => {
    let arr = [1, 2, 3];
    arr.push(car);

    expect(arr).toContain(car);
  });

  // toContain also works for sets and strings
  test('string contains "car"', () => {
    let man = "His scars have healed";

    expect(man).toContain("car");
  });

  // not matcher
  test('car has wheels', () => {
    expect(car.wheels).not.toBeUndefined();
  });
});
const currySum = require('../src/index');

describe('curry sum function', () => {
  it('adds 1 + 2 + 3 and return result 6', () => {
    expect(currySum(1)(2)(3)()).toBe(6);
  });
  it('adds 1 + (-2) + 3 and return result 2', () => {
    expect(currySum(1)(-2)(3)()).toBe(2);
  });
  it('adds (1 + 2) + 3 and return result 6', () => {
    expect(currySum(1, 2)(3)()).toBe(6);
  });
  it('adds nothing and return result 0', () => {
    expect(currySum()).toBe(0);
  });
});
const promiseReduce = require('../src/index');

const fn1 = () => {
  return Promise.resolve(1)
};

const fn2 = () => new Promise(resolve => {
  setTimeout(() => resolve(2), 1000)
});

const fn3 = () => Promise.reject('You shall not pass!');

describe('promise reduce function', () => {
  it('reduces promised 1 and 2 in multiply of them', async () => {
    const result = await promiseReduce(
        [fn1, fn2],
        (acc, cur) => acc * cur,
        1);
    expect(result).toBe(2);
  });
  it('reduces rejected promise and promised 2 in multiply with initial 1', async () => {
    const result = await promiseReduce(
        [fn3, fn2],
        (acc, cur) => acc * cur,
        1);
    expect(result).toBe(2);
  });
  it('reduces promised 1, rejected promise and promised 2 in sum with initial 5', async () => {
    const result = await promiseReduce(
        [fn1, fn3, fn2],
        (acc, cur) => acc + cur,
        5);
    expect(result).toBe(8);
  });
});
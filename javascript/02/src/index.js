function promiseReduce(asyncFunctions, reduce, initialValue) {
  return asyncFunctions
    .reduce((acc, fn) =>
        acc
          .then(async (value) => {
            try {
              return reduce(value, await fn())
            } catch (e) {
              console.debug(`Promise ${fn.name} caught error:`, e);
              return value;
            }
          })
      , Promise.resolve(initialValue));
}

module.exports = promiseReduce;
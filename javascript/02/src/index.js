function promiseReduce(asyncFunctions, reduce, initialValue) {
  return asyncFunctions
    .reduce((acc, fn) =>
        acc
          .then(() => fn())
          .catch(e => console.debug(`Promise ${fn.name} caught error:`, e))
      , Promise.resolve())
    .then(values => values.reduce(reduce, initialValue));
}

module.exports = promiseReduce;
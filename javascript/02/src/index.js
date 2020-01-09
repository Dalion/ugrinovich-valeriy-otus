function promiseReduce(asyncFunctions, reduce, initialValue){
  return getPromisedValues(asyncFunctions)
    .then(values => values.reduce(reduce, initialValue));
}

async function getPromisedValues(asyncFunctions) {
  const values = [];
  for (let i=0; i<asyncFunctions.length; i++) {
    try {
      const val = await asyncFunctions[i]();
      values.push(val);
    } catch(e) {
      console.debug(`Promise ${asyncFunctions[i].name} caught error:`, e);
    }
  }
  return values;
}

module.exports = promiseReduce;
const http = require('http');
const {s: sync, a: async, repeat = 1} = require('minimist')(process.argv.slice(2))
const {PORT, HOST} = process.env;

const promisifiedRequest = () => new Promise(resolve => {
    http.get({
      hostname: HOST,
      port: PORT
    }, (res) => {
      resolve(res.statusCode)
    });
})

module.exports = (async () => {
  if (sync) {
    for(let i=0; i<repeat; i++) {
      console.log(await promisifiedRequest())
    }
  } else if (async) {
    for(let i=0; i<repeat; i++) {
      promisifiedRequest().then(code => console.log(code))
    }
  } else {
    console.log('Missing required first argument -a for asynchronous request or -s for synchronous request')
  }
})();
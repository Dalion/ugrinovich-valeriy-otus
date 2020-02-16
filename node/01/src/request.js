const fetch = require("node-fetch");

const {PORT, HOST} = process.env;

const request = (reqType = 'SYNC') => async (n = 6) => {
  const url = `http://${HOST}:${PORT}`;
  for(let i=0; i<n; i++) {
    if (reqType === 'SYNC') {
      await fetch(url).then(res => console.log(res.status));
    } else {
      fetch(url).then(res => console.log(res.status));
    }
  }
};

module.exports.sync = request('SYNC');
module.exports.async = request('ASYNC');
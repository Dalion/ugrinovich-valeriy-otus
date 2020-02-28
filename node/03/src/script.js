const fs = require('fs');
const treeConstructor = require('./tree');

const treeScript = () => {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    const tree = treeConstructor();

    const readPath = (path) => {
      fs.stat(path, (err, stats) => {
        if (err) {
          console.log(`Error while reading path=${path}. \n${err}`)
        } else {
          if (stats.isDirectory()) {
            fs.readdir(path, (err, dir) => {
              if (err) {
                console.log(`Error while reading dir=${path}. \n${err}`)
              } else {
                tree.incrementUnprocessed(dir.length);
                tree.addDir(path);
                dir.forEach((file) => {
                  readPath(path + '/' + file);
                })
              }
            });
          } else if (stats.isFile()) {
            tree.addFile(path);
          }
        }
      });
    };

    readPath(args[0]);
  } else {
    console.log('Missing required argument "path".')
  }
};

module.exports = treeScript();
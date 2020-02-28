const treeConstructor = () => {
  const tree = {
    files: [],
    dirs: []
  };
  let unprocessed = 1;

  const addDir = (dir) => {
    tree.dirs.push(dir);
    process();
  };
  const addFile = (file) => {
    tree.files.push(file);
    process();
  };
  const process = () => {
    if (--unprocessed === 0) {
      console.log(tree)
    }
  };
  const incrementUnprocessed = (num = 1) => {
    unprocessed += Number(num);
  };

  return {
    addDir: addDir,
    addFile: addFile,
    incrementUnprocessed: incrementUnprocessed
  }
};

module.exports = treeConstructor;
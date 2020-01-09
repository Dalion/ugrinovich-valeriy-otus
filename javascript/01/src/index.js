function currySum(...args) {
  return args.length > 0
      ? function(arg) {
        if (arg !== undefined) {
          return currySum(...args, arg);
        } else {
          return args.reduce((acc, cur) => {
            return acc + cur;
          }, 0);
        }
      }
      : 0;
}

module.exports = currySum;
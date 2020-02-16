function getSelector(currentEl, parentEl) {
  let result = currentEl.tagName;
  const sameSiblings = Array.from(parentEl.childNodes).filter(el => el.tagName === result);
  if (sameSiblings.length > 1) {
    result += `:nth-of-type(${Array.from(sameSiblings).indexOf(currentEl) + 1})`;
  }
  return result;
}

function getPath(domEl) {
  let currentEl = domEl;
  let parentEl = domEl.parentNode;

  if (parentEl === null) {
    return currentEl.tagName;
  } else {
    let path = [];
    while (parentEl !== null) {
      path.unshift(getSelector(currentEl, parentEl));
      currentEl = parentEl;
      parentEl = currentEl.parentNode;
    }

    return path.join(' > ');
  }
}

module.exports = getPath;
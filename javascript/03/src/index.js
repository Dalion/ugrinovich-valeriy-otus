const selectors = [
  (el) => el.tagName,
  (el) => el.id ? `#${el.id}` : '',
  (el) => el.classList.length > 0 ? '.' + [...el.classList].join('.') : '',
  (el) => el.getAttributeNames()
      .filter(name => name !== 'class' && name !== 'id')
      .map(attr => `[${attr}='${el.getAttribute(attr)}']`)
      .join('')
];

function getPath(domEl) {
  let path = getElementSelector(domEl);
  let parentEl = domEl.parentNode;

  while (parentEl !== null && isNotUnique(path)) {
    path = getElementSelector(parentEl) + ' > ' + path;
    parentEl = parentEl.parentNode;
  }

  return path;
}

function getElementSelector(el) {
  return selectors.reduce((acc, selector) => {
    return acc += selector(el);
  }, '')
}

function isNotUnique(path) {
  return document.querySelectorAll(path).length > 1;
}

module.exports = getPath;
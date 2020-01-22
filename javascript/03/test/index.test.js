const getPath = require('../src/index');

describe('function gets unique css-selector', () => {
  const divDumb = document.createElement('div');
  const divIded = document.createElement('div');
  divIded.id = 'divWithId';
  divIded.setAttribute('data-quote', '123');
  divIded.classList.add("flex", "bg-gray");

  document.body.append(divDumb);
  document.body.append(divIded);

  it('retrieves path for first div', () => {
    const path = getPath(divIded);
    console.log('Element path: ', path);
    const elements = document.querySelectorAll(path);
    expect(elements.length).toBe(1);
    expect(elements[0]).toBe(divIded);
  });

  const divIdedOther = document.createElement('div');
  divIdedOther.id = 'divWithId';
  divIdedOther.setAttribute('data-quote', '123');
  divIdedOther.classList.add("flex", "bg-gray");
  const div = document.createElement('div');
  document.body.append(div);
  div.setAttribute('role', 'container');
  div.append(divIdedOther);

  it('retrieves path for second div', () => {
    const path = getPath(divIdedOther);
    console.log('Element path: ', path);
    const elements = document.querySelectorAll(path);
    expect(elements.length).toBe(1);
    expect(elements[0]).toBe(divIdedOther);
  });
});
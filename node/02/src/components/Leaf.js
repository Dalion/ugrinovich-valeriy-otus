import {LitElement, html} from 'lit-element';

class Leaf extends LitElement{
  constructor(){
    super();
  }

  static get properties(){
    return{
      name: String,
      data: String
    }
  }

  render() {
    return html`
        <style>
            h3 {
                color: green;
                display: inline;
            }
            span {
                font-size: 18px;
            }
        </style>
        <h3>${this.name}:</h3> <span>${this.data}</span>
    `
  }
}
customElements.define('my-leaf', Leaf);
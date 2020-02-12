import {html, LitElement} from 'lit-element';
import {loadData} from '../service';
import './Leaf';

class MyTree extends LitElement {
  constructor(){
    super();
    this.data = loadData();
    this.name = '';
  }

  static get properties(){
    return{
      data: Object,
      name: String
    }
  }

  createElement([nodeKey, nodeValue]) {
    return html`<li>
          ${nodeValue instanceof Object
        ? html`<my-tree name="Branch '${nodeKey}'" .data="${nodeValue}"></my-tree>`
        : html`<my-leaf name="Leaf '${nodeKey}'" data="${nodeValue}"></my-leaf>`}
        </li>`
  };

  render() {
    return html`
      <style>
        ul {
            padding: 0;
            margin: 0;
        }
        li {
        margin-left: 15px;
        }
        h2 {
            color: red;
            margin: 3px 0;
        }
      </style>
      <ul>
      <h2>${this.name} :</h2> 
      ${Object.entries(this.data).map(this.createElement)}
    </ul>`
  }
}

customElements.define('my-tree', MyTree);
import { liteElement, html, css } from "lit";
class Myelement extends LitElement {
  constructor(){
    super()
  }
  static styles = css`

    .container {
      color:red;
      display: flex;
      justify-content: space-between;
    }
    `

  render(){
    return html`
      <input @change="${this._mostrar}">
      <div class="container">${this.name}<div>
    `
  }
  _guardar(e){
    this.name
  }
}

customElements.define("my-element", Myelement);
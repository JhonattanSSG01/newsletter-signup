import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import "./components/suscribe-form/suscribe-form.js"

// @customElement('sign-up')
export class SignUp extends LitElement {

  constructor() {
    super()
  }

  render() {
    return html`
      <suscribe-form>
      </suscribe-form>

    `
  }

  _onClick() {
    this.count++
  }

  static get styles() {
    return css`
   

    `
  }
}

customElements.define('sign-up', SignUp)
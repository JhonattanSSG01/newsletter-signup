import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import "./components/suscribe-form/suscribe-form.js"

@customElement('sign-up')
export class SignUp extends LitElement {

  constructor() {
    super()
  }

  render() {
    return html`
      <suscribe-form">
      </suscribe-form">

    `
  }

  _onClick() {
    this.count++
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

    `
  }
}

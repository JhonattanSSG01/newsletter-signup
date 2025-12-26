import { LitElement, css, html } from "lit";
import "./components/suscribe-form/suscribe-form.js";

export class SignUp extends LitElement {
  static get styles() {
    return css``;
  }
  constructor() {
    super();
    this.isOpen = false;
    this.emailSuscribe = "";
  }

  _onClick(e) {
    this.isOpen = true;
    this.emailSuscribe = e.detail.email;
    this.requestUpdate();
  }

  render() {
    return !this.isOpen
      ? html` <suscribe-form @submit=${this._onClick}> </suscribe-form> `
      : html`
          <modal-suscribe
            is-open-modal=${this.isOpen}
            email-subscribe=${this.emailSuscribe}
          >
          </modal-suscribe>
        `;
  }
}

customElements.define("sign-up", SignUp);

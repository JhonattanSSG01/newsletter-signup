import { LitElement, css, html } from "lit";
import "./components/suscribe-form/suscribe-form.js";
import "./components/modal/modal-suscribe.js";

export class SignUp extends LitElement {

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
    return false
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

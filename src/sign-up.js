import { LitElement, html } from "lit";
import "./components/suscribe-form/suscribe-form.js";
import "./components/modal/modal-suscribe.js";

export class SignUp extends LitElement {

  constructor() {
    super();
    this.isOpen = false;
    this.emailSuscribe = "";
  }

  _onSubmit(e) {
    this.isOpen = true;
    this.emailSuscribe = e.detail.email;
    this.requestUpdate();
  }

  _onDismiss() {
    this.isOpen = false;
    this.emailSuscribe = "";
    this.requestUpdate();
  }

  render() {
    return this.isOpen
      ? html`
          <modal-suscribe
            is-open-modal=${this.isOpen}
            email-subscribe=${this.emailSuscribe}
            @dismiss=${this._onDismiss}
          >
          </modal-suscribe>
        `
      : html`
          <suscribe-form @submit=${this._onSubmit}></suscribe-form>
        `;
  }
}

customElements.define("sign-up", SignUp);

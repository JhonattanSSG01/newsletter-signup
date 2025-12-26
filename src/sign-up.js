import { LitElement, html } from "lit";
import "./components/suscribe-form/suscribe-form.js";
import "./components/modal/modal-suscribe.js";

export class SignUp extends LitElement {

  constructor() {
    super();
    this.isOpen = false;
    this.emailSuscribe = "";
  }

  /**
   * Called when the user submits the form.
   * Sets the isOpen property to true, the emailSuscribe property to the email address from the event detail, and calls requestUpdate to re-render the component.
   * @param {Event} e - The event object.
   */
  _onSubmit(e) {
    this.isOpen = true;
    this.emailSuscribe = e.detail.email;
    this.requestUpdate();
  }


  /**
   * Triggered when the user clicks the close button on the modal.
   * Resets the isOpen property to false and the emailSuscribe property to an empty string.
   * Calls requestUpdate to re-render the component.
   */
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

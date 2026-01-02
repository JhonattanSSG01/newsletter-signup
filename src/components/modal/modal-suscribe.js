import { LitElement, html } from "lit";
import { modalStyles } from "./modal-suscribe.css.js";
import "../common/check-icon.js";
import "../common/styled-button.js";

export class ModalSuscribe extends LitElement {
  static styles = [modalStyles];

  static properties = {
    isOpen: { type: Boolean, attribute: 'is-open-modal', reflect: true },
    email: { type: String, attribute: 'email-subscribe' },
  };

  constructor() {
    super();
    this.isOpen = false;
    this.email = "";
  }

  /**
   * Triggered when the user clicks the close button.
   * Dispatches a custom event "dismiss" with bubbles and composed set to true.
   * Removes the modal from the DOM.
   */
  _onDismiss() {
    this.dispatchEvent(new CustomEvent("dismiss", { bubbles: true, composed: true }));
    this.remove();
  }

  render() {
    return html`
        <dialog class="modal" open=${this.isOpen}>
          <div>
            <check-icon class="icon" name="icon-success"></check-icon>
            <h1 class="title">Thanks for subscribing!</h1>
            <p class="description">
              A confirmation email has been sent to <strong> <slot name="email">${this.email ? this.email : "email@company.com"}.</slot> </strong> Please open it
              and click the button inside to confirm your subscription.
            </p>
          </div>
          <styled-button @click=${this._onDismiss}>Dismiss message</styled-button>
        </dialog>
    `;
  }
}

customElements.define("modal-suscribe", ModalSuscribe);
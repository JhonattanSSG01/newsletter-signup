import { LitElement, html } from "lit";
import { modalStyles } from "./modal-suscribe-styles.js";


export class ModalSuscribe extends LitElement {
  static properties = {
    isOpen: { type: Boolean, attribute: 'is-open-modal' },
    email: { type: String, attribute: 'email-subscribe' },
  };

  static get styles() {
    return modalStyles;
  }

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
        <icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        </icon>
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong> <slot name="email">${this.email ? this.email : "email@company.com"}</slot> </strong>. Please open it
          and click the button inside to confirm your subscription.
        </p>
        <p @click=${this._onDismiss}>
          <button>Dismiss message</button>
        </p>
      </dialog>
        <dialog class="modal" open=${this.isOpen}>
          <div>
            <icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#b98016" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            </icon>
            <h1>Thanks for subscribing!</h1>
            <p>
              A confirmation email has been sent to <strong> <slot name="email">${this.email ? this.email : "email@company.com"}</slot> </strong>. Please open it
              and click the button inside to confirm your subscription.
            </p>
          </div>
          <button @click=${this._onClick}>Dismiss message</button>
        </dialog>
    `;
  }
}

customElements.define("modal-suscribe", ModalSuscribe);
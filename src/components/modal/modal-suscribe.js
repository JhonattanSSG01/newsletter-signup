import { LitElement } from "lit";

export class ModalSuscribe extends LitElement {
  static properties = {
    isOpen: { type: Boolean , attribute: 'is-open-modal' },
    email: { type: String , attribute: 'email-subscribe' },
  };

  constructor() {
    super();
    this.isOpen = false;
    this.email = "";
  }

  _onClick() {
    this.isOpen = false;
    this.email = "";
    this.remove()
  }

  render() {
    return html`
      <div class="container">
        <icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-check-icon lucide-circle-check"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </icon>
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <slot name="email">${this.email}</slot>. Please open it
          and click the button inside to confirm your subscription.
        </p>
        <p @click=${this._onClick}>
          <button>Dismiss message</button>
        </p>
      </div>
    `;
  }
}

customElements.define("modal-suscribe", ModalSuscribe);
import { LitElement, html } from "lit";
import { suscribeStyles } from "./suscribe.css.js";
import "../common/check-icon.js";
import "../common/styled-button.js";
import "../common/benefits-list.js";

export class SuscribeForm extends LitElement {
  static styles = [suscribeStyles];

  static properties = {
    _list: { type: Array },
  };

  constructor() {
    super();
    this.email = "";
    this._error = {
      required: false,
      invalid: false,
    };
    this._list = [
      {
        text: "Product discovery and building what matters",
      },
      {
        text: "Measuring to ensure updates are a success",
      },
      {
        text: "And much more!",
      },
    ];
  }

  /**
   * Called when the user changes the email address input field.
   * Updates the email property and checks if the input is a valid email address.
   * If the input is not a valid email address, sets the _error properties accordingly.
   * Calls requestUpdate to re-render the component.
   * @param {Event} e - The event object.
   */
  onchangeEmail(e) {
    this.email = e.target.value;
    this._validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this._error.required = !this.email;
    this._error.invalid = this.email && !this._validateEmail.test(this.email);
    this.requestUpdate();
  }

  /**
   * Called when the user submits the form.
   * Checks if the email property is empty or invalid, if so, sets the _error properties accordingly and calls requestUpdate to re-render the component.
   * Otherwise, dispatches a custom event "submit" with the email property as the detail.
   * The event bubbles and is composed.
   */
  handleSubmit() {
    this._error.required = !this.email;

    if (this._error.required) {
      this.requestUpdate();
      return;
    }

    this.dispatchEvent(
      new CustomEvent("submit", {
        detail: { email: this.email },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="container">
        <div class="side-info">
          <h1>Stay updated!</h1>
          <p>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <benefits-list .items=${this._list}></benefits-list>
          <article class="form">
            <section class="text-label"> 
              <label for="email">Email address</label>
              ${
                this._error.required
                  ? html`<span class="error">Email is required</span>`
                  : this._error.invalid
                  ? html`<span class="error">Invalid email</span>`
                  : ""
              }
            </section>
            <section class="input-group">
              <input class=${this._error.required || this._error.invalid ? "input-error" : ""} .value=${this.email} @input=${this.onchangeEmail} type="email" placeholder="email@company.com" required />
              <styled-button @click=${this.handleSubmit} label="Subscribe to monthly newsletter"></styled-button>
            </section>
          </article>
        </div>
        <section class="banner"></section>
      </div>
    `;
  }
}

customElements.define("suscribe-form", SuscribeForm);
